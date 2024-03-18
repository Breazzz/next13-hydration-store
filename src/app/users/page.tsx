import Link from 'next/link'
import { UsersList } from '@/app/users/components/UsersList'

export default function Users() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>Users Page (Redux regidration)</h1>
      <UsersList />
    </div>
  )
}
