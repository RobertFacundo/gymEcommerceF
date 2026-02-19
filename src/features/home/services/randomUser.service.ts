import axios from "axios";

export interface RandomUser {
    picture: { large: string };
    name: { first: string; last: string };
    dob: { age: number };
    location: { country: string };
}

interface RandomUserResponse {
    results: RandomUser[];
}

export const getRandomUsers = async (
    count: number
): Promise<RandomUser[]> => {
    const { data } = await axios.get<RandomUserResponse>(
        `https://randomuser.me/api/?results=${count}`
    );

    return data.results;
}