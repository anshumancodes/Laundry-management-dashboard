import React , {useEffect,useState} from "react";
import SideBar from "../global/SideBar";
import Selector from "../global/Selector";
import OrderAnalytics from "./OrderAnalytics";

const Inventory = () => {

 const [activeorders,setactiveorders]=useState()
 const [receivedorders,setreceiveorders]=useState()
 const [yetreceivedorders,setyetreceiveorders]=useState()

 useEffect(()=>{
  const ActiveOrderData=async()=>{
   try{
    const response=await fetch("http://localhost:8000/inventory");
    const data = await response.json();
    console.log(data.received_Total)
    setactiveorders(data.active_count);
    setreceiveorders(data.received_Total);
    setyetreceiveorders(data.yet_toRecieve);

    
   
   }
   catch(error){
    console.log(error)

   }
  }
  ActiveOrderData();
 },[])





  return (
    <div>
      <div className="flex gap-2 flex-col lg:flex-row">
        <SideBar />
        <div className="mt-5 flex flex-col gap-[4vh]  w-full">
          <Selector activeorders={activeorders}/>
          <div className="flex flex-col gap-2 px-10 py-5 font-semibold text-[1.5rem] bg-[#0C121C] text-white w-[1000px]">

          <OrderAnalytics ActiveOrders={activeorders}  ReceivedOrders={receivedorders} YetToreceive={yetreceivedorders} />

            
        
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
