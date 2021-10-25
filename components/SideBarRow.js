import React from 'react'

function SideBarRow({icon, title}) {
    return (
        <div className="inline-flex space-x-2 p-2
        w-full cursor-pointer hover:bg-gray-200">
            <div className=" h-7 w-7 mr-3">
                {icon}
            </div>
            <p className="h-7 w-max font-semibold">{title}</p>
        </div>
    )
}

export default SideBarRow
