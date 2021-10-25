import React from 'react';
import Image from "next/image";
import { 
    BellIcon,
    ChevronDownIcon,
    ChatIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import{
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    SearchIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import {signOut, useSession} from "next-auth/client"

function Header() {
    const [session] = useSession();

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2
        lg:px-5 shadow-md">
            <div className="flex items-center">
               <Image 
                  alt="logo"
                  src="https://www.teahub.io/photos/full/172-1725552_facebook-logo-png.png"
                  width={40} height={40}
                  layout="fixed" 
               />
               <div className="flex items-center ml-3 rounded-full bg-gray-100 p-2">
                  <SearchIcon className="h-6 text-gray-600 rounded-full"/>
                  <input 
                    className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none
                    placeholder-gray-500 flex-shrink"
                    type="text"
                    placeholder="Seach Facebook"

                   />

               </div>
            </div>
            <div className="flex justify-center flex-grow">
              <div className="flex space-x-6 md: space-x-2 "> 
                <HeaderIcon isActive Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
             </div>
            </div>
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image
                  onClick ={signOut}
                  className="rounded-full cursor-pointer"
                  alt="profile pix"
                  src={session.user.image}
                  width={40} height={40}
                  layout="fixed" 
               />
                <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>            </div>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
                
            </div>
    )
}

export default Header
