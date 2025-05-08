import { useState } from "react";

const ContactForm = ({ darkMode }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!form.license) newErrors.license = "License type is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully.");
      setForm({ name: "", email: "", company: "", license: "", message: "" });
      setErrors({});
    }
  };

  const inputClass = `w-full border-none ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} p-3 rounded outline-none`;
  const errorClass = `text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`;

  return (
    <section className={`py-16 px-4 mx-auto ${darkMode ? 'bg-gradient-to-b from-blue-900 to-indigo-900' : 'bg-gradient-to-b from-blue-400 to-indigo-700'}`}>
      <div className={`w-6/12 mx-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg p-10 max-lg:w-10/12 max-md:p-7 max-sm:p-5`}>
        <h2 className="text-3xl font-bold mb-8 text-center max-md:text-2xl">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-md:space-y-3">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={inputClass}
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={inputClass}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* Company */}
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              className={inputClass}
              value={form.company}
              onChange={handleChange}
            />
          </div>

          {/* License */}
          <div>
            <select
              name="license"
              className={inputClass}
              value={form.license}
              onChange={handleChange}
            >
              <option value="">Select License Type</option>
              <option value="Windows">Windows</option>
              <option value="Office">Office</option>
              <option value="Antivirus">Antivirus</option>
            </select>
            {errors.license && <p className={errorClass}>{errors.license}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className={inputClass}
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 w-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
