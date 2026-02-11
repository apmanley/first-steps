import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

function ContactPage() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormValues(initialFormState);
  };

  return (
    <section className="section container">
      <p className="eyebrow">Contact</p>
      <h1>Let&apos;s discuss your research priorities</h1>
      <p className="intro">
        Share your upcoming sourcing initiatives and we&apos;ll recommend the right
        research approach.
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formValues.company}
            onChange={handleChange}
          />

          <label htmlFor="message">How can we help?</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formValues.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button">
            Send inquiry
          </button>

          {submitted ? (
            <p className="form-success" role="status">
              Thanks! Your inquiry has been captured on this demo form.
            </p>
          ) : null}
        </form>

        <aside className="contact-info" aria-label="Company information">
          <h2>Company info</h2>
          <p>Procura Insights</p>
          <p>2100 Market Street, Suite 450, Chicago, IL</p>
          <p>+1 (312) 555-0148</p>
          <p>hello@procurainsights.com</p>
        </aside>
      </div>
    </section>
  );
}

export default ContactPage;
