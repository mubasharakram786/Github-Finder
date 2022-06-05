import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between mb-20">
    <Link className="btn btn-ghost normal-case text-md font-bold" to={`/`}>
      <FaGithub className='text-2xl mr-2'/>
      Github Finder
      </Link>
    <div className="flex justify-end">
        <Link to="/" className='px-2'>Home</Link>
        <Link to="/about" className='px-2'>About</Link>
    </div>
  </div>
  
  )
}

export default Navbar