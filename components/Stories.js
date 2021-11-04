import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';
import Image from 'next/image';
import { PlusCircleIcon } from '@heroicons/react/solid';


function Stories() {
    const [storiesData, setStoriesData] = useState([]);
    const [session] = useSession();

    const fetchData = async () =>{
        await fetch("https://randomuser.me/api/?results=4")
        .then(response =>response.json())
        .then(data => setStoriesData(data.results))
        .catch(err => { console.error(err)})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="flex justify-center h-200 w-99 space-x-3 mx-auto">
             <diV  className="relative lg:h-56 lg:w-32 cursor-pointer 
                md:h-20 md:w-20 h-14 w-14 bg-white rounded-xl overflow-x
                transition duration-200 transform ease-in hover:scale-105
                 ">
                    <Image
                        className="rounded-t-xl"
                        src={session.user.image}
                        alt="pix"
                        width={150}
                        height={200}
                        objectFit="fill"
                       
                                
                    />
                <div className="absolute rounded-full top-36 left-10 bg-white cursor-pointer
                     ">
                    <PlusCircleIcon className="h-11 text-blue-500"/>
                </div>
                <p className="pl-5 mt-5 text-sm font-medium">
                    Create Story</p>

            </diV>
            {storiesData.map(story =>(
                <StoryCard
                    key={story.cell}
                    image={story.picture.large}
                    profilePic={story.picture.thumbnail}
                    name={story.name.first + story.name.last}
                />
            ))}
        </div>
    )
}

export default Stories
