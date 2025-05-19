import pandas as pd
from datetime import datetime

# Define the path to the input CSV and the output SQL file
csv_path1 = 'SCDB_Legacy_07_justiceCentered_Citation.csv'
csv_path2 = 'SCDB_2023_01_justiceCentered_Vote.csv'

sql_file_path1 = 'modern_insert.sql'
sql_file_path2 = 'legacy_insert.sql'
sql_file_path3 = 'create_tables.sql'

# Function to clean and prepare certain fields, if necessary
def clean_field(value):
    # Check for NaN (which is a float) or an empty string
    if pd.isna(value) or value == '':
        return "NULL"  # Directly return "NULL" without quotes
    elif not isinstance(value, str):
        value = str(value)
    return f"'{value.replace("'", "''")}'"  # Ensure other strings are correctly escaped and quoted




def parse_date(date_str):
    try:
        parsed_date = datetime.strptime(str(date_str), '%m/%d/%Y').date().isoformat()
        return f"'{parsed_date}'"  # Keep parsed dates quoted
    except ValueError:
        return "NULL"  # Return "NULL" directly without quotes



def format_numeric(value):
    """
    Formats a numeric value for SQL, returning 'NULL' if the value is NaN.
    """
    if pd.isna(value):
        return 'NULL'
    else:
        return str(value)
    

# Open the SQL file to write the commands
with open(sql_file_path3, 'w') as sql_file2:
    # Write the CREATE TABLE commands (as provided)

    sql_file2.write("""
CREATE TABLE LegalCase (
    caseID varchar(255) PRIMARY KEY,
    caseName varchar(255)
);

CREATE TABLE Jurisdiction (
    jurisdictionNum int PRIMARY KEY,
    jurisdictionType int,
    adminAction int,
    adminActionState int,
    caseID varchar(255)
);

ALTER TABLE Jurisdiction ADD CONSTRAINT fk_jurisdiction_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;

CREATE TABLE Docket (
    docketID varchar(255) PRIMARY KEY,
    docketType varchar(255),
    dateArgument date,
    dateRearg date,
    caseID varchar(255)
);
                    
ALTER TABLE Docket ADD CONSTRAINT fk_docket_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;

CREATE TABLE Source (
    sourceID int PRIMARY KEY,
    caseSourceState int,
    caseSource int,
    caseID varchar(255)
);

CREATE TABLE Origin (
    originID int PRIMARY KEY,
    caseOriginState int,
    caseOrigin int,
    caseID varchar(255)
);
                    
ALTER TABLE Source ADD CONSTRAINT fk_source_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;
ALTER TABLE Origin ADD CONSTRAINT fk_origin_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;

CREATE TABLE Citation (
    citeID int PRIMARY KEY,
    usCite varchar(255),
    sctCite varchar(255),
    ledCite varchar(255),
    lexisCite varchar(255),
    caseIssue varchar(255),
    caseID varchar(255)
);

CREATE TABLE LegalIssue (
    caseIssue varchar(255) PRIMARY KEY,
    issue int,
    issueArea int,
    caseID varchar(255)
);
                    
ALTER TABLE Citation ADD CONSTRAINT fk_citation_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;
ALTER TABLE Citation ADD CONSTRAINT fk_citation_caseIssue FOREIGN KEY (caseIssue) REFERENCES LegalIssue(caseIssue) ON DELETE CASCADE;
ALTER TABLE LegalIssue ADD CONSTRAINT fk_legalIssue_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;
                    

CREATE TABLE Decision (
    decisionID int PRIMARY KEY,
    dateDecision date,
    decisionType int,
    direction int,
    directionDissent int,
    authority1 int,
    authority2 int,
    caseID varchar(255)
);


                    
ALTER TABLE Decision ADD CONSTRAINT fk_decision_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;
                    
CREATE TABLE Justice (
    justiceName varchar(255) PRIMARY KEY,
    justiceNo int
);

CREATE TABLE Vote (
    voteID varchar(255) PRIMARY KEY,
    vote int,
    decisionID int,
    justiceName varchar(255),
    opinion int,
    direction int,
    majority int
);
                    
ALTER TABLE Vote ADD CONSTRAINT fk_vote_decisionID FOREIGN KEY (decisionID) REFERENCES Decision(decisionID) ON DELETE CASCADE;
ALTER TABLE Vote ADD CONSTRAINT fk_vote_justiceName FOREIGN KEY (justiceName) REFERENCES Justice(justiceName) ON DELETE CASCADE;

CREATE TABLE CourtMembership (
    naturalCourt int,
    justiceName varchar(255),
    PRIMARY KEY (naturalCourt, justiceName)
);

CREATE TABLE Court (
    naturalCourt int PRIMARY KEY,
    term int,
    chief varchar(255)
);
                    
ALTER TABLE CourtMembership ADD CONSTRAINT fk_courtMembership_naturalCourt FOREIGN KEY (naturalCourt) REFERENCES Court(naturalCourt) ON DELETE CASCADE;
ALTER TABLE CourtMembership ADD CONSTRAINT fk_courtMembership_justiceName FOREIGN KEY (justiceName) REFERENCES Justice(justiceName) ON DELETE CASCADE;

CREATE TABLE Parties (
    partyID int PRIMARY KEY,
    petitioner int,
    responder int,
    petitionerState int,
    responderState int,
    naturalCourt int,
    caseID varchar(255)
);

ALTER TABLE Parties ADD CONSTRAINT fk_parties_caseID FOREIGN KEY (caseID) REFERENCES LegalCase(caseID) ON DELETE CASCADE;
ALTER TABLE Parties ADD CONSTRAINT fk_parties_naturalCourt FOREIGN KEY (naturalCourt) REFERENCES Court(naturalCourt) ON DELETE CASCADE;

CREATE TABLE Opinion (
    opinionID int PRIMARY KEY,
    decisionID int,
    opinion int,
    majOpinWriter int,
    majOpinAssigner int,
    splitVote int,
    majVotes int,
    minVotes int,
    voteID varchar(255)
);
                    
ALTER TABLE Opinion ADD CONSTRAINT fk_opinion_decisionID FOREIGN KEY (decisionID) REFERENCES Decision(decisionID) ON DELETE CASCADE;
ALTER TABLE Opinion ADD CONSTRAINT fk_opinion_voteID FOREIGN KEY (voteID) REFERENCES Vote(voteID) ON DELETE CASCADE;


""")



