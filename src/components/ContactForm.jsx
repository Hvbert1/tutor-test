import React from "react";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "05cfa7e4-2c47-4595-885c-4afdf7ab71be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <legend>Contact Us</legend>
        <p> Fill up the form below to send us a message. </p>
        <input //honeypot to prevent spam
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          required
        />
        <label for="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
        />
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" placeholder="0412345678" />

        <label for="message">Your Message</label>
        <textarea name="message" placeholder="Your message" required></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export default ContactForm;
