import { 
  MdOutlineDone, 
  MdOutlineTrendingUp, 
  MdOutlineAnalytics, 
  MdOutlineAutorenew 
} from "react-icons/md";

const withUs = [
  {
    icon: <MdOutlineDone className="w-8 h-8 text-[#352ce8]" />,
    title: "Only necessary requests",
    desc: "We add negative keywords even before the start of impressions.",
  },
  {
    icon: <MdOutlineTrendingUp className="w-8 h-8 text-[#352ce8]" />,
    title: "Real rates",
    desc: "Set your own price for different boosts.",
  },
  {
    icon: <MdOutlineAnalytics className="w-8 h-8 text-[#352ce8]" />,
    title: "Transparent analytics",
    desc: "All data on campaigns, expenses and performance in one table.",
  },
  {
    icon: <MdOutlineAutorenew className="w-8 h-8 text-[#352ce8]" />,
    title: "Fully automatic control",
    desc: "We control bids and make sure that the product is not shown using unnecessary phrases.",
  },
];

export default withUs;
