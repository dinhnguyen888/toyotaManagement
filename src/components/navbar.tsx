import React, { useState } from "react";
import { Button, Avatar } from "antd";
import { ReactComponent as Logo } from '../image/car-svgrepo-com.svg';
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    const [clickedItem, setClickedItem] = useState("");

    const handleClick = (itemName: string) => {
        setClickedItem(itemName);
    };

    return (
        <>
            <div className="fixed top-5 h-10/12 w-1/6 mx-4 my-4 bg-neutral-700 text-center rounded-xl">
                <div className="h-full mx-4 my-4">
                    <div className="text-center items-center flex mx-1 border-b-2">
                        <Logo className="w-10 h-10" />
                        <h1 className="text-sm font-serif uppercase text-white mb-5">
                            Toyota Management
                        </h1>
                    </div>

                    <Link to='/dashboard'>
                        <Button
                            className={`w-full h-11 mt-9 bg-neutral-700 text-white border-neutral-700 rounded-md uppercase font-bold flex justify-start ${clickedItem === 'dashboard' ? 'bg-yellow-500' : ''}`}
                            onClick={() => handleClick('dashboard')}
                        >
                            Dashboard
                        </Button>
                    </Link>
                    <Link to='/danhsach'>
                        <Button
                            className={`w-full h-11 mt-9 bg-neutral-700 text-white border-neutral-700 rounded-md uppercase font-bold flex justify-start ${clickedItem === 'danhsach' ? 'bg-yellow-500' : ''}`}
                            onClick={() => handleClick('danhsach')}
                        >
                           Danh sách
                        </Button>
                    </Link>

                    <Link to='/'>
                        <Button
                            className={`w-full h-11 mt-9 bg-neutral-700 text-white border-neutral-700 rounded-md uppercase font-bold flex justify-start ${clickedItem === 'upgrade' ? 'bg-yellow-500' : ''}`}
                            onClick={() => handleClick('upgrade')}
                        >
                            Upgrade Latter...
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return(
        <>
            <Sidebar />
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
    );
};

export default Navbar;
