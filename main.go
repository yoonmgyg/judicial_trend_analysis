package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"image/color"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"gonum.org/v1/plot"
	"gonum.org/v1/plot/plotter"
)

var Db *sql.DB

func main() {
    port := ":3030"

    var err error
    Db, err = ConnectDB()
    if err != nil {
        log.Fatal(err);
    }

    router := mux.NewRouter()

    router.HandleFunc("/", ping).Methods("Get")
    router.HandleFunc("/tuplecount", tuplecount).Methods("Get")
    router.HandleFunc("/query1", query1).Methods("Get")
    router.HandleFunc("/query2", query2).Methods("Get")
    router.HandleFunc("/query3", query3).Methods("Get")
    router.HandleFunc("/query4", query4).Methods("Get")
    router.HandleFunc("/query5", query5).Methods("Get")

    log.Fatal(http.ListenAndServe(port, router))
    defer Db.Close()
}

func ping(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    log.Print("Server has been pinged")
}

// 127.0.0.1:3030/tuplecount
func tuplecount(w http.ResponseWriter, r *http.Request) {
    query := `
    SELECT 
    (SELECT COUNT(*) FROM LegalCase)
    + (SELECT COUNT(*) FROM Jurisdiction)
    + (SELECT COUNT(*) FROM Docket)
    + (SELECT COUNT(*) FROM Source)
    + (SELECT COUNT(*) FROM Origin)
    + (SELECT COUNT(*) FROM Citation)
    + (SELECT COUNT(*) FROM LegalIssue)
    + (SELECT COUNT(*) FROM Decision)
    + (SELECT COUNT(*) FROM Justice)
    + (SELECT COUNT(*) FROM Vote)
    + (SELECT COUNT(*) FROM CourtMembership)
    + (SELECT COUNT(*) FROM Court)
    + (SELECT COUNT(*) FROM Parties)
    + (SELECT COUNT(*) FROM Opinion)
    + (SELECT COUNT(*) FROM AssociateJustices) 
    + (SELECT COUNT(*) FROM ChiefJustices) 
    + (SELECT COUNT(*) FROM Presidents) AS Total_Count
    FROM dual`

    rows, err := Db.Query(query)
    if err != nil {
        log.Fatal(err)
    }

    var count int
    rows.Next()
    if err := rows.Scan(&count); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    log.Print("function called")

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(count)


}

func query1(w http.ResponseWriter, r *http.Request) {

    type States struct {
        S1  string  `json:"v1"`
        S2  string  `json:"v2"`
        SD  string  `json:"sd"`
        ED  string  `json:"ed"`
    }

    var states States
    if err := json.NewDecoder(r.Body).Decode(&states); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }


    println(states.S1)
    println(states.S2)
    println(states.SD)
    println(states.ED)

    query := fmt.Sprintf(`
    select 
    s.stateName as state,
    years.year,
    count(*) as total_cases
    from 
    (
        select to_number('%s') + (level - 1) as year
        from dual
        connect by to_number('%s') + (level - 1) <= to_number('%s')
    ) years
    cross join 
    LegalCase c
    join
    Origin o on c.caseID = o.caseID
    join
    Decision d on c.caseID = d.caseID and extract(year from(d.dateDecision)) <= years.year
    join
    State s on o.caseOriginState = s.stateID
    where
    s.stateName = '%s' or s.stateName = '%s'
    group by s.stateName, years.year 
    order by s.stateName, years.year`, states.SD, states.SD, states.ED, states.S1, states.S2)

    rows, err := Db.Query(query)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    println(rows)

    type cases struct {
        year    float64
        count   float64
    }

    var state1 []cases
    var state2 []cases

    var currState string

    for rows.Next() {
        var currRow cases
        if err := rows.Scan(&currState, &currRow.year, &currRow.count); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        if currState == states.S1 {
            state1 = append(state1, currRow)
        } else if currState == states.S2 {
            state2 = append(state2, currRow)
        }
    }

}

func query2(w http.ResponseWriter, r *http.Request) {

    query := fmt.Sprintf(``)

    rows, err := Db.Query(query)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    println(rows)
}

func query3(w http.ResponseWriter, r *http.Request) {

    query := fmt.Sprintf(``)

    rows, err := Db.Query(query)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    println(rows)
}

func query4(w http.ResponseWriter, r *http.Request) {

    type Justices struct {
        J1    string  `json:"v1"`
        J2    string  `json:"v2"`
        // SD      int   `json:"sd"`
        // ED      int   `json:"ed"`
    }

    var justices Justices
    if err := json.NewDecoder(r.Body).Decode(&justices); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    query := fmt.Sprintf(`SELECT
    j.justiceName as Justice_Name,
    EXTRACT(YEAR FROM d.dateDecision) AS decisionYear,
    to_number(to_char(avg(v.direction), 'FM9.99')) AS avgVoteDirection
    FROM
    Justice j
    join
    Vote v on j.justiceName = v.justiceName
    join
    Decision d on v.decisionID = d.decisionID
    WHERE
    v.direction <> 3
    AND v.direction IS NOT NULL
    and (j.justiceName = '%s' or j.justiceName = '%s')
    GROUP BY
    j.justiceName,
    EXTRACT(YEAR FROM d.dateDecision)
    ORDER BY
    j.justiceName,
    decisionYear`, justices.J1, justices.J2)

    rows, err := Db.Query(query)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    type voteTrend struct {
        year            float64
        voteDirection   float64
    }

    var justice1 []voteTrend
    var justice2 []voteTrend

    var currJust string

    for rows.Next() {
        var vote voteTrend
        if err := rows.Scan(&currJust, &vote.year, &vote.voteDirection); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        if currJust == justices.J1 {
            justice1 = append(justice1, vote)
        } else if currJust == justices.J2 {
            justice2 = append(justice2, vote)
        }
    }

    p := plot.New()

    p.Title.Text = "Justice Voting Direction Per Year"
    p.X.Label.Text = "Year"
    p.Y.Label.Text = "Voting Direction"

    pts1 := make(plotter.XYs, len(justice1))
    for i := range pts1 {
        pts1[i].X = justice1[i].year
        pts1[i].Y = justice1[i].voteDirection
    }
    pts2 := make(plotter.XYs, len(justice1))
    for i := range pts2 {
        pts2[i].X = justice2[i].year
        pts2[i].Y = justice2[i].voteDirection
    }

    
    line1, err := plotter.NewLine(pts1)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    line1.Color = color.RGBA{R: 255, A:255}

    line2, err := plotter.NewLine(pts2)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    line2.Color = color.RGBA{B: 255, A:255}

    p.Add(line1, line2)
    p.Legend.Add(justices.J1, line1)
    p.Legend.Add(justices.J2, line2)

    plt, err := p.WriterTo(1024, 512, "png")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "image/png")
    plt.WriteTo(w)

    
}


func query5(w http.ResponseWriter, r *http.Request) {

    query := fmt.Sprintf(``)

    rows, err := Db.Query(query)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    println(rows)
}
