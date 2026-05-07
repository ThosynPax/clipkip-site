import React from 'react';
import { LegalLayout } from './LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 7, 2026">
      <h2>1. Introduction</h2>
      <p>
        At Karpture, we take your privacy seriously. This policy explains how we handle your data, or rather, how we don't.
        Karpture is built on the principle of <strong>Local-First Dominance</strong>.
      </p>

      <h2>2. Data Collection</h2>
      <p>
        Karpture does not have servers that store your snippets, captures, or search history. 
        Everything you capture remains strictly on your local machine.
      </p>
      <ul>
        <li><strong>No Cloud Sync:</strong> We do not upload your data to any cloud service.</li>
        <li><strong>No Data Mining:</strong> We do not analyze your snippets for advertising or tracking.</li>
        <li><strong>No Selling:</strong> We never have and never will sell your data to third parties.</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>
        If you choose to use certain features (like exporting to external apps), data is only shared at your explicit request. 
        Our payment processor (Stripe) handles your billing information separately; we never see your credit card details.
      </p>

      <h2>4. Security</h2>
      <p>
        Your data is protected by the native security of your operating system. Since we don't store your data, we cannot lose it. 
        We recommend keeping your device secure and encrypted.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