# Load the CSV file
df = pd.read_csv(csv_path1, encoding='ISO-8859-1')

courts = set()
justice_names = set()
last_issue = ""
last_docket = ""
last_case = ""
#artifical keys
jurisdiction_id = 0
cite_id = 0
source_id = 0
origin_id = 0
parties_id = 0
opinion_id = 0
current_court_map = {}
row_count = 0

# Open the SQL file to write the commands
with open(sql_file_path2, 'w', encoding='ISO-8859-1') as sql_file:
    sql_file.write("SET DEFINE OFF;\n")

    sql_file.write("DELETE FROM Vote;\n")
    sql_file.write("DELETE FROM Opinion;\n")
    sql_file.write("DELETE FROM Decision;\n")
    sql_file.write("DELETE FROM LegalIssue;\n")
    sql_file.write("DELETE FROM Citation;\n")
    sql_file.write("DELETE FROM Origin;\n")
    sql_file.write("DELETE FROM Source;\n")
    sql_file.write("DELETE FROM Docket;\n")
    sql_file.write("DELETE FROM Jurisdiction;\n")
    sql_file.write("DELETE FROM Parties;\n")
    sql_file.write("DELETE FROM CourtMembership;\n")
    sql_file.write("DELETE FROM Court;\n")
    sql_file.write("DELETE FROM Justice;\n")
    sql_file.write("DELETE FROM LegalCase;\n")



    for _, row in df.iterrows():

        row_count += 1
        if row_count % 10000 == 0:
            print(f"Processing row {row_count} in legacy...")
        # String fields, already properly handled with clean_field
        case_id = clean_field(row['caseId'])
        docket_id = clean_field(row['docketId'])
        case_issues_id = clean_field(row['caseIssuesId'])
        voteID = clean_field(row['voteId'])
        chief = clean_field(row['chief'])
        docket_type = clean_field(row['docket'])
        case_name = clean_field(row['caseName'])
        if len(case_name) >= 255:
            case_name = case_name[:255]
            case_name = case_name[:-1] + "'"
        us_cite = clean_field(row['usCite'])
        led_cite = clean_field(row['ledCite'])
        sct_cite = clean_field(row['sctCite'])
        lexis_cite = clean_field(row['lexisCite'])
        justice_name = clean_field(row['justiceName'])

        # Date fields, handled with parse_date, prepare for SQL insertion as already done
        date_decision = parse_date(row['dateDecision'])  # Using parse_date directly
        date_argument = parse_date(row['dateArgument'])
        date_rearg = parse_date(row['dateRearg'])

        # Numeric fields, need to be converted with format_numeric or handled for NULL
        decision_type = format_numeric(row['decisionType'])
        term = format_numeric(row['term'])
        natural_court = format_numeric(row['naturalCourt'])
        petitioner = format_numeric(row['petitioner'])
        petitioner_state = format_numeric(row['petitionerState'])
        responder = format_numeric(row['respondent'])
        responder_state = format_numeric(row['respondentState'])
        jurisdiction_type = format_numeric(row['jurisdiction'])
        admin_action = format_numeric(row['adminAction'])
        admin_action_state = format_numeric(row['adminActionState'])
        case_origin = format_numeric(row['caseOrigin'])
        case_origin_state = format_numeric(row['caseOriginState'])
        case_source = format_numeric(row['caseSource'])
        case_source_state = format_numeric(row['caseSourceState'])
        issue = format_numeric(row['issue'])
        issue_area = format_numeric(row['issueArea'])
        decision_direction = format_numeric(row['decisionDirection'])
        decision_direction_dissent = format_numeric(row['decisionDirectionDissent'])
        authority1 = format_numeric(row['authorityDecision1'])
        authority2 = format_numeric(row['authorityDecision2'])
        maj_opin_writer = format_numeric(row['majOpinWriter'])
        maj_opin_assigner = format_numeric(row['majOpinAssigner'])
        split_vote = format_numeric(row['splitVote'])
        maj_votes = format_numeric(row['majVotes'])
        min_votes = format_numeric(row['minVotes'])
        justice_num = format_numeric(row['justice'])
        vote = format_numeric(row['vote'])
        opinion = format_numeric(row['opinion'])
        if voteID != 'NULL' and case_id != 'NULL' and docket_id != 'NULL' and case_issues_id != 'NULL':
            #check for new case
            if natural_court not in courts:
                courts.add(natural_court)
                current_court_map[natural_court] = set()
                sql_file.write(f"INSERT INTO Court (naturalCourt, term, chief) VALUES ({natural_court}, {term}, {chief});\n")
            
            if case_id != last_case:
                last_case = case_id
                jurisdiction_id += 1
                cite_id += 1
                source_id += 1
                origin_id += 1
                parties_id += 1
                sql_file.write(f"INSERT INTO LegalCase (caseID, caseName) VALUES ({case_id}, {case_name});\n")
                if case_issues_id != last_issue:
                    last_issue = case_issues_id
                    sql_file.write(f"INSERT INTO LegalIssue (caseIssue, issue, issueArea, caseID) VALUES ({case_issues_id}, {issue}, {issue_area}, {case_id});\n")
                sql_file.write(f"INSERT INTO Decision (decisionID, dateDecision, decisionType, direction, directionDissent, authority1, authority2, caseID) VALUES ({cite_id}, TO_DATE({date_decision}, 'YYYY-MM-DD'), {decision_type}, {decision_direction}, {decision_direction_dissent}, {authority1}, {authority2}, {case_id});\n")
                sql_file.write(f"INSERT INTO Jurisdiction (jurisdictionNum, jurisdictionType, adminAction, adminActionState, caseID) VALUES ({jurisdiction_id}, {jurisdiction_type}, {admin_action}, {admin_action_state}, {case_id});\n")
                sql_file.write(f"INSERT INTO Source (sourceID, caseSourceState, caseSource, caseID) VALUES ({source_id}, {case_source_state}, {case_source}, {case_id});\n")
                sql_file.write(f"INSERT INTO Origin (originID, caseOriginState, caseOrigin, caseID) VALUES ({origin_id}, {case_origin_state}, {case_origin}, {case_id});\n")
                sql_file.write(f"INSERT INTO Citation (citeID, usCite, sctCite, ledCite, lexisCite, caseIssue, caseID) VALUES ({cite_id}, {us_cite}, {sct_cite}, {led_cite}, {lexis_cite}, {case_issues_id}, {case_id});\n")
                sql_file.write(f"INSERT INTO Parties (partyID, petitioner, responder, petitionerState, responderState, naturalCourt, caseID) VALUES ({parties_id}, {petitioner}, {responder}, {petitioner_state}, {responder_state}, {natural_court}, {case_id});\n")

            #check for new docket
            if docket_id != last_docket:
                last_docket = docket_id
                sql_file.write(f"INSERT INTO Docket (docketID, docketType, dateArgument, dateRearg, caseID) VALUES ({docket_id}, {docket_type}, TO_DATE({date_argument}, 'YYYY-MM-DD'), TO_DATE({date_rearg}, 'YYYY-MM-DD'), {case_id});\n")

            #check for new justice
            if justice_name not in justice_names:
                justice_names.add(justice_name)
                sql_file.write(f"INSERT INTO Justice (justiceName, justiceNo) VALUES ({justice_name}, {justice_num});\n")

            if justice_name not in current_court_map[natural_court]:
                current_court_map[natural_court].add(justice_name)
                sql_file.write(f"INSERT INTO CourtMembership (naturalCourt, justiceName) VALUES ({natural_court}, {justice_name});\n")

            sql_file.write(f"INSERT INTO Vote (voteID, vote, decisionID, justiceName, opinion, direction, majority) VALUES ({voteID}, {vote}, {cite_id}, {justice_name}, {opinion}, {decision_direction}, {maj_votes});\n")
            opinion_id += 1
            sql_file.write(f"INSERT INTO Opinion (opinionID, decisionID, opinion, majOpinWriter, majOpinAssigner, splitVote, majVotes, minVotes) VALUES ({opinion_id}, {cite_id}, {opinion}, {maj_opin_writer}, {maj_opin_assigner}, {split_vote}, {maj_votes}, {min_votes});\n")

