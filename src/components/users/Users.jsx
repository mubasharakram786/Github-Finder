import {useEffect ,useState} from 'react'
import Spinner from '../Layout/Spinner';
function Users() {
    const[users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetchUsers()
    },[])
    const fetchUsers=async()=>{
        const response= await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers:{
                Authorization:` token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json();

        setUsers(data);
        setLoading(false)
    }
    if(!loading){
  return (
    <div className='container px-2'>
        {users.map(user=>{
          return <h3>{user.login}</h3>
        })}
    </div>
  )
    }
    else
    {
      return  <Spinner/>
    }
  
}

export default Users