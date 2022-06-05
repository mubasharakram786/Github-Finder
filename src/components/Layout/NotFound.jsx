import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className='flex  justify-center align-center w-100 h-screen'>
        <div>
        <h1 className="text-9xl mb-10">
            Oops!
        </h1>
        <h4 className='text-4xl'>
            404 - Page Not Found
        </h4>
        <div className="text-center m-4">

            <Link to="/"  className="btn btn-primary btn-lg">
            <i className="fas fa-home pr-5"></i>  Go To Home
            </Link>
        </div>
        </div>
    </div>
  )
}

export default NotFound