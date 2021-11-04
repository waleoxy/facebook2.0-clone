import { DeviceMobileIcon, PlusCircleIcon } from '@heroicons/react/outline'
import React from 'react'

function PixInsertModal({pixToPost, addPixToPost}) {
    return (
        <div  className="bg-white mx-5 border-2 rounded-lg " >
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer
        relative rounded-lg m-3 h-44 text-xl text-gray-500">
            <div className="">
                {(pixToPost) && <image src={pixToPost} alt="pix"/>}                  
            </div>
            <div onClick={addPixToPost} className="absolute flex flex-col justify-center
            items-center w-full top-8">
                <PlusCircleIcon className="h-9"/>
                <p>Add Photo/Video</p>
            </div>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded-lg m-3 h-14 text-xl text-gray-500">
            <div className="flex items-center">
                <div className="rounded-full bg-white flex items-center 
                    justify-center h-9 w-9 ml-3"> 
                    <DeviceMobileIcon className="h-6"/> 
                </div>
                <p className="text-base pr-5">Add photos from your mobile device</p>
            </div>
            <button className="bg-gray-200 mr-4 px-3 py-1 rounded-lg hover:bg-gray-300 text-base">Add</button>
            
        </div>
    </div>
    )
}

export default PixInsertModal
