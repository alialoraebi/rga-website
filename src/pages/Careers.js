import React, { useEffect, useRef, useState } from "react";
import { Arrow, PageIntro } from "../components/ui";

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;

export default function Careers() {
  const [area, setArea] = useState("");
  const [attachmentError, setAttachmentError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const confirmationRef = useRef(null);

  useEffect(() => {
    setSubmitted(
      new URLSearchParams(window.location.search).get("submitted") === "true",
    );
  }, []);

  useEffect(() => {
    if (submitted) confirmationRef.current?.focus();
  }, [submitted]);

  const validateAttachments = (event) => {
    const fileInputs = event.currentTarget.form?.querySelectorAll(
      'input[type="file"]',
    );
    const totalBytes = Array.from(fileInputs || []).reduce(
      (total, input) =>
        total +
        Array.from(input.files || []).reduce(
          (sum, file) => sum + file.size,
          0,
        ),
      0,
    );
    const error =
      totalBytes > MAX_ATTACHMENT_BYTES
        ? "Your résumé and cover letter must be 10 MB or smaller in total."
        : "";
    setAttachmentError(error);
    fileInputs?.forEach((input) => input.setCustomValidity(error));
  };

  if (submitted) {
    return (
      <section className="section-space career-confirmation-section">
        <div className="site-container">
          <div
            className="career-confirmation"
            role="status"
            tabIndex={-1}
            ref={confirmationRef}
          >
            <span className="career-confirmation-mark" aria-hidden="true">
              ✓
            </span>
            <p className="eyebrow">SUCCESSFULLY SUBMITTED</p>
            <h1>Thank you for your application.</h1>
            <p>
              Your details and résumé have been sent successfully. If your
              experience matches a current or upcoming opportunity, our team
              will contact you using the information you provided.
            </p>
            <div className="career-confirmation-actions">
              <a className="button button-dark" href="/">
                Return home <Arrow />
              </a>
              <a className="text-link" href="/careers">
                Submit another application
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageIntro eyebrow="JOIN OUR TEAM / QATAR" title="Careers">
        Help us design, build, and support the systems that connect remarkable
        spaces. Tell us where your experience could make a difference.
      </PageIntro>
      <section className="section-space">
        <div className="site-container career-layout">
          <div className="career-form-wrap">
            <p className="eyebrow">WORK WITH RGA QATAR</p>
            <h2>Submit your application.</h2>
            <p id="career-required" className="required-note">
              Fields marked with * are required.
            </p>
            <form
              className="career-form"
              action="https://formsubmit.co/careers@rgaqatar.com"
              method="POST"
              encType="multipart/form-data"
              aria-describedby="career-required attachment-help"
              onSubmit={(event) => {
                if (attachmentError) event.preventDefault();
              }}
            >
              <input
                type="hidden"
                name="_subject"
                value={`RGA Qatar careers application${area ? `: ${area}` : ""}`}
                readOnly
              />
              <input type="hidden" name="_template" value="table" readOnly />
              <input
                type="hidden"
                name="_next"
                value="https://www.rgaqatar.com/careers?submitted=true"
                readOnly
              />
              <input
                type="hidden"
                name="_url"
                value="https://www.rgaqatar.com/careers"
                readOnly
              />
              <input
                className="honeypot"
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <fieldset>
                <legend>About you</legend>
                <div className="form-name-row">
                  <label>
                    First name *
                    <input
                      type="text"
                      name="First name"
                      autoComplete="given-name"
                      required
                    />
                  </label>
                  <label>
                    Last name *
                    <input
                      type="text"
                      name="Last name"
                      autoComplete="family-name"
                      required
                    />
                  </label>
                </div>
                <div className="form-name-row">
                  <label>
                    Email *
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                  <label>
                    Phone number *
                    <input
                      type="tel"
                      name="Phone number"
                      autoComplete="tel"
                      required
                    />
                  </label>
                </div>
                <label>
                  Current city and country *
                  <input
                    type="text"
                    name="Current location"
                    autoComplete="address-level2"
                    required
                  />
                </label>
                <label>
                  LinkedIn or portfolio URL
                  <input
                    type="url"
                    name="LinkedIn or portfolio"
                    autoComplete="url"
                    placeholder="https://"
                  />
                </label>
              </fieldset>

              <fieldset>
                <legend>Professional background</legend>
                <label>
                  Area of interest *
                  <select
                    name="Area of interest"
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                    required
                  >
                    <option value="">Select an area</option>
                    <option>AV Systems Engineering</option>
                    <option>AV Installation / Technical Services</option>
                    <option>Project Management</option>
                    <option>Sales / Business Development</option>
                    <option>Administration / Operations</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Years of relevant experience *
                  <select name="Relevant experience" required>
                    <option value="">Select experience</option>
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>3–5 years</option>
                    <option>6–10 years</option>
                    <option>More than 10 years</option>
                  </select>
                </label>
                <label>
                  Professional summary
                  <textarea
                    name="Professional summary"
                    rows="5"
                    placeholder="Briefly describe your relevant experience, certifications, and the kind of role you are seeking."
                  />
                </label>
              </fieldset>

              <fieldset>
                <legend>Working in Qatar</legend>
                <label>
                  Are you currently based in Qatar? *
                  <select name="Currently based in Qatar" required>
                    <option value="">Select an answer</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
                <label>
                  Qatar residency and work-authorization status *
                  <select name="Qatar work authorization" required>
                    <option value="">Select your current status</option>
                    <option>Qatari citizen</option>
                    <option>Valid QID with transferable sponsorship</option>
                    <option>Valid QID requiring a sponsorship transfer</option>
                    <option>Family or dependent residence permit</option>
                    <option>
                      No current Qatar residency; I would require sponsorship
                    </option>
                    <option>Other or unsure</option>
                  </select>
                </label>
                <label>
                  Are you willing to relocate to Qatar? *
                  <select name="Willing to relocate to Qatar" required>
                    <option value="">Select an answer</option>
                    <option>Already based in Qatar</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
                <label>
                  Earliest available start date *
                  <input type="date" name="Available start date" required />
                </label>
              </fieldset>

              <fieldset>
                <legend>Application documents and consent</legend>
                <label>
                  Upload your résumé *
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    aria-describedby="resume-help attachment-help attachment-error"
                    onChange={validateAttachments}
                    required
                  />
                </label>
                <p id="resume-help" className="field-help">
                  Required; PDF, DOC, or DOCX.
                </p>
                <label>
                  Upload a cover letter (optional)
                  <input
                    type="file"
                    name="Cover letter"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    aria-describedby="cover-letter-help attachment-help attachment-error"
                    onChange={validateAttachments}
                  />
                </label>
                <p id="cover-letter-help" className="field-help">
                  Optional; PDF, DOC, or DOCX.
                </p>
                <p id="attachment-help" className="field-help">
                  Combined attachment size must not exceed 10 MB.
                </p>
                <p id="attachment-error" className="form-error" role="alert">
                  {attachmentError}
                </p>
                <label className="consent-field">
                  <input type="checkbox" name="Application consent" required />
                  <span>
                    I consent to Robert Guild Associates using my information
                    to assess my application and contact me about employment,
                    as described in the{" "}
                    <a href="/privacy">Privacy Policy</a>. *
                  </span>
                </label>
              </fieldset>

              <button type="submit" className="button button-dark">
                Submit Application <Arrow />
              </button>
            </form>
          </div>

          <aside className="career-details" aria-label="Careers information">
            <p className="eyebrow">BUILD YOUR CAREER IN QATAR</p>
            <h2>Technical work with real impact.</h2>
            <p>
              Join a team delivering professional audio, video, control, and
              electronic systems across Qatar and the wider region.
            </p>
            <div className="career-detail-block">
              <h3>What we value</h3>
              <ul>
                <li>Careful, practical problem solving</li>
                <li>Clear communication and teamwork</li>
                <li>High standards of workmanship</li>
                <li>A commitment to learning</li>
              </ul>
            </div>
            <div className="career-detail-block">
              <h3>Before you apply</h3>
              <p>
                Applications are reviewed against current and upcoming needs.
                If your experience is a match, our team will contact you.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
