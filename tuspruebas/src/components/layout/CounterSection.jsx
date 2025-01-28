import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importa estilos para autoplay
import { Pagination, Autoplay } from "swiper/modules"; // Importa módulos necesarios
import "../../css/layout/counter.css";
const CounterSection = () => {
  const counters = [
    {
      value: "5000",
      description: "Recursos para el estudio",
      badge: { text: "1 nuevo cada hora", color: "purple" },
    },
    {
      value: "1000",
      description: "Usuarios",
      badge: { text: "Todos los meses", color: "orange" },
    },
    {
      value: "10",
      description: "Instituciones",
      badge: { text: "De América Latina", color: "green" },
    },
  ];

  return (
    <section className="counter-section">
      <h2>
        <span>1M alumnos salvados,</span> y sigue la cuenta
      </h2>
      <p className="pp">
        Cada día se añade mas material por las comunidades más
        activas del mundo.
      </p>
      <div className="counters">
      <div className="custom-swiper">
  <Swiper
    spaceBetween={20}
    slidesPerView="auto"
    autoplay={{
      delay: 3000, // Cambiar cada 3 segundos
      disableOnInteraction: false, // Continuar después de interacción
    }}
    pagination={{ clickable: true }}
    breakpoints={{
      768: {
        slidesPerView: 3, // Mostrar los contadores normalmente en pantallas grandes
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1, // Carrusel en pantallas móviles
        spaceBetween: 10,
      },
    }}
    modules={[Pagination, Autoplay]} // Incluye autoplay
  >
    {counters.map((counter, index) => (
      <SwiperSlide key={index}>
        <div className="counter">
          <h3>{counter.value}</h3>
          <p>{counter.description}</p>
          <span className={`badge ${counter.badge.color}`}>
            {counter.badge.text}
          </span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      </div>
    </section>
  );
};

export default CounterSection;
