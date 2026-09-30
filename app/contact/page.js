"use client";

import { useState } from 'react';
import Reveal from '../../components/Reveal';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    contactMethod: 'email',
    description: '',
    consent: false
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setErrorMessage("You must agree to the terms to submit an enquiry.");
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // TODO: Implement actual API integration here
      // For now, simulating a network request without fake backend logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        contactMethod: 'email',
        description: '',
        consent: false
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage("An error occurred while submitting your enquiry. Please try calling directly.");
    }
  };

  return (
    <div className={styles.container}>
      <Reveal delay={100}>
        <h2 className="section-heading">Schedule a Consultation</h2>
      </Reveal>
      
      <div className={styles.grid}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <Reveal delay={200}>
            <div className="card-luxury">
              <h4>Direct Communication</h4>
              <div className="divider-gold-short"></div>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                For urgent matters, please contact the chamber directly via phone or email.
              </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div>
                <span className={styles.label}>Mobile</span>
                <a href="tel:+916381528329" style={{ display: 'block', fontSize: 'var(--text-xl)', color: 'var(--white-warm)', marginTop: 'var(--space-1)' }}>
                  +91 6381528329
                </a>
              </div>
              
              <div>
                <span className={styles.label}>Email</span>
                <a href="mailto:advocatesaravananlaw@gmail.com" style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--white-warm)', marginTop: 'var(--space-1)' }}>
                  advocatesaravananlaw@gmail.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Consultation Form */}
        <div className={styles.formContainer}>
          <Reveal delay={400}>
            <h4 style={{ color: 'var(--white-warm)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-xl)' }}>
              Consultation Enquiry
            </h4>
          </Reveal>

          {status === 'success' && (
            <div className={`${styles.statusMessage} ${styles.success}`}>
              Thank you for reaching out. Your enquiry has been received and the chamber will contact you shortly to schedule a consultation.
            </div>
          )}

          {status === 'error' && (
            <div className={`${styles.statusMessage} ${styles.error}`}>
              {errorMessage}
            </div>
          )}

          <Reveal delay={500}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                className={styles.input} 
                required 
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className={styles.input} 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input} 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Legal Matter / Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className={styles.input} 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contactMethod" className={styles.label}>Preferred Contact Method</label>
              <select 
                id="contactMethod" 
                name="contactMethod" 
                className={styles.select}
                value={formData.contactMethod}
                onChange={handleChange}
              >
                <option value="email">Email</option>
                <option value="phone">Phone Call</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.label}>Brief Description</label>
              <textarea 
                id="description" 
                name="description" 
                className={styles.textarea} 
                required
                placeholder="Please provide a brief overview of the matter. Do not include sensitive or confidential information in this form."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                id="consent" 
                name="consent" 
                className={styles.checkbox} 
                required
                checked={formData.consent}
                onChange={handleChange}
              />
              <label htmlFor="consent" className={styles.checkboxLabel}>
                I confirm that the information provided is accurate and I consent to being contacted by the chamber.
              </label>
            </div>

            <button 
              type="submit" 
              className={`btn-primary ${styles.submitBtn}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
            </button>

            <div className={styles.disclaimer}>
              <strong>Legal Disclaimer:</strong> Submitting an enquiry via this form does not establish an advocate-client relationship. Please do not send confidential or time-sensitive information until formal representation is agreed upon. We do not guarantee specific legal outcomes.
            </div>
          </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
