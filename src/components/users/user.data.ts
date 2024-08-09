import { GadwalRow } from "gadwal";
import { IUser } from "./users.types";

export const usersTable : GadwalRow<IUser>[] =[
    {header:"id" , name:"id" , size : 6},
    {header:"name" , name:"name" , size : 6},
    {header:"username" , name:"username" , size : 6},
    {header:"email" , name:"email" , size : 6},
]
