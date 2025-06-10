function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By installing and using Karpture, you agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use the extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Karpture is a browser extension that helps you manage your clipboard history by automatically saving
              copied text locally on your device. The service is provided by{" "}
              <a href="https://thosynpax.com" className="text-[#b4518a] hover:underline">
                Thosyn Pax
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You are responsible for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Using the extension in compliance with applicable laws and regulations</li>
              <li>Not copying or storing sensitive information like passwords or personal data</li>
              <li>Maintaining the security of your device and browser</li>
              <li>Understanding that clipboard data is stored locally on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You may not use Karpture to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Store or manage sensitive personal information, passwords, or financial data</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt the extension's functionality</li>
              <li>Attempt to reverse engineer or modify the extension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data and Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              All clipboard data is stored locally on your device. We do not collect, transmit, or store any of your
              clipboard content. Please refer to our Privacy Policy for detailed information about data handling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              Karpture is provided "as is" without any warranties, express or implied. We do not guarantee that the
              extension will be error-free, secure, or continuously available. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall{" "}
              <a href="https://thosynpax.com" className="text-[#b4518a] hover:underline">
                Thosyn Pax
              </a>{" "}
              be liable for any indirect, incidental, special, or consequential damages arising from your use of
              Karpture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates and Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon
              posting. Continued use of the extension after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              You may stop using Karpture at any time by uninstalling the extension. We reserve the right to discontinue
              the service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, please visit{" "}
              <a href="https://thosynpax.com" className="text-[#b4518a] hover:underline">
                thosynpax.com
              </a>{" "}
              or contact us through our support channels.
            </p>
          </section>

          <div className="bg-[#b4518a]/10 p-6 rounded-lg mt-8">
            <p className="text-[#b4518a] font-semibold">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
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

export default TermsOfService
