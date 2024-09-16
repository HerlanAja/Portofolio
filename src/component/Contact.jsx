import { useState } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost/contact-api/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();
      setStatus(result.message); // Menampilkan pesan dari backend
    } catch (error) {
      setStatus("Error sending message");
    }
  };

  return (
    <div className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Jika Anda memiliki pertanyaan atau ingin menghubungi saya, silakan menggunakan informasi di bawah ini atau kirimkan pesan melalui formulir.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-lg">
                <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h6v6h-6z"></path>
                </svg>
                {CONTACT.address}
              </li>
              <li className="flex items-center text-lg">
                <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5 5-5H7z"></path>
                </svg>
                {CONTACT.phoneNo}
              </li>
              <li className="flex items-center text-lg">
                <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 2h20v20H2V2z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l6 6M12 12l-6 6M12 12V6"></path>
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white p-3 rounded-lg font-semibold hover:bg-cyan-600 transition duration-200"
              >
                Kirim Pesan
              </button>
              {status && <p className="mt-4 text-center text-lg">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
