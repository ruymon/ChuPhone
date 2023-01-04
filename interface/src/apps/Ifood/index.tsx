import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Loader } from "./Loader";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { restaurants } from "./restaurantesHelper";

const navItems = [
  {
    id: 0,
    name: "Início",
  },
  {
    id: 1,
    name: "Restaurantes",
  },
  {
    id: 2,
    name: "Mercados",
  },
  {
    id: 3,
    name: "Bebidas",
  },
  {
    id: 4,
    name: "Farmácias",
  },
  {
    id: 5,
    name: "Pets",
  },
  {
    id: 6,
    name: "Shopping",
  }
];

export function Ifood() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState(0);

  if (isLoading) {
    return <Loader callbackFunction={setIsLoading} />
  } else {
    return (
      <div className="h-full w-full px-6 text-neutral-800 py-4 flex flex-col gap-6 max-h-[48rem] overflow-y-auto">
        

        <div className="w-full max-w-full">
          <Swiper
            spaceBetween={8}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {navItems.map(({ name, id }) => {
              const style = selectedNavItem === id ? "border-red-600 text-red-600 border-b " : "text-neutral-600";

              return (
                <SwiperSlide key={id} tag="button" onClick={() => setSelectedNavItem(id)} className={`pb-1 font-medium ${style} transition-all`}>
                  <span>{name}</span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="w-full max-w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img className="rounded" draggable="false" src="https://static-images.ifood.com.br/image/upload/t_high/discoveries/13deztudocomate50offPrincipal_ExGY.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="rounded" draggable="false" src="https://static-images.ifood.com.br/image/upload/t_high/discoveries/Copiade29restaurantesfretegratisprincipal_CzbP.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="rounded" draggable="false" src="https://static-images.ifood.com.br/image/upload/t_high/discoveries/Copiade29jantarbomebaratoprincipal_Cxe3.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xl text-neutral-900 font-medium">Lojas</span>

          <div className="flex flex-col gap-2">
            { restaurants.map(({ id, name, logo, deliveryTime, deliveryFee, rating, categories, paymentMethods }) => {
              return (
                <button className="flex items-center gap-4 text-left p-2 hover:bg-neutral-100 rounded-md transition-all" key={id}>
                  <img src={logo} alt={name} className="w-11 h-11 rounded-full" />
                  <div className="flex flex-col">
                    <span className="font-medium">{name}</span>
                    <div className="flex items-center gap-2 text-neutral-600 text-sm">
                      <span>{deliveryTime}</span>
                      <span>•</span>
                      <span>{deliveryFee}</span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    );
  };
};