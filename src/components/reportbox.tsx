import { ReactNode } from "react"
import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Chartpie from "./chart";
import UserIcon from '../image/pngwing.com.png'
import Money from '../image/money.png';
import Product from '../image/product.png';
import Employee from '../image/employee.png'
import ComposeChart from "./conposechart";

interface childProps {
    tieude: string;
    sotien:number;
    topIcon: ReactNode;
}

const ReportBox:React.FC<childProps> = ({tieude,sotien,topIcon}) => {
    return (<>
    <div className="h-36 w-64 rounded-lg relative my-11 shadow-lg bg-zinc-300 ">
        <div className="h-14 w-14 bg-zinc-100 absolute -top-4 mx-4 rounded-lg  ">{topIcon}</div>
        <div className="absolute right-0 bg-slate-50 h-full w-2/3 text-right font-serif rounded-e-lg ">
            <div className="text-xl tracking-tighter text-gray-500 font-semi mr-3 mt-2">{tieude}</div>
            <div className="uppercase text-3xl font-bold mr-3 my-1">{sotien}K</div>
        </div>

    </div>
    
    
    

    </>)

}



const data = [
  {
    subject: 'Thái độ',
    A: 120,
    B: 110,
    C: 115,
    fullMark: 150,
  },
  {
    subject: 'Kĩ năng',
    A: 98,
    B: 130,
    C: 150,
    fullMark: 150,
  },
  {
    subject: 'Hiệu suất',
    A: 86,
    B: 130,
    C: 150,
    fullMark: 150,
  },
  {
    subject: 'Chất lượng',
    A: 99,
    B: 100,
    C: 150,
    fullMark: 150,
  },
  {
    subject: 'Đóng góp',
    A: 85,
    B: 90,
    C: 100,
    fullMark: 150,
  },
  {
    subject: 'Tốc độ phát triễn',
    A: 65,
    B: 85,
    C: 80,
    fullMark: 150,
  },
];

console.log(data);

 function EmployeeChart() {
  return (
    <RadarChart cx={300} cy={150} outerRadius={100} width={500} height={400} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Bao" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Khanh" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Radar name="Dinh" dataKey="C" stroke="pink" fill="pink" fillOpacity={0.6} />
  <Legend />
</RadarChart>

  );
}




const Report: React.FC = () =>{
    return(
        <>
        <div className="flex justify-between mx-auto ">
     <ReportBox tieude={`Total Profit`} sotien={2323} topIcon={<img src={Money}  />} />
     <ReportBox tieude={`Total user`} sotien={2323} topIcon={<img src={UserIcon}/>} />
     <ReportBox tieude={`Total product`} sotien={2323} topIcon={<img src={Product}/>} />
     <ReportBox tieude={`Total Employee`} sotien={2323} topIcon={<img src={Employee} />} />

     </div>



     
     <div className="bg-slate-100 rounded-lg " >
      <h1 className=" ml-11 uppercase font-serif mb-10 font-bold text-red-500 ">Doanh số và sản phẩm</h1>
       <div className="flex justify-center"><Chartpie />
        <div className="float-right w-full h-56">
          <p>Chú thích:</p>
          <div className="flex justify-start"><div className="rounded-sm w-8 h-4 mt-1 mr-3  " style={{backgroundColor:'#8884d8'}}></div><p>% doanh số bán hàng ứng với mỗi xe</p></div>
          <div className="flex justify-start"><div className="rounded-sm w-8 h-4 mt-1 mr-3" style={{backgroundColor:'#82ca9d'}}></div><p >Xe còn tồn kho</p></div>
          
        </div>
       </div> 
       
       </div>





      <div className=" bg-slate-100 rounded-lg my-11">
        <h1 className="font-bold uppercase ml-11 font-serif mb-8 text-blue-500 ">nhân viên và khách hàng</h1>
        <div className="flex justify-center">
          <ComposeChart />
          <EmployeeChart />
        </div>
      

      </div>
     </>
    )
}
export default Report



