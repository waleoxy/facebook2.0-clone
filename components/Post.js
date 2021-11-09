import React from 'react';
import Image from "next/image"
import { ChatAltIcon, DotsHorizontalIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

function Post({id, name, email, message, image, timestamp, postPix}) {
    return (
        <div className="flex flex-col px-4 pt-5 mt-6 border-t-4">
            <div className=" bg-white rounded-2xl shadow-sm">
                <div className="flex justify-between items-center"> 
                    <div className="flex items-center space-x-2">
                        <div>
                            <Image
                                className="rounded-full"
                                src={image}
                                alt="pix"
                                width={40} 
                                height={40}
                                layout="fixed"
                            />
                        </div>
                        <div>
                            <p>{name}</p>
                            <p className="text-xs text-gray-400">
                                {new Date(timestamp.toDate()).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            <p className="bg-white text-xl max-h-full
                             text-gray-600">{message}</p>
            <div>
                {postPix && ( 
                    <img
                    className="w-full"
                    src={postPix}
                    alt="post pix"
                />
                )}
            </div>
            <div className="flex justify-between text-gray-400 border-t
            rounded-b-2xl">
                <div className="inputIcon">
                    <ThumbUpIcon className="h-5"/>
                    <p className="text-xs sm:text-base">Like</p>
                </div>

                <div className="inputIcon">
                    <ChatAltIcon className="h-5"/>
                    <p className="text-xs sm:text-base"> Comment</p>
                </div>
                
                <div className="inputIcon">
                    <ShareIcon className="h-5"/>
                    <p className="text-xs sm:text-base">Share</p>
                </div>
                
            </div>
        </div>
    )
}

export default Post
