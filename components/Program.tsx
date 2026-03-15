import { anim, program } from "@/data/data";
import Image from "next/image";
import {motion} from "framer-motion"

export function Program() {
  return (
        <div className="FontSHK_Dzeragir">
          <h2 className="text-[32px] text-center">ԺԱՄԱՆԱԿԱՑՈՒՅՑ</h2>
          <div className="relative flex flex-col gap-20">
            <Image
              src="/icon1.png"
              alt="icon1"
              width={500}
              height={500}
              className="-z-1 absolute opacity-8 "
            />
            <div className="px-7  pt-7">
              <div className="text-end ">
                <motion.h3 {...anim} className="text-[40px]">
                  {program[0].time}
                </motion.h3>
                <motion.p
                  {...anim}
                  className=" text-[#000000] text-xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {program[0].title}
                </motion.p>
              </div>
              <div className="text-start mt-25 mb-7">
                <motion.h3 {...anim} className=" text-[40px]">
                  {program[1].time}
                </motion.h3>
                <motion.p
                  {...anim}
                  className=" text-[#000000] text-xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {program[1].title}
                </motion.p>
              </div>
              <div className="text-end mb-25">
                <motion.h3 {...anim} className=" text-[40px]">
                  {program[2].time}
                </motion.h3>
                <motion.p
                  {...anim}
                  className=" text-[#000000] text-xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {program[2].title}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
  );
}
