import { useState } from "react";
import "./styles.css";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="contact-us" id="contact">
      <h2>reach out to isaiah</h2>
      <div className="inp-container">
        <div className="inp-name-row">
          <input type="text" value={firstName} className="first-name" placeholder="First name" />
          <input type="text" value={lastName} className="last-name" placeholder="Last Name" />
        </div>
        <input
          type="text"
          className="email"
          placeholder="Valid Email Address"
          value={email}
        />
        <textarea placeholder="Type your message here" value={msg} />
      </div>
      <button>send message</button>
    </div>
  );
}
