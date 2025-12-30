import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Keys are loaded from environment variables (see .env file)
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_cd25jyg";
const EMAILJS_TEMPLATE_ID_ADMIN = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN || "template_b5q0rvm"; // Template 1: Sends message to you
const EMAILJS_TEMPLATE_ID_USER = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_USER || "template_0k6mt48";   // Template 2: Auto-reply to user
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "T5pldEnnPvwUm1eOF";

const Contact = () => {
  const WhatsAppIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if keys are configured
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID_ADMIN === "YOUR_TEMPLATE_ID_ADMIN" ||
      EMAILJS_TEMPLATE_ID_USER === "YOUR_TEMPLATE_ID_USER" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      // SIMULATION MODE: Allow testing UI without keys
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      toast.info("Demo Mode: Email not actually sent.", {
        description: "Configure EmailJS keys in .env file to enable real emails."
      });
      
      toast.success('Message sent successfully! (Simulated)');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      to_name: "Kirtan Tandel", // Your name
      from_name: formData.name,
      from_email: formData.email,
      email: formData.email, // Alias for easier template configuration
      to_email: formData.email, // Alias for easier template configuration
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      console.log("Sending with params:", {
        serviceId: EMAILJS_SERVICE_ID,
        templateAdmin: EMAILJS_TEMPLATE_ID_ADMIN,
        templateUser: EMAILJS_TEMPLATE_ID_USER,
        publicKey: EMAILJS_PUBLIC_KEY ? "Present" : "Missing"
      });

      // 1. Send email to Admin (You)
      console.log("Sending Admin Email...");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_ADMIN,
        templateParams,
        EMAILJS_PUBLIC_KEY
      ).then(() => {
        console.log("Admin Email Sent Successfully");
      }).catch(err => {
        console.error("Admin email failed:", err);
        throw new Error(`Admin Email Failed: ${err.text || err.message}`);
      });

      // 2. Send Auto-reply to User
      console.log("Sending User Auto-reply...");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_USER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      ).then(() => {
        console.log("User Email Sent Successfully");
      }).catch(err => {
        console.error("User email failed:", err);
        throw new Error(`User Email Failed: ${err.text || err.message}`);
      });

      toast.success('Message sent successfully! A confirmation email has been sent to you.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(`Failed to send: ${error.message}`);
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'kirtandel111@gmail.com',
      link: 'mailto:kirtandel111@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 9664546853',
      link: 'tel:+919664546853'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Gujarat, India',
      link: 'https://www.google.com/maps?q=Gujarat,India'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/kirtandel', label: 'Instagram' },
    { icon: <WhatsAppIcon className="h-5 w-5" />, url: 'https://wa.me/919664546853', label: 'WhatsApp' },
    { icon: <Phone className="h-5 w-5" />, url: 'tel:+919664546853', label: 'Call' },
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/kirtandel', label: 'GitHub' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:kirtandel111@gmail.com', label: 'Email' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/kirtandel', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen py-20 animated-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Kirtan Tandel..."
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kirtandel@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject..."
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full min-h-32"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full"
                size="lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-accent hover:bg-primary hover:text-primary-foreground rounded-xl transition-all card-hover"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Availability</h2>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and interesting projects.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
