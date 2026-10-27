"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!input.name || !input.email || !input.message) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (!isValidEmail(input.email)) {
      setError((prev) => ({ ...prev, email: true }));
      return;
    } else {
      setError({ email: false, required: false });
    }

    if (!captcha) {
      toast.error('Please complete the captcha!');
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error('EmailJS configuration is missing. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env.local file.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL || ''}/api/google`, {
        token: captcha
      });

      setCaptcha(null);
      if (!res.data.success) {
        toast.error('Captcha verification failed!');
        setIsLoading(false);
        return;
      }

      const templateParams = {
        name: input.name,
        from_name: input.name,
        user_name: input.name,
        email: input.email,
        from_email: input.email,
        user_email: input.email,
        reply_to: input.email,
        message: input.message,
      };

      const emailRes = await emailjs.send(serviceID, templateID, templateParams, {
        publicKey: publicKey,
      });

      if (emailRes.status === 200) {
        toast.success('Message sent successfully!');
        setInput({
          name: '',
          email: '',
          message: '',
        });
        setError({
          email: false,
          required: false,
        });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (err) {
      toast.error(err?.text || err?.message || 'Failed to send message. Please check your EmailJS settings.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 disabled:opacity-60"
              type="text"
              maxLength="100"
              required={true}
              disabled={isLoading}
              onChange={(e) => {
                setInput({ ...input, name: e.target.value });
                if (e.target.value && input.email && input.message) {
                  setError((prev) => ({ ...prev, required: false }));
                }
              }}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 disabled:opacity-60"
              type="email"
              maxLength="100"
              required={true}
              disabled={isLoading}
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
                if (e.target.value && input.name && input.message) {
                  setError((prev) => ({ ...prev, required: false }));
                }
                if (error.email && isValidEmail(e.target.value)) {
                  setError((prev) => ({ ...prev, email: false }));
                }
              }}
              onBlur={() => {
                checkRequired();
                setError((prev) => ({ ...prev, email: input.email ? !isValidEmail(input.email) : false }));
              }}
            />
            {error.email &&
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 disabled:opacity-60"
              maxLength="500"
              name="message"
              required={true}
              disabled={isLoading}
              onChange={(e) => {
                setInput({ ...input, message: e.target.value });
                if (e.target.value && input.name && input.email) {
                  setError((prev) => ({ ...prev, required: false }));
                }
              }}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(code) => setCaptcha(code)}
          />
          <div className="flex flex-col items-center gap-2">
            {error.required &&
              <p className="text-sm text-red-400">
                All fields are required!
              </p>
            }
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:gap-1"
              role="button"
              disabled={isLoading}
              onClick={handleSendMail}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span>Sending...</span>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <TbMailForward className="mt-1" size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithCaptcha;