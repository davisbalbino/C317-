import React, { useState, useEffect } from "react";
import './css/searchAnswer.css';
import searchImage from '../assets/search.jpg';

const SearchAnswer = () => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  useEffect(() => {
    const storedSurveys = JSON.parse(localStorage.getItem("surveyDataList")) || [];
    setSurveys(storedSurveys);
  }, []);

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey);
  };

  const handleBackClick = () => {
    setSelectedSurvey(null);
  };

  const handleSubmit = () => {
    // Lógica para enviar as respostas
    console.log("Respostas enviadas para:", selectedSurvey.title);
    handleBackClick();
  };

  return (
    <div className="search-answer-field-container">
      {selectedSurvey ? (
        <div className="survey-details">
          <button onClick={handleBackClick} className="back-button">Voltar</button>
          <h2>{selectedSurvey.title}</h2>
          {selectedSurvey.components.map((component, index) => (
            <div key={index} className="question-card">
              <h3>{component.title}</h3>
              {component.type === "multiple" && (
                component.options.map((option, idx) => (
                  <div key={idx}>
                    <input type="checkbox" id={`option-${index}-${idx}`} />
                    <label htmlFor={`option-${index}-${idx}`}>{option}</label>
                  </div>
                ))
              )}
              {component.type === "single" && (
                component.options.map((option, idx) => (
                  <div key={idx}>
                    <input type="radio" name={`single-${index}`} id={`option-${index}-${idx}`} />
                    <label htmlFor={`option-${index}-${idx}`}>{option}</label>
                  </div>
                ))
              )}
              {component.type === "text_field" && (
                <input type="text" placeholder="Sua resposta" />
              )}
            </div>
          ))}
          <button onClick={handleSubmit} className="submit-button">Enviar</button>
        </div>
      ) : (
        surveys.map((survey, index) => (
          <div 
            key={index} 
            className="survey-card" 
            style={{ backgroundColor: survey.color }}
            onClick={() => handleSurveyClick(survey)}
          >
            <h3>{survey.title}</h3>
            <img src={searchImage} alt="Imagem da pesquisa" className="survey-image" />
            <p>{survey.group}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchAnswer;
