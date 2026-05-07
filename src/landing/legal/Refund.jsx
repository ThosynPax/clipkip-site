import React from 'react';
import { LegalLayout } from './LegalLayout';

const RefundPolicy = () => {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="May 7, 2026">
      <h2>1. Our Philosophy</h2>
      <p>
        We want you to be absolutely happy with Karpture Pro. If the tool isn't working for you, we want to make it right.
      </p>

      <h2>2. 14-Day Money-Back Guarantee</h2>
      <p>
        We offer a full refund within the first <strong>14 days</strong> of your initial Pro subscription if you are unsatisfied for any reason. 
        Simply reach out to our support team.
      </p>

      <h2>3. Late Refunds</h2>
      <p>
        Refund requests made after the 14-day window are handled on a case-by-case basis. 
        Generally, we do not offer refunds for partial months of service after the initial guarantee period has passed.
      </p>

      <h2>4. How to Request</h2>
      <p>
        To request a refund, please email <strong>support@trykarpture.com</strong> with your order details and the reason for the request. 
        We process most refunds within 3-5 business days.
      </p>
    </LegalLayout>
  );
};

export default RefundPolicy;
