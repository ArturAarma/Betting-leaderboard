import { db } from '../knex';

export const getLeaderboard = () => db('bet')
.join('customer', 'bet.customer_id', '=', 'customer.id')
.whereNot('bet.status', 'PENDING')
.groupBy('customer.id', 'customer.first_name', 'customer.last_name', 'customer.country')
.select('customer.id as id',
    'customer.first_name',
    'customer.last_name',
    'customer.country',
    db.raw('COUNT(*) AS total_bets'),
    db.raw(`
        ROUND(
        SUM(CASE WHEN bet.status = 'WON' THEN 1 ELSE 0 END)::decimal
        / NULLIF(COUNT(*), 0) * 100, 2
        ) AS win_percentage
        `),
    
    )




;






/* 
1) Full name of the customer
2) Customer's country
3) Total bets
4) Win percentage
5) Profit
*/