import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/EventCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { upcomingEvents, pastEvents } from "../data";

const Events: React.FC = () => {
  const reversedPastEvents = [...pastEvents].reverse();

  const swiperSettings = {
    spaceBetween: 10,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    modules: [Pagination, Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div
      className="relative"
      style={{
        background: `
          radial-gradient(circle at top right, rgba(56, 72, 241, 0.4) 12%, rgba(56, 72, 241, 0) 32%),
          radial-gradient(circle at bottom left, rgba(187, 108, 230, 0.4) 10%, rgba(187, 108, 230, 0) 40%),
          linear-gradient(to top right, #0a041c, #0a041c)
        `,
        zIndex: -1,
      }}
    >
      <section id="events" className="py-12">
        <h2 className="text-5xl font-extrabold text-center">
          Upcoming <span className="text-[#3848f1]">Events</span>
        </h2>
        <Swiper {...swiperSettings} className="w-full mb-12">
          {upcomingEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <CardContainer>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#3848f1]/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
                  <CardItem
                    translateZ="50"
                    className="text-lg font-bold text-neutral-600 dark:text-white"
                  >
                    {event.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {event.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={event.imageUrl}
                      height={480}
                      width={480}
                      className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={event.title}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-5xl font-extrabold text-center">
          Past <span className="text-[#ef43cf]">Events</span>
        </h2>
        <Swiper {...swiperSettings} className="w-full">
          {reversedPastEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <CardContainer>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#3848f1]/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border">
                  <CardItem
                    translateZ="50"
                    className="text-lg font-bold text-neutral-600 dark:text-white"
                  >
                    {event.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {event.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={event.imageUrl}
                      height={480}
                      width={480}
                      className="object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={event.title}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Events;
