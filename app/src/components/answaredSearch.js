import React, { useState, useEffect } from "react";
import './css/searchAnswer.css';
import searchImage from '../assets/search.jpg';

const AnsweredSearch = () => {
  const [answeredSurveys, setAnsweredSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [surveyResponses, setSurveyResponses] = useState([]);

  useEffect(() => {
    // Carrega as pesquisas respondidas e as respostas do localStorage
    const storedAnsweredSurveys = JSON.parse(localStorage.getItem("answeredSurveys")) || [];
    const storedSurveyResponses = JSON.parse(localStorage.getItem("surveyResponses")) || [];

    setAnsweredSurveys(storedAnsweredSurveys);
    setSurveyResponses(storedSurveyResponses);
  }, []);

  const getSurveyAnswers = (surveyTitle) => {
    // Busca a resposta correspondente ao título da pesquisa selecionada
    return surveyResponses.find((response) => response.title === surveyTitle)?.answers || {};
  };

  return (
    <div className="search-answer-field-container">
      {!selectedSurvey ? (
        // Exibe a lista de pesquisas respondidas
        answeredSurveys.map((survey, index) => (
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
        // Exibe as respostas da pesquisa selecionada
        <div className="survey-details">
          <h3>Respostas para: {selectedSurvey.title}</h3>
          {Object.keys(getSurveyAnswers(selectedSurvey.title)).length > 0 ? (
            Object.entries(getSurveyAnswers(selectedSurvey.title)).map(([questionTitle, answer], index) => (
              <div key={index} className="answer-card">
                <h4>{questionTitle}</h4>
                {Array.isArray(answer) ? (
                  answer.map((ans, idx) => <p key={idx}>- {ans}</p>) // Exibe cada item da lista
                ) : (
                  <p>{answer}</p> // Exibe uma única resposta
                )}
              </div>
            ))
          ) : (
            <p>Nenhuma resposta encontrada para esta pesquisa.</p>
          )}
          <button className="back-button" onClick={() => setSelectedSurvey(null)}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default AnsweredSearch;
