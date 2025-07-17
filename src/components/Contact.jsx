const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Have a project in mind, want to collaborate, or just want to say hi? Fill out the form below or reach me on GitHub or LinkedIn.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition md:hover:scale-105">
              Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
