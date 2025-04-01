import type { DatabaseCustomer, DatabaseLeaderboard } from "./types";

export async function fetchCustomers(): Promise<DatabaseCustomer[]> {
    try {
        const customers = await fetch('http://localhost:3000/customers', { method: 'GET' })
        return customers.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchLeaderboard(): Promise<DatabaseLeaderboard[]> {
    try {
        const leaderboard = await fetch('http://localhost:3000/leaderboard', { method: 'GET' })
        return leaderboard.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}