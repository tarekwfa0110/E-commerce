import Feature from "./Feature"
import { LocalShipping, MonetizationOn, CalendarToday, Payment } from '@mui/icons-material';

const features = [
    {
        icon: <LocalShipping />,
        title: "Fast Delivery",
        description: "Start from $10",
        id: 1
    },
    {
        icon: <MonetizationOn />,
        title: "Money Guarantee",
        description: "7 Days Back",
        id: 2
    },
    {
        icon: <CalendarToday />,
        title: "365 Days",
        description: "For free return",
        id: 3
    },
    {
        icon: <Payment />,
        title: "Payment",
        description: "Secure system",
        id: 4
    }
];


function Features() {
  return (
    <div className="flex items-center justify-between bg-white py-10 my-10 px-14">
            {features.map( (feat) =>  <Feature  icon = {feat.icon} title={feat.title} description={feat.description}  key={feat.id}/> )}
    </div>
  )
}

export default Features
