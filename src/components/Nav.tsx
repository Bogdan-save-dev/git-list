import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Git Search</h3>
      <span>
        <Link to="/home" className="mr-2">
          Home
        </Link>
        <Link to="/favourites" className="mr-2">
          Favourites
        </Link>
      </span>
    </nav>
  )
}
