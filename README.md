# Supreme Court Justice Trends Analysis

This project is a full-stack application that analyzes trends in U.S. Supreme Court justices' voting behavior. It utilizes a combination of data processing, database management, backend development, and web visualization to provide an interactive dashboard for judicial analytics.

---

## ✨ Features

* Converts Supreme Court justice vote CSVs into SQL insert statements for Oracle DB using `Alltosql.py`
* Initializes schema and populates tables with historical and modern case data
* Provides a Go-based HTTP server with multiple analytical API endpoints
* Visualizes trends using an HTML/CSS/JavaScript frontend dashboard
* Supports timeline filters, justice comparisons, and issue-specific analysis

---

## 🧰 Tech Stack

### Backend

* **Python 3.8+**: Data transformation and SQL generation (`Alltosql.py`)
* **Go 1.18+**: REST API server with Gorilla Mux router and `gonum/plot` for image generation
* **Oracle SQL**: Main database for vote, case, and justice data

### Frontend

* **HTML/CSS/JavaScript**: Responsive dashboard UI
* **PapaParse**: CSV parsing in-browser
* **Dynamic visual updates**: Query submission and image display per user interaction

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yoonmgyg/supreme-court-trends.git
cd supreme-court-trends
```

### 2. Generate SQL Files

Make sure `SCDB_2023_01_justiceCentered_Vote.csv` and `SCDB_Legacy_07_justiceCentered_Citation.csv` are in the root directory.

```bash
python Alltosql.py
```

This will generate:

* `create_tables.sql` - Oracle schema
* `legacy_insert.sql` - Legacy data insertions
* `modern_insert.sql` - Modern data insertions

### 3. Setup Oracle Database

* Create a new schema and run the SQL files in this order:

  ```sql
  @create_tables.sql
  @legacy_insert.sql
  @modern_insert.sql
  ```

### 4. Start the Go Backend Server

```bash
cd backend
# Make sure godror is properly configured for Oracle DB access
go run main.go
```

The server will start at `http://127.0.0.1:3030`

### 5. Launch the Frontend Dashboard

Simply open `DB_Project_v13.html` in a web browser. The dashboard includes:

* Query buttons
* Form inputs for filtering
* A splash login screen (default: `demo` / `pass`)

---

##  Example Endpoints

* `GET /tuplecount` - Total tuple count across all major tables
* `POST /query1` - Voting trend per state over time
* `POST /query4` - Justice vote direction trendline (returns PNG)

---

##  Project Structure

```
project-root/
├── Alltosql.py                
├── create_tables.sql          
├── legacy_insert.sql          
├── modern_insert.sql         
├── backend/
│   └── main.go                
├── DB_Project_v13.html       
└── data/
    └── *.csv                  
```

---

##  Sample Use Cases

* Compare liberal vs. conservative voting trends per justice
* Examine volume of state-originated cases by year
* Track shifts in legal issue direction across courts

---


