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

  // Modern, clean, professional input styles
  const inputStyle = {
    width: '100%',
    height: '52px',
    padding: '0 20px',
    border: '1px solid #cbcbcb',
    borderRadius: '6px',
    fontSize: '15px',
    color: '#333',
    background: '#ffffff',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit'
  };

  const selectStyle = {
    ...inputStyle,
    height: '52px',
    background: '#ffffff url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23777%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 20px top 50%',
    backgroundSize: '12px auto',
    appearance: 'none' as 'none',
    cursor: 'pointer',
    paddingRight: '40px'
  };

  const textStyle = {
    ...inputStyle,
    height: 'auto',
    padding: '15px 20px'
  };

  if (status === 'success') {
    return (
      <div className="contact-form text-center" style={{ padding: '40px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee' }}>
        <i className="fa fa-check-circle" style={{ fontSize: '60px', color: '#02c18d', marginBottom: '20px' }}></i>
        <h3 style={{ fontWeight: 800, color: '#02c18d' }}>Appointment Requested!</h3>
        <p style={{ fontSize: '17px', marginTop: '10px', color: '#555' }}>
          Thank you, {formData.name}. We have received your request and our coordinators will contact you shortly to confirm your eye care appointment.
        </p>
        <button 
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', dob: '', time: '', dentist: '', treatment: '', newPatient: '', insurance: '', message: '', consent: false });
            setDate(undefined);
          }}
          className="btn-one mt-20"
        >
          <span className="txt" style={{ padding: '0 25px' }}>Book Another <i className="fa fa-angle-double-right round" aria-hidden="true"></i></span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Patient info title */}
      <h4 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#02c18d', fontSize: '20px' }}>Patient Information</h4>
      
      <div className="row">
        <div className="col-lg-6 mb-25" style={{ position: 'relative' }}>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Full Name *" 
            style={{ ...inputStyle, borderColor: errors.name ? '#e74c3c' : '#cbcbcb' }} 
            aria-label="Full Name" 
          />
          {errors.name && <span style={{ color: '#e74c3c', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '15px' }}>{errors.name}</span>}
        </div>

        <div className="col-lg-6 mb-25" style={{ position: 'relative' }}>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email Address *" 
            style={{ ...inputStyle, borderColor: errors.email ? '#e74c3c' : '#cbcbcb' }} 
            aria-label="Email" 
          />
          {errors.email && <span style={{ color: '#e74c3c', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '15px' }}>{errors.email}</span>}
        </div>

        <div className="col-lg-6 mb-25" style={{ position: 'relative' }}>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Phone Number *" 
            style={{ ...inputStyle, borderColor: errors.phone ? '#e74c3c' : '#cbcbcb' }} 
            aria-label="Phone" 
          />
          {errors.phone && <span style={{ color: '#e74c3c', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '15px' }}>{errors.phone}</span>}
        </div>

        <div className="col-lg-6 mb-25">
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            placeholder="Date of Birth (Optional)" 
            title="Date of Birth" 
            style={{ ...inputStyle, color: formData.dob ? '#333' : '#999' }} 
            aria-label="Date of Birth" 
          />
        </div>
      </div>

      {/* Appointment details title */}
      <h4 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '15px', color: '#02c18d', fontSize: '20px' }}>Appointment Details</h4>
      
      <div className="row">
        {/* Custom Radix Date Picker */}
        <div className="col-lg-6 mb-25" style={{ position: 'relative' }}>
          <Popover.Root open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <Popover.Trigger asChild>
              <button
                type="button"
                style={{
                  ...inputStyle,
                  borderColor: errors.date ? '#e74c3c' : '#cbcbcb',
                  color: date ? '#333' : '#9e9e9e',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                {date ? format(date, 'PPP') : <span>Preferred Date *</span>}
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
                    caption: { color: '#02c18d', fontFamily: 'inherit', fontWeight: 'bold' },
                    head_cell: { color: '#666', fontSize: '14px', fontWeight: 'normal' },
                    cell: { fontSize: '14px' },
                    day: { borderRadius: '4px', margin: '2px', padding: '6px' }
                  } as any}
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          {errors.date && <span style={{ color: '#e74c3c', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '15px' }}>{errors.date}</span>}
        </div>

        <div className="col-lg-6 mb-25" style={{ position: 'relative' }}>
          <input 
            type="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            style={{ ...inputStyle, borderColor: errors.time ? '#e74c3c' : '#cbcbcb', color: formData.time ? '#333' : '#999' }} 
            title="Preferred Time" 
            aria-label="Preferred Time" 
          />
          {errors.time && <span style={{ color: '#e74c3c', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '15px' }}>{errors.time}</span>}
        </div>

        <div className="col-lg-6 mb-25">
          <select name="dentist" value={formData.dentist} onChange={handleChange} style={selectStyle} aria-label="Preferred Specialist">
            <option value="" disabled>Preferred Specialist</option>
            <option value="no-preference">No Preference</option>
            <option value="Dr. Sarah Johnson (Optometrist)">Dr. Sarah Johnson (Optometrist)</option>
            <option value="Dr. Michael Brown (Ophthalmologist)">Dr. Michael Brown (Ophthalmologist)</option>
            <option value="Dr. Emily Davis (Retina Specialist)">Dr. Emily Davis (Retina Specialist)</option>
          </select>
        </div>

        <div className="col-lg-6 mb-25">
          <select name="treatment" value={formData.treatment} onChange={handleChange} style={selectStyle} aria-label="Care Needed">
            <option value="" disabled>Care Needed</option>
            <option value="Comprehensive Eye Exam">Comprehensive Eye Exam</option>
            <option value="LASIK & Laser Consult">LASIK & Laser Consult</option>
            <option value="Cataract Consultation">Cataract Consultation</option>
            <option value="Contact Lenses Fitting">Contact Lenses Fitting</option>
            <option value="Glaucoma Evaluation">Glaucoma Evaluation</option>
            <option value="Pediatric Eye Care">Pediatric Eye Care</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="col-lg-6 mb-25">
          <select name="newPatient" value={formData.newPatient} onChange={handleChange} style={selectStyle} aria-label="New Patient?">
            <option value="" disabled>Are you a new patient?</option>
            <option value="Yes">Yes, I am a new patient</option>
            <option value="No">No, I am an existing patient</option>
          </select>
        </div>

        <div className="col-lg-6 mb-25">
          <select name="insurance" value={formData.insurance} onChange={handleChange} style={selectStyle} aria-label="Insurance?">
            <option value="" disabled>Do you have insurance?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {/* Additional info title */}
      <h4 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '15px', color: '#02c18d', fontSize: '20px' }}>Additional Information</h4>
      
      <div className="row">
        <div className="col-lg-12 mb-25">
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            cols={30} 
            rows={4} 
            placeholder="Describe your eye concerns or symptoms." 
            style={textStyle} 
            aria-label="Message / Symptoms"
          ></textarea>
        </div>
        
        <div className="col-lg-12 mb-25" style={{ position: 'relative' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              name="consent" 
              checked={formData.consent} 
              onChange={handleChange} 
              style={{ width: '18px', height: '18px', marginRight: '10px', marginTop: '3px', cursor: 'pointer' }} 
              aria-label="Privacy Consent" 
            />
            <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>I agree to the Privacy Policy and consent to being contacted regarding my appointment. *</span>
          </label>
          {errors.consent && <span style={{ color: '#e74c3c', fontSize: '12px', position: 'absolute', bottom: '-20px', left: '28px' }}>{errors.consent}</span>}
        </div>

        <div className="col-lg-12 mt-10">
          <button 
            type="submit" 
            disabled={status === 'submitting'} 
            className="btn-one"
            style={{ width: '100%', height: '56px', border: '0', background: '#02c18d', color: '#ffffff', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease', opacity: status === 'submitting' ? 0.7 : 1 }}
          >
            <span className="txt">{status === 'submitting' ? 'Submitting...' : 'Submit Request'} <i className="fa fa-angle-double-right round" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
      
      {/* Quick global overrides for react-day-picker internal elements to match the theme safely */}
      <style dangerouslySetInnerHTML={{__html: `
        .rdp-day_selected { background-color: #02c18d !important; color: white !important; font-weight: bold; }
        .rdp-day:hover:not(.rdp-day_disabled) { background-color: #e6f9f3 !important; color: #02c18d; }
        .rdp-button:focus-visible { outline: 2px solid #02c18d !important; }
        input:focus, select:focus, textarea:focus { border-color: #02c18d !important; box-shadow: 0 0 0 3px rgba(2, 193, 141, 0.1) !important; }
      `}} />
    </form>
  );
}
