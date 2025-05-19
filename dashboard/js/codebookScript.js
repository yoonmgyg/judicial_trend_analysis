document.addEventListener('DOMContentLoaded', function() {
  // This will hold the parsed data
  const csvPetitioner = `ID,Description
    1,"attorney general of the United States, or his office"
    2,specified state board or department of education
    3,"city, town, township, village, or borough government or governmental unit"
    4,"state commission, board, committee, or authority"
    5,"county government or county governmental unit, except school district"
    6,court or judicial district
    7,state department or agency
    8,governmental employee or job applicant
    9,female governmental employee or job applicant
    10,minority governmental employee or job applicant
    11,minority female governmental employee or job applicant
    12,not listed among agencies in the first Administrative Action variable
    13,retired or former governmental employee
    14,U.S. House of Representatives
    15,interstate compact
    16,judge
    17,"state legislature, house, or committee"
    18,"local governmental unit other than a county, city, town, township, village, or borough"
    19,"governmental official, or an official of an agency established under an interstate compact"
    20,state or U.S. supreme court
    21,local school district or board of education
    22,U.S. Senate
    23,U.S. senator
    24,foreign nation or instrumentality
    25,"state or local governmental taxpayer, or executor of the estate of"
    26,state college or university
    27,United States
    28,State
    100,"person accused, indicted, or suspected of crime"
    101,advertising business or agency
    102,"agent, fiduciary, trustee, or executor"
    103,"airplane manufacturer, or manufacturer of parts of airplanes"
    104,airline
    105,"distributor, importer, or exporter of alcoholic beverages"
    106,"alien, person subject to a denaturalization proceeding, or one whose citizenship is revoked"
    107,American Medical Association
    108,National Railroad Passenger Corp.
    109,"amusement establishment, or recreational facility"
    110,"arrested person, or pretrial detainee"
    111,"attorney, or person acting as such;includes bar applicant or law student, or law firm or bar association"
    112,"author, copyright holder"
    113,"bank, savings and loan, credit union, investment company"
    114,"bankrupt person or business, or business in reorganization"
    115,"establishment serving liquor by the glass, or package liquor store"
    116,"water transportation, stevedore"
    117,"bookstore, newsstand, printer, bindery, purveyor or distributor of books or magazines"
    118,"brewery, distillery"
    119,"broker, stock exchange, investment or securities firm"
    120,construction industry
    121,bus or motorized passenger transportation vehicle
    122,"business, corporation"
    123,"buyer, purchaser"
    124,cable TV
    125,car dealer
    126,person convicted of crime
    127,"tangible property, other than real estate, including contraband"
    128,chemical company
    129,"child, children, including adopted or illegitimate"
    130,"religious organization, institution, or person"
    131,private club or facility
    132,coal company or coal mine operator
    133,"computer business or manufacturer, hardware or software"
    134,"consumer, consumer organization"
    135,"creditor, including institution appearing as such; e.g., a finance company"
    136,person allegedly criminally insane or mentally incompetent to stand trial
    137,defendant
    138,debtor
    139,real estate developer
    140,disabled person or disability benefit claimant
    141,distributor
    142,"person subject to selective service, including conscientious objector"
    143,drug manufacturer
    144,"druggist, pharmacist, pharmacy"
    145,"employee, or job applicant, including beneficiaries of"
    146,"employer-employee trust agreement, employee health and welfare fund, or multi-employer pension plan"
    147,electric equipment manufacturer
    148,"electric or hydroelectric power utility, power cooperative, or gas and electric company"
    149,eleemosynary institution or person
    150,environmental organization
    151,"employer. If employer's relations with employees are governed by the nature of the employer's business (e.g., railroad, boat), rather than labor law generally, the more specific designation is used in place of Employer."
    152,"farmer, farm worker, or farm organization"
    153,father
    154,female employee or job applicant
    155,female
    156,"movie, play, pictorial representation, theatrical production, actor, or exhibitor or distributor of"
    157,fisherman or fishing company
    158,"food, meat packing, or processing company, stockyard"
    159,foreign (non-American) nongovernmental entity
    160,franchiser
    161,franchisee
    162,"lesbian, gay, bisexual, transexual person or organization"
    163,person who guarantees another's obligations
    164,"handicapped individual, or organization of devoted to"
    165,"health organization or person, nursing home, medical clinic or laboratory, chiropractor"
    166,"heir, or beneficiary, or person so claiming to be"
    167,"hospital, medical center"
    168,"husband, or ex-husband"
    169,involuntarily committed mental patient
    170,"Indian, including Indian tribe or nation"
    171,"insurance company, or surety"
    172,"inventor, patent assigner, trademark owner or holder"
    173,investor
    174,"injured person or legal entity, nonphysically and non-employment related"
    175,juvenile
    176,government contractor
    177,"holder of a license or permit, or applicant therefor"
    178,magazine
    179,male
    180,medical or Medicaid claimant
    181,medical supply or manufacturing co.
    182,racial or ethnic minority employee or job applicant
    183,minority female employee or job applicant
    184,manufacturer
    185,"management, executive officer, or director, of business entity"
    186,"military personnel, or dependent of, including reservist"
    187,"mining company or miner, excluding coal, oil, or pipeline company"
    188,mother
    189,auto manufacturer
    190,"newspaper, newsletter, journal of opinion, news service"
    191,"radio and television network, except cable tv"
    192,nonprofit organization or business
    193,nonresident
    194,nuclear power plant or facility
    195,"owner, landlord, or claimant to ownership, fee interest, or possession of land as well as chattels"
    196,shareholders to whom a tender offer is made
    197,tender offer
    198,"oil company, or natural gas producer"
    199,"elderly person, or organization dedicated to the elderly"
    200,out of state noncriminal defendant
    201,political action committee
    202,parent or parents
    203,parking lot or service
    204,patient of a health professional
    205,"telephone, telecommunications, or telegraph company"
    206,"physician, MD or DO, dentist, or medical society"
    207,public interest organization
    208,"physically injured person, including wrongful death, who is not an employee"
    209,pipe line company
    210,"package, luggage, container"
    211,"political candidate, activist, committee, party, party member, organization, or elected official"
    212,"indigent, needy, welfare recipient"
    213,indigent defendant
    214,private person
    215,"prisoner, inmate of penal institution"
    216,"professional organization, business, or person"
    217,"probationer, or parolee"
    218,"protester, demonstrator, picketer or pamphleteer (non-employment related), or non-indigent loiterer"
    219,public utility
    220,"publisher, publishing company"
    221,radio station
    222,racial or ethnic minority
    223,person or organization protesting racial or ethnic segregation or discrimination
    224,racial or ethnic minority student or applicant for admission to an educational institution
    225,realtor
    226,"journalist, columnist, member of the news media"
    227,resident
    228,"restaurant, food vendor"
    229,"retarded person, or mental incompetent"
    230,retired or former employee
    231,railroad
    232,"private school, college, or university"
    233,seller or vendor
    234,"shipper, including importer and exporter"
    235,"shopping center, mall"
    236,"spouse, or former spouse"
    237,"stockholder, shareholder, or bondholder"
    238,retail business or outlet
    239,"student, or applicant for admission to an educational institution"
    240,"taxpayer or executor of taxpayer's estate, federal only"
    241,tenant or lessee
    242,"theater, studio"
    243,"forest products, lumber, or logging company"
    244,"person traveling or wishing to travel abroad, or overseas travel agent"
    245,"trucking company, or motor carrier"
    246,television station
    247,union member
    248,unemployed person or unemployment compensation applicant or claimant
    249,"union, labor organization, or official of"
    250,veteran
    251,"voter, prospective voter, elector, or a nonelective official seeking reapportionment or redistricting of legislative districts (POL)"
    252,wholesale trade
    253,"wife, or ex-wife"
    254,"witness, or person under subpoena"
    255,network
    256,slave
    257,slave-owner
    258,bank of the united states
    259,timber company
    260,u.s. job applicants or employees
    301,Army and Air Force Exchange Service
    302,Atomic Energy Commission
    303,Secretary or administrative unit or personnel of the U.S. Air Force
    304,Department or Secretary of Agriculture
    305,Alien Property Custodian
    306,Secretary or administrative unit or personnel of the U.S. Army
    307,Board of Immigration Appeals
    308,Bureau of Indian Affairs
    310,Bonneville Power Administration
    311,Benefits Review Board
    312,Civil Aeronautics Board
    313,Bureau of the Census
    314,Central Intelligence Agency
    315,Commodity Futures Trading Commission
    316,Department or Secretary of Commerce
    317,Comptroller of Currency
    318,Consumer Product Safety Commission
    319,Civil Rights Commission
    320,"Civil Service Commission, U.S."
    321,Customs Service or Commissioner of Customs
    322,Defense Base Closure and REalignment Commission
    323,Drug Enforcement Agency
    324,Department or Secretary of Defense (and Department or Secretary of War)
    325,Department or Secretary of Energy
    326,Department or Secretary of the Interior
    327,Department of Justice or Attorney General
    328,Department or Secretary of State
    329,Department or Secretary of Transportation
    330,Department or Secretary of Education
    331,"U.S. Employees' Compensation Commission, or Commissioner"
    332,Equal Employment Opportunity Commission
    333,Environmental Protection Agency or Administrator
    334,Federal Aviation Agency or Administration
    335,Federal Bureau of Investigation or Director
    336,Federal Bureau of Prisons
    337,Farm Credit Administration
    338,"Federal Communications Commission (including a predecessor, Federal Radio Commission)"
    339,Federal Credit Union Administration
    340,Food and Drug Administration
    341,Federal Deposit Insurance Corporation
    342,Federal Energy Administration
    343,Federal Election Commission
    344,Federal Energy Regulatory Commission
    345,Federal Housing Administration
    346,Federal Home Loan Bank Board
    347,Federal Labor Relations Authority
    348,Federal Maritime Board
    349,Federal Maritime Commission
    350,Farmers Home Administration
    351,Federal Parole Board
    352,Federal Power Commission
    353,Federal Railroad Administration
    354,Federal Reserve Board of Governors
    355,Federal Reserve System
    356,Federal Savings and Loan Insurance Corporation
    357,Federal Trade Commission
    358,"Federal Works Administration, or Administrator"
    359,General Accounting Office
    360,Comptroller General
    361,General Services Administration
    362,"Department or Secretary of Health, Education and Welfare"
    363,Department or Secretary of Health and Human Services
    364,Department or Secretary of Housing and Urban Development
    366,Interstate Commerce Commission
    367,Indian Claims Commission
    368,"Immigration and Naturalization Service, or Director of, or District Director of, or Immigration and Naturalization Enforcement"
    369,"Internal Revenue Service, Collector, Commissioner, or District Director of"
    370,Information Security Oversight Office
    371,Department or Secretary of Labor
    372,Loyalty Review Board
    373,Legal Services Corporation
    374,Merit Systems Protection Board
    375,Multistate Tax Commission
    376,National Aeronautics and Space Administration
    377,Secretary or administrative unit of the U.S. Navy
    378,National Credit Union Administration
    379,National Endowment for the Arts
    380,National Enforcement Commission
    381,National Highway Traffic Safety Administration
    382,"National Labor Relations Board, or regional office or officer"
    383,National Mediation Board
    384,National Railroad Adjustment Board
    385,Nuclear Regulatory Commission
    386,National Security Agency
    387,Office of Economic Opportunity
    388,Office of Management and Budget
    389,"Office of Price Administration, or Price Administrator"
    390,Office of Personnel Management
    391,Occupational Safety and Health Administration
    392,Occupational Safety and Health Review Commission
    393,Office of Workers' Compensation Programs
    394,"Patent Office, or Commissioner of, or Board of Appeals of"
    395,Pay Board (established under the Economic Stabilization Act of 1970)
    396,Pension Benefit Guaranty Corporation
    397,U.S. Public Health Service
    398,Postal Rate Commission
    399,Provider Reimbursement Review Board
    400,Renegotiation Board
    401,Railroad Adjustment Board
    402,Railroad Retirement Board
    403,Subversive Activities Control Board
    404,Small Business Administration
    405,Securities and Exchange Commission
    406,Social Security Administration or Commissioner
    407,Selective Service System
    408,Department or Secretary of the Treasury
    409,Tennessee Valley Authority
    410,United States Forest Service
    411,United States Parole Commission
    412,"Postal Service and Post Office, or Postmaster General, or Postmaster"
    413,United States Sentencing Commission
    414,Veterans' Administration
    415,War Production Board
    416,Wage Stabilization Board
    417,General Land Office of Commissioners
    418,Transportation Security Administration
    419,Surface Transportation Board
    420,U.S. Shipping Board Emergency Fleet Corp.
    421,Reconstruction Finance Corp.
    422,Department or Secretary of Homeland Security
    501,Unidentifiable
    600,International Entity
    `;    
    

  const csvPetitionerState = `ID,State
    1,Alabama
    2,Alaska
    3,American Samoa
    4,Arizona
    5,Arkansas
    6,California
    7,Colorado
    8,Connecticut
    9,Delaware
    10,District of Columbia
    11,Federated States of Micronesia
    12,Florida
    13,Georgia
    14,Guam
    15,Hawaii
    16,Idaho
    17,Illinois
    18,Indiana
    19,Iowa
    20,Kansas
    21,Kentucky
    22,Louisiana
    23,Maine
    24,Marshall Islands
    25,Maryland
    26,Massachusetts
    27,Michigan
    28,Minnesota
    29,Mississippi
    30,Missouri
    31,Montana
    32,Nebraska
    33,Nevada
    34,New Hampshire
    35,New Jersey
    36,New Mexico
    37,New York
    38,North Carolina
    39,North Dakota
    40,Northern Mariana Islands
    41,Ohio
    42,Oklahoma
    43,Oregon
    44,Palau
    45,Pennsylvania
    46,Puerto Rico
    47,Rhode Island
    48,South Carolina
    49,South Dakota
    50,Tennessee
    51,Texas
    52,Utah
    53,Vermont
    54,Virgin Islands
    55,Virginia
    56,Washington
    57,West Virginia
    58,Wisconsin
    59,Wyoming
    60,United States
    61,Interstate Compact
    62,Philippines
    63,Indian
    64,Dakota
  `;
    
  
  const csvRespondent = `ID,Respondent
    1,"attorney general of the United States, or his office"
    2,specified state board or department of education
    3,"city, town, township, village, or borough government or governmental unit"
    4,"state commission, board, committee, or authority"
    5,"county government or county governmental unit, except school district"
    6,court or judicial district
    7,state department or agency
    8,governmental employee or job applicant
    9,female governmental employee or job applicant
    10,minority governmental employee or job applicant
    11,minority female governmental employee or job applicant
    12,not listed among agencies in the first Administrative Action variable
    13,retired or former governmental employee
    14,U.S. House of Representatives
    15,interstate compact
    16,judge
    17,"state legislature, house, or committee"
    18,"local governmental unit other than a county, city, town, township, village, or borough"
    19,"governmental official, or an official of an agency established under an interstate compact"
    20,state or U.S. supreme court
    21,local school district or board of education
    22,U.S. Senate
    23,U.S. senator
    24,foreign nation or instrumentality
    25,"state or local governmental taxpayer, or executor of the estate of"
    26,state college or university
    27,United States
    28,State
    100,"person accused, indicted, or suspected of crime"
    101,advertising business or agency
    102,"agent, fiduciary, trustee, or executor"
    103,"airplane manufacturer, or manufacturer of parts of airplanes"
    104,airline
    105,"distributor, importer, or exporter of alcoholic beverages"
    106,"alien, person subject to a denaturalization proceeding, or one whose citizenship is revoked"
    107,American Medical Association
    108,National Railroad Passenger Corp.
    109,"amusement establishment, or recreational facility"
    110,"arrested person, or pretrial detainee"
    111,"attorney, or person acting as such;includes bar applicant or law student, or law firm or bar association"
    112,"author, copyright holder"
    113,"bank, savings and loan, credit union, investment company"
    114,"bankrupt person or business, or business in reorganization"
    115,"establishment serving liquor by the glass, or package liquor store"
    116,"water transportation, stevedore"
    117,"bookstore, newsstand, printer, bindery, purveyor or distributor of books or magazines"
    118,"brewery, distillery"
    119,"broker, stock exchange, investment or securities firm"
    120,construction industry
    121,bus or motorized passenger transportation vehicle
    122,"business, corporation"
    123,"buyer, purchaser"
    124,cable TV
    125,car dealer
    126,person convicted of crime
    127,"tangible property, other than real estate, including contraband"
    128,chemical company
    129,"child, children, including adopted or illegitimate"
    130,"religious organization, institution, or person"
    131,private club or facility
    132,coal company or coal mine operator
    133,"computer business or manufacturer, hardware or software"
    134,"consumer, consumer organization"
    135,"creditor, including institution appearing as such; e.g., a finance company"
    136,person allegedly criminally insane or mentally incompetent to stand trial
    137,defendant
    138,debtor
    139,real estate developer
    140,disabled person or disability benefit claimant
    141,distributor
    142,"person subject to selective service, including conscientious objector"
    143,drug manufacturer
    144,"druggist, pharmacist, pharmacy"
    145,"employee, or job applicant, including beneficiaries of"
    146,"employer-employee trust agreement, employee health and welfare fund, or multi-employer pension plan"
    147,electric equipment manufacturer
    148,"electric or hydroelectric power utility, power cooperative, or gas and electric company"
    149,eleemosynary institution or person
    150,environmental organization
    151,"employer. If employer's relations with employees are governed by the nature of the employer's business (e.g., railroad, boat), rather than labor law generally, the more specific designation is used in place of Employer."
    152,"farmer, farm worker, or farm organization"
    153,father
    154,female employee or job applicant
    155,female
    156,"movie, play, pictorial representation, theatrical production, actor, or exhibitor or distributor of"
    157,fisherman or fishing company
    158,"food, meat packing, or processing company, stockyard"
    159,foreign (non-American) nongovernmental entity
    160,franchiser
    161,franchisee
    162,"lesbian, gay, bisexual, transexual person or organization"
    163,person who guarantees another's obligations
    164,"handicapped individual, or organization of devoted to"
    165,"health organization or person, nursing home, medical clinic or laboratory, chiropractor"
    166,"heir, or beneficiary, or person so claiming to be"
    167,"hospital, medical center"
    168,"husband, or ex-husband"
    169,involuntarily committed mental patient
    170,"Indian, including Indian tribe or nation"
    171,"insurance company, or surety"
    172,"inventor, patent assigner, trademark owner or holder"
    173,investor
    174,"injured person or legal entity, nonphysically and non-employment related"
    175,juvenile
    176,government contractor
    177,"holder of a license or permit, or applicant therefor"
    178,magazine
    179,male
    180,medical or Medicaid claimant
    181,medical supply or manufacturing co.
    182,racial or ethnic minority employee or job applicant
    183,minority female employee or job applicant
    184,manufacturer
    185,"management, executive officer, or director, of business entity"
    186,"military personnel, or dependent of, including reservist"
    187,"mining company or miner, excluding coal, oil, or pipeline company"
    188,mother
    189,auto manufacturer
    190,"newspaper, newsletter, journal of opinion, news service"
    191,"radio and television network, except cable tv"
    192,nonprofit organization or business
    193,nonresident
    194,nuclear power plant or facility
    195,"owner, landlord, or claimant to ownership, fee interest, or possession of land as well as chattels"
    196,shareholders to whom a tender offer is made
    197,tender offer
    198,"oil company, or natural gas producer"
    199,"elderly person, or organization dedicated to the elderly"
    200,out of state noncriminal defendant
    201,political action committee
    202,parent or parents
    203,parking lot or service
    204,patient of a health professional
    205,"telephone, telecommunications, or telegraph company"
    206,"physician, MD or DO, dentist, or medical society"
    207,public interest organization
    208,"physically injured person, including wrongful death, who is not an employee"
    209,pipe line company
    210,"package, luggage, container"
    211,"political candidate, activist, committee, party, party member, organization, or elected official"
    212,"indigent, needy, welfare recipient"
    213,indigent defendant
    214,private person
    215,"prisoner, inmate of penal institution"
    216,"professional organization, business, or person"
    217,"probationer, or parolee"
    218,"protester, demonstrator, picketer or pamphleteer (non-employment related), or non-indigent loiterer"
    219,public utility
    220,"publisher, publishing company"
    221,radio station
    222,racial or ethnic minority
    223,person or organization protesting racial or ethnic segregation or discrimination
    224,racial or ethnic minority student or applicant for admission to an educational institution
    225,realtor
    226,"journalist, columnist, member of the news media"
    227,resident
    228,"restaurant, food vendor"
    229,"retarded person, or mental incompetent"
    230,retired or former employee
    231,railroad
    232,"private school, college, or university"
    233,seller or vendor
    234,"shipper, including importer and exporter"
    235,"shopping center, mall"
    236,"spouse, or former spouse"
    237,"stockholder, shareholder, or bondholder"
    238,retail business or outlet
    239,"student, or applicant for admission to an educational institution"
    240,"taxpayer or executor of taxpayer's estate, federal only"
    241,tenant or lessee
    242,"theater, studio"
    243,"forest products, lumber, or logging company"
    244,"person traveling or wishing to travel abroad, or overseas travel agent"
    245,"trucking company, or motor carrier"
    246,television station
    247,union member
    248,unemployed person or unemployment compensation applicant or claimant
    249,"union, labor organization, or official of"
    250,veteran
    251,"voter, prospective voter, elector, or a nonelective official seeking reapportionment or redistricting of legislative districts (POL)"
    252,wholesale trade
    253,"wife, or ex-wife"
    254,"witness, or person under subpoena"
    255,network
    256,slave
    257,slave-owner
    258,bank of the united states
    259,timber company
    260,u.s. job applicants or employees
    301,Army and Air Force Exchange Service
    302,Atomic Energy Commission
    303,Secretary or administrative unit or personnel of the U.S. Air Force
    304,Department or Secretary of Agriculture
    305,Alien Property Custodian
    306,Secretary or administrative unit or personnel of the U.S. Army
    307,Board of Immigration Appeals
    308,Bureau of Indian Affairs
    310,Bonneville Power Administration
    311,Benefits Review Board
    312,Civil Aeronautics Board
    313,Bureau of the Census
    314,Central Intelligence Agency
    315,Commodity Futures Trading Commission
    316,Department or Secretary of Commerce
    317,Comptroller of Currency
    318,Consumer Product Safety Commission
    319,Civil Rights Commission
    320,"Civil Service Commission, U.S."
    321,Customs Service or Commissioner of Customs
    322,Defense Base Closure and REalignment Commission
    323,Drug Enforcement Agency
    324,Department or Secretary of Defense (and Department or Secretary of War)
    325,Department or Secretary of Energy
    326,Department or Secretary of the Interior
    327,Department of Justice or Attorney General
    328,Department or Secretary of State
    329,Department or Secretary of Transportation
    330,Department or Secretary of Education
    331,"U.S. Employees' Compensation Commission, or Commissioner"
    332,Equal Employment Opportunity Commission
    333,Environmental Protection Agency or Administrator
    334,Federal Aviation Agency or Administration
    335,Federal Bureau of Investigation or Director
    336,Federal Bureau of Prisons
    337,Farm Credit Administration
    338,"Federal Communications Commission (including a predecessor, Federal Radio Commission)"
    339,Federal Credit Union Administration
    340,Food and Drug Administration
    341,Federal Deposit Insurance Corporation
    342,Federal Energy Administration
    343,Federal Election Commission
    344,Federal Energy Regulatory Commission
    345,Federal Housing Administration
    346,Federal Home Loan Bank Board
    347,Federal Labor Relations Authority
    348,Federal Maritime Board
    349,Federal Maritime Commission
    350,Farmers Home Administration
    351,Federal Parole Board
    352,Federal Power Commission
    353,Federal Railroad Administration
    354,Federal Reserve Board of Governors
    355,Federal Reserve System
    356,Federal Savings and Loan Insurance Corporation
    357,Federal Trade Commission
    358,"Federal Works Administration, or Administrator"
    359,General Accounting Office
    360,Comptroller General
    361,General Services Administration
    362,"Department or Secretary of Health, Education and Welfare"
    363,Department or Secretary of Health and Human Services
    364,Department or Secretary of Housing and Urban Development
    366,Interstate Commerce Commission
    367,Indian Claims Commission
    368,"Immigration and Naturalization Service, or Director of, or District Director of, or Immigration and Naturalization Enforcement"
    369,"Internal Revenue Service, Collector, Commissioner, or District Director of"
    370,Information Security Oversight Office
    371,Department or Secretary of Labor
    372,Loyalty Review Board
    373,Legal Services Corporation
    374,Merit Systems Protection Board
    375,Multistate Tax Commission
    376,National Aeronautics and Space Administration
    377,Secretary or administrative unit of the U.S. Navy
    378,National Credit Union Administration
    379,National Endowment for the Arts
    380,National Enforcement Commission
    381,National Highway Traffic Safety Administration
    382,"National Labor Relations Board, or regional office or officer"
    383,National Mediation Board
    384,National Railroad Adjustment Board
    385,Nuclear Regulatory Commission
    386,National Security Agency
    387,Office of Economic Opportunity
    388,Office of Management and Budget
    389,"Office of Price Administration, or Price Administrator"
    390,Office of Personnel Management
    391,Occupational Safety and Health Administration
    392,Occupational Safety and Health Review Commission
    393,Office of Workers' Compensation Programs
    394,"Patent Office, or Commissioner of, or Board of Appeals of"
    395,Pay Board (established under the Economic Stabilization Act of 1970)
    396,Pension Benefit Guaranty Corporation
    397,U.S. Public Health Service
    398,Postal Rate Commission
    399,Provider Reimbursement Review Board
    400,Renegotiation Board
    401,Railroad Adjustment Board
    402,Railroad Retirement Board
    403,Subversive Activities Control Board
    404,Small Business Administration
    405,Securities and Exchange Commission
    406,Social Security Administration or Commissioner
    407,Selective Service System
    408,Department or Secretary of the Treasury
    409,Tennessee Valley Authority
    410,United States Forest Service
    411,United States Parole Commission
    412,"Postal Service and Post Office, or Postmaster General, or Postmaster"
    413,United States Sentencing Commission
    414,Veterans' Administration
    415,War Production Board
    416,Wage Stabilization Board
    417,General Land Office of Commissioners
    418,Transportation Security Administration
    419,Surface Transportation Board
    420,U.S. Shipping Board Emergency Fleet Corp.
    421,Reconstruction Finance Corp.
    422,Department or Secretary of Homeland Security
    501,Unidentifiable
    600,International Entity
  `;    
    
  const csvRespondentState = `ID,Respondent
    1,Alabama
    2,Alaska
    3,American Samoa
    4,Arizona
    5,Arkansas
    6,California
    7,Colorado
    8,Connecticut
    9,Delaware
    10,District of Columbia
    11,Federated States of Micronesia
    12,Florida
    13,Georgia
    14,Guam
    15,Hawaii
    16,Idaho
    17,Illinois
    18,Indiana
    19,Iowa
    20,Kansas
    21,Kentucky
    22,Louisiana
    23,Maine
    24,Marshall Islands
    25,Maryland
    26,Massachusetts
    27,Michigan
    28,Minnesota
    29,Mississippi
    30,Missouri
    31,Montana
    32,Nebraska
    33,Nevada
    34,New Hampshire
    35,New Jersey
    36,New Mexico
    37,New York
    38,North Carolina
    39,North Dakota
    40,Northern Mariana Islands
    41,Ohio
    42,Oklahoma
    43,Oregon
    44,Palau
    45,Pennsylvania
    46,Puerto Rico
    47,Rhode Island
    48,South Carolina
    49,South Dakota
    50,Tennessee
    51,Texas
    52,Utah
    53,Vermont
    54,Virgin Islands
    55,Virginia
    56,Washington
    57,West Virginia
    58,Wisconsin
    59,Wyoming
    60,United States
    61,Interstate Compact
    62,Philippines
    63,Indian
    64,Dakota
  `;
  const csvJurisdiction = `ID, Jurisdiction
      1,cert
      2,appeal
      3,bail
      4,certification
      5,docketing fee
      6,rehearing or restored to calendar for reargument
      7,injunction
      8,mandamus
      9,original
      10,prohibition
      12,stay
      13,writ of error
      14,writ of habeas corpus
      15,"unspecified, other"
  `;

  const csvAdministrativeActionPreceeding = `ID,Administrative Action
    1,Army and Air Force Exchange Service
    2,Atomic Energy Commission
    3,Secretary or administrative unit or personnel of the U.S. Air Force
    4,Department or Secretary of Agriculture
    5,Alien Property Custodian
    6,Secretary or administrative unit or personnel of the U.S. Army
    7,Board of Immigration Appeals
    8,Bureau of Indian Affairs
    9,Bureau of Prisons
    10,Bonneville Power Administration
    11,Benefits Review Board
    12,Civil Aeronautics Board
    13,Bureau of the Census
    14,Central Intelligence Agency
    15,Commodity Futures Trading Commission
    16,Department or Secretary of Commerce
    17,Comptroller of Currency
    18,Consumer Product Safety Commission
    19,Civil Rights Commission
    20,"Civil Service Commission, U.S."
    21,Customs Service or Commissioner or Collector of Customs
    22,Defense Base Closure and REalignment Commission
    23,Drug Enforcement Agency
    24,Department or Secretary of Defense (and Department or Secretary of War)
    25,Department or Secretary of Energy
    26,Department or Secretary of the Interior
    27,Department of Justice or Attorney General
    28,Department or Secretary of State
    29,Department or Secretary of Transportation
    30,Department or Secretary of Education
    31,"U.S. Employees' Compensation Commission, or Commissioner"
    32,Equal Employment Opportunity Commission
    33,Environmental Protection Agency or Administrator
    34,Federal Aviation Agency or Administration
    35,Federal Bureau of Investigation or Director
    36,Federal Bureau of Prisons
    37,Farm Credit Administration
    38,"Federal Communications Commission (including a predecessor, Federal Radio Commission)"
    39,Federal Credit Union Administration
    40,Food and Drug Administration
    41,Federal Deposit Insurance Corporation
    42,Federal Energy Administration
    43,Federal Election Commission
    44,Federal Energy Regulatory Commission
    45,Federal Housing Administration
    46,Federal Home Loan Bank Board
    47,Federal Labor Relations Authority
    48,Federal Maritime Board
    49,Federal Maritime Commission
    50,Farmers Home Administration
    51,Federal Parole Board
    52,Federal Power Commission
    53,Federal Railroad Administration
    54,Federal Reserve Board of Governors
    55,Federal Reserve System
    56,Federal Savings and Loan Insurance Corporation
    57,Federal Trade Commission
    58,"Federal Works Administration, or Administrator"
    59,General Accounting Office
    60,Comptroller General
    61,General Services Administration
    62,"Department or Secretary of Health, Education and Welfare"
    63,Department or Secretary of Health and Human Services
    64,Department or Secretary of Housing and Urban Development
    65,Administrative agency established under an interstate compact (except for the MTC)
    66,Interstate Commerce Commission
    67,Indian Claims Commission
    68,"Immigration and Naturalization Service, or Director of, or District Director of, or Immigration and Naturalization Enforcement"
    69,"Internal Revenue Service, Collector, Commissioner, or District Director of"
    70,Information Security Oversight Office
    71,Department or Secretary of Labor
    72,Loyalty Review Board
    73,Legal Services Corporation
    74,Merit Systems Protection Board
    75,Multistate Tax Commission
    76,National Aeronautics and Space Administration
    77,Secretary or administrative unit or personnel of the U.S. Navy
    78,National Credit Union Administration
    79,National Endowment for the Arts
    80,National Enforcement Commission
    81,National Highway Traffic Safety Administration
    82,"National Labor Relations Board, or regional office or officer"
    83,National Mediation Board
    84,National Railroad Adjustment Board
    85,Nuclear Regulatory Commission
    86,National Security Agency
    87,Office of Economic Opportunity
    88,Office of Management and Budget
    89,"Office of Price Administration, or Price Administrator"
    90,Office of Personnel Management
    91,Occupational Safety and Health Administration
    92,Occupational Safety and Health Review Commission
    93,Office of Workers' Compensation Programs
    94,"Patent Office, or Commissioner of, or Board of Appeals of"
    95,Pay Board (established under the Economic Stabilization Act of 1970)
    96,Pension Benefit Guaranty Corporation
    97,U.S. Public Health Service
    98,Postal Rate Commission
    99,Provider Reimbursement Review Board
    100,Renegotiation Board
    101,Railroad Adjustment Board
    102,Railroad Retirement Board
    103,Subversive Activities Control Board
    104,Small Business Administration
    105,Securities and Exchange Commission
    106,Social Security Administration or Commissioner
    107,Selective Service System
    108,Department or Secretary of the Treasury
    109,Tennessee Valley Authority
    110,United States Forest Service
    111,United States Parole Commission
    112,"Postal Service and Post Office, or Postmaster General, or Postmaster"
    113,United States Sentencing Commission
    114,Veterans' Administration or Board of Veterans' Appeals
    115,War Production Board
    116,Wage Stabilization Board
    117,State Agency
    118,Unidentifiable
    119,Office of Thrift Supervision
    120,Department of Homeland Security
    121,Board of General Appraisers
    122,Board of Tax Appeals
    123,General Land Office or Commissioners
    124,NO Admin Action
    125,Processing Tax Board of Review  
  `;

  const csvAdminActionPreceedingState = `ID,Admin Action State
    1,Alabama
    2,Alaska
    3,American Samoa
    4,Arizona
    5,Arkansas
    6,California
    7,Colorado
    8,Connecticut
    9,Delaware
    10,District of Columbia
    11,Federated States of Micronesia
    12,Florida
    13,Georgia
    14,Guam
    15,Hawaii
    16,Idaho
    17,Illinois
    18,Indiana
    19,Iowa
    20,Kansas
    21,Kentucky
    22,Louisiana
    23,Maine
    24,Marshall Islands
    25,Maryland
    26,Massachusetts
    27,Michigan
    28,Minnesota
    29,Mississippi
    30,Missouri
    31,Montana
    32,Nebraska
    33,Nevada
    34,New Hampshire
    35,New Jersey
    36,New Mexico
    37,New York
    38,North Carolina
    39,North Dakota
    40,Northern Mariana Islands
    41,Ohio
    42,Oklahoma
    43,Oregon
    44,Palau
    45,Pennsylvania
    46,Puerto Rico
    47,Rhode Island
    48,South Carolina
    49,South Dakota
    50,Tennessee
    51,Texas
    52,Utah
    53,Vermont
    54,Virgin Islands
    55,Virginia
    56,Washington
    57,West Virginia
    58,Wisconsin
    59,Wyoming
    60,United States
    61,Interstate Compact
    62,Philippines
    63,Indian
    64,Dakota
  `;


  const csvOrigin = `ID,Origin of Case
    1,U.S. Court of Customs and Patent Appeals
    2,U.S. Court of International Trade
    3,"U.S. Court of Claims, Court of Federal Claims"
    4,"U.S. Court of Military Appeals, renamed as Court of Appeals for the Armed Forces"
    5,U.S. Court of Military Review
    6,U.S. Court of Veterans Appeals
    7,U.S. Customs Court
    8,"U.S. Court of Appeals, Federal Circuit"
    9,U.S. Tax Court
    10,Temporary Emergency U.S. Court of Appeals
    12,U.S. Court for China
    13,U.S. Consular Courts
    14,U.S. Commerce Court
    15,Territorial Supreme Court
    16,Territorial Appellate Court
    17,Territorial Trial Court
    18,Emergency Court of Appeals
    19,Supreme Court of the District of Columbia
    20,Bankruptcy Court
    21,"U.S. Court of Appeals, First Circuit"
    22,"U.S. Court of Appeals, Second Circuit"
    23,"U.S. Court of Appeals, Third Circuit"
    24,"U.S. Court of Appeals, Fourth Circuit"
    25,"U.S. Court of Appeals, Fifth Circuit"
    26,"U.S. Court of Appeals, Sixth Circuit"
    27,"U.S. Court of Appeals, Seventh Circuit"
    28,"U.S. Court of Appeals, Eighth Circuit"
    29,"U.S. Court of Appeals, Ninth Circuit"
    30,"U.S. Court of Appeals, Tenth Circuit"
    31,"U.S. Court of Appeals, Eleventh Circuit"
    32,"U.S. Court of Appeals, District of Columbia Circuit (includes the Court of Appeals for the District of Columbia but not the District of Columbia Court of Appeals, which has local jurisdiction)"
    41,Alabama Middle U.S. District Court
    42,Alabama Northern U.S. District Court
    43,Alabama Southern U.S. District Court
    44,Alaska U.S. District Court
    45,Arizona U.S. District Court
    46,Arkansas Eastern U.S. District Court
    47,Arkansas Western U.S. District Court
    48,California Central U.S. District Court
    49,California Eastern U.S. District Court
    50,California Northern U.S. District Court
    51,California Southern U.S. District Court
    52,Colorado U.S. District Court
    53,Connecticut U.S. District Court
    54,Delaware U.S. District Court
    55,District Of Columbia U.S. District Court
    56,Florida Middle U.S. District Court
    57,Florida Northern U.S. District Court
    58,Florida Southern U.S. District Court
    59,Georgia Middle U.S. District Court
    60,Georgia Northern U.S. District Court
    61,Georgia Southern U.S. District Court
    62,Guam U.S. District Court
    63,Hawaii U.S. District Court
    64,Idaho U.S. District Court
    65,Illinois Central U.S. District Court
    66,Illinois Northern U.S. District Court
    67,Illinois Southern U.S. District Court
    68,Indiana Northern U.S. District Court
    69,Indiana Southern U.S. District Court
    70,Iowa Northern U.S. District Court
    71,Iowa Southern U.S. District Court
    72,Kansas U.S. District Court
    73,Kentucky Eastern U.S. District Court
    74,Kentucky Western U.S. District Court
    75,Louisiana Eastern U.S. District Court
    76,Louisiana Middle U.S. District Court
    77,Louisiana Western U.S. District Court
    78,Maine U.S. District Court
    79,Maryland U.S. District Court
    80,Massachusetts U.S. District Court
    81,Michigan Eastern U.S. District Court
    82,Michigan Western U.S. District Court
    83,Minnesota U.S. District Court
    84,Mississippi Northern U.S. District Court
    85,Mississippi Southern U.S. District Court
    86,Missouri Eastern U.S. District Court
    87,Missouri Western U.S. District Court
    88,Montana U.S. District Court
    89,Nebraska U.S. District Court
    90,Nevada U.S. District Court
    91,New Hampshire U.S. District Court
    92,New Jersey U.S. District Court
    93,New Mexico U.S. District Court
    94,New York Eastern U.S. District Court
    95,New York Northern U.S. District Court
    96,New York Southern U.S. District Court
    97,New York Western U.S. District Court
    98,North Carolina Eastern U.S. District Court
    99,North Carolina Middle U.S. District Court
    100,North Carolina Western U.S. District Court
    101,North Dakota U.S. District Court
    102,Northern Mariana Islands U.S. District Court
    103,Ohio Northern U.S. District Court
    104,Ohio Southern U.S. District Court
    105,Oklahoma Eastern U.S. District Court
    106,Oklahoma Northern U.S. District Court
    107,Oklahoma Western U.S. District Court
    108,Oregon U.S. District Court
    109,Pennsylvania Eastern U.S. District Court
    110,Pennsylvania Middle U.S. District Court
    111,Pennsylvania Western U.S. District Court
    112,Puerto Rico U.S. District Court
    113,Rhode Island U.S. District Court
    114,South Carolina U.S. District Court
    115,South Dakota U.S. District Court
    116,Tennessee Eastern U.S. District Court
    117,Tennessee Middle U.S. District Court
    118,Tennessee Western U.S. District Court
    119,Texas Eastern U.S. District Court
    120,Texas Northern U.S. District Court
    121,Texas Southern U.S. District Court
    122,Texas Western U.S. District Court
    123,Utah U.S. District Court
    124,Vermont U.S. District Court
    125,Virgin Islands U.S. District Court
    126,Virginia Eastern U.S. District Court
    127,Virginia Western U.S. District Court
    128,Washington Eastern U.S. District Court
    129,Washington Western U.S. District Court
    130,West Virginia Northern U.S. District Court
    131,West Virginia Southern U.S. District Court
    132,Wisconsin Eastern U.S. District Court
    133,Wisconsin Western U.S. District Court
    134,Wyoming U.S. District Court
    150,Louisiana U.S. District Court
    151,Washington U.S. District Court
    152,West Virginia U.S. District Court
    153,Illinois Eastern U.S. District Court
    155,South Carolina Eastern U.S. District Court
    160,South Carolina Western U.S. District Court
    162,Alabama U.S. District Court
    163,U.S. District Court for the Canal Zone
    164,Georgia U.S. District Court
    165,Illinois U.S. District Court
    166,Indiana U.S. District Court
    167,Iowa U.S. District Court
    168,Michigan U.S. District Court
    169,Mississippi U.S. District Court
    170,Missouri U.S. District Court
    171,New Jersey Eastern U.S. District Court (East Jersey U.S. District Court)
    172,New Jersey Western U.S. District Court (West Jersey U.S. District Court)
    173,New York U.S. District Court
    174,North Carolina U.S. District Court
    175,Ohio U.S. District Court
    176,Pennsylvania U.S. District Court
    177,Tennessee U.S. District Court
    178,Texas U.S. District Court
    179,Virginia U.S. District Court
    180,Norfolk U.S. District Court
    181,Wisconsin U.S. District Court
    182,Kentucky U.S. Distrcrict Court
    183,New Jersey U.S. District Court
    184,California U.S. District Court
    185,Florida U.S. District Court
    186,Arkansas U.S. District Court
    187,District of Orleans U.S. District Court
    300,State Supreme Court
    301,State Appellate Court
    302,State Trial Court
    400,Eastern Circuit (of the United States)
    401,Middle Circuit (of the United States)
    402,Southern Circuit (of the United States)
    403,Alabama U.S. Circuit Court for (all) District(s) of Alabama
    404,Arkansas U.S. Circuit Court for (all) District(s) of Arkansas
    405,California U.S. Circuit for (all) District(s) of California
    406,Connecticut U.S. Circuit for the District of Connecticut
    407,Delaware U.S. Circuit for the District of Delaware
    408,Florida U.S. Circuit for (all) District(s) of Florida
    409,Georgia U.S. Circuit for (all) District(s) of Georgia
    410,Illinois U.S. Circuit for (all) District(s) of Illinois
    411,Indiana U.S. Circuit for (all) District(s) of Indiana
    412,Iowa U.S. Circuit for (all) District(s) of Iowa
    413,Kansas U.S. Circuit for the District of Kansas
    414,Kentucky U.S. Circuit for (all) District(s) of Kentucky
    415,Louisiana U.S. Circuit for (all) District(s) of Louisiana
    416,Maine U.S. Circuit for the District of Maine
    417,Maryland U.S. Circuit for the District of Maryland
    418,Massachusetts U.S. Circuit for the District of Massachusetts
    419,Michigan U.S. Circuit for (all) District(s) of Michigan
    420,Minnesota U.S. Circuit for the District of Minnesota
    421,Mississippi U.S. Circuit for (all) District(s) of Mississippi
    422,Missouri U.S. Circuit for (all) District(s) of Missouri
    423,Nevada U.S. Circuit for the District of Nevada
    424,New Hampshire U.S. Circuit for the District of New Hampshire
    425,New Jersey U.S. Circuit for (all) District(s) of New Jersey
    426,New York U.S. Circuit for (all) District(s) of New York
    427,North Carolina U.S. Circuit for (all) District(s) of North Carolina
    428,Ohio U.S. Circuit for (all) District(s) of Ohio
    429,Oregon U.S. Circuit for the District of Oregon
    430,Pennsylvania U.S. Circuit for (all) District(s) of Pennsylvania
    431,Rhode Island U.S. Circuit for the District of Rhode Island
    432,South Carolina U.S. Circuit for the District of South Carolina
    433,Tennessee U.S. Circuit for (all) District(s) of Tennessee
    434,Texas U.S. Circuit for (all) District(s) of Texas
    435,Vermont U.S. Circuit for the District of Vermont
    436,Virginia U.S. Circuit for (all) District(s) of Virginia
    437,West Virginia U.S. Circuit for (all) District(s) of West Virginia
    438,Wisconsin U.S. Circuit for (all) District(s) of Wisconsin
    439,Wyoming U.S. Circuit for the District of Wyoming
    440,Circuit Court of the District of Columbia
    441,Nebraska U.S. Circuit for the District of Nebraska
    442,Colorado U.S. Circuit for the District of Colorado
    443,Washington U.S. Circuit for (all) District(s) of Washington
    444,Idaho U.S. Circuit Court for (all) District(s) of Idaho
    445,Montana U.S. Circuit Court for (all) District(s) of Montana
    446,Utah U.S. Circuit Court for (all) District(s) of Utah
    447,South Dakota U.S. Circuit Court for (all) District(s) of South Dakota
    448,North Dakota U.S. Circuit Court for (all) District(s) of North Dakota
    449,Oklahoma U.S. Circuit Court for (all) District(s) of Oklahoma
    601,Court of Private Land Claims
  `;

    const csvOriginState = `ID,Origin of Case State
    1,Alabama
    2,Alaska
    3,American Samoa
    4,Arizona
    5,Arkansas
    6,California
    7,Colorado
    8,Connecticut
    9,Delaware
    10,District of Columbia
    11,Federated States of Micronesia
    12,Florida
    13,Georgia
    14,Guam
    15,Hawaii
    16,Idaho
    17,Illinois
    18,Indiana
    19,Iowa
    20,Kansas
    21,Kentucky
    22,Louisiana
    23,Maine
    24,Marshall Islands
    25,Maryland
    26,Massachusetts
    27,Michigan
    28,Minnesota
    29,Mississippi
    30,Missouri
    31,Montana
    32,Nebraska
    33,Nevada
    34,New Hampshire
    35,New Jersey
    36,New Mexico
    37,New York
    38,North Carolina
    39,North Dakota
    40,Northern Mariana Islands
    41,Ohio
    42,Oklahoma
    43,Oregon
    44,Palau
    45,Pennsylvania
    46,Puerto Rico
    47,Rhode Island
    48,South Carolina
    49,South Dakota
    50,Tennessee
    51,Texas
    52,Utah
    53,Vermont
    54,Virgin Islands
    55,Virginia
    56,Washington
    57,West Virginia
    58,Wisconsin
    59,Wyoming
    60,United States
    61,Interstate Compact
    62,Philippines
    63,Indian
    64,Dakota
  `;


  const csvSourceCase = `ID,Source of Case
    1,U.S. Court of Customs and Patent Appeals
    2,U.S. Court of International Trade
    3,"U.S. Court of Claims, Court of Federal Claims"
    4,"U.S. Court of Military Appeals, renamed as Court of Appeals for the Armed Forces"
    5,U.S. Court of Military Review
    6,U.S. Court of Veterans Appeals
    7,U.S. Customs Court
    8,"U.S. Court of Appeals, Federal Circuit"
    9,U.S. Tax Court
    10,Temporary Emergency U.S. Court of Appeals
    12,U.S. Court for China
    13,U.S. Consular Courts
    14,U.S. Commerce Court
    15,Territorial Supreme Court
    16,Territorial Appellate Court
    17,Territorial Trial Court
    18,Emergency Court of Appeals
    19,Supreme Court of the District of Columbia
    20,Bankruptcy Court
    21,"U.S. Court of Appeals, First Circuit"
    22,"U.S. Court of Appeals, Second Circuit"
    23,"U.S. Court of Appeals, Third Circuit"
    24,"U.S. Court of Appeals, Fourth Circuit"
    25,"U.S. Court of Appeals, Fifth Circuit"
    26,"U.S. Court of Appeals, Sixth Circuit"
    27,"U.S. Court of Appeals, Seventh Circuit"
    28,"U.S. Court of Appeals, Eighth Circuit"
    29,"U.S. Court of Appeals, Ninth Circuit"
    30,"U.S. Court of Appeals, Tenth Circuit"
    31,"U.S. Court of Appeals, Eleventh Circuit"
    32,"U.S. Court of Appeals, District of Columbia Circuit (includes the Court of Appeals for the District of Columbia but not the District of Columbia Court of Appeals, which has local jurisdiction)"
    41,Alabama Middle U.S. District Court
    42,Alabama Northern U.S. District Court
    43,Alabama Southern U.S. District Court
    44,Alaska U.S. District Court
    45,Arizona U.S. District Court
    46,Arkansas Eastern U.S. District Court
    47,Arkansas Western U.S. District Court
    48,California Central U.S. District Court
    49,California Eastern U.S. District Court
    50,California Northern U.S. District Court
    51,California Southern U.S. District Court
    52,Colorado U.S. District Court
    53,Connecticut U.S. District Court
    54,Delaware U.S. District Court
    55,District Of Columbia U.S. District Court
    56,Florida Middle U.S. District Court
    57,Florida Northern U.S. District Court
    58,Florida Southern U.S. District Court
    59,Georgia Middle U.S. District Court
    60,Georgia Northern U.S. District Court
    61,Georgia Southern U.S. District Court
    62,Guam U.S. District Court
    63,Hawaii U.S. District Court
    64,Idaho U.S. District Court
    65,Illinois Central U.S. District Court
    66,Illinois Northern U.S. District Court
    67,Illinois Southern U.S. District Court
    68,Indiana Northern U.S. District Court
    69,Indiana Southern U.S. District Court
    70,Iowa Northern U.S. District Court
    71,Iowa Southern U.S. District Court
    72,Kansas U.S. District Court
    73,Kentucky Eastern U.S. District Court
    74,Kentucky Western U.S. District Court
    75,Louisiana Eastern U.S. District Court
    76,Louisiana Middle U.S. District Court
    77,Louisiana Western U.S. District Court
    78,Maine U.S. District Court
    79,Maryland U.S. District Court
    80,Massachusetts U.S. District Court
    81,Michigan Eastern U.S. District Court
    82,Michigan Western U.S. District Court
    83,Minnesota U.S. District Court
    84,Mississippi Northern U.S. District Court
    85,Mississippi Southern U.S. District Court
    86,Missouri Eastern U.S. District Court
    87,Missouri Western U.S. District Court
    88,Montana U.S. District Court
    89,Nebraska U.S. District Court
    90,Nevada U.S. District Court
    91,New Hampshire U.S. District Court
    92,New Jersey U.S. District Court
    93,New Mexico U.S. District Court
    94,New York Eastern U.S. District Court
    95,New York Northern U.S. District Court
    96,New York Southern U.S. District Court
    97,New York Western U.S. District Court
    98,North Carolina Eastern U.S. District Court
    99,North Carolina Middle U.S. District Court
    100,North Carolina Western U.S. District Court
    101,North Dakota U.S. District Court
    102,Northern Mariana Islands U.S. District Court
    103,Ohio Northern U.S. District Court
    104,Ohio Southern U.S. District Court
    105,Oklahoma Eastern U.S. District Court
    106,Oklahoma Northern U.S. District Court
    107,Oklahoma Western U.S. District Court
    108,Oregon U.S. District Court
    109,Pennsylvania Eastern U.S. District Court
    110,Pennsylvania Middle U.S. District Court
    111,Pennsylvania Western U.S. District Court
    112,Puerto Rico U.S. District Court
    113,Rhode Island U.S. District Court
    114,South Carolina U.S. District Court
    115,South Dakota U.S. District Court
    116,Tennessee Eastern U.S. District Court
    117,Tennessee Middle U.S. District Court
    118,Tennessee Western U.S. District Court
    119,Texas Eastern U.S. District Court
    120,Texas Northern U.S. District Court
    121,Texas Southern U.S. District Court
    122,Texas Western U.S. District Court
    123,Utah U.S. District Court
    124,Vermont U.S. District Court
    125,Virgin Islands U.S. District Court
    126,Virginia Eastern U.S. District Court
    127,Virginia Western U.S. District Court
    128,Washington Eastern U.S. District Court
    129,Washington Western U.S. District Court
    130,West Virginia Northern U.S. District Court
    131,West Virginia Southern U.S. District Court
    132,Wisconsin Eastern U.S. District Court
    133,Wisconsin Western U.S. District Court
    134,Wyoming U.S. District Court
    150,Louisiana U.S. District Court
    151,Washington U.S. District Court
    152,West Virginia U.S. District Court
    153,Illinois Eastern U.S. District Court
    155,South Carolina Eastern U.S. District Court
    160,South Carolina Western U.S. District Court
    162,Alabama U.S. District Court
    163,U.S. District Court for the Canal Zone
    164,Georgia U.S. District Court
    165,Illinois U.S. District Court
    166,Indiana U.S. District Court
    167,Iowa U.S. District Court
    168,Michigan U.S. District Court
    169,Mississippi U.S. District Court
    170,Missouri U.S. District Court
    171,New Jersey Eastern U.S. District Court (East Jersey U.S. District Court)
    172,New Jersey Western U.S. District Court (West Jersey U.S. District Court)
    173,New York U.S. District Court
    174,North Carolina U.S. District Court
    175,Ohio U.S. District Court
    176,Pennsylvania U.S. District Court
    177,Tennessee U.S. District Court
    178,Texas U.S. District Court
    179,Virginia U.S. District Court
    180,Norfolk U.S. District Court
    181,Wisconsin U.S. District Court
    182,Kentucky U.S. Distrcrict Court
    183,New Jersey U.S. District Court
    184,California U.S. District Court
    185,Florida U.S. District Court
    186,Arkansas U.S. District Court
    187,District of Orleans U.S. District Court
    300,State Supreme Court
    301,State Appellate Court
    302,State Trial Court
    400,Eastern Circuit (of the United States)
    401,Middle Circuit (of the United States)
    402,Southern Circuit (of the United States)
    403,Alabama U.S. Circuit Court for (all) District(s) of Alabama
    404,Arkansas U.S. Circuit Court for (all) District(s) of Arkansas
    405,California U.S. Circuit for (all) District(s) of California
    406,Connecticut U.S. Circuit for the District of Connecticut
    407,Delaware U.S. Circuit for the District of Delaware
    408,Florida U.S. Circuit for (all) District(s) of Florida
    409,Georgia U.S. Circuit for (all) District(s) of Georgia
    410,Illinois U.S. Circuit for (all) District(s) of Illinois
    411,Indiana U.S. Circuit for (all) District(s) of Indiana
    412,Iowa U.S. Circuit for (all) District(s) of Iowa
    413,Kansas U.S. Circuit for the District of Kansas
    414,Kentucky U.S. Circuit for (all) District(s) of Kentucky
    415,Louisiana U.S. Circuit for (all) District(s) of Louisiana
    416,Maine U.S. Circuit for the District of Maine
    417,Maryland U.S. Circuit for the District of Maryland
    418,Massachusetts U.S. Circuit for the District of Massachusetts
    419,Michigan U.S. Circuit for (all) District(s) of Michigan
    420,Minnesota U.S. Circuit for the District of Minnesota
    421,Mississippi U.S. Circuit for (all) District(s) of Mississippi
    422,Missouri U.S. Circuit for (all) District(s) of Missouri
    423,Nevada U.S. Circuit for the District of Nevada
    424,New Hampshire U.S. Circuit for the District of New Hampshire
    425,New Jersey U.S. Circuit for (all) District(s) of New Jersey
    426,New York U.S. Circuit for (all) District(s) of New York
    427,North Carolina U.S. Circuit for (all) District(s) of North Carolina
    428,Ohio U.S. Circuit for (all) District(s) of Ohio
    429,Oregon U.S. Circuit for the District of Oregon
    430,Pennsylvania U.S. Circuit for (all) District(s) of Pennsylvania
    431,Rhode Island U.S. Circuit for the District of Rhode Island
    432,South Carolina U.S. Circuit for the District of South Carolina
    433,Tennessee U.S. Circuit for (all) District(s) of Tennessee
    434,Texas U.S. Circuit for (all) District(s) of Texas
    435,Vermont U.S. Circuit for the District of Vermont
    436,Virginia U.S. Circuit for (all) District(s) of Virginia
    437,West Virginia U.S. Circuit for (all) District(s) of West Virginia
    438,Wisconsin U.S. Circuit for (all) District(s) of Wisconsin
    439,Wyoming U.S. Circuit for the District of Wyoming
    440,Circuit Court of the District of Columbia
    441,Nebraska U.S. Circuit for the District of Nebraska
    442,Colorado U.S. Circuit for the District of Colorado
    443,Washington U.S. Circuit for (all) District(s) of Washington
    444,Idaho U.S. Circuit Court for (all) District(s) of Idaho
    445,Montana U.S. Circuit Court for (all) District(s) of Montana
    446,Utah U.S. Circuit Court for (all) District(s) of Utah
    447,South Dakota U.S. Circuit Court for (all) District(s) of South Dakota
    448,North Dakota U.S. Circuit Court for (all) District(s) of North Dakota
    449,Oklahoma U.S. Circuit Court for (all) District(s) of Oklahoma
    601,Court of Private Land Claims
  `;

  const csvSourceState = `ID,Source of Case State
    1,Alabama
    2,Alaska
    3,American Samoa
    4,Arizona
    5,Arkansas
    6,California
    7,Colorado
    8,Connecticut
    9,Delaware
    10,District of Columbia
    11,Federated States of Micronesia
    12,Florida
    13,Georgia
    14,Guam
    15,Hawaii
    16,Idaho
    17,Illinois
    18,Indiana
    19,Iowa
    20,Kansas
    21,Kentucky
    22,Louisiana
    23,Maine
    24,Marshall Islands
    25,Maryland
    26,Massachusetts
    27,Michigan
    28,Minnesota
    29,Mississippi
    30,Missouri
    31,Montana
    32,Nebraska
    33,Nevada
    34,New Hampshire
    35,New Jersey
    36,New Mexico
    37,New York
    38,North Carolina
    39,North Dakota
    40,Northern Mariana Islands
    41,Ohio
    42,Oklahoma
    43,Oregon
    44,Palau
    45,Pennsylvania
    46,Puerto Rico
    47,Rhode Island
    48,South Carolina
    49,South Dakota
    50,Tennessee
    51,Texas
    52,Utah
    53,Vermont
    54,Virgin Islands
    55,Virginia
    56,Washington
    57,West Virginia
    58,Wisconsin
    59,Wyoming
    60,United States
    61,Interstate Compact
    62,Philippines
    63,Indian
    64,Dakota
  `;


  const csvNaturalCourt=`ID, Natural Court
    101,Jay 1 "October 05, 1789 - May 11, 1790"
    102,Jay 2 "May 12, 1790 - August 05, 1792"
    103,Jay 3 "August 06, 1792 - March 10, 1793"
    104,Jay 4 "March 11, 1793 - August 11, 1795"
    201,Rutledge 1 "August 12, 1795 - December 15, 1795"
    202,No Chief (Post-Rutledge) "February 04, 1796 - March 07, 1796"
    301,Ellsworth 1 "March 08, 1796 - November 08, 1798"
    302,Ellsworth 2 "November 09, 1798 - April 20, 1800"
    303,Ellsworth 3 "April 21, 1800 - February 03, 1801"
    401,Marshall 1 "February 04, 1801 - May 06, 1804"
    402,Marshall 2 "May 07, 1804 - January 19, 1807"
    403,Marshall 3 "January 20, 1807 - May 03, 1807"
    404,Marshall 4 "May 04, 1807 - November 22, 1811"
    405,Marshall 5 "November 23, 1811 - February 02, 1812"
    406,Marshall 6 "February 03, 1812 - August 31, 1823"
    407,Marshall 7 "September 01, 1823 - June 15, 1826"
    408,Marshall 8 "June 16, 1826 - January 10, 1830"
    409,Marshall 9 "January 11, 1830 - January 13, 1835"
    410,Marshall 10 "January 14, 1835 - March 27, 1836"
    501,Taney 1 "March 28, 1836 - May 11, 1836"
    502,Taney 2 "May 12, 1836 - April 30, 1837"
    503,Taney 3 "May 01, 1837 - January 08, 1838"
    504,Taney 4 "January 09, 1838 - January 09, 1842"
    505,Taney 5 "January 10, 1842 - February 26, 1845"
    506,Taney 6 "February 27, 1845 - September 22, 1845"
    507,Taney 7 "September 23, 1845 - August 09, 1846"
    508,Taney 8 "August 10, 1846 - October 09, 1851"
    509,Taney 9 "October 10, 1851 - April 10, 1853"
    510,Taney 10 "April 11, 1853 - January 20, 1858"
    511,Taney 11 "January 21, 1858 - January 26, 1862"
    512,Taney 12 "January 27, 1862 - July 20, 1862"
    513,Taney 13 "July 21, 1862 - December 09, 1862"
    514,Taney 14 "December 10, 1862 - May 19, 1863"
    515,Taney 15 "May 20, 1863 - December 14, 1864"
    601,Chase 1 "December 15, 1864 - March 13, 1870"
    602,Chase 2 "March 14, 1870 - January 08, 1873"
    603,Chase 3 "January 09, 1873 - March 03, 1874"
    701,Waite 1 "March 04, 1874 - December 09, 1877"
    702,Waite 2 "December 10, 1877 - January 04, 1881"
    703,Waite 3 "January 05, 1881 - May 16, 1881"
    704,Waite 4 "May 17, 1881 - January 08, 1882"
    705,Waite 5 "January 09, 1882 - April 02, 1882"
    706,Waite 6 "April 03, 1882 - January 17, 1888"
    707,Waite 7 "January 18, 1888 - October 07, 1888"
    801,Fuller 1 "October 08, 1888 - January 05, 1890"
    802,Fuller 2 "January 06, 1890 - January 04, 1891"
    803,Fuller 3 "January 05, 1891 - October 09, 1892"
    804,Fuller 4 "October 10, 1892 - March 03, 1893"
    805,Fuller 5 "March 04, 1893 - March 11, 1894"
    806,Fuller 6 "March 12, 1894 - January 05, 1896"
    807,Fuller 7 "January 06, 1896 - January 25, 1898"
    808,Fuller 8 "January 26, 1898 - December 07, 1902"
    809,Fuller 9 "December 08, 1902 - March 01, 1903"
    810,Fuller 10 "March 02, 1903 - December 16, 1906"
    811,Fuller 11 "December 17, 1906 - January 02, 1910"
    812,Fuller 12 "January 03, 1910 - October 09, 1910"
    813,No Chief (Post-Fuller) "October 10, 1910 - December 18, 1910"
    901,White 1 "December 19, 1910 - March 17, 1912"
    902,White 2 "March 18, 1912 - October 11, 1914"
    903,White 3 "October 12, 1914 - June 04, 1916"
    904,White 4 "June 05, 1916 - October 08, 1916"
    905,White 5 "October 09, 1916 - July 10, 1921"
    1001,Taft 1 "July 11, 1921 - October 01, 1922"
    1002,Taft 2 "October 02, 1922 - January 01, 1923"
    1003,Taft 3 "January 02, 1923 - February 18, 1923"
    1004,Taft 4 "February 19, 1923 - March 01, 1925"
    1005,Taft 5 "March 02, 1925 - February 23, 1930"
    1101,Hughes 1 "February 24, 1930 - June 01, 1930"
    1102,Hughes 2 "June 02, 1930 - March 13, 1932"
    1103,Hughes 3 "March 14, 1932 - August 18, 1937"
    1104,Hughes 4 "August 19, 1937 - January 30, 1938"
    1105,Hughes 5 "January 31, 1938 - January 29, 1939"
    1106,Hughes 6 "January 30, 1939 - April 16, 1939"
    1107,Hughes 7 "April 17, 1939 - February 04, 1940"
    1108,Hughes 8 "February 05, 1940 - July 02, 1941"
    1201,Stone 1 "July 03, 1941 - February 15, 1943"
    1202,Stone 2 "February 16, 1943 - September 30, 1945"
    1203,Stone 3 "October 01, 1945 - June 23, 1946"
    1301,Vinson 1 "June 24, 1946 - August 23, 1949"
    1302,Vinson 2 "August 24, 1949 - October 11, 1949"
    1303,Vinson 3"October 12, 1949 - October 04, 1953"
    1401,Warren 1 "October 05, 1953 - October 08, 1954"
    1402,Warren 2 "October 09, 1954 - March 27, 1955"
    1403,Warren 3 "March 28, 1955 - October 15, 1956"
    1404,Warren 4 "October 16, 1956 - February 24, 1957"
    1405,Warren 5 "February 25, 1957 - October 13, 1958"
    1406,Warren 6 "October 14, 1958 - March 24, 1962"
    1407,Warren 7 "March 25, 1962 - September 30, 1962"
    1408,Warren 8 "October 01, 1962 - October 03, 1965"
    1409,Warren 9 "October 04, 1965 - October 01, 1967"
    1410,Warren 10 "October 02, 1967 - May 13, 1969"
    1411,Warren 11 "May 14, 1969 - June 22, 1969"
    1501,Burger 1 "June 23, 1969 - June 08, 1970"
    1502,Burger 2 "June 09, 1970 - September 22, 1971"
    1503,Burger 3 "September 23, 1971 - January 06, 1972"
    1504,Burger 4 "January 07, 1972 - November 11, 1975"
    1505,Burger 5 "November 12, 1975 - December 18, 1975"
    1506,Burger 6 "December 19, 1975 - September 24, 1981"
    1507,Burger 7 "September 25, 1981 - September 25, 1986"
    1601,Rehnquist 1 "September 26, 1986 - June 25, 1987"
    1602,Rehnquist 2 "June 26, 1987 - February 17, 1988"
    1603,Rehnquist 3 "February 18, 1988 - September 30, 1990"
    1604,Rehnquist 4 "October 01, 1990 - October 06, 1991"
    1605,Rehnquist 5 "October 07, 1991 - August 09, 1993"
    1606,Rehnquist 6 "August 10, 1993 - August 02, 1994"
    1607,Rehnquist 7 "August 03, 1994 - September 28, 2005"
    1701,Roberts 1 "September 29, 2005 - January 30, 2006"
    1702,Roberts 2 "January 31, 2006 - August 08, 2009"
    1703,Roberts 3 "August 09, 2009 - August 06, 2010"
    1704,Roberts 4 "August 07, 2010 - February 13, 2016"
    1705,Roberts 5 "February 14, 2016 - April 09, 2017"
    1706,Roberts 6 "April 10, 2017 - October 05, 2018"
    1707,Roberts 7 "October 06, 2018 - September 18, 2020"
    1708,Roberts 8 "September 19, 2020 - October 26, 2020"
    1709,Roberts 9"October 27, 2020 - June 29, 2022"
    1710,Roberts 10 "June 30, 2022 -"
  `;

  const csvIssue=`ID, Issue, Note
    10010,involuntary confession,
    10020,habeas corpus,
    10030,plea bargaining: the constitutionality of and/or the circumstances of its exercise,
    10040,retroactivity (of newly announced or newly enacted constitutional or statutory rights),
    10050,search and seizure (other than as pertains to vehicles or Crime Control Act),
    10060,"search and seizure, vehicles",
    10070,"search and seizure, Crime Control Act",
    10080,contempt of court or congress,
    10090,self-incrimination (other than as pertains to Miranda or immunity from prosecution),
    10100,Miranda warnings,
    10110,"self-incrimination, immunity from prosecution",
    10120,right to counsel (cf. indigents appointment of counsel or inadequate representation),
    10130,"cruel and unusual punishment, death penalty (cf. extra legal jury influence, death penalty)",
    10140,"cruel and unusual punishment, non-death penalty (cf. liability, civil rights acts)",
    10150,line-up,
    ,"Note: admissibility into evidence of identification obtained after accused was taken into custody, or after indictment or information",
    10160,"discovery and inspection (in the context of criminal litigation only, otherwise Freedom of Information Act and related federal or state statutes or regulations)",
    10170,double jeopardy,
    10180,ex post facto (state),
    10190,extra-legal jury influences: miscellaneous,
    ,"Note: no question regarding the right to a jury trial or to a speedy trial (these belong in jury trial and speedy trial, respectively); the focus, rather, is on the fairness to the accused when jurors are exposed to the influences specified",
    10200,extra-legal jury influences: prejudicial statements or evidence,
    10210,extra-legal jury influences: contact with jurors outside courtroom,
    10220,extra-legal jury influences: jury instructions (not necessarily in criminal cases),
    10230,extra-legal jury influences: voir dire (not necessarily a criminal case),
    10240,extra-legal jury influences: prison garb or appearance,
    10250,extra-legal jury influences: jurors and death penalty (cf. cruel and unusual punishment),
    10260,extra-legal jury influences: pretrial publicity,
    10270,"confrontation (right to confront accuser, call and cross-examine witnesses)",
    10280,subconstitutional fair procedure: confession of error,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10290,subconstitutional fair procedure: conspiracy (cf. Federal Rules of Criminal Procedure: conspiracy),
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10300,subconstitutional fair procedure: entrapment,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10310,subconstitutional fair procedure: exhaustion of remedies,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10320,subconstitutional fair procedure: fugitive from justice,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10330,"subconstitutional fair procedure: presentation, admissibility, or sufficiency of evidence (not necessarily a criminal case)",
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10340,subconstitutional fair procedure: stay of execution,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10350,subconstitutional fair procedure: timeliness,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10360,subconstitutional fair procedure: miscellaneous,
    ,"Note: nonsubstantive rules and procedures pertaining to the administration of justice that do not rise to the level of a constitutional matter. This is the residual category insofar as criminal procedure is concerned. Note that this issue need not necessarily pertain to a criminal action. If the case involves an indigent, consider indigent categories.",
    10370,Federal Rules of Criminal Procedure,
    ,Note: including application of the Federal Rules of Evidence in criminal proceedings and criminal rules of a court of appeals or state supreme court,
    10380,statutory construction of criminal laws: assault,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10390,statutory construction of criminal laws: bank robbery,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10400,statutory construction of criminal laws: conspiracy (cf. subconstitutional fair procedure: conspiracy),
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10410,statutory construction of criminal laws: escape from custody,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10420,statutory construction of criminal laws: false statements (cf. statutory construction of criminal laws: perjury),
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10430,statutory construction of criminal laws: financial (other than in fraud or internal revenue),
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10440,statutory construction of criminal laws: firearms,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10450,statutory construction of criminal laws: fraud,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10460,statutory construction of criminal laws: gambling,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10470,"statutory construction of criminal laws: Hobbs Act; i.e., 18 USC 1951",
    ,"Note: these codes, by definition exclude the constitutionality of these laws; not 28 USC 2341, the Administrative Orders Review Act",
    10480,statutory construction of criminal laws: immigration (cf. immigration and naturalization),
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10490,statutory construction of criminal laws: internal revenue (cf. Federal Taxation),
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10500,statutory construction of criminal laws: Mann Act and related statutes,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10510,statutory construction of criminal laws: narcotics includes regulation and prohibition of alcohol,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10520,statutory construction of criminal laws: obstruction of justice,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10530,statutory construction of criminal laws: perjury (other than as pertains to statutory construction of criminal laws: false statements),
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10540,"statutory construction of criminal laws: Travel Act, 18 USC 1952",
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10550,statutory construction of criminal laws: war crimes,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10560,statutory construction of criminal laws: sentencing guidelines,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10570,statutory construction of criminal laws: miscellaneous,
    ,"Note: these codes, by definition exclude the constitutionality of these laws",
    10580,"jury trial (right to, as distinct from extra-legal jury influences)",
    10590,speedy trial,
    10600,"miscellaneous criminal procedure (cf. due process, prisoners' rights, comity: criminal procedure)",
    20010,voting,
    20020,"Voting Rights Act of 1965, plus amendments",
    20030,ballot access (of candidates and political parties),
    20040,"desegregation (other than as pertains to school desegregation, employment discrimination, and affirmative action)",
    20050,"desegregation, schools",
    20060,"employment discrimination: on basis of race, age, religion, illegitimacy, national origin, or working conditions.",
    ,"Note: Not alienage, which is employability of aliens, or gender, which is sex discrimination in employment.",
    20070,affirmative action,
    20075,slavery or indenture,
    20080,sit-in demonstrations (protests against racial discrimination in places of public accommodation),
    ,Note: To be sharply distinguished from protests not involving racial discrimination. The latter are coded as protest demonstrations.,
    20090,reapportionment: other than plans governed by the Voting Rights Act,
    20100,debtors' rights,
    20110,deportation (cf. immigration and naturalization),
    20120,employability of aliens (cf. immigration and naturalization),
    20130,sex discrimination (excluding sex discrimination in employment),
    20140,sex discrimination in employment (cf. sex discrimination),
    20150,Indians (other than pertains to state jurisdiction over),
    20160,"Indians, state jurisdiction over",
    20170,juveniles (cf. rights of illegitimates),
    20180,"poverty law, constitutional",
    ,"Note: typically equal protection challenges over welfare benefits, including pension and medical benefits",
    20190,"poverty law, statutory: welfare benefits, typically under some Social Security Act provision.",
    ,Note: Excludes rights of illegitimates and rights of handicapped,
    20200,"illegitimates, rights of (cf. juveniles): typically inheritance and survivor's benefits, and paternity suits",
    20210,"handicapped, rights of: under Rehabilitation, Americans with Disabilities Act, and related statutes",
    20220,"residency requirements: durational, plus discrimination against nonresidents",
    20230,"military: draftee, or person subject to induction",
    ,Note: cf. conscientious objectors and comity: military,
    20240,military: active duty,
    ,Note: cf. conscientious objectors and comity: military,
    20250,military: veteran,
    ,Note: cf. conscientious objectors and comity: military,
    20260,immigration and naturalization: permanent residence,
    ,"Note: cf. statutory construction of criminal laws: immigration, deportation, and employability of aliens",
    20270,immigration and naturalization: citizenship,
    ,"Note: cf. statutory construction of criminal laws: immigration, deportation, and employability of aliens",
    20280,"immigration and naturalization: loss of citizenship, denaturalization",
    ,"Note: cf. statutory construction of criminal laws: immigration, deportation, and employability of aliens",
    20290,immigration and naturalization: access to public education,
    ,"Note: cf. statutory construction of criminal laws: immigration, deportation, and employability of aliens",
    20300,immigration and naturalization: welfare benefits,
    ,"Note: cf. statutory construction of criminal laws: immigration, deportation, and employability of aliens",
    20310,immigration and naturalization: miscellaneous,
    ,"Note: cf. statutory construction of criminal laws: immigration, deportation, and employability of aliens",
    20320,indigents: appointment of counsel (cf. right to counsel),
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20330,indigents: inadequate representation by counsel (cf. right to counsel),
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20340,indigents: payment of fine,
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20350,indigents: costs or filing fees,
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20360,indigents: U.S. Supreme Court docketing fee,
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20370,indigents: transcript,
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20380,indigents: assistance of psychiatrist,
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20390,indigents: miscellaneous,
    ,"Note: procedural protections for indigents because of their indigency. Typically in matters pertaining to criminal justice. cf. poverty law, constitutional and poverty law, statutory.",
    20400,"liability, civil rights acts (cf. liability, governmental and liability, nongovernmental; cruel and unusual punishment, non-death penalty)",
    ,Note: tort actions involving liability that are based on a civil rights act,
    20410,miscellaneous civil rights (cf. comity: civil rights),
    30010,"First Amendment, miscellaneous (cf. comity: First Amendment)",
    30020,"commercial speech, excluding attorneys",
    30030,"libel, defamation: defamation of public officials and public and private persons",
    30040,"libel, privacy: true and false light invasions of privacy",
    30050,legislative investigations: concerning internal security only,
    30060,"federal or state internal security legislation: Smith, Internal Security, and related federal statutes",
    30070,"loyalty oath or non-Communist affidavit (other than bar applicants, government employees, political party, or teacher)",
    30080,"loyalty oath: bar applicants (cf. admission to bar, state or federal or U.S. Supreme Court)",
    30090,loyalty oath: government employees,
    30100,loyalty oath: political party,
    30110,loyalty oath: teachers,
    30120,security risks: denial of benefits or dismissal of employees for reasons other than failure to meet loyalty oath requirements,
    30130,conscientious objectors (cf. military draftee or military active duty) to military service,
    30140,campaign spending (cf. governmental corruption):,
    ,Note: financing electoral costs other than as regulated by the Taft-Hartley Act. Typically involves the Federal Election Campaign Act,
    30150,protest demonstrations (other than as pertains to sit-in demonstrations): demonstrations and other forms of protest based on First Amendment guarantees,
    30160,free exercise of religion,
    30170,establishment of religion (other than as pertains to parochiaid:),
    30180,"parochiaid: government aid to religious schools, or religious requirements in public schools",
    30190,"obscenity, state (cf. comity: privacy): including the regulation of sexually explicit material under the 21st Amendment",
    30200,"obscenity, federal",
    40010,"due process: miscellaneous (cf. loyalty oath), the residual code",
    40020,due process: hearing or notice (other than as pertains to government employees or prisoners' rights),
    ,Note: hearing may be statutorily based,
    40030,"due process: hearing, government employees",
    40040,due process: prisoners' rights and defendants' rights,
    40050,due process: impartial decision maker,
    40060,due process: jurisdiction (jurisdiction over non-resident litigants),
    40070,"due process: takings clause, or other non-constitutional governmental taking of property",
    50010,"privacy (cf. libel, comity: privacy)",
    50020,abortion: including contraceptives,
    50030,right to die,
    50040,Freedom of Information Act and related federal or state statutes or regulations,
    60010,attorneys' and governmental employees' or officials' fees or compensation or licenses,
    60020,"commercial speech, attorneys (cf. commercial speech)",
    60030,"admission to a state or federal bar, disbarment, and attorney discipline (cf. loyalty oath: bar applicants)",
    60040,"admission to, or disbarment from, Bar of the U.S. Supreme Court",
    70010,arbitration (in the context of labor-management or employer-employee relations) (cf. arbitration),
    70020,union antitrust: legality of anticompetitive union activity,
    70030,union or closed shop: includes agency shop litigation,
    70040,Fair Labor Standards Act,
    70050,Occupational Safety and Health Act,
    70060,union-union member dispute (except as pertains to union or closed shop),
    70070,labor-management disputes: bargaining,
    70080,labor-management disputes: employee discharge,
    70090,labor-management disputes: distribution of union literature,
    70100,labor-management disputes: representative election,
    70110,labor-management disputes: antistrike injunction,
    70120,labor-management disputes: jurisdictional dispute,
    70130,labor-management disputes: right to organize,
    70140,labor-management disputes: picketing,
    70150,labor-management disputes: secondary activity,
    70160,labor-management disputes: no-strike clause,
    70170,labor-management disputes: union representatives,
    70180,labor-management disputes: union trust funds (cf. ERISA),
    70190,labor-management disputes: working conditions,
    70200,labor-management disputes: miscellaneous dispute,
    70210,miscellaneous union,
    80010,antitrust (except in the context of mergers and union antitrust),
    80020,mergers,
    80030,bankruptcy (except in the context of priority of federal fiscal claims),
    80040,sufficiency of evidence: typically in the context of a jury's determination of compensation for injury or death,
    80050,election of remedies: legal remedies available to injured persons or things,
    80060,"liability, governmental: tort or contract actions by or against government or governmental officials other than defense of criminal actions brought under a civil rights action.",
    80070,"liability, other than as in sufficiency of evidence, election of remedies, punitive damages",
    80080,"liability, punitive damages",
    80090,Employee Retirement Income Security Act (cf. union trust funds),
    80100,state or local government tax,
    ,Note: those challenged on the basis of the supremacy clause and the 21st Amendment may also locate in national supremacy: intergovernmental tax immunity or national supremacy: state tax,
    80105,state and territorial land claims,
    ,Note: those challenged on the basis of the supremacy clause and the 21st Amendment may also locate in national supremacy: intergovernmental tax immunity or national supremacy: state tax,
    80110,"state or local government regulation, especially of business (cf. federal pre-emption of state court jurisdiction, federal pre-emption of state legislation or regulation)",
    80120,federal or state regulation of securities,
    80130,"natural resources - environmental protection (cf. national supremacy: natural resources, national supremacy: pollution)",
    80140,"corruption, governmental or governmental regulation of other than as in campaign spending",
    80150,"zoning: constitutionality of such ordinances, or restrictions on owners' or lessors' use of real property",
    80160,arbitration (other than as pertains to labor-management or employer-employee relations (cf. union arbitration),
    80170,"federal or state consumer protection: typically under the Truth in Lending; Food, Drug and Cosmetic; and Consumer Protection Credit Acts",
    80180,patents and copyrights: patent,
    80190,patents and copyrights: copyright,
    80200,patents and copyrights: trademark,
    80210,patents and copyrights: patentability of computer processes,
    80220,federal or state regulation of transportation regulation: railroad,
    80230,federal and some few state regulations of transportation regulation: boat,
    80240,"federal and some few state regulation of transportation regulation:truck, or motor carrier",
    80250,federal and some few state regulation of transportation regulation: pipeline (cf. federal public utilities regulation: gas pipeline),
    80260,federal and some few state regulation of transportation regulation: airline,
    80270,federal and some few state regulation of public utilities regulation: electric power,
    80280,federal and some few state regulation of public utilities regulation: nuclear power,
    80290,federal and some few state regulation of public utilities regulation: oil producer,
    80300,federal and some few state regulation of public utilities regulation: gas producer,
    80310,federal and some few state regulation of public utilities regulation: gas pipeline (cf. federal transportation regulation: pipeline),
    80320,federal and some few state regulation of public utilities regulation: radio and television (cf. cable television),
    80330,federal and some few state regulation of public utilities regulation: cable television (cf. radio and television),
    80340,federal and some few state regulations of public utilities regulation: telephone or telegraph company,
    80350,miscellaneous economic regulation,
    90010,comity: civil rights,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90020,comity: criminal procedure,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90030,comity: First Amendment,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90040,comity: habeas corpus,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90050,comity: military,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90060,comity: obscenity,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90070,comity: privacy,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90080,comity: miscellaneous,
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90090,"comity primarily removal cases, civil procedure (cf. comity, criminal and First Amendment); deference to foreign judicial tribunals",
    ,"Note: propriety of federal court deference to ongoing state judicial or state or federal quasi-judicial proceedings, the abstention doctrine, exhaustion of state provided remedies",
    90100,assessment of costs or damages: as part of a court order,
    90110,"Federal Rules of Civil Procedure including Supreme Court Rules, application of the Federal Rules of Evidence, Federal Rules of Appellate Procedure in civil litigation, Circuit Court Rules, and state rules and admiralty rules",
    90120,judicial review of administrative agency's or administrative official's actions and procedures,
    90130,mootness (cf. standing to sue: live dispute),
    90140,venue,
    90150,no merits: writ improvidently granted,
    ,Note: use only if the syllabus or the summary holding specifies one of the following bases.,
    90160,"no merits: dismissed or affirmed for want of a substantial or properly presented federal question, or a nonsuit",
    ,Note: use only if the syllabus or the summary holding specifies one of the following bases.,
    90170,no merits: dismissed or affirmed for want of jurisdiction (cf. judicial administration: Supreme Court jurisdiction or authority on appeal from federal district courts or courts of appeals),
    ,Note: use only if the syllabus or the summary holding specifies one of the following bases.,
    90180,no merits: adequate non-federal grounds for decision,
    ,Note: use only if the syllabus or the summary holding specifies one of the following bases.,
    90190,no merits: remand to determine basis of state or federal court decision (cf. judicial administration: state law),
    ,Note: use only if the syllabus or the summary holding specifies one of the following bases.,
    90200,no merits: miscellaneous,
    ,Note: use only if the syllabus or the summary holding specifies one of the following bases.,
    90210,standing to sue: adversary parties,
    90220,standing to sue: direct injury,
    90230,standing to sue: legal injury,
    90240,standing to sue: personal injury,
    90250,standing to sue: justiciable question,
    90260,standing to sue: live dispute,
    90270,standing to sue: parens patriae standing,
    90280,standing to sue: statutory standing,
    90290,standing to sue: private or implied cause of action,
    90300,standing to sue: taxpayer's suit,
    90310,standing to sue: miscellaneous,
    90320,judicial administration: jurisdiction or authority of federal district courts or territorial courts,
    ,Note: jurisdiction of the federal courts or of the Supreme Court (cf. no merits: dismissed for want of jurisdiction),
    90330,judicial administration: jurisdiction or authority of federal courts of appeals,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90340,"judicial administration: Supreme Court jurisdiction or authority on appeal or writ of error, from federal district courts or courts of appeals (cf. 753)",
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90350,"judicial administration: Supreme Court jurisdiction or authority on appeal or writ of error, from highest state court",
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90360,judicial administration: jurisdiction or authority of the Court of Claims,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90370,judicial administration: Supreme Court's original jurisdiction,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90380,judicial administration: review of non-final order,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90390,judicial administration: change in state law (cf. no merits: remand to determine basis of state court decision),
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90400,judicial administration: federal question (cf. no merits: dismissed for want of a substantial or properly presented federal question),
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90410,judicial administration: ancillary or pendent jurisdiction,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90420,"judicial administration: extraordinary relief (e.g., mandamus, injunction)",
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90430,judicial administration: certification (cf. objection to reason for denial of certiorari or appeal),
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90440,"judicial administration: resolution of circuit conflict, or conflict between or among other courts",
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90450,judicial administration: objection to reason for denial of certiorari or appeal,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90460,judicial administration: collateral estoppel or res judicata,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90470,judicial administration: interpleader,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90480,judicial administration: untimely filing,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90490,judicial administration: Act of State doctrine,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90500,judicial administration: miscellaneous,
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90510,"Supreme Court's certiorari, writ of error, or appeals jurisdiction",
    ,Note: jurisdiction of the federal courts or of the Supreme Court,
    90520,"miscellaneous judicial power, especially diversity jurisdiction",
    100010,federal-state ownership dispute (cf. Submerged Lands Act),
    100020,federal pre-emption of state court jurisdiction,
    ,Note: almost always found in the context of labor union activity. Does not involve constitutional interpretation. Rests rather on a primary jurisdiction rationale,
    100030,federal pre-emption of state legislation or regulation. cf. state regulation of business. rarely involves union activity. Does not involve constitutional interpretation unless the Court says it does.,
    100040,Submerged Lands Act (cf. federal-state ownership dispute),
    100050,national supremacy: commodities,
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100060,national supremacy: intergovernmental tax immunity,
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100070,"national supremacy: marital and family relationships and property, including obligation of child support",
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100080,national supremacy: natural resources (cf. natural resources - environmental protection),
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100090,"national supremacy: pollution, air or water (cf. natural resources - environmental protection)",
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100100,national supremacy: public utilities (cf. federal public utilities regulation),
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100110,national supremacy: state tax (cf. state tax),
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100120,national supremacy: miscellaneous,
    ,"Note: in the context of federal-state conflicts involving the general welfare, supremacy, or interstate commerce clauses, the 11th or 21st Amendments, or the enforcement clause of the 14th Amendment. Distinguishable from federal pre-emption because of a constitutional basis for decision.",
    100130,miscellaneous federalism,
    ,"Note: cf. Indians, state jurisdiction over; comity; adequate non-federal grounds for decision; remand to determine basis of state court decision; judicial administration: Supreme Court jurisdiction or authority on appeal from highest state court, change in state law, or ancillary or pendent jurisdiction",
    110010,boundary dispute between states,
    110020,non-real property dispute between states,
    110030,miscellaneous interstate relations conflict,
    110033,incorporation of foreign territories,
    ,"Note: prior to 2014 Release 01, id = 10595",
    120010,"federal taxation, typically under provisions of the Internal Revenue Code",
    ,Note: except as pertains to federal taxation of gifts or priority of federal fiscal claims,
    120020,"federal taxation of gifts, personal, business, or professional expenses",
    120030,priority of federal fiscal claims: over those of the states or private entities,
    120040,miscellaneous federal taxation (cf. national supremacy: state tax),
    130010,legislative veto,
    130015,executive authority vis-a-vis congress or the states,
    ,"Note: prior to 2014 Release 01, id = 100035",
    130020,miscellaneous,
    140010,real property,
    140020,personal property,
    140030,contracts,
    140040,evidence,
    140050,civil procedure,
    140060,torts,
    140070,wills and trusts,
    140080,commercial transactions,
  `;

  const csvIssueArea = `ID, Issue Area
    1,Criminal Procedure
    2,Civil Rights
    3,First Amendment
    4,Due Process
    5,Privacy
    6,Attorneys
    7,Unions
    8,Economic Activity
    9,Judicial Power
    10,Federalism
    11,Interstate Relations
    12,Federal Taxation
    13,Miscellaneous
    14,Private Action
  `;

  const csvDecisionDirection = `ID, Decision Direction
    1,conservative
    2,liberal
    3,unspecifiable
  `;

  const csvDecisionDirectionDissent = `ID, Decision Direction Dissent
    0,dissent in opposite direction
    1,majority and dissent in same direction
  `;


  const csvAuthorityforDecision1 = `ID, Authority for Decision 1
    1,judicial review (national level)
    2,judicial review (state level)
    3,Supreme Court supervision of lower federal or state courts or original jurisdiction
    4,statutory construction
    5,interpretation of administrative regulation or rule, or executive order
    6,diversity jurisdiction
    7,federal common law
  `;

  const csvAuthorityforDecision2 = `ID, Authority for Decision 2
    1,judicial review (national level)
    2,judicial review (state level)
    3,Supreme Court supervision of lower federal or state courts or original jurisdiction
    4,statutory construction
    5,interpretation of administrative regulation or rule, or executive order
    6,diversity jurisdiction
    7,federal common law
  `;

  const csvDecisionType = `ID, Decision Type
    1,opinion of the court (orally argued)
    2,per curiam (no oral argument)
    4,decrees
    5,equally divided vote
    6,per curiam (orally argued)
    7,judgment of the Court (orally argued)
    8,seriatim
  `;

  const csvMajorityOpinionWriter = `ID, Majority Opinion Writer
    1,JJay,"Jay, John ( 10/19/1789 - 06/29/1795 )"
    2,JRutledge1,"Rutledge, John ( 02/15/1790 - 03/05/1791 )"
    3,WCushing,"Cushing, William ( 02/02/1790 - 09/13/1810 )"
    4,JWilson,"Wilson, James ( 10/05/1789 - 08/21/1798 )"
    5,JBlair,"Blair, John ( 02/02/1790 - 01/27/1796 )"
    6,JIredell,"Iredell, James ( 05/12/1790 - 10/20/1799 )"
    7,TJohnson,"Johnson, Thomas ( 09/19/1791 - 02/22/1793 )"
    8,WPaterson,"Paterson, William ( 03/11/1793 - 09/09/1806 )"
    9,JRutledge2,"Rutledge, John ( 08/12/1795 - 12/15/1795 )"
    10,SChase,"Chase, Samuel ( 02/04/1796 - 06/19/1811 )"
    11,OEllsworth,"Ellsworth, Oliver ( 03/08/1796 - 12/15/1800 )"
    12,BWashington,"Washington, Bushrod ( 11/09/1798 - 11/26/1829 )"
    13,AMoore,"Moore, Alfred ( 04/21/1800 - 01/26/1804 )"
    14,JMarshall,"Marshall, John ( 02/04/1801 - 07/06/1835 )"
    15,WJohnson,"Johnson, William ( 05/07/1804 - 08/04/1834 )"
    16,HBLivingston,"Livingston, Henry ( 01/20/1807 - 03/18/1823 )"
    17,TTodd,"Todd, Thomas ( 05/04/1807 - 02/07/1826 )"
    18,GDuvall,"Duvall, Gabriel ( 11/23/1811 - 01/14/1835 )"
    19,JStory,"Story, Joseph ( 02/03/1812 - 09/10/1845 )"
    20,SThompson,"Thompson, Smith ( 09/01/1823 - 12/18/1843 )"
    21,RTrimble,"Trimble, Robert ( 06/16/1826 - 08/25/1828 )"
    22,JMcLean,"McLean, John ( 01/11/1830 - 04/04/1861 )"
    23,HBaldwin,"Baldwin, Henry ( 01/18/1830 - 04/21/1844 )"
    24,JMWayne,"Wayne, James ( 01/14/1835 - 07/05/1867 )"
    25,RBTaney,"Taney, Roger ( 03/28/1836 - 10/12/1864 )"
    26,PPBarbour,"Barbour, Philip ( 05/12/1836 - 02/25/1841 )"
    27,JCatron,"Catron, John ( 05/01/1837 - 05/30/1865 )"
    28,JMcKinley,"McKinley, John ( 04/22/1837 - 07/19/1852 )"
    29,PVDaniel,"Daniel, Peter ( 01/10/1842 - 05/31/1860 )"
    30,SNelson,"Nelson, Samuel ( 02/27/1845 - 11/28/1872 )"
    31,LWoodbury,"Woodbury, Levi ( 09/23/1845 - 09/04/1851 )"
    32,RCGrier,"Grier, Robert ( 08/10/1846 - 01/31/1870 )"
    33,BRCurtis,"Curtis, Benjamin ( 10/10/1851 - 09/30/1857 )"
    34,JACampbell,"Campbell, John ( 04/11/1853 - 04/30/1861 )"
    35,NClifford,"Clifford, Nathan ( 01/21/1858 - 07/25/1881 )"
    36,NHSwayne,"Swayne, Noah ( 01/27/1862 - 01/24/1881 )"
    37,SFMiller,"Miller, Samuel ( 07/21/1862 - 10/13/1890 )"
    38,DDavis,"Davis, David ( 10/17/1862 - 03/04/1877 )"
    39,SJField,"Field, Stephen ( 05/20/1863 - 12/01/1897 )"
    40,SPChase,"Chase, Salmon ( 12/15/1864 - 05/07/1873 )"
    41,WStrong,"Strong, William ( 03/14/1870 - 12/14/1880 )"
    42,JPBradley,"Bradley, Joseph ( 03/21/1870 - 01/22/1892 )"
    43,WHunt,"Hunt, Ward ( 01/09/1873 - 01/27/1882 )"
    44,MRWaite,"Waite, Morrison ( 03/04/1874 - 04/03/1888 )"
    45,JHarlan1,"Harlan, John ( 12/10/1877 - 10/14/1911 )"
    46,WBWoods,"Woods, William ( 01/05/1881 - 05/14/1887 )"
    47,SMatthews,"Matthews, Stanley ( 05/17/1881 - 03/22/1889 )"
    48,HGray,"Gray, Horace ( 01/09/1882 - 09/15/1902 )"
    49,SBlatchford,"Blatchford, Samuel ( 04/03/1882 - 07/07/1893 )"
    50,LQLamar,"Lamar, Lucius ( 01/18/1888 - 01/23/1893 )"
    51,MWFuller,"Fuller, Melville ( 10/08/1888 - 07/04/1910 )"
    52,DJBrewer,"Brewer, David ( 01/06/1890 - 03/28/1910 )"
    53,HBBrown,"Brown, Henry ( 01/05/1891 - 05/28/1906 )"
    54,GShiras,"Shiras, George ( 10/10/1892 - 02/23/1903 )"
    55,HEJackson,"Jackson, Howell ( 03/04/1893 - 08/08/1895 )"
    56,EDEWhite,"White, Edward ( 03/12/1894 - 05/19/1921 )"
    57,RWPeckham,"Peckham, Rufus ( 01/06/1896 - 10/24/1909 )"
    58,JMcKenna,"McKenna, Joseph ( 01/26/1898 - 01/05/1925 )"
    59,OWHolmes,"Holmes, Oliver ( 08/11/1902 - 01/12/1932 )"
    60,WRDay,"Day, William ( 03/02/1903 - 11/13/1922 )"
    61,WHMoody,"Moody, William ( 12/17/1906 - 11/20/1910 )"
    62,HHLurton,"Lurton, Horace ( 01/03/1910 - 07/12/1914 )"
    63,CEHughes1,"Hughes, Charles ( 10/10/1910 - 06/10/1916 )"
    64,WVanDevanter,"Van Devanter, Willis ( 01/03/1911 - 06/02/1937 )"
    65,JRLamar,"Lamar, Joseph ( 01/03/1911 - 01/02/1916 )"
    66,MPitney,"Pitney, Mahlon ( 03/18/1912 - 12/31/1922 )"
    67,JCMcReynolds,"McReynolds, James ( 10/12/1914 - 01/31/1941 )"
    68,LDBrandeis,"Brandeis, Louis ( 06/05/1916 - 02/13/1939 )"
    69,JHClarke,"Clarke, John ( 10/09/1916 - 09/18/1922 )"
    70,WHTaft,"Taft, William ( 07/11/1921 - 02/03/1930 )"
    71,GSutherland,"Sutherland, George ( 10/02/1922 - 01/17/1938 )"
    72,PButler,"Butler, Pierce ( 01/02/1923 - 11/16/1939 )"
    73,ETSanford,"Sanford, Edward ( 02/19/1923 - 03/08/1930 )"
    74,HFStone,"Stone, Harlan ( 03/02/1925 - 04/22/1946 )"
    75,CEHughes2,"Hughes, Charles ( 02/24/1930 - 07/01/1941 )"
    76,OJRoberts,"Roberts, Owen ( 06/02/1930 - 07/31/1945 )"
    77,BNCardozo,"Cardozo, Benjamin ( 03/14/1932 - 07/09/1938 )"
    78,HLBlack,"Black, Hugo ( 08/19/1937 - 09/17/1971 )"
    79,SFReed,"Reed, Stanley ( 01/31/1938 - 02/25/1957 )"
    80,FFrankfurter,"Frankfurter, Felix ( 01/30/1939 - 08/28/1962 )"
    81,WODouglas,"Douglas, William ( 04/17/1939 - 11/12/1975 )"
    82,FMurphy,"Murphy, Francis ( 02/05/1940 - 07/19/1949 )"
    83,JFByrnes,"Byrnes, James ( 07/08/1941 - 10/03/1942 )"
    84,RHJackson,"Jackson, Robert ( 07/11/1941 - 10/09/1954 )"
    85,WBRutledge,"Rutledge, Wiley ( 02/15/1943 - 09/10/1949 )"
    86,HHBurton,"Burton, Harold ( 10/01/1945 - 10/13/1958 )"
    87,FMVinson,"Vinson, Fred ( 06/24/1946 - 09/08/1953 )"
    88,TCClark,"Clark, Tom ( 08/24/1949 - 06/12/1967 )"
    89,SMinton,"Minton, Sherman ( 10/12/1949 - 10/15/1956 )"
    90,EWarren,"Warren, Earl ( 10/05/1953 - 06/23/1969 )"
    91,JHarlan2,"Harlan, John ( 03/28/1955 - 09/23/1971 )"
    92,WJBrennan,"Brennan, William ( 10/16/1956 - 07/20/1990 )"
    93,CEWhittaker,"Whittaker, Charles ( 03/25/1957 - 03/31/1962 )"
    94,PStewart,"Stewart, Potter ( 10/14/1958 - 07/03/1981 )"
    95,BRWhite,"White, Byron ( 04/16/1962 - 06/28/1993 )"
    96,AJGoldberg,"Goldberg, Arthur ( 10/01/1962 - 07/25/1965 )"
    97,AFortas,"Fortas, Abe ( 10/04/1965 - 05/14/1969 )"
    98,TMarshall,"Marshall, Thurgood ( 10/02/1967 - 10/01/1991 )"
    99,WEBurger,"Burger, Warren ( 06/23/1969 - 09/26/1986 )"
    100,HABlackmun,"Blackmun, Harry ( 06/09/1970 - 08/03/1994 )"
    101,LFPowell,"Powell, Lewis ( 01/07/1972 - 06/26/1987 )"
    102,WHRehnquist,"Rehnquist, William ( 01/07/1972 - 09/03/2005 )"
    103,JPStevens,"Stevens, John ( 12/19/1975 - 06/29/2010 )"
    104,SDOConnor,"O'Connor, Sandra ( 09/25/1981 - 01/31/2006 )"
    105,AScalia,"Scalia, Antonin ( 09/26/1986 - 02/13/2016 )"
    106,AMKennedy,"Kennedy, Anthony ( 02/18/1988 - 07/31/2018 )"
    107,DHSouter,"Souter, David ( 10/09/1990 - 06/29/2009 )"
    108,CThomas,"Thomas, Clarence ( 10/23/1991 - 00/00/0000 )"
    109,RBGinsburg,"Ginsburg, Ruth ( 08/10/1993 - 09/18/2020 )"
    110,SGBreyer,"Breyer, Stephen ( 08/03/1994 - 06/30/2022 )"
    111,JGRoberts,"Roberts, John ( 09/29/2005 - 00/00/0000 )"
    112,SAAlito,"Alito, Samuel ( 01/31/2006 - 00/00/0000 )"
    113,SSotomayor,"Sotomayor, Sonia ( 08/08/2009 - 00/00/0000 )"
    114,EKagan,"Kagan, Elena ( 08/07/2010 - 00/00/0000 )"
    115,NMGorsuch,"Gorsuch, Neil ( 04/08/2017 - 00/00/0000 )"
    116,BMKavanaugh,"Kavanaugh, Brett ( 10/06/2018 - 00/00/0000 )"
    117,ACBarrett,"Barrett, Amy ( 10/27/2020 - 00/00/0000 )"
    118,KBJackson,"Jackson, Ketanji ( 06/30/2022 - 00/00/0000 )"
  `;
      
  const csvMajorityOpinionAssigner = `ID, Majority Opinion Assigner
    1,JJay,"Jay, John ( 10/19/1789 - 06/29/1795 )"
    2,JRutledge1,"Rutledge, John ( 02/15/1790 - 03/05/1791 )"
    3,WCushing,"Cushing, William ( 02/02/1790 - 09/13/1810 )"
    4,JWilson,"Wilson, James ( 10/05/1789 - 08/21/1798 )"
    5,JBlair,"Blair, John ( 02/02/1790 - 01/27/1796 )"
    6,JIredell,"Iredell, James ( 05/12/1790 - 10/20/1799 )"
    7,TJohnson,"Johnson, Thomas ( 09/19/1791 - 02/22/1793 )"
    8,WPaterson,"Paterson, William ( 03/11/1793 - 09/09/1806 )"
    9,JRutledge2,"Rutledge, John ( 08/12/1795 - 12/15/1795 )"
    10,SChase,"Chase, Samuel ( 02/04/1796 - 06/19/1811 )"
    11,OEllsworth,"Ellsworth, Oliver ( 03/08/1796 - 12/15/1800 )"
    12,BWashington,"Washington, Bushrod ( 11/09/1798 - 11/26/1829 )"
    13,AMoore,"Moore, Alfred ( 04/21/1800 - 01/26/1804 )"
    14,JMarshall,"Marshall, John ( 02/04/1801 - 07/06/1835 )"
    15,WJohnson,"Johnson, William ( 05/07/1804 - 08/04/1834 )"
    16,HBLivingston,"Livingston, Henry ( 01/20/1807 - 03/18/1823 )"
    17,TTodd,"Todd, Thomas ( 05/04/1807 - 02/07/1826 )"
    18,GDuvall,"Duvall, Gabriel ( 11/23/1811 - 01/14/1835 )"
    19,JStory,"Story, Joseph ( 02/03/1812 - 09/10/1845 )"
    20,SThompson,"Thompson, Smith ( 09/01/1823 - 12/18/1843 )"
    21,RTrimble,"Trimble, Robert ( 06/16/1826 - 08/25/1828 )"
    22,JMcLean,"McLean, John ( 01/11/1830 - 04/04/1861 )"
    23,HBaldwin,"Baldwin, Henry ( 01/18/1830 - 04/21/1844 )"
    24,JMWayne,"Wayne, James ( 01/14/1835 - 07/05/1867 )"
    25,RBTaney,"Taney, Roger ( 03/28/1836 - 10/12/1864 )"
    26,PPBarbour,"Barbour, Philip ( 05/12/1836 - 02/25/1841 )"
    27,JCatron,"Catron, John ( 05/01/1837 - 05/30/1865 )"
    28,JMcKinley,"McKinley, John ( 04/22/1837 - 07/19/1852 )"
    29,PVDaniel,"Daniel, Peter ( 01/10/1842 - 05/31/1860 )"
    30,SNelson,"Nelson, Samuel ( 02/27/1845 - 11/28/1872 )"
    31,LWoodbury,"Woodbury, Levi ( 09/23/1845 - 09/04/1851 )"
    32,RCGrier,"Grier, Robert ( 08/10/1846 - 01/31/1870 )"
    33,BRCurtis,"Curtis, Benjamin ( 10/10/1851 - 09/30/1857 )"
    34,JACampbell,"Campbell, John ( 04/11/1853 - 04/30/1861 )"
    35,NClifford,"Clifford, Nathan ( 01/21/1858 - 07/25/1881 )"
    36,NHSwayne,"Swayne, Noah ( 01/27/1862 - 01/24/1881 )"
    37,SFMiller,"Miller, Samuel ( 07/21/1862 - 10/13/1890 )"
    38,DDavis,"Davis, David ( 10/17/1862 - 03/04/1877 )"
    39,SJField,"Field, Stephen ( 05/20/1863 - 12/01/1897 )"
    40,SPChase,"Chase, Salmon ( 12/15/1864 - 05/07/1873 )"
    41,WStrong,"Strong, William ( 03/14/1870 - 12/14/1880 )"
    42,JPBradley,"Bradley, Joseph ( 03/21/1870 - 01/22/1892 )"
    43,WHunt,"Hunt, Ward ( 01/09/1873 - 01/27/1882 )"
    44,MRWaite,"Waite, Morrison ( 03/04/1874 - 04/03/1888 )"
    45,JHarlan1,"Harlan, John ( 12/10/1877 - 10/14/1911 )"
    46,WBWoods,"Woods, William ( 01/05/1881 - 05/14/1887 )"
    47,SMatthews,"Matthews, Stanley ( 05/17/1881 - 03/22/1889 )"
    48,HGray,"Gray, Horace ( 01/09/1882 - 09/15/1902 )"
    49,SBlatchford,"Blatchford, Samuel ( 04/03/1882 - 07/07/1893 )"
    50,LQLamar,"Lamar, Lucius ( 01/18/1888 - 01/23/1893 )"
    51,MWFuller,"Fuller, Melville ( 10/08/1888 - 07/04/1910 )"
    52,DJBrewer,"Brewer, David ( 01/06/1890 - 03/28/1910 )"
    53,HBBrown,"Brown, Henry ( 01/05/1891 - 05/28/1906 )"
    54,GShiras,"Shiras, George ( 10/10/1892 - 02/23/1903 )"
    55,HEJackson,"Jackson, Howell ( 03/04/1893 - 08/08/1895 )"
    56,EDEWhite,"White, Edward ( 03/12/1894 - 05/19/1921 )"
    57,RWPeckham,"Peckham, Rufus ( 01/06/1896 - 10/24/1909 )"
    58,JMcKenna,"McKenna, Joseph ( 01/26/1898 - 01/05/1925 )"
    59,OWHolmes,"Holmes, Oliver ( 08/11/1902 - 01/12/1932 )"
    60,WRDay,"Day, William ( 03/02/1903 - 11/13/1922 )"
    61,WHMoody,"Moody, William ( 12/17/1906 - 11/20/1910 )"
    62,HHLurton,"Lurton, Horace ( 01/03/1910 - 07/12/1914 )"
    63,CEHughes1,"Hughes, Charles ( 10/10/1910 - 06/10/1916 )"
    64,WVanDevanter,"Van Devanter, Willis ( 01/03/1911 - 06/02/1937 )"
    65,JRLamar,"Lamar, Joseph ( 01/03/1911 - 01/02/1916 )"
    66,MPitney,"Pitney, Mahlon ( 03/18/1912 - 12/31/1922 )"
    67,JCMcReynolds,"McReynolds, James ( 10/12/1914 - 01/31/1941 )"
    68,LDBrandeis,"Brandeis, Louis ( 06/05/1916 - 02/13/1939 )"
    69,JHClarke,"Clarke, John ( 10/09/1916 - 09/18/1922 )"
    70,WHTaft,"Taft, William ( 07/11/1921 - 02/03/1930 )"
    71,GSutherland,"Sutherland, George ( 10/02/1922 - 01/17/1938 )"
    72,PButler,"Butler, Pierce ( 01/02/1923 - 11/16/1939 )"
    73,ETSanford,"Sanford, Edward ( 02/19/1923 - 03/08/1930 )"
    74,HFStone,"Stone, Harlan ( 03/02/1925 - 04/22/1946 )"
    75,CEHughes2,"Hughes, Charles ( 02/24/1930 - 07/01/1941 )"
    76,OJRoberts,"Roberts, Owen ( 06/02/1930 - 07/31/1945 )"
    77,BNCardozo,"Cardozo, Benjamin ( 03/14/1932 - 07/09/1938 )"
    78,HLBlack,"Black, Hugo ( 08/19/1937 - 09/17/1971 )"
    79,SFReed,"Reed, Stanley ( 01/31/1938 - 02/25/1957 )"
    80,FFrankfurter,"Frankfurter, Felix ( 01/30/1939 - 08/28/1962 )"
    81,WODouglas,"Douglas, William ( 04/17/1939 - 11/12/1975 )"
    82,FMurphy,"Murphy, Francis ( 02/05/1940 - 07/19/1949 )"
    83,JFByrnes,"Byrnes, James ( 07/08/1941 - 10/03/1942 )"
    84,RHJackson,"Jackson, Robert ( 07/11/1941 - 10/09/1954 )"
    85,WBRutledge,"Rutledge, Wiley ( 02/15/1943 - 09/10/1949 )"
    86,HHBurton,"Burton, Harold ( 10/01/1945 - 10/13/1958 )"
    87,FMVinson,"Vinson, Fred ( 06/24/1946 - 09/08/1953 )"
    88,TCClark,"Clark, Tom ( 08/24/1949 - 06/12/1967 )"
    89,SMinton,"Minton, Sherman ( 10/12/1949 - 10/15/1956 )"
    90,EWarren,"Warren, Earl ( 10/05/1953 - 06/23/1969 )"
    91,JHarlan2,"Harlan, John ( 03/28/1955 - 09/23/1971 )"
    92,WJBrennan,"Brennan, William ( 10/16/1956 - 07/20/1990 )"
    93,CEWhittaker,"Whittaker, Charles ( 03/25/1957 - 03/31/1962 )"
    94,PStewart,"Stewart, Potter ( 10/14/1958 - 07/03/1981 )"
    95,BRWhite,"White, Byron ( 04/16/1962 - 06/28/1993 )"
    96,AJGoldberg,"Goldberg, Arthur ( 10/01/1962 - 07/25/1965 )"
    97,AFortas,"Fortas, Abe ( 10/04/1965 - 05/14/1969 )"
    98,TMarshall,"Marshall, Thurgood ( 10/02/1967 - 10/01/1991 )"
    99,WEBurger,"Burger, Warren ( 06/23/1969 - 09/26/1986 )"
    100,HABlackmun,"Blackmun, Harry ( 06/09/1970 - 08/03/1994 )"
    101,LFPowell,"Powell, Lewis ( 01/07/1972 - 06/26/1987 )"
    102,WHRehnquist,"Rehnquist, William ( 01/07/1972 - 09/03/2005 )"
    103,JPStevens,"Stevens, John ( 12/19/1975 - 06/29/2010 )"
    104,SDOConnor,"O'Connor, Sandra ( 09/25/1981 - 01/31/2006 )"
    105,AScalia,"Scalia, Antonin ( 09/26/1986 - 02/13/2016 )"
    106,AMKennedy,"Kennedy, Anthony ( 02/18/1988 - 07/31/2018 )"
    107,DHSouter,"Souter, David ( 10/09/1990 - 06/29/2009 )"
    108,CThomas,"Thomas, Clarence ( 10/23/1991 - 00/00/0000 )"
    109,RBGinsburg,"Ginsburg, Ruth ( 08/10/1993 - 09/18/2020 )"
    110,SGBreyer,"Breyer, Stephen ( 08/03/1994 - 06/30/2022 )"
    111,JGRoberts,"Roberts, John ( 09/29/2005 - 00/00/0000 )"
    112,SAAlito,"Alito, Samuel ( 01/31/2006 - 00/00/0000 )"
    113,SSotomayor,"Sotomayor, Sonia ( 08/08/2009 - 00/00/0000 )"
    114,EKagan,"Kagan, Elena ( 08/07/2010 - 00/00/0000 )"
    115,NMGorsuch,"Gorsuch, Neil ( 04/08/2017 - 00/00/0000 )"
    116,BMKavanaugh,"Kavanaugh, Brett ( 10/06/2018 - 00/00/0000 )"
    117,ACBarrett,"Barrett, Amy ( 10/27/2020 - 00/00/0000 )"
    118,KBJackson,"Jackson, Ketanji ( 06/30/2022 - 00/00/0000 )"
  `;
    
  const csvSplitVote = `ID, Split Vote
    1,first vote on issue/legal provision
    2,second vote on issue/legal provision
  `;

  const csvOpinion = `ID, Opinion
    1,justice wrote no opinion
    2,justice wrote an opinion
    3,justice co-authored an opinion
  `;


  const csvDirectionIndividualJusticeVotes= `ID, Direction of the Individual Justice Votes
    1,conservative
    2,liberal
  `;

  const csvMajorityandMinorityVotingbyJustice = `ID, Majority and Minority Voting by Justice
    1,dissent
    2,majority
  `;

  const csvTheVoteintheCase = `ID, The Vote in the Case
    1,voted with majority or plurality
    2,dissent
    3,regular concurrence
    4,special concurrence
    5,judgment of the Court
    6,dissent from a denial or dismissal of certiorari , or dissent from summary affirmation of an appeal
    7,jurisdictional dissent
    8,justice participated in an equally divided vote
  `;


  // Define globalData in the higher scope
  let globalData = [];
  

  // Parse the CSV data
  Papa.parse(csvPetitioner, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  // Parse another CSV data
  Papa.parse(csvPetitionerState, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvRespondent, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvRespondentState, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvJurisdiction, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvAdministrativeActionPreceeding, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvAdministrativeActionPreceeding, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvAdminActionPreceedingState, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvOrigin, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvOriginState, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvSourceCase, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvSourceState, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvNaturalCourt, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvIssue, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvIssueArea, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvDecisionDirection, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvDecisionDirectionDissent, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvAuthorityforDecision1, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvAuthorityforDecision2, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvDecisionType, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvMajorityOpinionWriter, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvMajorityOpinionAssigner, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvSplitVote, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvOpinion, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvDirectionIndividualJusticeVotes, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvMajorityandMinorityVotingbyJustice, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  Papa.parse(csvTheVoteintheCase, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      const newData = results.data.map(item => {
        if (item.__parsed_extra) {
          console.log('Extra data:', item.__parsed_extra);
        }
        delete item.__parsed_extra;
        return item;
      });
      globalData = globalData.concat(newData);
      console.log('Parsed Data:', globalData);
      document.getElementById('searchbar1').disabled = false;
    }
  });

  // Listen for the input event on the search bar
  document.getElementById('searchbar1').addEventListener('input', function(event) {
    const input = event.target.value;
    const searchResults = search(input, globalData);
    displayResults(searchResults);
  });

  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the form from submitting traditionally
});

