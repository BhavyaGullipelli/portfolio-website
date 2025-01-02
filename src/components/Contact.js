import React  from 'react';
import './Contact.css';

const Contact = () => {
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle message submission
//     alert(`Message sent!\nMessage: ${message}`);
//     setMessage(''); // Reset the message field
//   };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>I'd love to hear from you! Feel free to reach out to me through any of the following ways:</p>
      <div className="contact-info">
        <p><strong>Email:</strong><a href="mailto:gullipellibhavyasri4@gmail.com"> gullipellibhavyasri4@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-9391782577</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gullipelli-bhavya-sri-330857289/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/gullipelli-bhavya-sri-330857289/</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/BhavyaGullipelli" target="_blank" rel="noopener noreferrer">https://github.com/BhavyaGullipelli</a></p>
        <p><strong>Location:</strong> Bhimavaram, Andhra Pradesh, India</p>
      </div>

      {/* <h2>Send Me a Message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form> */}
    </div>
  );
};

export default Contact;
