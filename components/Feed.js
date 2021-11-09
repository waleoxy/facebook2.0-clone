import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

function Feed({click, addModalInsert}) {
    return (
        <div className="flex-grow pb-44 pt-6 h-screen mr-4
        xl:mr-40 overflow-y-auto">
            <div className="mx-auto max-w-max md:max-w-lg
            lg:max-w-2xl">
                <Stories/>
                <InputBox addModalInsert={addModalInsert} click={click}/>
                <Posts/>
            </div>
        </div>
    )
}

export default Feed