function search(input, data) {
  if (!input) return []; // If no input, return an empty array

  // Ensure input is treated as a string
  const inputAsString = input.toString();

  const results = data.filter(item => {
    // Check if ID matches exactly
    return item.ID && item.ID.toString() === inputAsString;
  });

  return results;
}


// Function to display search results as a dropdown list
function displayResults(results) {
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = ''; // Clear previous results
  
  const list = document.createElement('ul');
  list.classList.add('autocomplete-results');

  //let count =0;
  results.forEach(item => {
    //if (count >= 10) return; 
    
    const textParts = [];
    for (const key in item) {
      if (item[key]) {  // This checks to ensure the value is not empty
        textParts.push(`${key}: ${item[key]}`);
      }
    }
    const text = textParts.join(', '); // Join all parts with a comma
    const listItem = document.createElement('li');
    listItem.textContent = text;
    listItem.onclick = function() { selectResult(item); };
    list.appendChild(listItem);
    //count++;
  });

  resultsContainer.appendChild(list);
    //resultsContainer.style.display = results.length > 0 ? 'block' : 'none'; // Only display if results exist
    if (results.length > 0) {
      list.classList.add('active'); // Add class if results are present
    } else {
      list.classList.remove('active'); // Remove class if no results
    }
}


  
  // Function to handle selection of an autocomplete result
  function selectResult(item) {
  const textParts = [];
  for (const key in item) {
    if (item[key]) {
      textParts.push(`${key}: ${item[key]}`);
    }
  }
  const text = textParts.join(', ');
  document.getElementById('searchbar1').value = text;
  document.getElementById('resultsContainer').innerHTML = '';
  }
  }
);