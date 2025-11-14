import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqaweykb");

  if (state.succeeded) {
    return <p className="text-green-400">Thanks! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-3 rounded bg-white/10 text-white border border-white/20"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="w-full p-3 rounded bg-white/10 text-white border border-white/20"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-cyan-300 text-black px-5 py-2 rounded font-semibold hover:scale-105 hover:bg-blue-950 hover:text-white"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
