import React, { useState } from "react";
import "../../css/static/about.css";

const SobreNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sobre-nosotros-container">
      <section className="seccion">
        <h3 className="yy">¿Quién soy?</h3>
        <p>
          Soy una persona apasionada por la educación y el aprendizaje, que decidió crear esta plataforma con el objetivo de ayudar a estudiantes de diferentes niveles a acceder a materiales educativos útiles y de calidad.
              Este proyecto nació de una necesidad personal: encontrar un sitio en el que pudiera acceder fácilmente a materiales de estudio relevantes y bien estructurados.
            </p>
      </section>

      <section className="seccion">
        <h3 className="yy">¿Por qué anónimamente?</h3>
        <p>
          Mantener el anonimato en este proyecto no es por falta de deseo de conexión, sino por una preferencia personal que creo que no afecta en absoluto el propósito del sitio. Lo importante aquí es la calidad de los contenidos y el impacto positivo que puede tener en los estudiantes.
        </p>
      </section>

      <section className="seccion">
        <h3 className="yy">Nuestro compromiso</h3>
        <p>
          Mi compromiso con este proyecto es seguir mejorando, expandiendo y adaptando la plataforma para que siga siendo una herramienta valiosa para los estudiantes. A medida que la tecnología y las necesidades educativas evolucionan, yo también evolucionaré con ellas, buscando siempre maneras de brindar la mejor experiencia posible.
        </p>
      </section>
    </div>
  );
};

export default SobreNosotros;
