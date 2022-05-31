import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    <div className="flex justify-end">
        <Link to="/" className='px-2'>Home</Link>
        <Link to="/about" className='px-2'>About</Link>
    </div>
  </div>
  
  )
}

export default Navbar