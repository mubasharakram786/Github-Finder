import {useState} from 'react'

function ImageUpload() {
    const[selectedImage,setSelectedImage]=useState(null)
  return (
    <div className="input-group">
    <label htmlFor="coverPhoto">
    <i class="fas fa-camera" onChange={(event)=>setSelectedImage(event.target.files[0])}></i>
    </label>
    <input type="file"  id="coverPhoto" />
</div>
  )
}

export default ImageUpload