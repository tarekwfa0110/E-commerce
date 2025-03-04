import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroGrid = () => {
    const slides = [
        {
            title: "LIFESTYLE COLLECTION",
            subtitle: "MEN",
            discount: "30% OFF",
            shipping: "Get Free Shipping on orders over $99.00",
            bgColor: "bg-gray-50",
            img: "/banner-15.jpg" // Corrected path
        },
        {
            title: "SUMMER COLLECTION",
            subtitle: "WOMEN",
            discount: "40% OFF",
            shipping: "Free Express Shipping",
            bgColor: "bg-gray-100",
            img: "/banner-25.jpg" // Corrected path
        },
    ];

    return (
        <div className="container mx-auto p-2 sm:p-4">
            {/* Main grid container - make it responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 h-auto">
                {/* Hero Slider - full width on mobile, 8 cols on desktop */}
                <div className="col-span-1 lg:col-span-8 lg:row-span-2 relative h-[300px] sm:h-[400px] lg:h-[600px]">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'bg-blue-600'
                        }}
                        loop
                        className="h-full rounded-lg overflow-hidden"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-full">
                                    <img
                                        src={slide.img}
                                        alt="Hero"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full sm:w-2/3 lg:w-1/2 p-4 sm:pl-8 lg:pl-12 space-y-2 sm:space-y-4">
                                            <div className="space-y-1 sm:space-y-2">
                                                <h2 className="text-sm sm:text-lg font-medium text-gray-800">
                                                    {slide.title}
                                                </h2>
                                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                                    {slide.subtitle}
                                                </h1>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xl sm:text-2xl font-bold">SALE UP TO</span>
                                                    <span className="text-xl sm:text-2xl font-bold text-red-600">
                                                        {slide.discount}
                                                    </span>
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-600">{slide.shipping}</p>
                                            </div>
                                            <div className="pt-2 sm:pt-4">
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: '#1a2332',
                                                        '&:hover': {
                                                            backgroundColor: '#2a3442'
                                                        },
                                                        fontSize: { xs: '0.875rem', sm: '1rem' },
                                                        padding: { xs: '6px 16px', sm: '8px 22px' }
                                                    }}
                                                >
                                                    Shop Now
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Side sections - stack on mobile, side by side on tablet, vertical on desktop */}
                <div className="col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 mt-2 lg:mt-0">
                    {/* New Arrivals Section */}
                    <div className="relative rounded-lg overflow-hidden h-[200px] sm:h-[250px] lg:h-[290px]">
                        <img
                            src="/banner-17.jpg"
                            alt="New Arrivals"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center">
                            <div className="space-y-1 sm:space-y-2">
                                <span className="text-xs sm:text-sm font-medium text-gray-600">NEW ARRIVALS</span>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    SUMMER<br />SALE 20% OFF
                                </h2>
                                <Button
                                    variant="text"
                                    size="small"
                                    sx={{
                                        color: '#1a2332',
                                        padding: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Shop Now →
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Gaming Section */}
                    <div className="relative rounded-lg overflow-hidden h-[200px] sm:h-[250px] lg:h-[290px]">
                        <img
                            src="/banner-16.jpg" // Corrected path
                            alt="Gaming"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-center">
                            <div className="space-y-2">
                                <span className="text-sm font-medium text-gray-600">GAMING 4K</span>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    DESKTOPS &
                                    <br />
                                    LAPTOPS
                                </h2>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: '#1a2332',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    Shop Now →
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroGrid;
