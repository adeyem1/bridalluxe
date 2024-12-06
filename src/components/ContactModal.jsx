import React, { useState } from "react";

const ContactModal = ({ onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    isAnonymous: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    // Simulate form submission
    setTimeout(() => {
      setLoading(false); // Hide loading spinner
      alert("Message sent successfully!");
      onClose(); // Close modal after form submission
    }, 2000);
  };

  return (
    <div id="contactModal" className="modal">
      <div className="modal-content" id="modalRef">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Contact Us</h2>
        <form id="contactForm" onSubmit={submitForm}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
          />
          <input
            type="checkbox"
            id="anonymous"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleInputChange}
          />
          <label htmlFor="anonymous">Send Anonymously</label>
          <button type="submit" id="sendButton">
            Send Message
          </button>
        </form>

        {isLoading && <div id="loadingSpinner">Loading...</div>}
      </div>
    </div>
  );
};

export default ContactModal;
