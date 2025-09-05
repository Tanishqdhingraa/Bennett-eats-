import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="container mx-auto py-12 px-6" id="contact">
      <h2 className="mb-6 text-white text-center text-2xl lg:text-3xl font-semibold">
        Contact Us
      </h2>
      <div className="text-white text-center">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-6 border-neutral-700 border-solid pb-4 tracking-tight text-base lg:text-xl border-b"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Contact;
