import React, { useState } from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { ProfileLayout } from './ProfileLayout';

export function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    alert('Thank you for your feedback!');
    window.history.back();
  };

  return (
    <ProfileLayout title="Send Feedback" icon={MessageCircle}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Rate Your Experience</h2>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className="p-1"
              >
                <Star
                  size={32}
                  className={`${
                    value <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Text */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Tell us more</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your experience with us..."
            className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </ProfileLayout>
  );
}