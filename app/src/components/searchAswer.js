import React, { useState, useEffect } from "react";
import './css/searchAnswer.css';
import searchImage from '../assets/search.jpg';

const SearchAnswer = () => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    try {
      const storedSurveys = JSON.parse(localStorage.getItem("surveyDataList")) || [];
      setSurveys(storedSurveys);
    } catch (error) {
      console.error("Erro ao carregar as pesquisas do localStorage:", error);
    }
  }, []);

  const handleAnswerChange = (questionTitle, answer, isMultiple = false) => {
    setAnswers((prevAnswers) => {
      const previousAnswer = prevAnswers[questionTitle] || (isMultiple ? [] : "");
      if (isMultiple) {
        const updatedAnswers = previousAnswer.includes(answer)
          ? previousAnswer.filter((ans) => ans !== answer)
          : [...previousAnswer, answer];
        return { ...prevAnswers, [questionTitle]: updatedAnswers };
      } else {
        return { ...prevAnswers, [questionTitle]: answer };
      }
    });
  };

  const handleSubmit = () => {
    if (selectedSurvey && Object.keys(answers).length > 0) {
      const response = {
        title: selectedSurvey.title,
        answers,
        email: 'davi@inatel.br', 
        name: 'Davi Balbino'
      };

      // Log para verificar as respostas antes de salvar
      console.log("Respostas que serão salvas:", response);

      try {
        // Salva a resposta no localStorage na chave 'surveyResponses'
        const storedResponses = JSON.parse(localStorage.getItem("surveyResponses")) || [];
        storedResponses.push(response);
        localStorage.setItem("surveyResponses", JSON.stringify(storedResponses));

        // Move a pesquisa para a chave 'answeredSurveys'
        const answeredSurveys = JSON.parse(localStorage.getItem("answeredSurveys")) || [];
        answeredSurveys.push(selectedSurvey);
        localStorage.setItem("answeredSurveys", JSON.stringify(answeredSurveys));

        // Remove a pesquisa respondida do localStorage de `surveyDataList`
        const remainingSurveys = surveys.filter((survey) => survey.title !== selectedSurvey.title);
        localStorage.setItem("surveyDataList", JSON.stringify(remainingSurveys));
        setSurveys(remainingSurveys);

        alert("Respostas salvas com sucesso!");
        setSelectedSurvey(null);
        setAnswers({});
      } catch (error) {
        console.error("Erro ao salvar a resposta:", error);
      }
    } else {
      alert("Por favor, responda todas as perguntas antes de enviar.");
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
                    checked={answers[component.title]?.includes(option) || false}
                    onChange={() => handleAnswerChange(component.title, option, true)} 
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
                    checked={answers[component.title] === option}
                    onChange={() => handleAnswerChange(component.title, option)} 
                  />
                  <label>{option}</label>
                </div>
              ))}
              {component.type === "text_field" && (
                <textarea 
                  placeholder="Sua resposta" 
                  value={answers[component.title] || ""}
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
