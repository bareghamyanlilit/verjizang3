"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { FaMusic } from "react-icons/fa";
import { anim, txt1, txt2, txt3, txt4 } from "@/data/data";
import { motion } from "framer-motion";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 text-2xl  rounded-2xl bg-[#7d7e83af] opacity-95 text-[#000000] right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <FaMusic />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontArmAllegroU items-start justify-between tracking-0 h-screen bg-cover bg-bottom flex text-white pr-10 py-20 text-3xl"
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <Image
          src="/first.png"
          alt="icon1"
          width={500}
          height={500}
          className=" w-35 object-contain"
        />
        <p className="FontSHK_Dzeragir text-end text-[32px] text-shadow-2xs font-bold text-black text-">
          Ավարտական <br />
          Հանդես
        </p>
      </div>

      <div className="FontSHK_Dzeragir italic text-center py-7 bg-[##FFFF69]">
        <div className="py-12 mb-10">
          <motion.h3
            {...anim}
            style={{ whiteSpace: "pre-line" }}
            className=" static z-2 text-[26px] py-7 mt-3"
          >
            {txt1}
          </motion.h3>
        </div>
        <motion.h3 className="text-3xl px-7">Վերջին Զանգին մնաց</motion.h3>
        <TimeBox />
      </div>

      <Program />

      <p className="FontSHK_Dzeragir bg-[#DBDEEA] p-7 text-xl text-center">
        {txt2}
      </p>

      <div className="px-7 relative">
        <Image
          src="/icon2.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-[50%] absolute left-5 top-10 "
        />
        <Image
          src="/icon2.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-[50%] rotate-180 absolute bottom-10 right-5 "
        />
        <motion.p
          {...anim}
          style={{ whiteSpace: "pre-line" }}
          className="FontSHK_Dzeragir text-2xl text-center py-30 "
        >
          {txt3}
        </motion.p>
      </div>

      <div className="FontSHK_Dzeragir text-xl italic p-7 grid gap-2">
        <motion.p
          {...anim}
          className="text-center text-2xl text-[#000000] tracking-[8px]"
        >
          Սիրով սպասում ենք
        </motion.p>

        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full rounded-3xl my-10"
        />
        <motion.p
          {...anim}
          className="text-center text-2xl text-[#000000] tracking-[8px]"
        >
          Պահպանիր Օրը
        </motion.p>
        <Calendar year={2026} month={3} highlightDay={20} />
      </div>

      <div className="px-7">
        <Image
          src="/img6.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full my-7 rounded-3xl  "
        />
      </div>
      <h2 className="FontSHK_Dzeragir text-center text-5xl">23 / 05 / 2026</h2>
      <Image
        src="/icon4.png"
        alt="icon1"
        width={500}
        height={500}
        className="w-[60%] m-auto rounded-3xl  "
      />
      <div className="flex bg-[#DBDEEA] px-7 py-6">
        <Image
          src="/icon5.png"
          alt="icon1"
          width={500}
          height={500}
          className="w-4 object-cover "
        />
        <div className="FontSHK_Dzeragir pt-10 tracking-[.5%] pl-5 leading-6.25 text-2xl flex flex-col gap-9">
          <p>12 տարի միասին</p>
          <p>1 անփոփոխ ու սիրված դասարան</p>
          <p>150 անգամ հնչած «դասից փախնելու» առաջարկ</p>
          <p>21,000 ժամ դպրոցական <br /> պատերի ներսում</p>
        </div>
      </div>
      <p className="FontSHK_Dzeragir tracking-[1.5%] text-2xl text-center py-25 px-7">Հարգանքներով՝ <br />2026 թ. շրջանավարտներ</p>
    </div>
  );
}
