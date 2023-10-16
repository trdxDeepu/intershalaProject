/* eslint-disable react/prop-types */
const BussinessCard = ({ cardData }) => {
    return (
      <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white relative flex flex-col justify-center gap-4 px-8 py-6 rounded-[20px]">
        

        <div className=" bg-[linear-gradient(96deg,_#0076ce_-6%,#9400d3_135%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-col w-12 items-center p-1 rounded-lg  ">
          <div className=" text-2xl font-['Poppins'] font-bold text-white w-min relative" >
            {cardData.id}
          </div>
      
        </div>
        <div className="flex flex-col gap-1 items-start">
          <p className="text-center text-xl font-['Poppins'] m-3 font-bold">
            {cardData.title}
          </p>
          <div className="text-center font-['Poppins'] leading-[26px] w-full">
            {cardData.description}
          </div>
        </div>
        <div className="bg-[#f4f4f4] flex flex-row justify-center pt-2 gap-10 items-start rounded-lg">
          <div className="flex flex-col mt-px gap-1 w-20 shrink-0 items-start">
            <p className="text-lg font-['Open_Sans'] font-bold leading-[28px] text-[#0076ce] w-min">
              Due Date
            </p>
            <p id="WithinDays" className="font-['Open_Sans'] leading-[26px]">
              {cardData.dueDate} <br />
              days{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-3/5 items-start mt-px mb-2">
            <p className="text-lg font-['Open_Sans'] font-bold leading-[28px] text-[#ff6666]">
              Penalty fees
            </p>
            <div className="self-stretch flex flex-col gap-1 items-start">
              <div className="font-['Open_Sans'] font-bold leading-[28px] w-min">
                <u>{cardData.penaltyFees.split(" ")[0]}</u>{" "}
                {cardData.penaltyFees.split(" ").slice(1).join(" ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BussinessCard;
  