import React from 'react';
import { LegalLayout } from './LegalLayout';

const CookiePolicy = () => {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 7, 2026">
      <h2>1. Do we use cookies?</h2>
      <p>
        On our website, yes. In our extension, barely.
      </p>

      <h2>2. Website Cookies</h2>
      <p>
        We use essential cookies to keep you logged into the billing portal and to understand how many people visit our landing page. 
        These do not track your activity on other sites.
      </p>

      <h2>3. Extension Local Storage</h2>
      <p>
        The Karpture extension uses <strong>Chrome Local Storage</strong> instead of cookies to save your settings and snippets. 
        This data is never sent to us and remains on your computer.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        You can block cookies through your browser settings, though some features of the website (like managing your Pro subscription) 
        may stop working correctly.
      </p>
    </LegalLayout>
  );
};

export default CookiePolicy;
