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

function Header() {
    return (
        <div className>
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
                    className="flex ml-2 items-center bg-transparent outline-none"
                    type="text"
                    placeholder="Seach Facebook"

                   />

               </div>
            </div>
            <div className="flex justify-center flex-grow">
              <div className="flex space-x-2 md:space-x-6 lg:space-x-12"> 
                <HeaderIcon Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
             </div>
            </div>
            <div>
           
            </div>
        </div>
    )
}

export default Header
