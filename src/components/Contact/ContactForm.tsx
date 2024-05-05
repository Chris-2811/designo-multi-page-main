import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/button';
import iconError from '@/assets/contact/desktop/icon-error.svg';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  function validateForm() {
    let isValid: boolean = true;
    const newErrors: Errors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Can't be empty";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      isValid = false;
      newErrors.email = 'Invalid email format!';
    }

    if (!formData.name) {
      isValid = false;
      newErrors.name = "Can't be empty";
    }

    if (!formData.message) {
      isValid = false;
      newErrors.message = "Can't be empty";
    }

    setErrors(newErrors);

    return isValid;
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;

    if (id === 'phone' && value.length > 16) {
      return;
    }

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validateForm()) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(true);
    } else {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 md:mt-10 lg:w-[380px]">
      <div className="relative form-control">
        <Input
          id="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={formData.name}
          maxLength={40}
        />
        {errors.name && (
          <div className="absolute right-0 bottom-[0.625rem] flex items-center gap-3">
            <div className="italic text-xs">{errors.name}</div>
            <img src={iconError} alt="error" />
          </div>
        )}
      </div>
      <div className="relative form-control mt-[1.625rem]">
        <Input
          id="email"
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        {errors.email && (
          <div className="absolute right-0 bottom-[0.625rem] flex items-center gap-3">
            <div className="italic text-xs">{errors.email}</div>
            <img src={iconError} alt="error" />
          </div>
        )}
      </div>
      <div className="relative form-control  mt-[1.625rem]">
        <Input
          id="phone"
          placeholder="Phone"
          type="number"
          onChange={handleInputChange}
          value={formData.phone}
          maxLength={16}
        />
      </div>
      <div className="relative form-control  mt-[1.625rem] ">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          maxLength={500}
          placeholder="Your Message"
          className="bg-transparent placeholder:text-white/50  border-b w-full pl-[0.75rem] outline-none resize-none"
          onChange={handleInputChange}
          value={formData.message}
        ></textarea>
        {errors.message && (
          <div className="absolute right-0 top-[0.375rem] flex items-center gap-3">
            <div className="italic text-xs">{errors.name}</div>
            <img src={iconError} alt="error" />
          </div>
        )}
      </div>
      <div className="mt-10 md:mt-6 flex justify-center md:justify-end">
        <Button>Submit</Button>
      </div>
    </form>
  );
}

export default ContactForm;
