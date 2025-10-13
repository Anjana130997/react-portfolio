import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type, message: "" }), 3500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_x0kv3uo",      // ← your Service ID
        "template_50hzvvs",     // ← your Template ID
        form.current,
        "-zlaOQ1P9_q_7aRSW"    // ← your Public Key
      )
      .then(
        () => {
          showToast("success", "Message sent successfully!");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error(error);
          showToast("error", "Failed to send message. Try again later.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact container reveal">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <div className="section-divider"></div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form reveal">
        <div className="input-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" className="btn-primary" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Toast Modal */}
      {toast.show && (
        <div className={`toast-modal ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </section>
  );
}
