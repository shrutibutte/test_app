// GenerateReportButton.js
import React from "react";
import jsPDF from "jspdf";

const GenerateReportButton = ({  selectedDomain, sections, answers }) => {
  const generateReport = () => {
    const doc = new jsPDF();

    doc.text("AI Application Report", 10, 10);
    doc.text(`Selected Domain: ${selectedDomain}`, 10, 20);
    doc.text("Answers to Questions:", 10, 30);

    let yPosition = 40;
    let currentPage = 1;
    const maxPageHeight = 280; // You can adjust this value based on your content and page size

    sections.forEach((section, index) => {
      if (yPosition > maxPageHeight) {
        doc.addPage();
        currentPage++;
        yPosition = 10; // Reset the vertical position for the new page
      }

      doc.text(section.title, 10, yPosition);
      yPosition += 10;

      section.questions.forEach((question, qIndex) => {
        if (yPosition > maxPageHeight - 20) {
          doc.addPage();
          currentPage++;
          yPosition = 10;
        }

        const questionId = `question${index}_${qIndex}`;
        const answer = answers[questionId] || "Not answered";
        doc.text(question, 10, yPosition);
        doc.text(`Answer: ${answer}`, 10, yPosition + 10);
        yPosition += 20;
      });
    });

    // Example of adding a summary page at the end of the report
    if (currentPage === 1) {
      doc.addPage();
    }

    doc.save("AI_Application_Report.pdf");
  };

  return (
    <section className="row py-5">
      <div className="col-6 offset-3 text-center">
      <button
        type="button"
        className="btn btn-danger btn-block py-2"
        onClick={generateReport}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
        }}
      >
        <h3>
          Generate Report{' '}
          <i className="bi bi-arrow-right" style={{ marginLeft: '10px' }}></i>
        </h3>
      </button>
      </div>
    </section>
  );
};

export default GenerateReportButton;
