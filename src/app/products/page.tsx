import Link from 'next/link'
import Image from 'next/image'

async function getProducts() {
  const res = await fetch(
    'https://6322e143a624bced3080b3fa.mockapi.io/products'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Products() {
  const data = await getProducts()

  return (
    <main>
      <Link href='/'>Home</Link>
      <p className='font-bold'>Products (Server):</p>
      <ul>
        {data.map((p: any) => (
          <li key={p.name} className='flex align-middle'>
            <Image src={p.image} alt='p.name' width={30} height={30} />
            {p.name}
          </li>
        ))}
      </ul>
    </main>
  )
}
