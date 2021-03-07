export interface Token {
    accessToken: {
        name: string,
        abilities: string[],
        tokenable_id: number
    };
    abilities: string[];
    created_at: string;
    id: number;
    name: string;
    updated_at: string;
    plainTextToken: string;
}