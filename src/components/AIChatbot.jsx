import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! 👋 I am Nivion's AI Assistant. How can I help you automate workflows or elevate your brand today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  // Conversational response logic
  const getBotResponse = (input) => {
    const q = input.toLowerCase();

    if (q.includes("service") || q.includes("work") || q.includes("do you do") || q.includes("offer")) {
      return "We specialize in custom AI Integrations (intelligent chatbots, automated pipelines), Content Design, Brand Identity visual books, and cinematic Motion Design. You can see all listings on our dedicated Services page!";
    }
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("number") || q.includes("address")) {
      return "You can get in touch by filling out the form on our Contact page, or click the WhatsApp button right below me to text us directly! We respond in minutes.";
    }
    if (q.includes("pricing") || q.includes("cost") || q.includes("price") || q.includes("charge")) {
      return "Our pricing is custom-tailored to the scale of your automation or design requirements to ensure high ROI. We offer free consultations! Send a request on our Contact page to get a quote.";
    }
    if (q.includes("portfolio") || q.includes("showcase") || q.includes("projects") || q.includes("work sample")) {
      return "We have designed and deployed over 30+ highly-aesthetic and AI-led projects for global clients. Click through to our filterable Portfolio page to see what we've built!";
    }
    if (q.includes("about") || q.includes("who are you") || q.includes("nivion") || q.includes("team")) {
      return "Nivion Technologies is a premium AI-first agency helping modern brands scale. We combine advanced algorithms with beautiful styling rules. Read more on our About page!";
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("yo")) {
      return "Hello! Hope you are having a productive day. What can I clarify for you regarding Nivion's services or portfolio?";
    }
    if (q.includes("thank") || q.includes("thanks") || q.includes("awesome") || q.includes("good")) {
      return "You are very welcome! It is my pleasure. Let me know if there's anything else I can answer.";
    }

    return "That is a great question! For specific technical details, we recommend setting up a call with our engineering team via our Contact page, or clicking the WhatsApp icon directly below me to chat instantly on WhatsApp!";
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // 1. Add User Message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // 2. Simulate AI Typing
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotResponse(textToSend)
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000); // 1-second simulated lag for organic flow
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleFAQClick = (faqText) => {
    handleSendMessage(faqText);
  };

  // Check if message contains a link and render it as a clickable router link
  const renderMessageText = (text) => {
    if (text.includes("Services page")) {
      return (
        <>
          We specialize in custom AI Integrations (intelligent chatbots, automated pipelines), Content Design, Brand Identity visual books, and cinematic Motion Design. You can see all listings on our dedicated <Link to="/services" onClick={() => setIsOpen(false)} style={{ color: "var(--primary)", fontWeight: "600", textDecoration: "underline" }}>Services page</Link>!
        </>
      );
    }
    if (text.includes("Contact page")) {
      return (
        <>
          You can get in touch by filling out the form on our <Link to="/contact" onClick={() => setIsOpen(false)} style={{ color: "var(--primary)", fontWeight: "600", textDecoration: "underline" }}>Contact page</Link>, or click the WhatsApp button right below me to text us directly! We respond in minutes.
        </>
      );
    }
    if (text.includes("Portfolio page")) {
      return (
        <>
          We have designed and deployed over 30+ highly-aesthetic and AI-led projects for global clients. Click through to our filterable <Link to="/portfolio" onClick={() => setIsOpen(false)} style={{ color: "var(--primary)", fontWeight: "600", textDecoration: "underline" }}>Portfolio page</Link> to see what we've built!
        </>
      );
    }
    if (text.includes("About page")) {
      return (
        <>
          Nivion Technologies is a premium AI-first agency helping modern brands scale. We combine advanced algorithms with beautiful styling rules. Read more on our <Link to="/about" onClick={() => setIsOpen(false)} style={{ color: "var(--primary)", fontWeight: "600", textDecoration: "underline" }}>About page</Link>!
        </>
      );
    }
    return text;
  };

  return (
    <>
      {/* FLOATING TRIGGER ICON */}
      <div 
        className="chatbot-float" 
        onClick={toggleChat}
        role="button"
        aria-label="Open AI Assistant"
        title="Open AI Assistant"
      >
        <div className="chatbot-pulse"></div>
        <FaRobot size={24} />
      </div>

      {/* CHAT POPUP WINDOW */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h3>
              <FaRobot size={18} /> Nivion AI Assistant <span className="online-dot"></span>
            </h3>
            <button className="chatbot-close" onClick={toggleChat}>✕</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div className={`chat-msg ${msg.sender}`} key={msg.id}>
                {renderMessageText(msg.text)}
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-typing">
                AI is typing
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQs */}
          <div className="chatbot-faqs">
            <span className="chatbot-faqs-title">Frequently Asked Questions</span>
            <div className="faq-grid">
              <button className="faq-btn" onClick={() => handleFAQClick("What services do you offer?")}>
                Offerings?
              </button>
              <button className="faq-btn" onClick={() => handleFAQClick("How do I see your portfolio?")}>
                Portfolio?
              </button>
              <button className="faq-btn" onClick={() => handleFAQClick("What is your pricing?")}>
                Pricing?
              </button>
              <button className="faq-btn" onClick={() => handleFAQClick("How can I contact you?")}>
                Contact?
              </button>
            </div>
          </div>

          {/* Input Form */}
          <form className="chatbot-input-form" onSubmit={handleFormSubmit}>
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" className="chatbot-send-btn" disabled={isTyping}>
              <FaPaperPlane size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
