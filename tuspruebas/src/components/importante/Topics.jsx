
//src/components/importante/Topics
// src/components/importante/Topics.jsx
import React, { useState, useEffect } from "react";
import { getTopics } from "../../data/api";
import Images from "./Images";
import "../../css/importante/topics.css";

const Topics = ({ schoolId, yearId, subjectId }) => {
  const [topics, setTopics] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTopics(schoolId, yearId, subjectId);
        setTopics(data);
      } catch (err) {
        setError("Error al obtener los temas");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (schoolId && yearId && subjectId) {
      fetchTopics();
    } else {
      setTopics([]);
    }
  }, [schoolId, yearId, subjectId]);

  const handleTopicSelect = (topicId) => {
    setSelectedTopicId(topicId === selectedTopicId ? null : topicId);
  };

  if (loading) {
    return <p className="topics-loading">Cargando temas...</p>;
  }

  if (error) {
    return <p className="topics-error">{error}</p>;
  }

  return (
    <div className="topics-container">
      {topics.length === 0 ? (
        <p className="no-topics">No hay temas disponibles.</p>
      ) : (
        topics.map((topic) => (
          <div key={topic.id} className="topic-wrapper">
            <button
              className={`topic-button ${
                selectedTopicId === topic.id ? "active" : ""
              }`}
              onClick={() => handleTopicSelect(topic.id)}
            >
              {topic.name}
            </button>
            {selectedTopicId === topic.id && (
              <Images
                schoolId={schoolId}
                yearId={yearId}
                subjectId={subjectId}
                topicId={topic.id}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Topics;
