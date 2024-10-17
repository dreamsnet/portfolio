import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_bz7w1pi', 'template_2x6m3zj', formData, 'X_Mux9Ww4trALiMuP')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      });
  };

  return (
    <section id="Contact">
      <div className="container">
        <div className="contact-form-container">
          <div className="contact-form contact-form-box col-lg-6">
            <h2>Let's work together!</h2>
            <p>
              I craft and code stunning, user-friendly web interfaces. This work brings me immense joy and fulfillment.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row gx-3">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button className="tj-btn-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="icon-box">
              <CallIcon />
              </div> 
              <p><span>Phone :</span> <a href="tel:+15149961037" style={{ color: 'white', textDecoration: 'none' }}>+1 514-996-1037</a></p>
            </div>
            <div className="contact-info-item">
            <div className="icon-box">
              <MailOutlineIcon />
              </div>
              <p><span>Email :</span>labiadh.ahlem@gmail.com</p>
            </div>
            <div className="contact-info-item">
            <div className="icon-box">
              <LocationOnIcon />
              </div>
              <p><span>Adress :</span>Laval, Quebec, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
