import { db } from '../knex';

export const getLeaderboard = () => db('bet')
.join('customer', 'bet.customer_id', '=', 'customer.id')
.whereNot('bet.status', 'PENDING')
.groupBy('customer.id', 'customer.first_name', 'customer.last_name', 'customer.country')
.havingRaw(`
    SUM(
        CASE 
            WHEN bet.status = 'WON' THEN (bet.stake * bet.odds) - bet.stake
            WHEN bet.status = 'LOST' THEN -bet.stake
            ELSE 0
        END
    ) > 0
`)
.select('customer.id as id',
    'customer.first_name',
    'customer.last_name',
    'customer.country',
    db.raw('COUNT(*) AS total_bets'),
    db.raw(`
        ROUND(
        SUM(CASE WHEN bet.status = 'WON' THEN 1 ELSE 0 END)::decimal
        / NULLIF(COUNT(*), 0) * 100, 0
        ) AS win_percentage
        `),
    db.raw(`
        ROUND(
        SUM(
            CASE 
                WHEN bet.status = 'WON' THEN (bet.stake * bet.odds) - bet.stake
                WHEN bet.status = 'LOST' THEN -bet.stake
                ELSE 0
            END
          ),
          2
        ) AS profit
        `)
    )
.orderBy('profit', 'desc');






/* 
1) Full name of the customer
2) Customer's country
3) Total bets
4) Win percentage
5) Profit
*/