import { useLocation, useNavigate } from "react-router-dom";

import RandomSuggestion from "../components/RandomSuggestion";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PersonaInfromation = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  const user = state.user;
  console.log(user);

  const servicesList = user.about.services.map((service, index) => (
    <li key={index}>{service}</li>
  ));
  const benefitsList = user.about.benefits.map((service, index) => (
    <li key={index}>{service}</li>
  ));

  return (
    <>
      <div className="flex flex-row gap-8 items-start mx-32 mt-20">
        <div className="flex flex-col justify-between mt-2 gap-8 w-2/5">
        <span className="cursor-pointer text-blue-500 flex space-x-8" onClick={()=>navigate('/')}>
        <AiOutlineArrowLeft className="m-1 "   />
        Back
      </span>
          <div className="flex flex-col gap-4 items-start">
            <p className="text-4xl font-['Poppins'] font-bold">{user.name}</p>

            <span className="text-xl font-['Poppins'] leading-[32px] w-full">
              {user.intro} <br />
            </span>
          </div>
          <div className="self-start flex flex-row gap-2 items-center">
            <img
              src="https://file.rendit.io/n/8dcmgSVS0T4BzNF5o1rx.svg"
              id="Starfill3"
              className="w-6 shrink-0"
            />
            <span
              id="Element12"
              className="text-xl font-['Poppins'] font-bold text-[#0076ce] self-start"
            >
              {user.rating}
              <span>({user.reviewCount})</span>
            </span>
          </div>
          <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col justify-center gap-8 h-56 shrink-0 px-6 rounded-[20px]">
            <div className="flex flex-row gap-12 items-center ml-1 mr-[107px]">
              <span className="text-xl font-['Poppins'] leading-[32px]">
                {user.taskComplexity}
              </span>
              <span className="text-right text-2xl font-['Poppins'] font-bold self-start">
                {user.price}
              </span>
            </div>
            <div className="flex flex-col ml-1 gap-6">
              <div className="flex flex-row mr-[140px] gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/NvLd8n2rETvCZBoMPlBX.svg"
                  id="Calendarline"
                  className="w-6 shrink-0"
                />
                <span className="text-xl font-['Poppins'] leading-[32px] self-start">
                  {user.deliveryTime}
                </span>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div
                  id="Component3"
                  className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-1/2 h-12 items-center rounded-lg"
                >
                  <span
                    id="Text31"
                    className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
                  >
                    Request Proposal
                  </span>
                </div>
                <div
                  id="Component4"
                  className="border-solid border-[#0076ce] overflow-hidden flex flex-col w-1/2 h-12 items-center py-2 border-2 rounded-lg"
                >
                  <span
                    id="Text32"
                    className="text-center font-['Poppins'] font-bold leading-[26px] text-[#0076ce]"
                  >
                    Chat with me
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col justify-center gap-16 items-center pt-6 pb-5 px-6 rounded-[20px]">
            <div className="self-stretch flex flex-col ml-1 gap-4 items-start">
              <p className="text-4xl font-['Poppins'] font-bold">
                What people say?
              </p>
              <span className="text-xl font-['Poppins'] leading-[32px] w-full">
                I cannot express enough gratitude for the support Micheal has
                provided in managing my personal finances. Their attention to
                detail and deep understanding of financial markets has ensured
                that my investments are in safe hands. I highly recommend their
                services to anyone seeking financial guidance.
              </span>
            </div>
            <img
              src="https://file.rendit.io/n/36eg395ndwHDuvKnqUmB.svg"
              className="w-20"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 w-3/5">
          <div
            className="bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end h-[412px] shrink-0 items-center py-5"
            style={{
              backgroundImage: `url(${user.image})`, // Set the background image using user.image
            }}
          >
            <img
              src="https://file.rendit.io/n/36eg395ndwHDuvKnqUmB.svg"
              className="w-20"
            />
          </div>
          <div className="flex flex-col gap-5 items-start">
            <div className="text-4xl font-['Poppins'] font-bold">
              About {user.name}
            </div>
            <div className="self-stretch flex flex-row justify-between items-start">
              <div className="flex flex-col gap-2 items-start">
                <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
                  FROM
                </div>
                <div className="text-xl font-['Poppins'] leading-[34px]">
                  {user.about.from}
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
                  PARTNER SINCE
                </div>
                <div className="text-xl font-['Poppins'] leading-[34px]">
                  {user.about.partnerSince}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-2/5 items-start">
                <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
                  AVERAGE RESPONSE TIME
                </div>
                <div className="text-xl font-['Poppins'] leading-[34px]">
                  {user.about.averageResponseTime}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
              ABOUT
            </div>
            <div className="text-xl font-['Poppins'] leading-[34px] w-full">
              {user.about.description}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative flex flex-col items-end">
              <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] absolute top-0 left-0 h-8 w-full">
                SERVICES I OFFER
              </div>
              <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] relative w-2/5">
                WHY ME?
              </div>
            </div>
            <div className="flex flex-row mr-16 gap-8 items-start">
              <div className="text-xl font-['Poppins'] leading-[36px] w-3/5">
                {servicesList}
              </div>
              <div className="text-xl font-['Poppins'] leading-[34px] ">
                {benefitsList}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-stretch mx-32 mt-32">
        <div className="text-4xl font-['Poppins'] font-bold">
          Recommended for you
        </div>
        <div className="">
          <RandomSuggestion />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonaInfromation;
