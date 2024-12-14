import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<{ success: boolean; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_8j5wdp4', // Service ID
          'template_ftwa1yn', // Template ID
          form.current,
          'KygS2-ja7ZwiM1flW' // Public Key
        )
        .then(
          (result) => {
            console.log('Email sent:', result.text);
            setFeedbackMessage({ success: true, message: 'Message successfully sent!' });
          },
          (error) => {
            console.error('Error sending email:', error);
            setFeedbackMessage({ success: false, message: 'Failed to send the message. Please try again later.' });
          }
        );

      // 3 saniye sonra mesaj yox olur
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center">Have any questions? We'd love to hear from you.</p>

      {/* Geri bildirim */}
      {feedbackMessage && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: feedbackMessage.success ? '#2ecc71' : '#e74c3c', // sucsessde zümrüt yeşili, xetada qırmızı
            color: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            zIndex: 9999,
          }}
        >
          {feedbackMessage.message}
          <button
            onClick={() => setFeedbackMessage(null)} // Mesajı bağlayır
            style={{
              display: 'block',
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#27ae60', 
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e8449')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#27ae60')}
          >
            Close
          </button>
        </div>
      )}

      {/* Contact us */}
      <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '600px' }}>
        {/* Gönderenin Adı */}
        <div className="mb-3">
          <label htmlFor="from_name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="from_name"
            name="from_name"
            placeholder="Enter your name"
            required
          />
        </div>
        {/* Alıcının Adı */}
        <div className="mb-3">
          <label htmlFor="to_name" className="form-label">Recipient Name</label>
          <input
            type="text"
            className="form-control"
            id="to_name"
            name="to_name"
            placeholder="Enter recipient's name"
            required
          />
        </div>
        {/* Mesaj yeri */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
