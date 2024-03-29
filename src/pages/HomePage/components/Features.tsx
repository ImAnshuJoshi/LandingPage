import React from "react";
import Feature from "./Feature";
import { HiDesktopComputer, HiChip } from "react-icons/hi";
import { BiCategoryAlt, BiGlobe } from "react-icons/bi";
import { MdAddTask, MdDashboardCustomize } from "react-icons/md";

const cards = [
  {icon: <BiCategoryAlt size="25px" color="#FF00C7" /> ,title:"Project Management",text: "Efficiently manage projects, tasks, and deadlines to stay organized and deliver high-quality results."},
  {icon: <HiDesktopComputer size="25px" color="#FF00C7" /> ,title:"Collaboration",text: "Collaborate seamlessly with clients and team members, sharing files, feedback, and updates in real-time."},
  {icon: <MdAddTask size="25px" color="#FF00C7" /> ,title:"Skill Development",text: "Access educational resources and courses to enhance skills, expand knowledge, and stay ahead in your field."},
  {icon: <HiChip size="25px" color="#FF00C7" /> ,title:"Payment Processing",text: "Securely handle payments, invoices, and financial transactions, ensuring timely and hassle-free compensation."},
  {icon: <BiGlobe size="25px" color="#FF00C7" /> ,title:"Global Reach",text: "Connect with clients and opportunities worldwide, expanding your professional network and exploring diverse projects."},
  {icon: <MdDashboardCustomize size="25px" color="#FF00C7" /> ,title:"Portfolio Showcase",text: "Showcase your work, skills, and achievements through a personalized portfolio, attracting potential clients and employers."},

]

const Features = () => {
  return (
    <div className="flex flex-col p-8 mb-16 mx-24 bg-background xm:mx-12 xs:mx-4">
      <div className="flex flex-col justify-center items-center mx-0 my-8 vm:mb-0">
        <h1 className="font-manrope text-[44px]/[62px] font-semibold text-black text-center xm:text-[28px]/[40px]">
          Our Features and Services
        </h1>
        <p className="text-base font-normal max-w-[673px] text-center font-manrope text-grey vm:mt-4 xm:text-xs">
        Educate, Empower, and Freelance: Unleash your potential with our platform that combines education and freelancing, offering knowledge enrichment and real-world opportunities to shape your career journey.
        </p>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center gap-8 mt-8 xs:my-4 xs:mx-0 xs:min-w-full">
        {cards.map((card,i) => (
           <Feature
           key={i}
           icon={card.icon}
           title={card.title}
           text={card.text}
         />
        ))}
       
      </div>
    </div>
  );
};

export default Features;
