import Link from "next/link"

const Header = () => {
  return (
    <header>
      <Link href='/' key={1}>Home</Link>
      <Link href='/favorites' key={2}>Favorites</Link>
      <Link href='/authorization' key={3}>Sign In</Link>
    </header>
  )
}

export default Header