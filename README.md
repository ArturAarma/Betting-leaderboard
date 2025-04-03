🏆 Coolbet Leaderboard
======================

Full-stack web application that displays a dynamic betting leaderboard that ranks customers based on their betting performance. It calculates total bets, win percentage, and profit for each customer and shows the top 10 users with the highest profit. The leaderboard is filterable by country and excludes users with negative profit.

* * * * *

🚀 Features
-----------

-   Displays top 10 customers based on profit

-   Filters by country (default is "ALL")

-   Ignores customers with negative profit

-   Shows full name, country, total bets, win %, and profit

-   Responsive and minimal UI

* * * * *

🛠️ Setup Instructions
----------------------

### 1\. 🐳 Start PostgreSQL using Docker

Run this command in your terminal:

docker run --name leaderboard-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

* * * * *

### 2\. 🧠 Backend Setup

Navigate to the server folder and run:

cd server\
npm install\
npm run build\
npm run dev

Server will be running at: <http://localhost:3000>

* * * * *

### 3\. 🎨 Frontend Setup

Navigate to the client folder and run:

cd client\
npm install\
npm run dev

Frontend will be running at: <http://localhost:5173>

* * * * *

📊 Leaderboard Logic
--------------------

| Field | Logic |
| --- | --- |
| Total Bets | Count of bets with status WON or LOST |
| Win % | (WON / (WON + LOST)) × 100, rounded to 0 decimals |
| Profit | WON: (stake × odds - stake), LOST: -stake, then sum of all |
| Filtering | Customers with negative profit are excluded using a SQL HAVING clause |
| Limit | Top 10 results sorted by profit in descending order |

* * * * *

🌍 API Endpoints
----------------

-   GET /leaderboard → Returns top 10 customers with positive profit

* * * * *

📁 Folder Structure
-------------------

CoolbetLeaderboard/\
├── client/ (React frontend)\
│ └── src/ (Components, App.tsx, etc.)\
├── server/ (Express backend)\
│ └── src/ (Routes, queries, db, etc.)\
└── README.md (This file)

* * * * *

🧪 Testing
----------

-   Visit <http://localhost:5173>

-   Test the country filter

-   Verify customers with negative profit are not shown

-   Confirm leaderboard only shows up to 10 customers