print(f"SQL commands have been written to {sql_file_path2}")

df = pd.read_csv(csv_path2, encoding='ISO-8859-1')


row_count = 0

with open(sql_file_path1, 'w', encoding='ISO-8859-1') as sql_file:

    sql_file.write("SET DEFINE OFF;\n")
    
    for _, row in df.iterrows():

        row_count += 1
        if row_count % 10000 == 0:
            print(f"Processing row {row_count} in modern...")
        # String fields, already properly handled with clean_field
        case_id = clean_field(row['caseId'])
        docket_id = clean_field(row['docketId'])
        case_issues_id = clean_field(row['caseIssuesId'])
        voteID = clean_field(row['voteId'])
        chief = clean_field(row['chief'])
        docket_type = clean_field(row['docket'])
        case_name = clean_field(row['caseName'])
        if len(case_name) >= 255:
            case_name = case_name[:255]
            case_name = case_name[:-1] + "'"
        us_cite = clean_field(row['usCite'])
        led_cite = clean_field(row['ledCite'])
        sct_cite = clean_field(row['sctCite'])
        lexis_cite = clean_field(row['lexisCite'])
        justice_name = clean_field(row['justiceName'])

        # Date fields, handled with parse_date, prepare for SQL insertion as already done
        date_decision = parse_date(row['dateDecision'])  # Using parse_date directly
        date_argument = parse_date(row['dateArgument'])
        date_rearg = parse_date(row['dateRearg'])

        # Numeric fields, need to be converted with format_numeric or handled for NULL
        decision_type = format_numeric(row['decisionType'])
        term = format_numeric(row['term'])
        natural_court = format_numeric(row['naturalCourt'])
        petitioner = format_numeric(row['petitioner'])
        petitioner_state = format_numeric(row['petitionerState'])
        responder = format_numeric(row['respondent'])
        responder_state = format_numeric(row['respondentState'])
        jurisdiction_type = format_numeric(row['jurisdiction'])
        admin_action = format_numeric(row['adminAction'])
        admin_action_state = format_numeric(row['adminActionState'])
        case_origin = format_numeric(row['caseOrigin'])
        case_origin_state = format_numeric(row['caseOriginState'])
        case_source = format_numeric(row['caseSource'])
        case_source_state = format_numeric(row['caseSourceState'])
        issue = format_numeric(row['issue'])
        issue_area = format_numeric(row['issueArea'])
        decision_direction = format_numeric(row['decisionDirection'])
        decision_direction_dissent = format_numeric(row['decisionDirectionDissent'])
        authority1 = format_numeric(row['authorityDecision1'])
        authority2 = format_numeric(row['authorityDecision2'])
        maj_opin_writer = format_numeric(row['majOpinWriter'])
        maj_opin_assigner = format_numeric(row['majOpinAssigner'])
        split_vote = format_numeric(row['splitVote'])
        maj_votes = format_numeric(row['majVotes'])
        min_votes = format_numeric(row['minVotes'])
        justice_num = format_numeric(row['justice'])
        vote = format_numeric(row['vote'])
        opinion = format_numeric(row['opinion'])
        if voteID != 'NULL' and case_id != 'NULL' and docket_id != 'NULL' and case_issues_id != 'NULL':
            #check for new case
            if natural_court not in courts:
                courts.add(natural_court)
                current_court_map[natural_court] = set()
                sql_file.write(f"INSERT INTO Court (naturalCourt, term, chief) VALUES ({natural_court}, {term}, {chief});\n")
            
            if case_id != last_case:
                last_case = case_id
                jurisdiction_id += 1
                cite_id += 1
                source_id += 1
                origin_id += 1
                parties_id += 1
                sql_file.write(f"INSERT INTO LegalCase (caseID, caseName) VALUES ({case_id}, {case_name});\n")
                if case_issues_id != last_issue:
                    last_issue = case_issues_id
                    sql_file.write(f"INSERT INTO LegalIssue (caseIssue, issue, issueArea, caseID) VALUES ({case_issues_id}, {issue}, {issue_area}, {case_id});\n")
                sql_file.write(f"INSERT INTO Decision (decisionID, dateDecision, decisionType, direction, directionDissent, authority1, authority2, caseID) VALUES ({cite_id}, TO_DATE({date_decision}, 'YYYY-MM-DD'), {decision_type}, {decision_direction}, {decision_direction_dissent}, {authority1}, {authority2}, {case_id});\n")
                sql_file.write(f"INSERT INTO Jurisdiction (jurisdictionNum, jurisdictionType, adminAction, adminActionState, caseID) VALUES ({jurisdiction_id}, {jurisdiction_type}, {admin_action}, {admin_action_state}, {case_id});\n")
                sql_file.write(f"INSERT INTO Source (sourceID, caseSourceState, caseSource, caseID) VALUES ({source_id}, {case_source_state}, {case_source}, {case_id});\n")
                sql_file.write(f"INSERT INTO Origin (originID, caseOriginState, caseOrigin, caseID) VALUES ({origin_id}, {case_origin_state}, {case_origin}, {case_id});\n")
                sql_file.write(f"INSERT INTO Citation (citeID, usCite, sctCite, ledCite, lexisCite, caseIssue, caseID) VALUES ({cite_id}, {us_cite}, {sct_cite}, {led_cite}, {lexis_cite}, {case_issues_id}, {case_id});\n")
                sql_file.write(f"INSERT INTO Parties (partyID, petitioner, responder, petitionerState, responderState, naturalCourt, caseID) VALUES ({parties_id}, {petitioner}, {responder}, {petitioner_state}, {responder_state}, {natural_court}, {case_id});\n")

            #check for new docket
            if docket_id != last_docket:
                last_docket = docket_id
                sql_file.write(f"INSERT INTO Docket (docketID, docketType, dateArgument, dateRearg, caseID) VALUES ({docket_id}, {docket_type}, TO_DATE({date_argument}, 'YYYY-MM-DD'), TO_DATE({date_rearg}, 'YYYY-MM-DD'), {case_id});\n")

            #check for new justice
            if justice_name not in justice_names:
                justice_names.add(justice_name)
                sql_file.write(f"INSERT INTO Justice (justiceName, justiceNo) VALUES ({justice_name}, {justice_num});\n")

            if justice_name not in current_court_map[natural_court]:
                current_court_map[natural_court].add(justice_name)
                sql_file.write(f"INSERT INTO CourtMembership (naturalCourt, justiceName) VALUES ({natural_court}, {justice_name});\n")

            sql_file.write(f"INSERT INTO Vote (voteID, vote, decisionID, justiceName, opinion, direction, majority) VALUES ({voteID}, {vote}, {cite_id}, {justice_name}, {opinion}, {decision_direction}, {maj_votes});\n")
            opinion_id += 1
            sql_file.write(f"INSERT INTO Opinion (opinionID, decisionID, opinion, majOpinWriter, majOpinAssigner, splitVote, majVotes, minVotes) VALUES ({opinion_id}, {cite_id}, {opinion}, {maj_opin_writer}, {maj_opin_assigner}, {split_vote}, {maj_votes}, {min_votes});\n")

print(f"SQL commands have been written to {sql_file_path1}")