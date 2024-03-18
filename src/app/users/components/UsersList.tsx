'use client'

import { useSelector } from '@/store/hooks'
import { selectUsers } from '@/store/users.slice'

export const UsersList = () => {
  const { users, loading } = useSelector(selectUsers)

  if (loading) return <h1>Loading...</h1>

  if (!users) return <h1>Empty</h1>

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.name}>
          {user.id} - {user.name}
        </li>
      ))}
    </ul>
  )
}
