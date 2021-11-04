import React, { useRef, useState } from 'react';
import {useSession} from "next-auth/client";
import Image from "next/image"
import {VideoCameraIcon} from "@heroicons/react/solid"
import {GlobeIcon, ChevronDownIcon, ChevronLeftIcon,
        PhotographIcon, UserAddIcon, LocationMarkerIcon
        } from '@heroicons/react/solid';
import { ColorSwatchIcon, DotsHorizontalIcon, 
         EmojiHappyIcon, XIcon 
        } from '@heroicons/react/outline';

import  db  from '../firebase';
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import PixInsertModal from './PixInsertModal';

function Modal({clickClose, isWithInsert}) {
    const[session] = useSession()
    const [postOpen, setPostOpen] = useState(false)
    const [myPost, setMyPost] = useState('');
    const filePickeRef = useRef(null);
    const [pixIoPost, setPixIoPost] = useState(null)
  

    const handleChange = (event) => {
        event.preventDefault();
        let post = event.target.value
        setMyPost(post)
        if(post.length > 0){
            setPostOpen(true)
        }else{
            setPostOpen(false)
        }
    }
    console.log('post', myPost);
    const sendPost = async (event) => {
            if(myPost.length > 0){
            
            event.preventDefault();
            const docRef = await addDoc(collection(db, "posts"), {
            message: myPost,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp()
    
        });
        setMyPost('')
        console.log("Document written with ID: ", docRef.id);
    }else{
        return
    }
}

    const addPixToPost = (event) =>{
        const fileReader = new FileReader();
        if(event.target.files[0]){
            fileReader.readAsDataURL(event.target.files[0])
        }
        fileReader.onload = (readerEvent) => {
            setPixIoPost(readerEvent.target.result)
        }
    }

    return (
        <div className="flex flex-col justify-center ">

            <div className="inline-flex items-center justify-center py-2
             text-xl border-b">
              <p className="ml-52 font-bold ">Create posts</p>
              <p className="cursor-pointer h-9 w-9 flex justify-center
               items-center ml-44 text-gray-500
                bg-gray-200 hover:bg-gray-300 rounded-full">
              <XIcon
                 onClick={clickClose}
                 className="h-7"/>
              </p>
            </div>
            <div className="flex w-max pl-4 pt-2 space-x-3 items-center">
                 <Image
                    onClick
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    alt="pix"
                    width={40} 
                    height={40}
                    layout="fixed"/>
                    <div className="">
                        <p className="font-semibold">{session.user.name}</p>
                        <div className=" rounded-md bg-gray-300 font-semibold w-min">
                            <p 
                               onClick
                               className="pl-2 flex items-center text-sm h-6
                               cursor-pointer">
                                <GlobeIcon className="h-4"/>
                                Public
                                <ChevronDownIcon className="h-6"/>
                            </p>
                        </div>
                    </div>
              </div>
              <form onSubmit={sendPost}>
                  <div className="flex flex-col h-56 overflow-y-scroll">
                    <textarea
                        onChange={handleChange}
                        type="text"
                        value={myPost}
                        className="resize-y w-full h-auto text-2xl flex flex-grow p-2 focus:outline-none overflow-y-hidden"
                        placeholder={`What's on your mind ${session.user.name}?`}>
                    </textarea>
                     {(isWithInsert) ?
                        <PixInsertModal addPixToPost={addPixToPost} pixToPost={pixIoPost}/> : 
                        <div className="flex items-center justify-between mt-4 pl-4 text-gray-400">
                        <div><ColorSwatchIcon className="h-7 pr-3"/></div>
                        <diV><EmojiHappyIcon className="h-7 pr-3"/></diV>
                    </div>
                    }
                    
                </div>
              
                <div className="flex items-center justify-between
                    p-4 h-13 mx-3 bg-white mt-4 border-2">
                  <div className="cursor-pointer">
                      <p>Add to your post</p>
                  </div>
                  <div className="flex space-x-3 pr-4 justify-evenly text-gray-500 h-7">
                      <div onClick={() => filePickeRef.current.click()}>
                        <PhotographIcon className="h-7 text-green-700 cursor-pointer"/>
                        <input hidden ref={filePickeRef} onChange={addPixToPost} type="file"/>
                      </div>
                      <UserAddIcon className="text-blue-700 cursor-pointer"/>
                      <EmojiHappyIcon className="text-yellow-400 cursor-pointer"/>
                      <LocationMarkerIcon className="text-red-500 cursor-pointer"/>
                      <p className="text-red-900 cursor-pointer">🎤</p>
                      <DotsHorizontalIcon className="cursor-pointer"/>
                  </div>
              </div>
              <div className={`p-2 mt-4 text-center mx-3 ${(postOpen) ? `bg-blue-700` : `bg-gray-200`}
                text-gray-400 `}>
                 <button type="submit">Post</button>
              </div>
            </form>
            </div>
    )
}

export default Modal
