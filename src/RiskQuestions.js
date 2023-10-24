// components/RiskQuestions.js
import React from "react";

const RiskQuestions = ({ sections, handleAnswerChange }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index === 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${index}`}   
            >
              {section.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul style={{ listStyleType: "number", paddingLeft: "0" }}>
                {section.questions.map((question, qIndex) => {
                  const questionId = `question${index}_${qIndex}`;
                  return (
                    <li key={qIndex}>
                      <h5>{question}</h5>
                      <div className="d-flex justify-content-center">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={questionId}
                            id={`${questionId}Yes`}
                            value="yes"
                            onChange={handleAnswerChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${questionId}Yes`}
                            style={{ marginLeft: "5px" }}
                          >
                            YES
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={questionId}
                            id={`${questionId}No`}
                            value="no"
                            onChange={handleAnswerChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${questionId}No`}
                            style={{ marginLeft: "5px" }}
                          >
                            NO
                          </label>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiskQuestions;
