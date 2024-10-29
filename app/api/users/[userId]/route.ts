export interface User {
    name: string;
    luckyNumber: number;
}

import { NextResponse } from 'next/server';

// Mock data for demonstration purposes
const users: Record<string, User> = {
    '1': { name: 'Alice', luckyNumber: 7 },
    '2': { name: 'Bob', luckyNumber: 13 },
    '3': { name: 'Charlie', luckyNumber: 42 },
};

export async function GET(request: Request, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    
    const user = users[userId];

    if (!user) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(user);
}