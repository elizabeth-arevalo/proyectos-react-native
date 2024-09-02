import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";
import axios from "axios";

const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>("https://reqres.in/api/users", {
            params: {
                page: page,
            },
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
    //fetch("https://reqres.in/api/users?page=2")
    //   .then((resp) => resp.json())
    // .then((data) => console.log(data));
};

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current).then(setUsers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
            //return
        } else {
            currentPageRef.current--;
        }
    };
    const prevPage = async () => {
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    };
    return {
        //properties
        users,
        //methods
        nextPage,
        prevPage,
    };
};
