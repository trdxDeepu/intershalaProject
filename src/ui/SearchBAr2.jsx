// import { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useUserContext } from "../context/UserContext";

// // ...

// function SearchPage() {
//   const { userData } = useUserContext();
//   const [searchQuery, setSearchQuery] = useState("");
//   const history = useHistory();

//   const handleSearch = () => {
//     const foundUser = userData.find(user => user.name === searchQuery);

//     if (foundUser) {
//       history.push(`/user/${foundUser.id}`); // Navigate to the user details page
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {userData.map(user => (
//           <li key={user.id}>
//             <Link to={`/user/${user.id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchPage

// // In your App component or routing configuration


import React from 'react'

const SearchBAr2 = () => {
  return (
    <div
  id="MichaelJacksonRoot"
  className="overflow-hidden bg-[#fafbfc] flex flex-col justify-between gap-32 w-full"
>
  <div className="flex flex-col gap-20">
    <div
      id="OverallOuterBox"
      className="bg-white/0 flex flex-row justify-between h-20 shrink-0 items-center px-32"
    >
      <div className="flex flex-row gap-12 w-1/2 items-start">
        <img src="" id="Image1" />
        <div className="flex flex-row justify-between mt-2 w-[475px] items-center">
          <div className="flex flex-row gap-px items-center">
            <div className="text-lg font-['Poppins'] font-bold self-start">
              Solutions
            </div>
            <img
              src="https://file.rendit.io/n/5tNZHZFeKG10wJRplRjC.svg"
              className="w-6 shrink-0"
            />
          </div>
          <div className="flex flex-row gap-px items-center">
            <div className="text-lg font-['Poppins'] font-bold self-start">
              Features
            </div>
            <img
              src="https://file.rendit.io/n/5tNZHZFeKG10wJRplRjC.svg"
              className="w-6 shrink-0"
            />
          </div>
          <div
            id="Text1"
            className="text-lg font-['Poppins'] font-bold leading-[30px] self-start"
          >
            Blogs
          </div>
          <div className="flex flex-row gap-px w-20 shrink-0 items-center">
            <div className="text-lg font-['Poppins'] font-bold self-start">
              About
            </div>
            <img
              src="https://file.rendit.io/n/5tNZHZFeKG10wJRplRjC.svg"
              className="w-6 shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-start">
        <button
          id="SignUpButton"
          className="border-solid border-[#0076ce] overflow-hidden flex flex-col w-24 shrink-0 h-12 items-center py-2 border-2 rounded-lg"
        >
          <div
            id="SignUp"
            className="text-center font-['Poppins'] font-bold leading-[26px] text-[#0076ce]"
          >
            Login
          </div>
        </button>
        <button
          id="SignUpButton1"
          className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-24 shrink-0 h-12 items-center rounded-lg"
        >
          <div
            id="SignUp1"
            className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
          >
            Register
          </div>
        </button>
      </div>
    </div>
    <div className="flex flex-row gap-8 items-start mx-32">
      <div className="flex flex-col justify-between mt-2 gap-8 w-2/5">
        <div className="flex flex-col gap-4 items-start">
          <div className="text-4xl font-['Poppins'] font-bold">
            Michael Jackson
          </div>
          <div className="text-xl font-['Poppins'] leading-[32px] w-full">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist <br />
            you effectively
          </div>
        </div>
        <div className="self-start flex flex-row gap-2 items-center">
          <img
            src="https://file.rendit.io/n/FDJuG8KMkUqnpC5bIB1E.svg"
            id="Starfill3"
            className="w-6 shrink-0"
          />
          <div
            id="Element12"
            className="text-xl font-['Poppins'] font-bold text-[#0076ce] self-start"
          >
            4.8 <span>(89)</span>
          </div>
        </div>
        <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col justify-center gap-8 h-56 shrink-0 px-6 rounded-[20px]">
          <div className="flex flex-row gap-12 items-center ml-1 mr-[107px]">
            <div className="text-xl font-['Poppins'] leading-[32px]">
              Basic to complex tasks
            </div>
            <div className="text-right text-2xl font-['Poppins'] font-bold self-start">
              ₹4,370
            </div>
          </div>
          <div className="flex flex-col ml-1 gap-6">
            <div className="flex flex-row mr-[140px] gap-2 items-center">
              <img
                src="https://file.rendit.io/n/FMjAzMmRltSzOqXSEpiB.svg"
                id="Calendarline"
                className="w-6 shrink-0"
              />
              <div className="text-xl font-['Poppins'] leading-[32px] self-start">
                Delivers the job within 2 days
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <div
                id="Component3"
                className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-1/2 h-12 items-center rounded-lg"
              >
                <div
                  id="Text31"
                  className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
                >
                  Request Proposal
                </div>
              </div>
              <div
                id="Component4"
                className="border-solid border-[#0076ce] overflow-hidden flex flex-col w-1/2 h-12 items-center py-2 border-2 rounded-lg"
              >
                <div
                  id="Text32"
                  className="text-center font-['Poppins'] font-bold leading-[26px] text-[#0076ce]"
                >
                  Chat with me
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col justify-center gap-16 items-center pt-6 pb-5 px-6 rounded-[20px]">
          <div className="self-stretch flex flex-col ml-1 gap-4 items-start">
            <div className="text-4xl font-['Poppins'] font-bold">
              What people say?
            </div>
            <div className="text-xl font-['Poppins'] leading-[32px] w-full">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/riXxTI8Y920E5Qv9EUDi.svg"
            className="w-20"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 w-3/5">
        <div className="bg-[undefined] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end h-[412px] shrink-0 items-center py-5">
          <img
            src="https://file.rendit.io/n/dfMfHpGxzO5zTIrRPoCd.svg"
            className="w-20"
          />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <div className="text-4xl font-['Poppins'] font-bold">
            About Michael Jackson
          </div>
          <div className="self-stretch flex flex-row justify-between items-start">
            <div className="flex flex-col gap-2 items-start">
              <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
                FROM
              </div>
              <div className="text-xl font-['Poppins'] leading-[34px]">
                INDIA
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
                PARTNER SINCE
              </div>
              <div className="text-xl font-['Poppins'] leading-[34px]">
                2011
              </div>
            </div>
            <div className="flex flex-col gap-2 w-2/5 items-start">
              <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
                AVERAGE RESPONSE TIME
              </div>
              <div className="text-xl font-['Poppins'] leading-[34px]">
                30 minutes
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <div className="font-['Poppins'] font-bold leading-[34px] text-[#999999] w-full">
            ABOUT
          </div>
          <div className="text-xl font-['Poppins'] leading-[34px] w-full">
            I am a Professional Charted Accountant here to offer professional
            services of accounting and finance, financial statements,
            Bookkeeping in affordable price.
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
              • Financial accounting
              <br />• Financial statements
              <br />• Bookkeeping
              <br />• Accounting and finance
              <br />• Corporate Finance
              <br />• Maintain Charts of Accounts
              <br />• Profit and loss statements
              <br />• Bank Reconciliation
              <br />• Balance Sheets
            </div>
            <div className="text-xl font-['Poppins'] leading-[34px]">
              • One-time delivery
              <br />• 24/7 customer support
              <br />• Error-free documents
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-8 items-start mx-32">
    <div className="text-4xl font-['Poppins'] font-bold">
      Recommended for you
    </div>
    <div className="self-stretch flex flex-row justify-between items-start">
      <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col pb-5 gap-8 items-center rounded-[20px]">
        <div className="self-start flex flex-col gap-4 w-[405px] items-start">
          <img src="" />
          <div className="self-stretch flex flex-col gap-3 items-start ml-5 mr-4">
            <div className="self-stretch flex flex-col ml-px gap-1 items-start">
              <div className="self-stretch flex flex-row justify-between items-start">
                <div className="text-xl font-['Poppins'] font-bold">
                  Michael Jackson
                </div>
                <div className="text-right text-xl font-['Poppins'] font-bold">
                  ₹4,370
                </div>
              </div>
              <div className="font-['Poppins'] w-full">
                I will do business evaluation and corporate services
              </div>
            </div>
            <div className="flex flex-row gap-1 w-24 items-start">
              <img
                src="https://file.rendit.io/n/FDJuG8KMkUqnpC5bIB1E.svg"
                id="Starfill"
                className="mb-px w-6 shrink-0"
              />
              <div
                id="Element4"
                className="font-['Poppins'] font-bold text-[#0076ce] mt-px"
              >
                4.8 <span>(89)</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Component"
          className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-[365px] h-12 shrink-0 items-center rounded-lg"
        >
          <div
            id="Text2"
            className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
          >
            View services
          </div>
        </div>
      </div>
      <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col pb-5 gap-8 items-center rounded-[20px]">
        <div className="self-start flex flex-col gap-4 w-[405px] items-start">
          <img src="" />
          <div className="self-stretch flex flex-col gap-3 items-start ml-5 mr-4">
            <div className="self-stretch flex flex-col ml-px gap-1 items-start">
              <div className="self-stretch flex flex-row justify-between items-start">
                <div className="text-xl font-['Poppins'] font-bold">
                  Stevie Wonder
                </div>
                <div className="text-right text-xl font-['Poppins'] font-bold">
                  ₹4,263
                </div>
              </div>
              <div className="font-['Poppins'] w-full">
                I will do business evaluation and corporate services
              </div>
            </div>
            <div className="flex flex-row gap-1 w-24 items-start">
              <img
                src="https://file.rendit.io/n/FDJuG8KMkUqnpC5bIB1E.svg"
                id="Starfill1"
                className="mb-px w-6 shrink-0"
              />
              <div
                id="Element7"
                className="font-['Poppins'] font-bold text-[#0076ce] mt-px"
              >
                5.0 <span>(62)</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Component1"
          className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-[365px] h-12 shrink-0 items-center rounded-lg"
        >
          <div
            id="Text3"
            className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
          >
            View services
          </div>
        </div>
      </div>
      <div className="shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] bg-white flex flex-col pb-5 gap-8 items-center rounded-[20px]">
        <div className="self-start flex flex-col gap-4 w-[405px] items-start">
          <img src="" />
          <div className="self-stretch flex flex-col gap-3 items-start ml-5 mr-4">
            <div className="self-stretch flex flex-col ml-px gap-1 items-start">
              <div className="self-stretch flex flex-row justify-between items-start">
                <div className="text-xl font-['Poppins'] font-bold">
                  Ray Charles
                </div>
                <div className="text-right text-xl font-['Poppins'] font-bold">
                  ₹2,586
                </div>
              </div>
              <div className="font-['Poppins'] w-full">
                I will do business evaluation and corporate services
              </div>
            </div>
            <div className="flex flex-row gap-1 w-24 items-start">
              <img
                src="https://file.rendit.io/n/FDJuG8KMkUqnpC5bIB1E.svg"
                id="Starfill2"
                className="mb-px w-6 shrink-0"
              />
              <div
                id="Element10"
                className="font-['Poppins'] font-bold text-[#0076ce] mt-px"
              >
                4.3 <span>(189)</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Component2"
          className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-[365px] h-12 shrink-0 items-center rounded-lg"
        >
          <div
            id="Text4"
            className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
          >
            View services
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col">
    <div
      id="Footer"
      className="bg-[linear-gradient(96deg,_#0076ce_-20%,#9400d3_232%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-8 h-[341px] shrink-0 pt-8 pb-10 px-32"
    >
      <div className="flex flex-row mr-10 gap-[111px] items-start">
        <div className="flex flex-row justify-between mr-3 gap-24 items-start">
          <div className="flex flex-col gap-20 w-[273px] shrink-0 h-[209px] items-start">
            <div className="self-stretch flex flex-col gap-4 items-start">
              <img src="" id="Image2" className="mix-blend-luminosity" />
              <div className="text-sm font-['Open_Sans'] leading-[22px] text-white ml-px w-full">
                India's first platform dedicated to simplifying partner search
              </div>
            </div>
            <div className="flex flex-row ml-1 gap-10 w-12 items-start">
              <div className="text-center text-sm font-['Open_Sans'] underline text-black/0">
                f
              </div>
              <div className="text-center text-sm font-['Open_Sans'] underline text-black/0">
                f
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-2 w-16 shrink-0 h-32 items-start">
            <div className="text-sm font-['Open_Sans'] font-bold text-white">
              COMPANY
            </div>
            <div
              id="Text27"
              className="font-['Open_Sans'] leading-[22px] text-white"
            >
              About{" "}
            </div>
            <div className="font-['Open_Sans'] leading-[22px] text-white">
              Pricing
            </div>
            <div className="font-['Open_Sans'] leading-[22px] text-white">
              Careers
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-20 shrink-0 h-[171px] items-start mt-2 mr-px">
          <div className="text-sm font-['Open_Sans'] font-bold text-white">
            SOLUTIONS
          </div>
          <div
            id="Text19"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Search
          </div>
          <div
            id="Text21"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Connect
          </div>
          <div
            id="Text23"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Research
          </div>
          <div
            id="Text25"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Academy
          </div>
        </div>
        <div className="flex flex-col justify-between w-20 shrink-0 h-24 items-start mt-2 mr-px">
          <div className="text-sm font-['Open_Sans'] font-bold text-white">
            RESOURCES
          </div>
          <div
            id="Text5"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Blogs
          </div>
          <div
            id="Text7"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Forms
          </div>
        </div>
        <div className="flex flex-col justify-between mt-2 w-20 shrink-0 h-24 items-start">
          <div className="text-sm font-['Open_Sans'] font-bold text-white">
            SUPPORT
          </div>
          <div
            id="Text9"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Help
          </div>
          <div
            id="Text11"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Contact Us
          </div>
        </div>
        <div className="flex flex-col justify-between mt-2 w-24 shrink-0 h-32 items-start">
          <div className="text-sm font-['Open_Sans'] font-bold text-white">
            LEGAL
          </div>
          <div
            id="Text13"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Privacy
          </div>
          <div
            id="Text15"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Terms
          </div>
          <div
            id="Text17"
            className="font-['Open_Sans'] leading-[22px] text-white"
          >
            Accessibility
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start ml-px mr-1">
        <div className="text-sm font-['Open_Sans'] leading-[22px] text-white">
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </div>
        <div className="flex flex-row gap-8 items-center">
          <div className="self-start flex flex-row gap-6 w-[115px] shrink-0 items-start">
            <img
              src="https://file.rendit.io/n/JfEw16XfPIoLPUeyEOmg.svg"
              id="FootersSocialIcon"
              className="w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/Pkgxi5tmcDgTcPzVbhbv.svg"
              id="FootersSocialIcon1"
              className="mr-px w-6 shrink-0"
            />
            <div className="relative flex flex-col mt-px w-4 shrink-0 items-start">
              <img
                src="https://file.rendit.io/n/m04Bohd2cQXClrPSqPAr.svg"
                className="w-4 h-4 absolute top-1 left-1"
              />
              <div className="text-center text-sm font-['Open_Sans'] underline text-black/0 relative">
                f
              </div>
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/InEYx8ST7BmWdefFUL39.svg"
            id="WhatsappLogo"
            className="w-5 shrink-0"
          />
        </div>
      </div>
    </div>
    <div
      id="CopyrightFooter"
      className="bg-black flex flex-col justify-center h-16 shrink-0 items-center"
    >
      <div className="text-center text-xs font-['Open_Sans'] text-white">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </div>
  </div>
</div>
  )
}

export default SearchBAr2