import React, { useState } from 'react';

const ContactModal = () => {
  // State to manage modal visibility
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    isAnonymous: false
  });

  // Function to handle modal open
  const openModal = () => setModalOpen(true);

  // Function to handle modal close
  const closeModal = () => setModalOpen(false);

  // Function to handle form changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Function to handle form submission
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    // Simulate form submission (replace with actual logic)
    setTimeout(() => {
      setLoading(false); // Hide loading spinner
      alert('Message sent successfully!');
      closeModal(); // Close modal after form submission
    }, 2000);
  };

  return (
    <>
      <button onClick={openModal}>Contact Us</button>

      {isModalOpen && (
        <div id="contactModal" className="modal">
          <div className="modal-content" id="modalRef">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Contact Us</h2>
            {/* The form sends a POST request to /send-email */}
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

            {/* Loading spinner */}
            {isLoading && (
              <div id="loadingSpinner">
                Loading...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
