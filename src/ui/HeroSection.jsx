import SearchBar from "../components/SearchBar";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="clipPath max-w-full">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
        <div className="col-span-1 md:col-span-1 md:ml-36 md:w-[80%] xl:w-[70%] 2xl:w-[60%]">
          <div className="grid grid-rows-3 gap-4">
            <div className="row-span-1 p-3 text-5xl font-bold leading-[80px] w-full">
              Find{" "}
              <span className="bg-gradient-text text-transparent bg-clip-text">
                Partners{" "}
              </span>
              (CAs) available online
            </div>
            <div className="row-span-1 ml-3">
              <p className="text-[#616161] text-xl font-light">
                <span className="text-[#616161] text-lg font-normal uppercase">
                  Connect
                </span>{" "}
                with us where your services are listed and visible to a myriad
                of businesses seeking CA’s for compliance support
              </p>
            </div>
            <div className="w-full md:w-[46%] h-20 md:ml-[8rem]">
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <div className="mt-16 md:mt-0 md:relative md:overflow-hidden">
              <img
                src="/picture@2x.png"
                alt=""
                className="self-end mt-18 md:w-min"
              />
            </div>
            <img src="/picture1@2x.png" alt="" className="self-start" />
            <div className="mt-11 md:relative md:overflow-hidden">
              <img
                src="/picture2@2x.png"
                alt=""
                className="md:absolute md:top-0 md:left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
