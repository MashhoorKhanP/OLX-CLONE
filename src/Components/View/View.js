import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { firestore } from '../../firebase/config';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function View() {
  const [userDetails,setUserDetails] = useState('')
  const {postDetails} = useContext(PostContext)
  const navigate = useNavigate()
  console.log(postDetails)
  useEffect(() =>{
    if(!postDetails){
      navigate('/')
      return;
    }
    const fetchData  =async () =>{
      const db = firestore
      const prodCollection = collection(db,'users')
      console.log('Postd'+postDetails.userId)
      try{
        const userDetails = await  getDocs(query(prodCollection,where('id', '==', postDetails.userId)));
        userDetails.forEach(doc => {
          setUserDetails(doc.data())
        })
      }catch(error){
        console.log(error.message);
      }
      
      
    }
    fetchData();
  },[postDetails,navigate])
  return (
    <div className="viewParentDiv">
      {postDetails && <><div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="" />
      </div><div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9;{postDetails.price} </p>
            <span>{postDetails.name}</span>
            <p>{postDetails.category}</p>
            <span>{postDetails.createdAt}</span>
          </div>
          <div className="contactDetails">
            <p className='fw-bold'>Seller details</p>
            {userDetails && <><i class="bi bi-person-check"></i><p>{userDetails.displayName}</p>
            <i class="bi bi-telephone"></i>
              <p>{userDetails.phoneNumber}</p></>}
          </div>
        </div></>}
    </div>
  );
}
export default View;
