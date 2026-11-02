'use client';

import { useState } from 'react';
import { Mail, MapPin, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/constants';
import { isValidEmail } from '@/lib/utils';

/**
 * Contact Section - Contact form with validation and contact information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: SITE_CONFIG.email,
      link: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mirsarai, Chattogram, Bangladesh",
      link: "https://www.google.com/maps/search/?api=1&query=Mirsarai%2C%20Chattogram%2C%20Bangladesh",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (formStatus.message) {
      setFormStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter a subject' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter a message' });
      return false;
    }
    if (formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', message: 'Message must be at least 10 characters long' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');
    const params = new URLSearchParams({
      subject: formData.subject,
      body,
    });

    window.location.href = `mailto:${SITE_CONFIG.email}?${params.toString()}`;
    setFormStatus({
      type: 'info',
      message: 'Your email app should open with this message ready to send.',
    });
  };

  return (
    <section id="contact" className="section bg-background-secondary">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Let&apos;s talk about everything!
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                I&apos;m open to entry-level opportunities and conversations about
                business, finance, or technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card hover className="flex items-center gap-4">
                    <div className="p-3 bg-accent-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-tertiary">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </Card>
                );

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    className="block"
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="bg-accent-primary/10 border-accent-primary">
              <p className="text-foreground-secondary">
                <strong className="text-foreground">Note:</strong> I typically respond within 24-48 hours.
                For urgent matters, please reach out via LinkedIn or email directly.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border-primary rounded-lg text-foreground focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border-primary rounded-lg text-foreground focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border-primary rounded-lg text-foreground focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-background border border-border-primary rounded-lg text-foreground focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Status Message */}
              {formStatus.message && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    formStatus.type === 'error'
                      ? 'bg-error/10 text-error border border-error/20'
                      : 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20'
                  }`}
                >
                  {formStatus.type === 'error' ? (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Mail className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                <Mail className="w-5 h-5" />
                Open Email App
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
