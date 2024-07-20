"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const router = useRouter();

  const form = useRef<HTMLFormElement>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("service_4agdpzg", "template_3n6qfmh", form.current, {
        publicKey: "TIJqrcwO385NCF-WS",
      })
      .then((res) => {
        console.log(res);

        router.push("/contact/thank-you");

        setIsLoading(false);

        console.log("success!");
      })
      .catch((error) => {
        throw new Error(
          "Sorry the form was not submitted. Please try again later",
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="mx-auto flex max-w-[500px] flex-col gap-y-6 rounded-xl p-10 shadow-xl"
    >
      <label>
        <span>Name</span>
        <input required type="text" id="from_name" name="from_name" />
      </label>

      <label>
        <span>Email</span>
        <input required type="email" id="email" name="user_email" />
      </label>

      <label>
        <span>Phone</span>
        <input type="tel" id="phone_number" name="phone_number" />
      </label>
      <label>
        <span>How Can We Help?</span>
        <textarea id="message" name="message" />
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? <span>Adding..</span> : "Submit"}
      </button>
    </form>
  );
}

export default Contact;
