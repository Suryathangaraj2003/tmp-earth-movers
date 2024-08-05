import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cta.css';
import axios from 'axios';

const CTA = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    place: '',
    service: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      phone: formData.phone,
      place: formData.place,
      service: formData.service
    };

    try {
      console.log('Submitting form with data:', data);
      const response = await axios.post('https://sheet.best/api/sheets/2a16e910-15cd-47ef-86f0-b9aba0e262de', data);
      console.log('Form submitted successfully:', response.data);
      setFormData({
        name: '',
        phone: '',
        place: '',
        service: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container1">
              {!showForm ? (
                <div className="cta-content">
                  <span className="thq-heading-2">{props.heading1}</span>
                  <p className="thq-body-large">{props.content1}</p>
                  <div className="cta-actions">
                    <button type="button" className="thq-button-filled cta-button" onClick={() => setShowForm(true)}>
                      {props.action1}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-form">
                  <div className="form">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-blue-500 rounded-lg"
                      required
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Ph.no :</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-blue-500 rounded-lg"
                      required
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="place" className="block text-gray-700 font-semibold mb-2">Place:</label>
                    <input
                      type="text"
                      id="place"
                      name="place"
                      value={formData.place}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-blue-500 rounded-lg place"
                      required
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service:</label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-blue-500 rounded-lg"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="thq-button-filled cta-button submit"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CTA.defaultProps = {
  heading1: 'Ready to move some earth?',
  content1: 'Contact us today for all your earth moving needs.',
  action1: 'Get a Quote',
};

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
};

export default CTA;
