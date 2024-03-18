'use client'

import Link from 'next/link'
import { useSelector, useDispatch } from '@/store/hooks'
import { decrement, increment, selectCount } from '@/store/counter.slice'

export default function Home() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <main>
      <div>
        <Link href='products'>Products (server)</Link>
      </div>
      <div>
        <Link href='users'>Users (Redux regidration)</Link>
      </div>
      <p>Home page (Client)</p>
      <div>
        <div className='flex max-w-[300px] justify-between'>
          <button
            aria-label='Increment value'
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className='inline-block rounded-full border-2 p-2 font-bold'>
            {count}
          </span>
          <button
            aria-label='Decrement value'
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </main>
  )
}
