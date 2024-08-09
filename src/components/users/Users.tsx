import { IUser } from './users.types'
import Table, { GadwalRow } from 'gadwal'
import useUsersStore from './user.store'
import useUsers from './useUsers'
import { usersTable } from './user.data'

export default function Users() {

   useUsers()

   const loading = useUsersStore((state) => state.loading)

   const users = useUsersStore((state) => state.users)

    return (
        <div>
            {loading && <div>loading</div>}
            <Table 
            bodyProps={{className : "flex"}}
            headerProps={{className : "flex bg-slate-100"}}
            table={usersTable} data={users} />
        </div>
    )
}
