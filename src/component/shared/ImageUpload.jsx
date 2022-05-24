import {useState,useEffect} from 'react'

function ImageUpload() {
    const[images,setImages]=useState([]);
    const[imageURL,setImageURl]=useState([])
    useEffect(()=>{
      if(images.length<1) return;
      const newImageUrl=[];
      images.forEach((image)=>newImageUrl.push(URL.createObjectURL(image)));
      setImageURl(newImageUrl)
    },[images])
    const onChangeImage=(e)=>{
      setImages([...e.target.files])
    }

  return (
    <>
    <div className="input-group">
    <label htmlFor="coverPhoto">
    <i className="fas fa-camera" ></i>
    </label>
    <input type="file" multiple accept='image/*'  id="coverPhoto" onChange={onChangeImage} />
</div>
    {imageURL.map(imgSrc=><img src={imgSrc}/>)}
    </>
  )
}

export default ImageUpload