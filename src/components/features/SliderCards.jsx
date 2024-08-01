import React from "react";
import Slider from "react-slick";
import Cards from "./Cards"; // Asegúrate de importar el componente Cards
import "slick-carousel/slick/slick.css"; // Importa los estilos
import "slick-carousel/slick/slick-theme.css"; // Importa los estilos
import { Box } from "@mui/material";

// Define los datos de las tarjetas
const cardData = [
  {
    title: "Personalización Total",
    description: "Planes adaptados a tus necesidades y objetivos únicos.",
    icon: "/icon1.webp",
    position: "top-left",
  },
  {
    title: "Variedad Deliciosa",
    description: "Comidas equilibradas, fáciles de preparar y llenas de sabor.",
    icon: "/icon2.webp",
    position: "top-right",
  },
  {
    title: "Equilibrio Saludable",
    description:
      "Disfruta de todos los grupos de alimentos sin restricciones extremas.",
    icon: "/icon3.webp",
    position: "bottom-left",
  },
  {
    title: "Resultados Comprobados",
    description:
      "Logra transformaciones reales y medibles con nuestros planes.",
    icon: "/icon4.webp",
    position: "bottom-right",
  },
];

const CustomSlider = (props) => (
  <Box
    sx={{
      "& .slick-dots li button:before": {
        fontSize: "12px",
        color: "#CBCFD2",
        opacity: 1,
      },
      "& .slick-dots li.slick-active button:before": {
        color: "#5D3A6D",
      },
    }}
  >
    <Slider {...props} />
  </Box>
);

function SliderCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <CustomSlider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Cards
              title={card.title}
              description={card.description}
              icon={card.icon}
              position={card.position}
            />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
}

export default SliderCards;
