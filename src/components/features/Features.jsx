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
        <div className="bg-white py-6 sm:py-10 my-4 sm:my-10 px-4 sm:px-14">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feat) => (
                    <Feature
                        icon={feat.icon}
                        title={feat.title}
                        description={feat.description}
                        key={feat.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Features;
