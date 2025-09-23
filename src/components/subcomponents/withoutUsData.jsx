import { 
  MdOutlineQueryStats, 
  MdOutlineAttachMoney, 
  MdOutlineVisibilityOff, 
  MdOutlineSettings 
} from "react-icons/md";

const withoutUs = [
  {
    icon: <MdOutlineQueryStats className="w-8 h-8 text-[#bdbdbd]" />,
    title: "Irrelevant Queries",
    desc: "From the start, you cannot choose which phrases to advertise with.",
  },
  {
    icon: <MdOutlineAttachMoney className="w-8 h-8 text-[#bdbdbd]" />,
    title: "Overpayment for Rates",
    desc: "There is one price for all requests, although they cost differently.",
  },
  {
    icon: <MdOutlineVisibilityOff className="w-8 h-8 text-[#bdbdbd]" />,
    title: "It is not clear where the money is going",
    desc: "Analytics only for the campaign as a whole.",
  },
  {
    icon: <MdOutlineSettings className="w-8 h-8 text-[#bdbdbd]" />,
    title: "Complex Controls",
    desc: "You need to manually change the bid every time the auction changes.",
  },
];

export default withoutUs;
