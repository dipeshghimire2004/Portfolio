import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { BsSendFill } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface IFormInput {
  name: string;
  email: string;
  feedback: string;
}

const EMAILJS_SERVICE_ID  = 'service_mq9puoj';
const EMAILJS_TEMPLATE_ID = 'template_kravrr6';
const EMAILJS_PUBLIC_KEY  = '5Nvz5sJ_LOyhcbzcI';

const inputBase =
  'w-full rounded-xl px-4 py-3 text-sm bg-gray-50 dark:bg-gray-800/60 border transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-green/40 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-800 dark:text-gray-100';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ defaultValues: { name: '', email: '', feedback: '' } });

  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsSending(true);

    const loadingToast = toast.loading('Sending your message…');

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to:  data.email,
          message:   data.feedback,
          to_name:   'Dipesh',
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.dismiss(loadingToast);
        toast.success('Message sent! I\'ll get back to you soon.', { duration: 4000 });
        reset();
      })
      .catch((err) => {
        toast.dismiss(loadingToast);
        console.error('EmailJS error:', err);
        toast.error('Something went wrong. Please try again.', { duration: 4000 });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-5xl mx-auto px-4 py-16"
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-brand-red tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* ── Info cards (left) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: <MdOutlineEmail size={20} />,
                label: t('contact.email'),
                value: 'dipeshghimire2004@gmail.com',
                href: 'mailto:dipeshghimire2004@gmail.com',
              },
              {
                icon: <MdOutlineLocationOn size={20} />,
                label: t('contact.address'),
                value: 'Kathmandu, Nepal',
                href: 'https://maps.google.com/?q=Kathmandu,Nepal',
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:border-brand-green/40 hover:shadow-md transition-all duration-200"
              >
                <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* ── Form (right) ── */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    {...register('name', {
                      required: 'Name is required',
                      maxLength: { value: 50, message: 'Name too long' },
                    })}
                    className={`${inputBase} ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-300/40'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="Dipesh Ghimire"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <span>⚠</span> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: 'Enter a valid email',
                      },
                    })}
                    className={`${inputBase} ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-300/40'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <span>⚠</span> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="feedback" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                  {t('contact.message')}
                </label>
                <textarea
                  id="feedback"
                  rows={5}
                  {...register('feedback', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                  })}
                  className={`${inputBase} resize-none ${
                    errors.feedback
                      ? 'border-red-400 focus:ring-red-300/40'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                  placeholder={t('contact.message')}
                />
                {errors.feedback && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <span>⚠</span> {errors.feedback.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-green text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-brand-red transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    {t('contact.sendMessage')}
                    <BsSendFill size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.section>
  );
};

export default Contact;
