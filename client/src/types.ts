type CustomerCountry = 'Estonia' | 'Finland' | 'Norway' | 'Chile' | 'Canada';

export interface DatabaseCustomer {
    id: string;
    first_name: string;
    last_name: string;
    country: CustomerCountry;
    created_at: Date;
    updated_at: Date;
}

export interface DatabaseLeaderboard {
    first_name: string;
    last_name: string;
    country: string;
    total_bets: number;
    win_percentage: number;
    profit: number;
}
