'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import * as Popover from '@radix-ui/react-popover';

export default function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    time: '',
    dentist: '',
    treatment: '',
    newPatient: '',
    insurance: '',
    message: '',
    consent: false
  });
  
  const [date, setDate] = useState<Date | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const selectStyles = { 
    height: 'calc(3.0em + .75rem + 2px)', 
    background: 'transparent url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23777%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 15px top 50%',
    backgroundSize: '12px auto',
    border: '1px solid #777', 
    borderRadius: '0', 
    padding: '0 30px 0 15px', 
    fontFamily: 'var(--font-jakarta)', 
    fontSize: '15px',
    color: '#333',
    appearance: 'none' as 'none',
    width: '100%',
    cursor: 'pointer'
  };

  if (status === 'success') {
    return (
      <div className="contact-form mt-30 text-center" style={{ padding: '40px', background: '#f8f9fa', borderRadius: '10px' }}>
        <i className="fas fa-check-circle" style={{ fontSize: '60px', color: '#00bcd4', marginBottom: '20px' }}></i>
        <h3 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, color: '#104cba' }}>Appointment Requested!</h3>
        <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', marginTop: '10px' }}>
          Thank you, {formData.name}. We have received your request and our front desk will contact you shortly to confirm your appointment.
        </p>
        <button 
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', dob: '', time: '', dentist: '', treatment: '', newPatient: '', insurance: '', message: '', consent: false });
            setDate(undefined);
          }}
          className="btn ss-btn mt-20"
        >
          <span>Book Another</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form mt-30" noValidate>
      <h4 style={{ fontFamily: 'var(--font-outfit)', marginBottom: '15px', color: '#104cba', fontSize: '20px' }}>Patient Information</h4>
      <div className="row">
        <div className="col-lg-6">
            <div className="contact-field p-relative c-name mb-20">                                    
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" style={{ borderColor: errors.name ? 'red' : '', color: '#333' }} aria-label="Full Name" />
                {errors.name && <span style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.name}</span>}
            </div>                               
        </div>
        <div className="col-lg-6">                               
            <div className="contact-field p-relative c-subject mb-20">                                   
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" style={{ borderColor: errors.email ? 'red' : '', color: '#333' }} aria-label="Email" />
                {errors.email && <span style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.email}</span>}
            </div>
        </div>		
        <div className="col-lg-6">                               
            <div className="contact-field p-relative c-subject mb-20">                                   
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" style={{ borderColor: errors.phone ? 'red' : '', color: '#333' }} aria-label="Phone" />
                {errors.phone && <span style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.phone}</span>}
            </div>
        </div>	
        <div className="col-lg-6">                               
            <div className="contact-field p-relative c-subject mb-20">                                   
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth (Optional)" title="Date of Birth" style={{ color: formData.dob ? '#333' : '#999' }} aria-label="Date of Birth" />
            </div>
        </div>	
      </div>

      <h4 style={{ fontFamily: 'var(--font-outfit)', marginBottom: '15px', marginTop: '20px', color: '#104cba', fontSize: '20px' }}>Appointment Details</h4>
      <div className="row">
        
        {/* Custom Radix Date Picker */}
        <div className="col-lg-6">
            <div className="contact-field p-relative mb-20"> 
              <Popover.Root open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <Popover.Trigger asChild>
                  <button
                    type="button"
                    style={{
                      height: 'calc(3.0em + .75rem + 2px)', width: '100%', background: 'transparent', border: errors.date ? '1px solid red' : '1px solid #777', 
                      borderRadius: '0', padding: '0 15px', fontFamily: 'var(--font-jakarta)', fontSize: '15px',
                      color: date ? '#333' : '#9e9e9e', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}
                  >
                    {date ? format(date, 'PPP') : <span>Pick a date *</span>}
                    <CalendarIcon style={{ width: '18px', height: '18px', opacity: 0.5 }} />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content 
                    align="start" 
                    sideOffset={5} 
                    style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', zIndex: 9999, border: '1px solid #eee' }}
                  >
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={(day) => { setDate(day); setErrors(prev => ({ ...prev, date: '' })); setIsCalendarOpen(false); }}
                      disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                      styles={{
                        caption: { color: '#104cba', fontFamily: 'var(--font-outfit)', fontWeight: 'bold' },
                        head_cell: { color: '#666', fontFamily: 'var(--font-jakarta)', fontSize: '14px', fontWeight: 'normal' },
                        cell: { fontFamily: 'var(--font-jakarta)', fontSize: '14px' },
                        day: { borderRadius: '4px', margin: '2px', padding: '6px' }
                      } as any}
                    />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
              {errors.date && <span style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.date}</span>}
            </div>                               
        </div>

        <div className="col-lg-6">
            <div className="contact-field p-relative mb-20">                                    
                <input type="time" name="time" value={formData.time} onChange={handleChange} style={{ borderColor: errors.time ? 'red' : '', color: formData.time ? '#333' : '#999' }} title="Preferred Time" aria-label="Preferred Time" />
                {errors.time && <span style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.time}</span>}
            </div>                               
        </div>
        <div className="col-lg-6">
            <div className="contact-field p-relative mb-20">                                    
                <select name="dentist" value={formData.dentist} onChange={handleChange} style={selectStyles} aria-label="Preferred Dentist">
                  <option value="" disabled>Preferred Dentist</option>
                  <option value="no-preference">No Preference (Dentist)</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                  <option value="Dr. Emily Davis">Dr. Emily Davis</option>
                </select>
            </div>                               
        </div>
        <div className="col-lg-6">
            <div className="contact-field p-relative mb-20">                                    
                <select name="treatment" value={formData.treatment} onChange={handleChange} style={selectStyles} aria-label="Treatment Needed">
                  <option value="" disabled>Treatment Needed</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Dental Cleaning">Dental Cleaning</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Dental Filling">Dental Filling</option>
                  <option value="Root Canal">Root Canal</option>
                  <option value="Tooth Extraction">Tooth Extraction</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Other">Other</option>
                </select>
            </div>                               
        </div>
        <div className="col-lg-6">
            <div className="contact-field p-relative mb-20">                                    
                <select name="newPatient" value={formData.newPatient} onChange={handleChange} style={selectStyles} aria-label="New Patient?">
                  <option value="" disabled>Are you a new patient?</option>
                  <option value="Yes">Yes, I am a new patient</option>
                  <option value="No">No, I am an existing patient</option>
                </select>
            </div>                               
        </div>
        <div className="col-lg-6">
            <div className="contact-field p-relative mb-20">                                    
                <select name="insurance" value={formData.insurance} onChange={handleChange} style={selectStyles} aria-label="Dental Insurance?">
                  <option value="" disabled>Do you have dental insurance?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
            </div>                               
        </div>
      </div>

      <h4 style={{ fontFamily: 'var(--font-outfit)', marginBottom: '15px', marginTop: '20px', color: '#104cba', fontSize: '20px' }}>Additional Information</h4>
      <div className="row">
        <div className="col-lg-12">
            <div className="contact-field p-relative c-message mb-30">                                  
                <textarea name="message" value={formData.message} onChange={handleChange} cols={30} rows={5} placeholder="Describe your dental concern or any symptoms." style={{ color: '#333' }} aria-label="Message / Symptoms"></textarea>
            </div>
        </div>
        
        <div className="col-lg-12 mb-30" style={{ position: 'relative' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer', fontFamily: 'var(--font-jakarta)' }}>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} style={{ width: '20px', height: '20px', marginRight: '10px', marginTop: '4px' }} aria-label="Privacy Consent" />
            <span style={{ fontSize: '15px', color: '#666' }}>I agree to the Privacy Policy and consent to being contacted regarding my appointment. *</span>
          </label>
          {errors.consent && <span style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-15px', left: '30px' }}>{errors.consent}</span>}
        </div>

        <div className="col-lg-12">
            <div className="slider-btn">                                          
                <button type="submit" disabled={status === 'submitting'} className="btn ss-btn" style={{ opacity: status === 'submitting' ? 0.7 : 1 }}>
                  <span>{status === 'submitting' ? 'Submitting...' : 'Book Appointment'}</span>
                </button>				
            </div>                             
        </div>
      </div>
      
      {/* Quick global overrides for react-day-picker internal elements to match the theme safely */}
      <style dangerouslySetInnerHTML={{__html: `
        .rdp-day_selected { background-color: #00bcd4 !important; color: white !important; font-weight: bold; }
        .rdp-day:hover:not(.rdp-day_disabled) { background-color: #f0f9fa !important; color: #104cba; }
        .rdp-button:focus-visible { outline: 2px solid #00bcd4 !important; }
      `}} />
    </form>
  );
}
