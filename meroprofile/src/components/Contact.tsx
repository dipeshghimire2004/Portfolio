import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';

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

    // Send email using EmailJS
    emailjs
      .send(
        'service_mq9puoj', // Replace with your EmailJS Service ID
        'template_kravrr6', // Replace with your EmailJS Template ID
        data,
        '5Nvz5sJ_LOyhcbzcI' // Replace with your EmailJS User ID (or Public Key)
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
    <section id='contact' className="p-4 lg:w-1/2 border border-stone-100/30 rounded-xl flex flex-col items-center justify-center ">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className='flex items-center space-x-8'>
        <div className="flex mb-4  ">
          {/* <label htmlFor="name" className="block text-gray-700 mb-2">Name</label> */}
          <input
            id="name"
            {...register('name', { required: 'Name is required', maxLength: 20 })}
            className={`bg-transparent border border-stone-50/30 rounded-xl px-4 py-4 focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className='mb-4  flex items-center gap-3 lg:w-1/2'>
          {/* <label htmlFor="email" className="block text-gray-700 mb-2">Email</label> */}
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
            className={`bg-transparent border border-stone-50/30 rounded-xl px-9 py-4 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        </div>
        {/* Feedback Field */}
        <div className="mb-4 lg-full">
          <label htmlFor="feedback" className=" block text-gray-700 mb-2">Feedback</label>
          <textarea
            id="feedback"
            {...register('feedback', { required: 'Feedback is required', minLength: 10 })}
            className={`w-full bg-transparent border border-stone-50/30 rounded-xl p-4 focus:outline-none ${errors.feedback ? 'border-red-500' : 'border-gray-300'}`}
            rows={4}
            placeholder="Enter your feedback"
          ></textarea>
          {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ${
            isSending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
