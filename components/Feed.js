import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

function Feed({click, addModalInsert}) {
    return (
        <div className="flex-grow pb-44 pt-6 h-screen 
                        scrollbar-hide ml-24 overflow-y-auto">
            <div className="mx-auto max-w-max md:max-w-lg
            lg:max-w-2xl">
                <Stories/>
                <div className="px-10">
                    <InputBox addModalInsert={addModalInsert} click={click}/>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}

export default Feed
