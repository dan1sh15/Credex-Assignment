import { useState } from "react";
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
      alert("Form submitted (frontend only)");
      e.preventDefault();
      setForm({ name: "", email: "", company: "", license: "", message: "" });
  };
  return (
    <section className="py-16 px-4 bg-white mx-auto bg-gradient-to-b from-blue-400 to-indigo-700">
      <div className="w-6/12 mx-auto bg-white rounded-lg p-10 max-lg:w-10/12 max-md:p-7 max-sm:p-5">
        <h2 className="text-3xl font-bold mb-8 text-center max-md:text-2xl">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-md:space-y-3">
            <input type="text" name="name" placeholder="Name" required className="w-full border-none bg-gray-100 p-3 rounded outline-none" onChange={handleChange} value={form.name} />
            <input type="email" name="email" placeholder="Email" required className="w-full border-none bg-gray-100 p-3 rounded outline-none" onChange={handleChange} value={form.email} />
            <input type="text" name="company" placeholder="Company" className="w-full border-none bg-gray-100 p-3 rounded outline-none" onChange={handleChange} value={form.company} />
            <select name="license" required className="w-full border-none bg-gray-100 p-3 rounded outline-none" onChange={handleChange} value={form.license}>
            <option value="">Select License Type</option>
            <option value="Windows">Windows</option>
            <option value="Office">Office</option>
            <option value="Antivirus">Antivirus</option>
            </select>
            <textarea name="message" placeholder="Message" required className="w-full border-none bg-gray-100 p-3 rounded outline-none" rows="4" onChange={handleChange} value={form.message}></textarea>
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 w-full m-auto cursor-pointer">Submit</button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
