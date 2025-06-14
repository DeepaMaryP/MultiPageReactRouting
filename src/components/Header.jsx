import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex w-3/4 mx-auto mt-6 mb-3'>
      <div className='w-1/2'>
        <img src={logo} className='h-24 w-auto' alt="logo" />
      </div>
      <div className='flex w-1/2 gap-2 sm:gap-x-9 text-blue-900 text-xl font-bold  items-center'>
        <Link to={"/"}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/users'}>Users</Link>
      </div>
    </div>
  )
}

export default Header
