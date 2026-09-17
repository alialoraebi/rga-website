import React from "react";
import { PageIntro } from "../components/ui";
import { LEGAL_UPDATED } from "../data/legal";

export default function Terms() {
  return (
    <>
      <PageIntro eyebrow={`LEGAL / LAST UPDATED ${LEGAL_UPDATED}`} title="Terms of Use">
        The terms that apply when you use the Robert Guild Associates website.
      </PageIntro>
      <section className="section-space">
        <div className="site-container legal-content">
          <h2>1. About these terms</h2>
          <p>
            This website, www.rgaqatar.com, is operated by Robert Guild
            Associates (“RGA”, “we”, “us”), whose regional office is at P.O.
            Box 37544, Doha, Qatar. By using the website, you agree to these
            terms. If you do not agree, please do not use the website.
          </p>

          <h2>2. Information only</h2>
          <p>
            The content on this website is general information about our
            company, services, and past work. It is not an offer, quotation,
            or professional advice. Project descriptions summarize work we
            carried out at the time and may not reflect the current state of
            those sites. Any services we provide are governed by a separate
            written agreement. No goods or services are sold through this
            website, and no payments are taken here.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            Unless stated otherwise, the text, design, photography, and RGA
            name and logo on this website belong to RGA or are used with
            permission. You may view and print pages for your own reference.
            You may not copy, republish, or use them commercially without our
            written permission.
          </p>
          <p>
            Manufacturer names and logos shown on this website are trademarks
            of their respective owners. RGA is an official partner of
            AtlasIED and Renkus-Heinz only. Other manufacturers are shown to
            identify products we work with, and their use does not imply that
            those companies are partners of RGA or sponsor or endorse RGA.
          </p>

          <h2>4. Using the website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>use the website in a way that breaks any law;</li>
            <li>
              submit false, misleading, or harmful information, or files that
              contain malware;
            </li>
            <li>
              try to gain unauthorized access to the website or disrupt how it
              works;
            </li>
            <li>send spam or unsolicited promotional material through our forms.</li>
          </ul>

          <h2>5. Forms and submissions</h2>
          <p>
            Please make sure that the information you send through our forms
            is accurate and that you have the right to share it. Submitting a
            job application does not guarantee an interview or an offer of
            employment. Our <a href="/privacy">Privacy Policy</a> explains how
            we handle the information you send.
          </p>

          <h2>6. Links to other websites</h2>
          <p>
            We link to other websites, such as manufacturer websites and
            Google Maps, for your convenience. We are not responsible for
            their content or privacy practices.
          </p>

          <h2>7. Disclaimer and liability</h2>
          <p>
            We try to keep this website accurate and available, but we
            provide it “as is” and do not promise that it will always be
            complete, current, or free of errors. To the extent permitted by
            law, RGA is not liable for any loss arising from your use of, or
            reliance on, this website. Nothing in these terms limits any
            liability that cannot be limited by law.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Qatar, and
            the courts of Qatar have jurisdiction over any dispute about
            them, unless the law where you live gives you a right to bring a
            claim elsewhere.
          </p>

          <h2>9. Changes and contact</h2>
          <p>
            We may update these terms from time to time. The date at the top
            of this page shows when they last changed. For any question,
            email <a href="mailto:info@rgaqatar.com">info@rgaqatar.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
