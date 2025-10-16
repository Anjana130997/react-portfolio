import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const form = useRef();
  const buttonRef = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
    top: 0
  });

  const showToast = (type, message) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Use fixed positioning so top is relative to viewport.
      const top = rect.bottom + 12; // 12px below the button

      setToast({
        show: true,
        type,
        message,
        top
      });

      setTimeout(
        () =>
          setToast({
            show: false,
            type: "",
            message: "",
            top: 0
          }),
        3500
      );
    } else {
      // fallback: center top of page
      setToast({
        show: true,
        type,
        message,
        top: 120
      });
      setTimeout(
        () =>
          setToast({
            show: false,
            type: "",
            message: "",
            top: 0
          }),
        3500
      );
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_x0kv3uo",
        "template_50hzvvs",
        form.current,
        "-zlaOQ1P9_q_7aRSW"
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
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
        </div>
        <textarea name="message" placeholder="Your Message" required />
        <button
          ref={buttonRef}
          type="submit"
          className="btn-primary"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {toast.show && (
        <div
          className={`toast-modal ${toast.type}`}
          style={{
            top: `${toast.top}px`,    // vertical position from button
            left: "50%",              // always center horizontally on page
            transform: "translateX(-50%)",
            position: "fixed"         // fixed so it stays where expected during scroll
          }}
        >
          <span className="toast-text">{toast.message}</span>
        </div>
      )}
    </section>
  );
}
