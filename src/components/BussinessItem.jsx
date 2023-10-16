/* eslint-disable react/prop-types */
import BussinessCard from "./BussinessCard";

const BussinessItem = ({data}) => {
 
  return (
    <>
    {
        data.map((item)=>(
            <BussinessCard key={item.id} cardData={item}/>
        ))
    }
    </>
  )
};

export default BussinessItem;
