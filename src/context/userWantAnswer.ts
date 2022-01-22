import { createContext } from "react";

type TUserWant={
    isUserWant: boolean,
    setIsUserWant: (isUserWant:boolean) => void
}

export const isUserWantAnswer = createContext<TUserWant>({
    isUserWant:false,
    setIsUserWant:()=>{}
})