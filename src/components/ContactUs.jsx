import React from 'react'
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <div>
      <div className="contact-container">
<div className="contact-info">
  <h2>Contact us</h2>
  <p>You can contact us at:</p>
  <ul>
    <li><span style={{ color: '#1338ebad' }}>0044 20 3603 9754 </span>(UK HQ)</li>
    <li><span style={{ color: '#1338ebad' }}>0034 951 203 527 </span>(Europe HQ)</li>
    <li><span style={{ color: '#1338ebad' }}>001 310 362 4812 </span>(USA HQ)</li>
  </ul>
</div>
<div className="contact-form">
  <h2>Please Submit Your Query Below</h2>
  <form>
    <label htmlFor="name">Name <span style={{ color: '#f30a0a' }}>*</span></label>
    <input type="text" id="name" name="name" required />
    
    <label htmlFor="email">Email <span style={{ color: '#f30a0a' }}>*</span></label>
    <input type="email" id="email" name="email" required />
    
    <label htmlFor="phone">Phone Number <span style={{ color: '#f30a0a' }}>*</span></label>
    <input type="tel" id="phone" name="phone" required />
    
    <label htmlFor="message">Comment or Message <span style={{ color: '#f30a0a' }}>*</span></label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Submit</button>
  </form>
</div>
</div>
    </div>
  )
}

export default ContactUs
