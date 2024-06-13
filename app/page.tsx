import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
  <main>
    <h1>hello world</h1>
    <a href='/users'>slow file loading</a>  
    <br/>
     {/* client side navigation */}
    <Link href="/users">Speed file loading</Link>
    <ProductCard/>
    </main>
  )
}
