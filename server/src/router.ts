import { Router } from 'express';
import { getCustomers } from './db/queries/customer';
import { getLeaderboard } from './db/queries/leaderboard';

export const router = Router();

router.get('/customers', async (req, res) => {
    const customers = await getCustomers();
    res.json(customers);
})

router.get('/leaderboard', async (req, res) => {
    const leaderboard = await getLeaderboard();
    res.json(leaderboard);
});
