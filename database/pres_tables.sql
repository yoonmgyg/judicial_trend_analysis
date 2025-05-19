
CREATE TABLE Presidents (
    presidentName varchar(255) PRIMARY KEY,
    party varchar(50),
    inaugurationDate date,
    resignationDate date
);

CREATE TABLE AssociateJustices (
    justiceName varchar(255) PRIMARY KEY,
    state varchar(50),
    nominatingPresident varchar(255),
    dateAppointed date,
    FOREIGN KEY (justiceName) REFERENCES Justice(justiceName) ON DELETE CASCADE,
    FOREIGN KEY (nominatingPresident) REFERENCES Presidents(presidentName) ON DELETE SET NULL
);

CREATE TABLE ChiefJustices (
    justiceName varchar(255) PRIMARY KEY,
    state varchar(50),
    nominatingPresident varchar(255),
    dateAppointed date,
    FOREIGN KEY (justiceName) REFERENCES Justice(justiceName) ON DELETE CASCADE,
    FOREIGN KEY (nominatingPresident) REFERENCES Presidents(presidentName) ON DELETE SET NULL
);

