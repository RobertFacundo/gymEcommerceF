import { useQuery } from "@tanstack/react-query"
import { getRandomUsers } from "../services/randomuser.service"

const USERS_COUNT = 3;

export const useRandomUsers = () => {
    return useQuery({
        queryKey: ['random-user', USERS_COUNT],
        queryFn: () => getRandomUsers(USERS_COUNT),
        staleTime: 1000 * 60 * 10
    })
}