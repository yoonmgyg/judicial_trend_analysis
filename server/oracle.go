package main

import (
	"database/sql"
	"log"
    "github.com/sijms/go-ora/v2"
)

// user: kory.gauger
// pass: kscy0BoQFCRUlwPbtEBHwF23

// user: hughesj
// pass: XN5W1m6oAfYYzwBaSazGVm48

// user: liammckenna
// pass: Al1pbtGYNz8xHXRl4d3eCPAy

var dbparams = map[string]string { 
    "username": "hughesj",
    "server": "oracle.cise.ufl.edu",
    "password": "XN5W1m6oAfYYzwBaSazGVm48",
}

func ConnectDB() (*sql.DB, error) {
    port := 1521
    urlOptions := map[string]string {
        "SID": "orcl",
    }
    connStr := go_ora.BuildUrl(dbparams["server"], port, "", dbparams["username"], dbparams["password"], urlOptions)
    db, err := sql.Open("oracle", connStr)
    if err != nil {
        log.Fatal(err);
    }

    if err = db.Ping(); err != nil {
        log.Fatal(err)
    } else {
        log.Print("Database is Connected")
    }
    return db, err
}
