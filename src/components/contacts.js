import React, { useState } from "react";
import { createImageProps } from "../imageProps";
import images from "../imageData/contacts.json";
import { PageIntro, Arrow } from "./ui";

const imageProps = createImageProps(images);
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setNotice("Sending message...");
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@rgaqatar.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            _subject: `RGA website enquiry: ${formData.subject}`,
            _template: "table",
            _honey: new FormData(e.currentTarget).get("_honey"),
          }),
        },
      );

      const result = response.ok ? await response.json() : null;
      if (result?.success === true || result?.success === "true") {
        setNotice("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setNotice("");
        setSubmitError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred", error);
      setNotice("");
      setSubmitError(
        "An error occurred while sending your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageIntro
        eyebrow="GET IN TOUCH / LET’S START A CONVERSATION"
        title="Contact Us"
      >
        A new project. A technical question. A better way forward. We’d love to
        hear what you have in mind.
      </PageIntro>
      <section className="section-space">
        <div className="site-container contact-layout">
          <div className="contact-form-wrap">
            <p className="eyebrow">TELL US ABOUT YOUR PROJECT</p>
            <h2>Let’s make it happen.</h2>
            <p id="contact-required" className="required-note">
              All fields are required.
            </p>
            <form
              onSubmit={handleSubmit}
              aria-describedby="contact-required"
              className="contact-form"
            >
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />
              <div className="form-name-row">
                {[
                  ["firstName", "First Name", "given-name"],
                  ["lastName", "Last Name", "family-name"],
                ].map(([name, label, autoComplete]) => (
                  <label key={name}>
                    {label}
                    <input
                      type="text"
                      name={name}
                      autoComplete={autoComplete}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                    />
                  </label>
                ))}
              </div>
              {[
                ["email", "Email", "email", "email"],
                ["phone", "Phone Number", "tel", "tel"],
                ["subject", "Subject", "text", undefined],
              ].map(([name, label, type, autoComplete]) => (
                <label key={name}>
                  {label}
                  <input
                    type={type}
                    name={name}
                    autoComplete={autoComplete}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </label>
              ))}
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </label>
              <button
                type="submit"
                className="button button-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Send Message"}
                <Arrow />
              </button>
            </form>
            <p role="status" aria-atomic="true" className="form-status">
              {notice}
            </p>
            <p role="alert" aria-atomic="true" className="form-error">
              {submitError}
            </p>
          </div>
          <aside className="contact-details" aria-label="Our offices">
            <p className="eyebrow">GLOBAL REACH. A LOCAL CONVERSATION.</p>
            <h2>Find us here.</h2>
            <div className="office">
              <div className="office-heading">
                <h3>Doha, Qatar</h3>
                <span>01 / REGIONAL OFFICE</span>
              </div>
              <address>
                Salwa Road – Midmac Roundabout
                <br />
                West Corner Building
                <br />
                Street 340, Unit 44, Building 155, Zone 43
                <br />
                P.O. Box 37544, Doha, Qatar
              </address>
              <a href="tel:+97444581222">+974 4458 1222</a>
              <a href="mailto:info@rgaqatar.com">info@rgaqatar.com</a>
            </div>
            <a
              className="office-map"
              href="https://www.google.com/maps?q=25.2625833,51.4956667"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                {...imageProps("/images/rga-map.png", {
                  sizes: "(min-width: 1000px) 40vw, 100vw",
                })}
                alt="Map showing the RGA Qatar office near Midmac Roundabout"
              />
              <span>
                Get directions <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
            <div className="office">
              <div className="office-heading">
                <h3>New Jersey, USA</h3>
                <span>02 / HEADQUARTERS</span>
              </div>
              <address>
                2202 Monmouth Boulevard
                <br />
                Wall Township, NJ 07719
                <br />
                United States
              </address>
              <a href="tel:+19084893470">+1 (908) 489-3470</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
export default Contact;
