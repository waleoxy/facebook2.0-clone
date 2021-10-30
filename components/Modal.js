import React, { useState } from 'react';
import {useSession} from "next-auth/client";
import Image from "next/image"
import {VideoCameraIcon} from "@heroicons/react/solid"
import {GlobeIcon, ChevronDownIcon, ChevronLeftIcon,
        PhotographIcon, UserAddIcon, LocationMarkerIcon
        } from '@heroicons/react/solid';
import { ColorSwatchIcon, DotsHorizontalIcon, 
         EmojiHappyIcon, XIcon 
        } from '@heroicons/react/outline';

function Modal({clickClose}) {
    const[session] = useSession()
    const [postOpen, setPostOpen] = useState(false)
    

    const handleChange = (e) => {
        e.preventDefault();
        let post = e.target.value
        if(post.length > 0){
            setPostOpen(true)
        }else{
            setPostOpen(false)
        }
    }
    const handleModalClose = () => {

    }

    return (
        <div className=" flex flex-col justify-center">
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
              <textarea
                onChange={handleChange}
                rows="4"
                className="h-max text-2xl flex flex-1 p-2 focus:outline-none overflow-y-hidden"
                placeholder={`What's on your mind ${session.user.name}?`}/>
              
              <div className="flex items-center justify-between mt-4 pl-4 text-gray-400">
                  <div><ColorSwatchIcon className="h-7 pr-3"/></div>
                  <diV><EmojiHappyIcon className="h-7 pr-3"/></diV>
              </div>
              
              <div className="flex items-center justify-between
               p-4 h-13 mx-3 bg-white mt-4 border-2">
                  <div className="cursor-pointer">
                      <p>Add to your post</p>
                  </div>
                  <div className="flex space-x-3 pr-4 justify-evenly text-gray-500 h-7">
                      <PhotographIcon  className="text-green-700 cursor-pointer"/>
                      <UserAddIcon className="text-blue-700 cursor-pointer"/>
                      <EmojiHappyIcon className="text-yellow-400 cursor-pointer"/>
                      <LocationMarkerIcon className="text-red-500 cursor-pointer"/>
                      <p className="text-red-900 cursor-pointer">🎤</p>
                      <DotsHorizontalIcon className="cursor-pointer"/>
                  </div>
              </div>
              <div className={`p-2 mt-4 text-center mx-3 ${(postOpen) ? `bg-blue-700` : `bg-gray-200`}
                text-gray-400 `}>
                 <button>Post</button>
              </div>
            </div>
    )
}

export default Modal
