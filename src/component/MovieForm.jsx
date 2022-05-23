import {useState} from'react'
import ImageUpload from './shared/ImageUpload';
function MovieForm() {
    const[name,setName]=useState('Fast and Furious 9');
    const[rating,setrating]=useState(7)
  return (
    <div className='movie-form'>
        <form action="">
            <ImageUpload/>
            {/* <div className="input-group">
                <div className="upload-image">
                <img src={URL.createObjectURL(selectedImage)} alt="Image " />
                <i className="fas fa-times"></i>
                </div>
            </div> */}
            <div className="input-group">
                <label htmlFor="">Movie Name</label>
                <input type="text" name="movie" id="" value={name} />
            </div>
            <div className="input-group">
                <label htmlFor="">Rating</label>
                <input type="number" name="movie" id="" value={rating} />
            </div>
            <div className="input-group">
                <button type='submit' className='movie-btn'>Add Movie</button>
            </div>
        </form>
    </div>
  )
}

export default MovieForm