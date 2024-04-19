import { ReactNode } from "react"

interface childProps {
    tieude: string;
    sotien:number;

}

const Report:React.FC<childProps> = ({tieude,sotien}) => {
    return (<>
    <div className="h-36 w-64 bg-purple-600 rounded-lg relative my-11  ">
        <div className="h-16 w-16 bg-zinc-100 absolute -top-4 mx-4 rounded-lg  "></div>
        <div className="absolute right-0 bg-slate-50 h-full w-2/3 text-right font-serif rounded-e-lg ">
            <div className="text-xl tracking-tighter text-gray-500 font-semi mr-3 mt-2">{tieude}</div>
            <div className="uppercase text-3xl font-bold mr-3 my-1">{sotien}K</div>
        </div>

    </div>
    
    
    
    
    </>)

}

export default Report