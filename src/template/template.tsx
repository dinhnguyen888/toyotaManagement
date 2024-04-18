import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

interface TemplateProps {
    children: ReactNode;
}

const Template:React.FC<TemplateProps> = ({children}) => {
    return (
    <>  
        <Sidebar />
    <div>
       <Navbar />
       <div className="h-full w-4/5 bg-slate-100 relative  -z-10 float-right ">
{children}
       </div>
    </div>
      
      
      
    
       

   
    </>
    );
}

export default Template;
