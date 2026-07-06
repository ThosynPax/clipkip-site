import React from 'react';
import { LegalLayout } from './LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 6, 2026">
      <h2>1. Introduction &amp; Ownership</h2>
      <p>
        At Karpture, we take your privacy seriously. This policy explains how we handle your data, or rather, how we don't.
        Karpture is owned and operated by <strong>The Product Lab</strong>, which is an <strong>Afribreath LTD</strong> production.
        Karpture is built on the principle of <strong>Local-First Dominance</strong>.
      </p>

      <h2>2. Data Collection</h2>
      <p>
        Karpture does not have servers that store your snippets, captures, or search history. 
        Everything you capture remains strictly on your local machine.
      </p>
      <ul>
        <li><strong>No Cloud Sync:</strong> We do not upload your captured data to any cloud service.</li>
        <li><strong>No Data Mining:</strong> We do not analyze your snippets for advertising or tracking.</li>
        <li><strong>No Selling:</strong> We never have and never will sell your data to third parties.</li>
      </ul>

      <h2>3. Social Sign-In and Authentication</h2>
      <p>
        We offer the ability to sign up and sign in securely using trusted social accounts, including <strong>Google</strong>, <strong>LinkedIn</strong>, and <strong>Apple</strong>. 
        When you choose to authenticate with these platforms, we collect only your basic profile information (specifically, your verified email address and full name) via our secure authentication provider, Supabase.
      </p>
      <p>
        <strong>Purpose &amp; Scope:</strong> This authentication data is strictly used to verify your identity, provision your account, and manage your premium/Pro billing subscription tier. 
        Under no circumstances do these social sign-in integrations access, sync, or transmit any of your personal clipboard captures, search timeline, or research data to our servers or to those third-party networks. Your captured information remains entirely local and secure on your browser extension.
      </p>

      <h2>4. Third-Party Services &amp; Billing</h2>
      <p>
        If you choose to use certain features (like exporting to external apps), data is only shared at your explicit request. 
        Our payment processors handle your billing information securely and separately; we never store or see your credit card details.
      </p>

      <h2>5. Crash Reporting &amp; Error Monitoring</h2>
      <p>
        To maintain the reliability and stability of the Karpture extension, we use <strong>Sentry</strong> (sentry.io) for automated crash and error reporting.
        When the extension encounters an unexpected error, a report is automatically sent to Sentry containing:
      </p>
      <ul>
        <li><strong>Error details:</strong> The error type, message, and a stack trace (file names and line numbers within Karpture's own code only).</li>
        <li><strong>Extension metadata:</strong> The Karpture version number and the context in which the error occurred (e.g., popup or background).</li>
        <li><strong>No personal data:</strong> Error reports <em>never</em> include your clipboard contents, captured text, account credentials, or any personally identifiable information.</li>
      </ul>
      <p>
        This data is used exclusively to identify and fix bugs and improve extension stability.
        Sentry processes this data in accordance with their own <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        Error reports are retained for 90 days and then automatically deleted.
      </p>

      <h2>6. Security</h2>
      <p>
        Your clipboard and capture data is protected by the native security of your operating system. Since we don't store your personal work history on our servers, it cannot be leaked or compromised by us. 
        We recommend keeping your device secure and encrypted.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
