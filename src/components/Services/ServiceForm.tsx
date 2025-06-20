/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { services } from "./servicesData";
import emailjs from "@emailjs/browser";

const ServiceForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    service: services[0]?.title || "",
    email: "",
    pictures: null as FileList | null,
    info: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const year = new Date().getFullYear();

    try {
      await emailjs.send(
        "", // Service ID
        "", // Template ID
        {
          name: form.name,
          address: form.address,
          phone: form.phone,
          service: form.service,
          email: form.email,
          info: form.info,
          year: year,
        },
        "" // Public Key
      );

      alert("Form submitted successfully!");

      // Reset form
      setForm({
        name: "",
        address: "",
        phone: "",
        service: services[0]?.title || "",
        email: "",
        pictures: null,
        info: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-4 rounded-lg shadow space-y-4 text-sm"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-center text-[#1F2A44] mb-2">
        Explore Our Solutions
      </h2>
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
        <label className="block font-medium mb-1">Address:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
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
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
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
        <label className="block font-medium mb-1">
          Upload Pictures (optional)
        </label>
        <input
          type="file"
          name="pictures"
          onChange={handleChange}
          className="w-full text-xs"
          multiple
        />
      </div>
      <div>
        <label className="block font-medium mb-1">
          Please provide as much information as you can.
        </label>
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
    </form>
  );
};

export default ServiceForm;
