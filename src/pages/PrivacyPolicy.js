function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection and Storage</h2>
            <p className="text-gray-600 leading-relaxed">
              Karpture is designed with privacy as a core principle. All your clipboard data is stored locally on your
              device. We do not collect, transmit, or store any of your clipboard content on our servers or any
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Data Storage</h2>
            <p className="text-gray-600 leading-relaxed">
              Your clipboard history is stored locally in your browser's storage. This data remains on your device and
              is never transmitted to external servers. You have full control over this data and can clear it at any
              time through the extension settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Permissions</h2>
            <p className="text-gray-600 leading-relaxed">
              Karpture requires clipboard access permissions to function. These permissions are used solely to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Read clipboard content when you copy text</li>
              <li>Write clipboard content when you select saved text</li>
              <li>Store clipboard history locally on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Karpture does not integrate with any third-party analytics, tracking, or data collection services. Your
              privacy is completely protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              Since all data is stored locally on your device, the security of your clipboard data depends on your
              device's security measures. We recommend keeping your device secure with appropriate passwords and
              security settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be reflected in the extension and on
              this page. Continued use of Karpture after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy, please contact us through our support channels.
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

export default PrivacyPolicy
