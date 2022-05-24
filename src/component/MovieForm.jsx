import { useState } from 'react'
import ImageUpload from './shared/ImageUpload';
function MovieForm() {
    const [name, setName] = useState('');
    const [rating, setrating] = useState();
    const AddMovie = (e) => {
        e.preventDefault();
        if (name === '' && rating === '') {

        }
    }
    return (
        <div className='movie-form'>
            <form action="" onSubmit={AddMovie}>
                <ImageUpload />
                <div className="input-group">
                    <label htmlFor="">Movie Name</label>
                    <input type="text" name="movie" id="" />
                </div>
                <div className="input-group">
                    <label htmlFor="">Rating</label>
                    <input type="number" name="movie" id="" />
                </div>
                <div className="input-group">
                    <button type='submit' className='movie-btn'>Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm