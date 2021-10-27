import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';

function Stories() {
    const [storiesData, setStoriesData] = useState([])

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
