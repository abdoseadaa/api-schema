import {create} from "zustand"
import { IUser } from "./users.types"
import axios from "axios"


interface IUsersStore {
    loading : boolean
    users : IUser[]
    setUsers : (users : IUser[]) => void,
    fetch : () => void
}


const useUsersStore = create<IUsersStore>((set) => ({
    loading : false ,
    users : [],
    setUsers : (users : IUser[]) => set((state) => ({...state , users})),
    fetch : async () => {
    //   set loading true , without changing any other state
        set((state) => ({...state , loading : true}))
        // fetch request 
        const response= await axios("https://jsonplaceholder.typicode.com/users")
        // set loading false
        set((state) => ({...state , loading : false}))
        // handel error
        if(!response.data) return console.log("no data")
        // set users
        set((state) => ({...state , users : response.data}))
    }

}))



export default useUsersStore
