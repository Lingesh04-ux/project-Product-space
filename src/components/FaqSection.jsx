import React, { useState } from "react";
import "../styles/FaqSection.scss"; // Assuming you have a CSS file for styling

const faqData = [
  {
    question: "What prior knowledge is required for this course?",
    answer:
      "No prior experience is required. The course is designed for beginners.",
  },
  {
    question: "How will this course help in my career as a product manager?",
    answer:
      "You will gain hands-on experience and a deep understanding of product management principles.",
  },
  {
    question: "What support do I get after completing the course?",
    answer:
      "You will get access to community forums, mentorship sessions, and job support resources.",
  },
  {
    question: "Are there any group discounts or scholarships available?",
    answer:
      "Yes, group discounts and limited scholarships are available. Please contact support.",
  },
  {
    question: "How is this course delivered (live or recorded)?",
    answer:
      "The course is delivered in both live and recorded formats for your convenience.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.classList.toggle("open");
  }

  // const toggleAccordionFunction = toggleAccordion(this);

  return (
    <div className="faq-main-wrapper">
      <div className="faq-background-image-div">
        <div className="faq-wrapper">
          <div className="faq-title-wrapper">
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="faq-footer-wrapper">
            <div className="faq-footer">
              <p>
                <strong>Still Have Questions?</strong>
              </p>
              <button className="contact-btn">Contact Us ↗</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
