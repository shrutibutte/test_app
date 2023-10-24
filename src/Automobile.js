import React, { useState, lazy, Suspense } from "react";
import jsPDF from "jspdf";
import RiskQuestions from "./RiskQuestions";
import GenerateReportButton from "./GenerateReportButton"; // Import the new component

import "./Style.css";
const Automation = () => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [answers, setAnswers] = useState("");

  const sections = [
    {
      title: "High Risk",
      questions: [
        "Safety‐critical AI applications related to automated driving",
        "Does your AI application operate in a critical environment, such as healthcare or transportation? If yes, how do you ensure that the system is reliable and safe?",
        "Does your AI application use sensitive data, such as medical or financial data? If yes, how do you ensure the security of this data?",
        "Does your AI application have the potential to cause financial loss? If so, have you taken steps to mitigate this risk?",
        "Does your AI application have the potential to disrupt critical infrastructure (e.g., transport)? If so, have you taken steps to mitigate this risk?",
        "Does your AI application have the potential to be used for malicious purposes? If so, have you taken steps to prevent this?",
      ],
    },
    {
      title: "Limited Risk",
      questions: [
        "Does your AI application collect or process non-sensitive data? If yes, how do you ensure that this data is used in a responsible manner?",
      ],
    },
    {
      title: "Low Risk",
      questions: [
        "Unrelated, non‐safety‐critical AI applications (e.g., traditional driver assistance systems, comfort functions, infotainment, etc) should be deemed as ‘low‐risk’",
      ],
    },
  ];

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };



  const steps = [
    "Step 1: Automotive products are developed, tested, produced, and put on the market.",
    "Step 2: Certification requirements and regulatory frameworks in force in the automotive sector.",
    "Step 3: Principles such as human centricity, responsibility, transparency, and explainability, safety, reliability, and technical robustness, protection of privacy, quality of data, and sharing of data are all supported and should be enshrined into these initiatives in ACEA’s view.",
    "Step 4: AI will help improve productivity (streamlining of manufacturing processes, for example), product safety (more effective quality checks and monitoring, predictive maintenance), and objectivity (mitigation of human bias).",
    "Step 5: ‘narrow AI’ applications deployed in vehicles today and in the future are recommender systems such as lane recognition, vehicle recognition, or traffic sign recognition.",
    "Step 6: Other AI‐powered applications include the processing of video feeds from cameras for ADAS, natural language processing, face and voice recognition, etc.",
    "Step 7: Spread over five sections, it addresses the following main issues: sectoral frameworks and existing legislation to cover AI specificities; AI legal requirements; a risk‐based approach; the definition of AI; as well as recommendations on how to tackle safety and ethical challenges relating to AI and, more specifically, automated driving.",
    "Step 8: Risk assessment",
    "Step 9: The risk assessment of AI systems should be based on a set of criteria that considers the safety relevancy (severity, probability, and controllability of malfunctions), autonomy of learning, autonomy of decision making, type of algorithmic model used, and the potential impact of the AI system on a (larger) group of people.",
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      
      <h2 className="heading2" style={{ paddingBottom: "30px" }}>
        Stpes for Driverless automobiles- Self Driving my app my rules 
      </h2>
      <ol>
        {steps.slice(0, showMore ? steps.length : 3).map((step, index) => (
          <li key={index}>
            <h5>{step}</h5>
          </li>
        ))}
      </ol>
      {steps.length > 3 && (
        <button
          className="btn btn-primary"
          onClick={() => setShowMore(!showMore)}
          style={{ cursor: "pointer", marginBottom: "30px" }}
        >
          {showMore ? "Show Less" : "Show More Steps"}
        </button>
      )}

      <section id="questions" className="row">
        <h3>Risk management Question </h3>
        <div className="col-12">
          <div className="accordion" id="accordionExample">
            <RiskQuestions
              sections={sections}
              handleAnswerChange={handleAnswerChange}
            />
            <GenerateReportButton
              selectedDomain={selectedDomain}
              sections={sections}
              answers={answers}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automation;