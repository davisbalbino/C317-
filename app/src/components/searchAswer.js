import React, { useState, useEffect } from "react";
import './css/searchAnswer.css';
import searchImage from '../assets/search.jpg';

const SearchAnswer = () => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const storedSurveys = JSON.parse(localStorage.getItem("surveyDataList")) || [];
    setSurveys(storedSurveys);
  }, []);

  const handleAnswerChange = (questionTitle, answer, isMultiple = false) => {
    setAnswers((prevAnswers) => {
      const previousAnswer = prevAnswers[questionTitle] || (isMultiple ? [] : "");
      
      if (isMultiple) {
        const updatedAnswers = previousAnswer.includes(answer)
          ? previousAnswer.filter((ans) => ans !== answer) // Remove resposta se já selecionada
          : [...previousAnswer, answer]; // Adiciona nova resposta
        return {
          ...prevAnswers,
          [questionTitle]: updatedAnswers,
        };
      } else {
        return {
          ...prevAnswers,
          [questionTitle]: answer,
        };
      }
    });
  };

  const handleSubmit = () => {
    if (selectedSurvey) {
      const response = {
        title: selectedSurvey.title,
        answers: answers,
        email: 'davi@inatel.br', 
        name: 'Davi Balbino'
      };

      const storedResponses = JSON.parse(localStorage.getItem("surveyResponses")) || [];
      storedResponses.push(response);
      localStorage.setItem("surveyResponses", JSON.stringify(storedResponses));
      console.log('respostas', storedResponses)
      alert("Respostas salvas com sucesso!");
      setSelectedSurvey(null);
      setAnswers({});
    }
  };

  return (
    <div className="search-answer-field-container">
      {!selectedSurvey ? (
        surveys.map((survey, index) => (
          <div 
            key={index} 
            className="survey-card" 
            style={{ backgroundColor: survey.color }}
            onClick={() => setSelectedSurvey(survey)}
          >
            <h3>{survey.title}</h3>
            <img src={searchImage} alt="Imagem da pesquisa" className="survey-image" />
            <p>{survey.group}</p>
          </div>
        ))
      ) : (
        <div className="survey-details">
          {selectedSurvey.components.map((component, index) => (
            <div key={index} className="survey-card">
              <h4>{component.title}</h4>
              {component.type === "multiple" && component.options.map((option, idx) => (
                <div key={idx}>
                  <input 
                    type="checkbox" 
                    value={option} 
                    onChange={(e) => handleAnswerChange(component.title, option, true)} 
                  />
                  <label>{option}</label>
                </div>
              ))}
              {component.type === "single_field" && component.options.map((option, idx) => (
                <div key={idx}>
                  <input 
                    type="radio" 
                    name={component.title} 
                    value={option} 
                    onChange={() => handleAnswerChange(component.title, option)} 
                  />
                  <label>{option}</label>
                </div>
              ))}
              {component.type === "text_field" && (
                <textarea 
                  placeholder="Sua resposta" 
                  onChange={(e) => handleAnswerChange(component.title, e.target.value)} 
                />
              )}
            </div>
          ))}
          <button className="submit-button" onClick={handleSubmit}>Enviar Respostas</button>
          <button className="back-button" onClick={() => setSelectedSurvey(null)}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default SearchAnswer;
