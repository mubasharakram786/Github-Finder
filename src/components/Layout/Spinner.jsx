import spinner from './assets/loader.gif'

function Spinner() {
  return (
      <div className="flex justify-center items-center w-100">
          <img style={{width:'100px'}} src={spinner} alt="Loading..." />
      </div>
  )
}

export default Spinner