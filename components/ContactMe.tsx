'use client'
import Image from 'next/image';
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
  const handleSubmit =( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()


  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

  };
  return (
    <form className=" form mb-[10rem]  padding-x padding-y">
      <div className="flex relative flex-1 flex-col gap-[4rem]">
        <label className="">
          <span className=" text-white font-bold">
            What do your friends call you?
          </span>
          <input
            className="form_field-input"
            type="text"
            name="name"
            placeholder="John Doe *"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4 text-white">
          <span className=" text-white font-bold">
            How can we reachyou in
            cyberspace? Your email, please:
          </span>
          <input
            className="form_field-input"
            type="email"
            name="email"
            placeholder="eg johndoe@gmail.com*"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4 ">
          <span className=" text-white font-bold">
            <span className="text-orange-600">Ready</span>, set, type! What's
            the message:
          </span>
          <textarea
            className="form_field-input h-[10rem] resize-none"
            name="message"
            placeholder="Hello Ayanfedara, can you tell me about....*"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button className="form_button">send it in</button>
      </div>
      <div className="">
        <h2 className="title">
          <span className="text-orange-600">You</span> want to reach <br /> out
          to me?
        </h2>
        <p className="subtitle">Don't be shy, send me a message &#128512;</p>
        <div className="w-50 h-50 overflow-hidden rounded-full mx-auto mt-4">
          <Image
            src="/ayanfeig.jpg" // Replace with your actual image path
            alt="Profile Image"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
      </div>
    </form>
  );
}

export default ContactMe