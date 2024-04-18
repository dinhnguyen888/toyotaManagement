import React, { useState } from "react";
import { ReactComponent as Logo } from '../image/car-svgrepo-com.svg';
import { Link } from "react-router-dom";
import { Button } from "antd";

const Sidebar: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
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
                            className={`w-full h-11 mt-11 bg-neutral-700 text-white border-neutral-700 rounded-md uppercase font-bold flex justify-start ${activeButton === 'dashboard' ? 'text-amber-500' : ''}`}
                            onClick={() => handleButtonClick('dashboard')}
                        >
                            Dashboard
                        </Button>
                    </Link>

                    <Link to='/nhansu'>
                        <Button
                            className={`w-full h-11 mt-11 bg-neutral-700 text-white border-neutral-700 rounded-md uppercase font-bold flex justify-start ${activeButton === 'nhansu' ? 'text-amber-500' : ''}`}
                            onClick={() => handleButtonClick('nhansu')}
                        >
                            Nhân sự
                        </Button>
                    </Link>

                    <Link to='/hangton'>
                        <Button
                            className={`w-full h-11 mt-11 bg-neutral-700 text-white border-neutral-700 rounded-md uppercase font-bold flex justify-start ${activeButton === 'hangton' ? 'text-amber-500' : ''}`}
                            onClick={() => handleButtonClick('hangton')}
                        >   
                            Hàng tồn
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;