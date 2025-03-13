import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';
import * as dotenv from 'dotenv';
dotenv.config();


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  }

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" fill={true} className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange}/>
            <Input placeholder="Email Address" name="email" value={formData.email} onChange={handleChange}/>
          </div>

          <div className="mt-8">
            <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange}/>
          </div>
          <div className="mt-8">
            <TextArea placeholder="Message" name="message" value={formData.message} onChange={handleChange}/>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit}>
              <Button type="submit" className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
