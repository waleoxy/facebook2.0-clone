import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';

function Widgets() {

    const [contacts, setContacts] = useState([])

    const fetchContacts = async () =>{
        await fetch("https://randomuser.me/api/?results=20")
        .then(response => response.json())
        .then(data => setContacts(data.results))
    }

    useEffect(() => {
       fetchContacts()
    }, [])

    console.log('contact', contacts);

    return (
        <div className="hidden lg:flex flex-col w-96 ml-11 mr-3 p-6">
            <div className="flex justify-between items-center ">
                <h2 className="font-medium text-lg">Contacts</h2>
                <div className="flex space-x-5 justify-evenly items-center">
                    <div className=" flex items-center justify-center rounded-full
                                    h-8 w-8 cursor-pointer hover:bg-gray-200">
                        <VideoCameraIcon className="h-5"/>
                    </div>
                    <div className=" flex items-center justify-center rounded-full
                                    h-8 w-8 cursor-pointer hover:bg-gray-200">
                        <SearchIcon className="h-5"/>
                    </div>
                    <div className=" flex items-center justify-center rounded-full
                                    h-8 w-8 cursor-pointer hover:bg-gray-200">
                        <DotsHorizontalIcon className="h-5"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {contacts.map(contact => (
                    <Contact
                        key={contact.cell}
                        name={contact.name.first + contact.name.last}
                        image={contact.picture.thumbnail}
                    />
                ))}
            </div>
           
        </div>
    )
}

export default Widgets
