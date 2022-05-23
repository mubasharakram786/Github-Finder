import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className='movie-header'>
        <header>
        <div className="logo">
            <img src="https://worldfree4u.tel/wp-content/themes/worldfree4u/assets/logo.png" alt="Movie Site Logo" />
        </div>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/">Trending</Link>
            </li>
            <li>
            <Link to="/browse">Browse</Link>
            </li>
        </ul>
        </header>
    </div>
  )
}

export default Header