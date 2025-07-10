'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      // Here you would typically send the email to your backend
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {!isSubscribed ? (
            <>
              <div className="mb-6">
                <Mail size={48} className="mx-auto mb-4 text-blue-200" />
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-blue-100 text-lg">
                  Get the latest news, exclusive offers, and product updates delivered to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-blue-200 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className="text-center">
              <CheckCircle size={48} className="mx-auto mb-4 text-green-400" />
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-blue-100 text-lg">
                You've successfully subscribed to our newsletter. Keep an eye on your inbox for exclusive offers and updates.
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="mt-6 text-blue-200 hover:text-white underline"
              >
                Subscribe another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}