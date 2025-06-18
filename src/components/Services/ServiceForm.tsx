import React, { useState } from "react";
import { services } from "./servicesData";
import emailjs from 'emailjs-com';

const ServiceForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0]?.title || "",
    email: "",
    pictures: null as FileList | null,
    info: "",
  });

  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const templateParams = {
      name: form.name,
      phone: form.phone,
      service: form.service,
      email: form.email,
      info: form.info,
    };
    try {
      await emailjs.send(
        'service_t14idbm',
        'template_zghuiin',
        templateParams,
        '1mIgF3vQdkm2eyH3P'
      );
      setStatus('success');
      setForm({
        name: '',
        phone: '',
        service: services[0]?.title || '',
        email: '',
        pictures: null,
        info: '',
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="max-w-md mx-auto bg-white p-4 rounded-lg shadow space-y-4 text-sm" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-center text-[#1F2A44] mb-2">Explore Our Solutions</h2>
      <div>
        <label className="block font-medium mb-1">First, Last Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Select Service:</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Others">Others</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Upload Pictures (optional)</label>
        <input
          type="file"
          name="pictures"
          onChange={handleChange}
          className="w-full text-xs"
          multiple
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Please provide as much information as you can.</label>
        <textarea
          name="info"
          value={form.info}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1F2A44] text-white font-semibold py-1 rounded hover:bg-[#FF69B4] transition-colors text-sm"
      >
        Submit
      </button>
      {status === 'success' && (
        <p className="mt-4 text-green-600 font-semibold text-center">Your message has been sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 font-semibold text-center">There was an error sending your message. Please try again later.</p>
      )}
    </form>
  );
};

export default ServiceForm; 