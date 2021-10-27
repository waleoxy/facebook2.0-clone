import React from 'react';
import Image from 'next/image';

function StoryCard({image, name, profilePic}) {
    return (
        <div className="relative lg:h-56 lg:w-32 cursor-pointer 
                md:h-20 md:w-20 h-14 w-14 overflow-x p-3">
            <Image
                className="absolute rounded-full opacity-0
                lg:opacity-100 z-50 top-10 "
                src={image}
                alt="pix"
                width={50} 
                height={50}
                layout="fixed"
            />
            <Image
                className="object-cover rounded-full
                filter brightness-75 lg:rounded-3xl" 
                src={image}
                alt="pix"
                layout="fill"
                
            />

        </div>
    )
}

export default StoryCard
