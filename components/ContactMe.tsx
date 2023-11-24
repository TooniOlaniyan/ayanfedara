'use client'
import React from 'react'
import { useState } from 'react';

interface FormData {
  name: string
  email:string
  message: string
}

const ContactMe = () => {
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      message: "",
    });
  const handleSubmit =( ) => {

  }

  const handleChange = () => {

  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactMe