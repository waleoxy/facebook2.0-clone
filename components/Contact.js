import React from 'react';
import Image from "next/image"

function Contact({image, name}) {
    return (
        <div className="flex items-center space-x-3 mt-1 cursor-pointer
                        hover:shadow hover:bg-gray-200 p-1 w-full rounded-lg">
            <Image
                className="rounded-full"
                src={image}
                alt="pix"
                height={30}
                width={30}
            />
            <p className="font-semibold text-base">{name}</p>
        </div>
    )
}

export default Contact
