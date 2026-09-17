import React from "react";
import { PageIntro } from "../components/ui";
import { LEGAL_UPDATED } from "../data/legal";

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow={`LEGAL / LAST UPDATED ${LEGAL_UPDATED}`} title="Privacy Policy">
        How Robert Guild Associates handles the information you share through
        this website.
      </PageIntro>
      <section className="section-space">
        <div className="site-container legal-content">
          <h2>1. Who we are</h2>
          <p>
            This website, www.rgaqatar.com, is operated by Robert Guild
            Associates (“RGA”, “we”, “us”) through its regional office at
            Salwa Road – Midmac Roundabout, West Corner Building, Street 340,
            Unit 44, Building 155, Zone 43, P.O. Box 37544, Doha, Qatar. For
            any privacy question or request, email{" "}
            <a href="mailto:info@rgaqatar.com">info@rgaqatar.com</a> or call{" "}
            <a href="tel:+97444581222">+974 4458 1222</a>.
          </p>

          <h2>2. Information we collect</h2>
          <h3>Contact form</h3>
          <p>
            Your first and last name, email address, subject, message, and,
            if you choose to give it, your phone number.
          </p>
          <h3>Careers application form</h3>
          <p>
            Your name, email address, phone number, current city and country,
            area of interest, years of experience, whether you are based in
            Qatar, your Qatar residency and work-authorization status,
            willingness to relocate, and earliest start date. You must also
            upload a résumé. A LinkedIn or portfolio link, a professional
            summary, and a cover letter are optional. Please do not include
            information we have not asked for, such as health details,
            religious beliefs, or identity document copies.
          </p>
          <h3>Technical information</h3>
          <p>
            When you visit the site, our hosting provider automatically
            processes standard request data, such as your IP address, browser
            type, the page requested, and the time of the request. This is
            needed to deliver pages and protect the site from abuse. We do
            not use it to identify or profile visitors.
          </p>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To reply to your enquiry and discuss a potential project.</li>
            <li>
              To assess your job application and contact you about current or
              upcoming roles.
            </li>
            <li>To operate, secure, and maintain this website.</li>
            <li>To meet our legal obligations.</li>
          </ul>
          <p>
            We process your information with your consent when you submit a
            form, or where it is needed to take steps you have asked for. We
            do not sell your information, and we do not use it for marketing
            without your permission.
          </p>

          <h2>4. Who receives your information</h2>
          <p>
            We share information only with the service providers that help us
            run this website, and only to the extent they need it:
          </p>
          <ul>
            <li>
              <strong>FormSubmit</strong> (formsubmit.co) receives form
              submissions, including attached files, and forwards them to our
              company email inboxes.
            </li>
            <li>
              <strong>Vercel</strong> hosts this website and processes the
              technical request data described above.
            </li>
            <li>
              Our email provider stores the messages we receive.
            </li>
          </ul>
          <p>
            These providers may process data outside Qatar, including in the
            United States. Our headquarters in the United States may also
            review enquiries or applications when needed. We may disclose
            information where required by law or by a competent authority.
          </p>

          <h2 id="cookies">5. Cookies and tracking</h2>
          <p>
            This website does not set cookies and does not use analytics,
            advertising, tracking pixels, or embedded social media content.
            For that reason, we do not show a cookie consent banner.
          </p>
          <p>
            Some links take you to other websites, such as Google Maps for
            directions or manufacturer websites on our Vendors page. When the
            careers form is submitted, your browser sends it directly to
            FormSubmit, which may show its own verification page. Those
            services may use cookies under their own privacy policies, which
            we do not control. If we add cookies or analytics in the future,
            we will update this policy and ask for your consent where the law
            requires it.
          </p>

          <h2>6. How long we keep information</h2>
          <p>
            We keep enquiries for as long as needed to respond and to maintain
            normal business records. We keep job applications for up to 12
            months after the recruitment decision so we can consider you for
            other suitable roles, unless you ask us to delete them sooner. If
            you join RGA, your application becomes part of your employment
            record.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Under Qatar’s Law No. 13 of 2016 on the Protection of Personal
            Data Privacy and other laws that apply to you, you may ask us to:
          </p>
          <ul>
            <li>confirm whether we hold your information and give you a copy;</li>
            <li>correct information that is inaccurate;</li>
            <li>delete your information;</li>
            <li>withdraw your consent or object to processing.</li>
          </ul>
          <p>
            Email <a href="mailto:info@rgaqatar.com">info@rgaqatar.com</a> to
            make a request. We may need to confirm your identity before we
            act on it. Withdrawing consent does not affect processing that
            took place before you withdrew it. If you are not satisfied with
            our response, you can complain to the data protection authority
            in Qatar.
          </p>

          <h2>8. Security</h2>
          <p>
            This website is served over HTTPS, and we limit access to
            submitted information to staff who need it. No method of
            transmission or storage is completely secure, so please avoid
            sending highly sensitive information through the website.
          </p>

          <h2>9. Children</h2>
          <p>
            This website is intended for businesses and job applicants aged
            18 or over. We do not knowingly collect information from
            children.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top
            of this page shows when it last changed.
          </p>
        </div>
      </section>
    </>
  );
}
