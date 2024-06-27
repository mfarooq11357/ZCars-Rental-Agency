import React, { useState } from 'react';
import './faqs.css'; // Ensure this CSS file contains all necessary styles

const faqs = [
    {
        question: "What is our car rental service?",
        answer: "Our car rental service offers a wide variety of vehicles for rent, including cars, SUVs, and trucks, available at competitive rates for daily, weekly, or monthly rentals."
    },
    {
        question: "How much does it cost to rent a car?",
        answer: "Our rental prices vary depending on the type of vehicle and rental duration. Daily rates start as low as USD 29.99, with discounts available for longer rental periods. No hidden fees, just straightforward pricing."
    },
    {
        question: "Where can I rent a car?",
        answer: "You can rent a car from any of our convenient locations across the city. Simply visit our website or mobile app to find the nearest rental location and check vehicle availability."
    },
    {
        question: "How do I cancel my car rental reservation?",
        answer: "Our car rental service is flexible with no long-term commitments. You can easily cancel your reservation online through our website or mobile app. No cancellation fees if done within the specified cancellation period."
    }
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq">
                {faqs.map((faq, index) => (
                    <div
                        className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAnswer(index)}
                        key={index}
                    >
                        <p>
                            {faq.question} <span className="icon">{activeIndex === index ? '-' : '+'}</span>
                        </p>
                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease'
                            }}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
