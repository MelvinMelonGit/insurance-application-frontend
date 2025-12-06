import { atom } from "jotai";

interface User {
    id: string
    username: string
    password: string
    name: string
}

type UserProfile = Omit<User, "username" | "password">

export const userProfileStore = atom<UserProfile>({
    id: "",
    name: ""
})