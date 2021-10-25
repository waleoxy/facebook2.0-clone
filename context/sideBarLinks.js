import {
    ChevronDownIcon,
    ShoppingBagIcon,
    
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,UserGroupIcon
} from "@heroicons/react/solid";

export const sideBarLinks = [
    {
        id: 1,
        icon: <UsersIcon className="text-blue-500"/>,
        title:'Friends'
    },
    {
        id: 2,
        icon: <UserGroupIcon className="rounded-full bg-blue-500 text-white"/>,
        title:'Groups'
    },
    {
        id: 3,
        icon: <ShoppingBagIcon className="text-blue-500"/>,
        title:'Marketplace'
    },
    {
        id: 4,
        icon: <DesktopComputerIcon className="text-blue-500"/>,
        title:'Watch'
    },
    {
        id: 5,
        icon: <CalendarIcon className="text-blue-500"/>,
        title:'Events'
    },
    {
        id: 6,
        icon: <ClockIcon className="text-blue-500"/>,
        title:'Memories'
    },
    {
        id: 7,
        icon: <ChevronDownIcon className="text-blue-500"/>,
        title:'See More'
    },

]