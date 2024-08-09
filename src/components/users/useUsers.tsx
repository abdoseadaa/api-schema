import React, { useEffect } from 'react'
import useUsersStore from './user.store'

export default function useUsers() {

 
    const fetch = useUsersStore((state) => state.fetch)
 
 
 
    useEffect(() => {
     fetch()
    }, [])
}
