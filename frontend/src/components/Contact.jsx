import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "05bdfa74-0f59-4ed8-b78d-878f6f233236");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      setName("");
      setEmail("");
      setTel("");
      setMessage("");
    }
  };

  return (
    <div className="">
      <h1 className="text-center text-4xl my-10">Get in Touch</h1>
      <div className="">
        <form onSubmit={onSubmit}>
          <div className="flex md:flex-row justify-around flex-col place-items-center md:space-y-0 space-y-8">
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Full Name"
                className="bg-neutral-800 focus:outline-none px-2 py-1 border-b-2 border-b-neutral-600 text-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-neutral-800 focus:outline-none px-2 py-1 border-b-2 border-b-neutral-600 text-white"
                name="email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Phone Number"
                className="bg-neutral-800 focus:outline-none px-2 py-1 border-b-2 border-b-neutral-600 text-white"
                name="phone number"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full p-4 bg-neutral-800 border border-neutral-600 text-white focus:outline-none resize-none"
              style={{ minHeight: "120px", maxWidth: "700px" }}
            />
          </div>
          <div className="flex justify-center my-4">
            <button className="bg-[#27AE60] p-1 px-4 hover:bg-green-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
