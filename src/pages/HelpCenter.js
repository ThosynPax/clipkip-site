"use client"

import { useState } from "react"

function HelpCenter() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "How do I install Karpture?",
      answer:
        "Simply click the 'Add to Chrome' button on our homepage, and Chrome will guide you through the installation process. The extension will be added to your browser toolbar.",
    },
    {
      question: "How do I access my saved clipboard history?",
      answer:
        "Click on the Karpture icon in your browser toolbar to open the extension popup. You'll see all your recently copied text items listed there.",
    },
    {
      question: "How do I search through my clipboard history?",
      answer:
        "Use the search box at the top of the Karpture popup. Type any keyword or phrase to find specific clipboard items quickly.",
    },
    {
      question: "Is my clipboard data secure?",
      answer:
        "Yes! All your clipboard data is stored locally on your device. We never send your data to our servers or any third-party services.",
    },
    {
      question: "How much clipboard history is saved?",
      answer:
        "Karpture saves your last 100 clipboard items by default. You can adjust this limit in the extension settings.",
    },
    {
      question: "Can I delete specific clipboard items?",
      answer: "Yes! Click the delete button (trash icon) next to any clipboard item to remove it from your history.",
    },
    {
      question: "How do I clear all my clipboard history?",
      answer:
        "Go to the extension settings by clicking the gear icon, then click 'Clear All History' to remove all saved clipboard items.",
    },
    {
      question: "Does Karpture work with images?",
      answer: "Currently, Karpture only supports text clipboard content. Image support may be added in future updates.",
    },
    {
      question: "Can I use Karpture on other browsers?",
      answer: "Currently, Karpture is available for Chrome. Support for other browsers is planned for future releases.",
    },
    {
      question: "How do I uninstall Karpture?",
      answer:
        "Right-click on the Karpture icon in your browser toolbar and select 'Remove from Chrome', or go to Chrome Extensions settings and remove it from there.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#b4518a]">Karpture</h1>
            <a href="/" className="text-gray-600 hover:text-[#b4518a] transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>

        {/* Quick Start Guide */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Start Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#b4518a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Install Extension</h3>
              <p className="text-gray-600 text-sm">Add Karpture to Chrome from our homepage</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#b4518a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Copy Text</h3>
              <p className="text-gray-600 text-sm">Copy any text as usual - it's automatically saved</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#b4518a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Access History</h3>
              <p className="text-gray-600 text-sm">Click the extension icon to view and reuse saved text</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-[#b4518a] text-xl">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-[#b4518a]/10 rounded-lg p-8 mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Still need help?</h3>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? We're here to help!</p>
          <a
            href="mailto:thosynpax@gmail.com"
            className="bg-[#b4518a] hover:bg-[#9d4179] text-white px-6 py-3 rounded-md transition-colors inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Extension built by{" "}
            <a href="https://thosynpax.com" className="text-white hover:text-[#b4518a] transition-colors">
              Thosyn Pax
            </a>{" "}
            - Landing page supported by{" "}
            <a href="https://v0.dev" className="text-white hover:text-[#b4518a] transition-colors">
              v0.dev
            </a>{" "}
            and modified by me
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HelpCenter
