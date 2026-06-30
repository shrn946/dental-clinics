'use client';

import { useState } from 'react';
import { PageHeader } from '../components';

export default function DemotwoAppointment() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been submitted successfully. Our coordinator will contact you shortly.');
  };

  return (
    <main>
      <PageHeader title="Book An Appointment" />

      {/* Booking Form Grid Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="subtitle">Treatment Visit</span>
              <h2 className="main-title" style={{ marginBottom: '20px' }}>Schedule Your Dental Consultation</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
                Fill out our secure booking form to coordinate your diagnostic or clean checkup visit. A coordinator will verify your insurance eligibility and lock in your doctor time.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(197, 168, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-light)' }}>Quick Emergency Contact</h4>
                    <h3 style={{ fontSize: '18px' }}>(+123) 456 78 900</h3>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(197, 168, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-light)' }}>Working Clinic Hours</h4>
                    <h3 style={{ fontSize: '18px' }}>Mon - Sat: 9:00 AM - 9:00 PM</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-wrapper">
              <form onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Full Name" 
                      className="form-control"
                      value={appointmentForm.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email Address" 
                      className="form-control"
                      value={appointmentForm.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      className="form-control"
                      value={appointmentForm.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="date" 
                      name="date"
                      className="form-control"
                      value={appointmentForm.date}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <select 
                      name="doctor"
                      className="form-control"
                      value={appointmentForm.doctor}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose Doctor</option>
                      <option value="john">Dr. John Doe</option>
                      <option value="jane">Dr. Jane Smith</option>
                      <option value="alan">Dr. Alan Green</option>
                      <option value="sarah">Dr. Sarah White</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select 
                      name="service"
                      className="form-control"
                      value={appointmentForm.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Surgery</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="aligners">Orthodontics Aligners</option>
                      <option value="implants">Dental Implants</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Describe your dental symptoms or appointment request details..." 
                    className="form-control"
                    value={appointmentForm.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }}>
                  Request Treatment Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
