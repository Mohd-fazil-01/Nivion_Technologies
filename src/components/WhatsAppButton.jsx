import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Read the secure variable from .env (fallback if empty)
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919528871265";
    const message = "Hello Nivion Technologies! I would like to get in touch to discuss a project with you.";
    
    // Construct the WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirect to the WhatsApp link
    window.location.href = url;
  };

  return (
    <div 
      className="whatsapp-float" 
      onClick={handleWhatsAppClick}
      role="button"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Pulse effect overlay */}
      <div className="whatsapp-pulse"></div>
      
      {/* WhatsApp Icon */}
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
