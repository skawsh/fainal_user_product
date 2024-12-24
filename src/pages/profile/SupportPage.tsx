import React from 'react';
import { HelpCircle, Phone, Mail, MessageCircle, ChevronRight } from 'lucide-react';
import { ProfileLayout } from './ProfileLayout';

const supportOptions = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Talk to our customer support',
    action: 'Call Now',
    onClick: () => window.location.href = 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get support via email',
    action: 'Send Email',
    onClick: () => window.location.href = 'mailto:support@skawsh.com',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    action: 'Start Chat',
    onClick: () => alert('Starting chat...'),
  },
];

const faqs = [
  {
    question: 'How do I track my order?',
    answer: 'You can track your order in the My Activities section or through the tracking link sent to your email.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, digital wallets, and cash on delivery.',
  },
  {
    question: 'How do I cancel my order?',
    answer: 'You can cancel your order within 1 hour of placing it through the My Activities section.',
  },
];

export function SupportPage() {
  return (
    <ProfileLayout title="Support" icon={HelpCircle}>
      <div className="space-y-6">
        {/* Contact Options */}
        <div className="space-y-4">
          {supportOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="w-full bg-white rounded-xl p-4 flex items-center justify-between hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <option.icon size={24} className="text-sky-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <span className="text-sky-500 font-medium flex items-center gap-1">
                {option.action}
                <ChevronRight size={16} />
              </span>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium">{faq.question}</span>
                  <ChevronRight size={16} className="transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-2 text-gray-600 pl-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}