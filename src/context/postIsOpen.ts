import { createContext } from "react";

type TUserWant={
    postIsOpen: boolean,
    setpostIsOpen: (postIsOpen:boolean) => void
}

export const postIsOpenContext = createContext<TUserWant>({
    postIsOpen:false,
    setpostIsOpen:()=>{}
})