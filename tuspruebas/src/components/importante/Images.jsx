//src/components/importante/images
import React, { useState, useEffect } from "react";
import { getTests } from "../../data/api";
import "../../css/importante/images.css";

const Images = ({ schoolId, yearId, subjectId, topicId }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); 
      setError(null); 
      try {
        const data = await getTests(schoolId, yearId, subjectId, topicId);
        setImages(data); 
      } catch (err) {
        setError("Error al obtener las imágenes");
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    if (schoolId && yearId && subjectId && topicId) {
      fetchImages();
    } else {
      setImages([]); // Limpia las imágenes si faltan los parámetros
    }
  }, [schoolId, yearId, subjectId, topicId]);

  if (loading) {
    return <p>Cargando imágenes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="images-container">
      {images.length === 0 ? (
        <p>No hay imágenes disponibles.</p>
      ) : (
        images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image.url}
              alt={`Test ${index + 1}`}
              className="test-image"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Images;

