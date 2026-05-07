import React, { useEffect, useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/my_assets/assets'
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import upload from '../../lib/upload';


function ProfileUpdate() {

  const navigate = useNavigate();

  const [image,setImage] = useState(false);
  const [name ,setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid,setUid] = useState("");
  const [prevImage,setPrevImage] = useState("");

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {

      if(!prevImage && !image){
        toast.error("Upload profile  picture");
      }
      console.log("image  --",image);
      const docRef = doc(db,'users',uid);
      if(image){
        console.log("current user:", auth.currentUser);
        const imgUrl = await upload(image);
        console.log("imageURL  --",imgUrl);
        setPrevImage(imgUrl);
        await updateDoc(docRef,{
          avatar:imgUrl,
          bio: bio,
          name: name
        });
      } else {
        await updateDoc(docRef,{
          bio: bio,
          name: name
        });
      }
      
    } catch (error) {
      console.log("ERROR in profile.jsx -- ",error);
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth,async (user) => {
      if(user){
        setUid(user.uid);
        const docRef =doc(db , "users" , user.uid);
        const docSnap = await getDoc(docRef);
        console.log("DOCSNAP ----",docSnap.data());
        if(docSnap.data().name) {
          setName(docSnap.data().name);
        }
        if(docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if(docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar);
        }
      }
      else {
        navigate('/');
      }
    })
  },[]);

  return (
    <div className="profile">
      <div className="profile-container">
        <form onSubmit={profileUpdate}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input  onChange={(e)=>setImage(e.target.files[0])}  type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={image?URL.createObjectURL(image) : assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='your name' required />
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder='Write profile bio ' required></textarea>
          <button type='submit'>Save</button>

        </form>
        <img className='profile-pic' src={image?URL.createObjectURL(image) : assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate