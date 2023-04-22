import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="info">
            <FaPhone className="icon" />
            <p>123-456-7890</p>
          </div>
          <div className="info">
            <FaEnvelope className="icon" />
            <p>info@example.com</p>
          </div>
          <div className="info">
            <FaInstagram className="icon" />
            <p>@example</p>
          </div>
          <div className="info">
            <FaFacebook className="icon" />
            <p>@example</p>
          </div>
          <div className="info">
            <FaTwitter className="icon" />
            <p>@example</p>
          </div>
        </div>
        {/* <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form> */}
      </div>
    </section>
  );
}

export default Contact;


// const Contact = () => {
//   return (
//     <div className="register">
//       <div className="content">
//         <h1>Register</h1>
//       </div>
//       <div className="form">
//         <form>
//           <input type="text" placeholder="Enter your name" /><br/>
//           <input type="email" placeholder="Enter your email" /><br/>
//           <input type="number" placeholder="Enter your phone number" /><br/>
//           <input type="submit" />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact