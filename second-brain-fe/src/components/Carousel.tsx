import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg"
];

export default function ImageCarousel() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-60 object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
