import React from "react";
import { Button, Avatar } from "antd";


const Navbar = () => {
    return(
        <>
        <div className=" shadow-2 h-14 w-4/5 text-center float-right">
            <div className="flex justify-between container mx-auto h-full items-center">
            <Button className="ml-4">Nguyen Phuc Dinh</Button>
            <div className="flex items-center  ">
                <p className="uppercase mr-3 text-pretty text-sm font-mono font-bold  text-blue-500 space-x-2">admin</p>
            <Avatar className="mr-4"></Avatar>
           
            </div>
           
            </div>
            
        </div>
        </>
    )
}




export default Navbar
