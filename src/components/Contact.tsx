import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { BsSendFill } from "react-icons/bs";
import { motion } from 'framer-motion';

interface IFormInput {
  name: string;
  email: string;
  feedback: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsSending(true);

    const payload: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      feedback: data.feedback,
    }
    emailjs
      .send(
        'service_mq9puoj',
        'template_kravrr6',
        payload,
        '5Nvz5sJ_LOyhcbzcI'
      )
      .then(
        () => {
          toast.success('Feedback sent successfully! 🎉');
          reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error.text);
          toast.error('Failed to send feedback. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
      id="contact" className="p-8 lg:w-1/2 w-full mx-auto border border-stone-200 dark:border-stone-800 bg-white dark:bg-brand-dark rounded-xl flex flex-col items-center justify-center shadow-md">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-8">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">

          <div className="flex-1">
            <input
              id="name"
              {...register('name', { required: 'Name is required', maxLength: 20 })}
              className={`w-full bg-transparent border border-stone-50/30 rounded-xl px-4 py-3 focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="flex-1">
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Enter a valid email address',
                },
              })}
              className={`w-full bg-transparent border border-stone-50/30 rounded-xl px-4 py-3 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            id="feedback"
            {...register('feedback', { required: 'Feedback is required', minLength: 10 })}
            className={`w-full bg-transparent border border-stone-50/30 rounded-xl p-4 focus:outline-none ${errors.feedback ? 'border-red-500' : 'border-gray-300'
              }`}
            rows={4}
            placeholder="Enter your feedback"
          ></textarea>
          {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>}
        </div>

        <button
          type="submit"
          className={`w-full py-4 px-6 bg-brand-green text-white font-bold rounded-lg hover:bg-brand-red transition duration-300 shadow-sm ${isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send Message'}
          <BsSendFill className='inline ml-2' />
        </button>

      </form>
    </motion.section>
  );
};

export default Contact;
