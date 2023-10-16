/* eslint-disable react/no-unescaped-entities */
import BussinessItem from "../components/BussinessItem";

const Joinus = () => {
  const data = [
    {
      id: "1st",
      title: "Commencement of business",
      description:
        "Invested shareholders must confirm payment and office address",
      dueDate: "Within 180 days",
      penaltyFees: "₹50,000 for the company, ₹1,000 /day for directors",
    },
    {
      id: "2nd",
      title: "Auditor Appointment",
      description: "Company informs new auditor and submits ADT.1 form to ROC.",
      dueDate: "Within 30 days",
      penaltyFees: "₹300 per month.",
    },
    {
      id: "3rd",
      title: "DIN eKYC",
      description:
        "Directors share personal information for identification & verification ",
      dueDate: "Every Year",
      penaltyFees: "₹5000 one time",
    },
    {
      id: "4th",
      title: "DPT-3",
      description:
        "Companies report money taken from people to ROC; auditors confirm details.",
      dueDate: "Within 30 days  ",
      penaltyFees: "₹300 per month.",
    },
    {
      id: "5th",
      title: "MCA Form AOC-4",
      description:
        "It's like an official report card for a company's documents",
      dueDate: "On or Before 30th November  ",
      penaltyFees: "₹200 per day (No upper limit)*",
    },
    {
      id: "6th",
      title: "MCA Form MGT-7",
      description:
        "Companies must annually report activities and finances to the registrar.",
      dueDate: "On or Before 31st December",
      penaltyFees: "₹200 per day(No upper limit)* ",
    },
  ];

  return (
    <div className=" relative flex flex-col justify-end w-full items-start pt-[536px] pb-20 px-34 ">
      <p className=" text-center text-6xl font-['Poppins'] font-bold absolute top-0 left-[439px] h-24 w-[553px]">
        Want to
        {"  "}
        <span className="text-[#4a3bd1]">Join</span> Us?
      </p>

      <p className="text-center text-2xl font-['Poppins'] leading-[38px] absolute top-[114px] left-64 h-10 w-[896px]">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>

      <div className=" w-[1542px] h-[757px] bg-[url(/vector-13.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-20 left-0 flex flex-row gap-6 items-start pt-32 px-32">
        {/* Render the BussinessCard component multiple times */}

        <div className=" mt-[144px] text-base font-['Poppins'] leading-[26px] absolute top-[845px] left-32 mt-34 h-12 w-5/6">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
          <span className="font-bold">every day</span> until you file the form .
          There is no maximum penalty amount. So, if you don't file the form for
          a year, you will owe ₹73,000 per form
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 ">
          <BussinessItem data={data} />
        </div>
      </div>
    </div>
  );
};

export default Joinus;
