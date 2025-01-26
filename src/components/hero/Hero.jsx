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
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-12 gap-4 h-[600px]">
                {/* Hero Slider */}
                <div className="col-span-8 row-span-2 relative">
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
                                        <div className="w-1/2 pl-12 space-y-4">
                                            <div className="space-y-2">
                                                <h2 className="text-lg font-medium text-gray-800">
                                                    {slide.title}
                                                </h2>
                                                <h1 className="text-5xl font-bold text-gray-900">
                                                    {slide.subtitle}
                                                </h1>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-2xl font-bold">SALE UP TO</span>
                                                    <span className="text-2xl font-bold text-red-600">
                                                        {slide.discount}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600">{slide.shipping}</p>
                                            </div>
                                            <div className="pt-4">
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        backgroundColor: '#1a2332',
                                                        '&:hover': {
                                                            backgroundColor: '#2a3442'
                                                        }
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

                {/* New Arrivals Section */}
                <div className="col-span-4 relative rounded-lg overflow-hidden">
                    <div className="relative h-[290px]">
                        <img
                            src="/banner-17.jpg" // Corrected path
                            alt="New Arrivals"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-center">
                            <div className="space-y-2">
                                <span className="text-sm font-medium text-gray-600">NEW ARRIVALS</span>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    SUMMER
                                    <br />
                                    SALE 20% OFF
                                </h2>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: '#1a2332',
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
                </div>

                {/* Gaming Section */}
                <div className="col-span-4 relative rounded-lg overflow-hidden">
                    <div className="relative h-[290px]">
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
