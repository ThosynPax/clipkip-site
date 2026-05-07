import React from 'react';
import { LegalLayout } from './LegalLayout';

const TermsOfService = () => {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 7, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By installing and using the Karpture extension, you agree to be bound by these terms. 
        If you do not agree, please uninstall the extension immediately.
      </p>

      <h2>2. License</h2>
      <p>
        We grant you a personal, non-transferable license to use Karpture for your own personal or professional use. 
        You may not reverse engineer or attempt to extract the source code of our extension.
      </p>

      <h2>3. Pro Plan & Payments</h2>
      <p>
        Certain features require a Pro subscription. Payments are processed monthly or annually. 
        Failure to pay will result in the loss of Pro features after a grace period.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        Karpture is provided "as is". Since your data is stored locally, we are not responsible for any data loss resulting from hardware failure, 
        OS crashes, or accidental deletion. You are responsible for maintaining your own backups.
      </p>

      <h2>5. Updates</h2>
      <p>
        We may update Karpture and these terms from time to time. Continued use of the extension constitutes acceptance of new terms.
      </p>
    </LegalLayout>
  );
};

export default TermsOfService;
