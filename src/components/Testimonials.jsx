import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  { name: "John Doe", role: "CTO", company: "TechCorp", review: "SoftSell helped us recover value from old software. Amazing support!" },
  { name: "Jane Smith", role: "Procurement Head", company: "BizSoft", review: "Seamless and trustworthy experience. Highly recommended!" },
  { name: "Raj Malhotra", role: "IT Manager", company: "NetSolve", review: "Great customer service and quick process! Loved the environment" },
  { name: "Emily Chen", role: "COO", company: "SmartWare", review: "The best platform for reselling unused licenses. Trustworthy team!" },
  { name: "Carlos Gomez", role: "Operations Lead", company: "InnoTech", review: "Quick valuation and instant payout, loved the experience." },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-10 max-md:text-2xl">What Our Customers Say</h2>
    <div className="max-w-4xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((r, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <p className="italic text-gray-700 mb-4">"{r.review}"</p>
              <div className="mt-auto">
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-gray-600">{r.role} @ {r.company}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
