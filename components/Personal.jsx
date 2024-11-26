import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import Magnet from "./Magnet";
import { FiArrowRight } from "react-icons/fi";

const Personal = () => {
  return (
    <div className="bg-[#F5F5F5]">
      {/* 1st 2 components */}
      <div className="max-w-[1550px] mx-auto sm:py-32 py-14 space-y-44">
        {/* 1st components */}
        <div className="w-full flex sm:flex-row flex-col justify-center sm:gap-x-28 gap-y-10">
          <div className="flex w-full h-fit sm:sticky sm:top-10 sm:px-0 px-5">
            <div className="h-auto sm:w-1 w-[2px] mr-5 overflow-hidden">
              <div className="w-full h-full bg-black" id="line" />
            </div>
            <div className="w-full flex flex-col gap-y-10">
              <div className="w-full sm:text-[68px] text-3xl font-mono flex flex-col">
                <div className="overflow-hidden">
                  <p className="text-black text-pretty sm:leading-[5rem]" id="text">
                    Every Missed Click Is a
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="text-black text-pretty sm:leading-[5rem]" id="text">
                    Lost Customer – Get a
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="text-black text-pretty sm:leading-[5rem]" id="text">
                    Website Today!
                  </p>
                </div>
              </div>
              <p className="sm:text-[34px] text-lg text-black sm:leading-10">
                Don’t let opportunities slip away—invest in a website that
                attracts attention and converts clicks into lasting connections.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:gap-y-10 gap-y-5 w-full sm:px-0 px-5">
            <h1
              className="sm:text-[74px] text-5xl font-mono text-black flex items-center gap-x-5 group"
              id="percentage"
            >
              90%
              <BsArrowUpCircleFill className="group-hover:text-green-500 transition-colors duration-300" />
            </h1>
            <p
              className="sm:text-[26px] text-lg text-black opacity-70 text-pretty"
              id="second-c-text"
            >
              Today we live in a digital world and your website is not just an
              online presence but your brand’s representative 24 hours a day, 7
              days a week. Very few people go to your site or visit your store
              without a professional website, but your competitors may be just a
              click away. Convenience, credibility, and Information — at your
              audience’s fingertips.
            </p>
            <p
              className="sm:text-[26px] text-lg text-black opacity-70 text-pretty"
              id="second-c-text"
            >
              On top of that, a well designed website can actually contribute to
              building your brand’s trust and also help you attract new
              customers and nurture existing relationships. It’s where you put
              on display your product, tell the story, and build that sense of
              connection.
            </p>
            <p
              className="sm:text-[26px] text-lg text-black opacity-70 text-pretty"
              id="second-c-text"
            >
              A tailored website can grow your business, build relationships
              with your customers, and achieve heights for your business
              regardless of whether you are a startup or small business or you
              are an old and established company. Don’t leave valuable
              opportunities on the table, invest in a website that performs as
              much as you do. We will help you convert your vision into a
              reality.
            </p>
            <Magnet>
              <div
                className="flex items-center gap-x-5 group mt-5"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Center the content inside the element
                  transition: "transform 0.3s ease-out",
                }}
              >
                <button className="text-3xl text-black">View Portfolio</button>

                <button className="size-10 rounded-full border-2 border-dashed bg-transparent border-black group-hover:scale-125 group-hover:bg-black transition-all duration-300 flex items-center justify-center overflow-hidden">
                  <FiArrowRight
                    size={20}
                    className="group-hover:text-white text-black absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                  />
                  <FiArrowRight
                    size={20}
                    className="group-hover:text-white text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </button>
              </div>
            </Magnet>
          </div>
        </div>
        {/* 2nd components */}
        {/* <div className="w-full flex justify-center items-end gap-x-14 relative">
          <h1
            className="font-mono text-7xl absolute top-20 left-[40%] mix-blend-difference z-10"
            id="m1-text"
          >
            &quot;But I put all my info
          </h1>
          <h1
            className="font-mono text-7xl absolute top-40 left-[40%] mix-blend-difference z-10"
            id="m2-text"
          >
            on my social pages!&quot;
          </h1>
          <div className="w-full h-full" id="image">
            <img
              src="https://cdn.prod.website-files.com/66277b11e48ec235af18f9cc/66277b11e48ec235af18faaa_Vlad-Tro-talking-on-phone%400.25x.webp"
              alt=""
              className="w-full h-[1050px] object-cover"
              id=""
            />
          </div>
          <div className="w-full h-full space-y-10">
            <p className="text-[28px] text-gray-600 font-normal">
              I often hear this from small business owners I work with. Yet, to
              effectively represent your brand, you need more than just social
              media.
            </p>
            <p className="text-[28px] text-gray-600 font-normal">
              A social media profile is free and takes only 5 minutes to set up.
              Because anyone can use a Facebook business page, it won&apos;t
              help you stand out.
            </p>
            <p className="text-[28px] text-gray-800 font-medium">
              Whereas a professionally-designed website enables you to:
            </p>
            <ul className="flex flex-col gap-y-4">
              <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                <GiCheckMark />
                Make a striking first impression that lasts;
              </li>
              <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                <GiCheckMark />
                Improve your brand image and customer retention;
              </li>
              <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                <GiCheckMark />
                Increase your company&apos;s credibility;
              </li>
              <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                <GiCheckMark />
                And most of all, stand out from your competitors.
              </li>
            </ul>
            <p className="text-[28px] text-gray-800 font-medium">
              To put it simply, your website is the backbone of your business
              that generates leads and helps you grow 24/7!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Personal;