import { useSession } from 'next-auth/client'
import React from 'react';
import Image from 'next/image';
import {sideBarLinks} from "../context/sideBarLinks"
import SideBarRow from './SideBarRow';

function SideBar() {
    const [session, loading] = useSession();

    return (
        <div className="ml-3 w-[300px] xl: max-w-[550px] hover:overflow-y-scroll">
            <div className="p-2 inline-flex w-full mt-5 space-x-2
                cursor-pointer items-center hover:bg-gray-200">
                <Image
                    className="rounded-full mr-3"
                    src={session.user.image}
                    alt="profile pix"
                    width={30}
                    height={30}
                    layout="fixed"
                />
                <p className="font-semibold">{session.user.name}</p>
            </div>
            <div className="flex flex-col ">
                {sideBarLinks.map(link =>(
                    <SideBarRow
                        key={link.id}
                        icon={link.icon}
                        title={link.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar
