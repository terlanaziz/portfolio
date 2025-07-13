const Hero = () => {
  return (
    <section id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-white">
        Hi, I'm Terlan
      </h1>
      <h2 className="text-2xl md:text-3xl mt-4 text-slate-700">
        Full-Stack Developer
      </h2>
      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/terlanaziz"
          target="_blank"
          className="min-w-[120px] text-center bg-black text-white px-4 py-2 rounded md:hover:scale-105 transition">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/terlanaziz"
          target="_blank"
          className="min-w-[120px] text-center bg-blue-600 text-white px-4 py-2 rounded md:hover:scale-105 transition">
          LinkedIn
        </a>
      </div>
      <div className="border-b border-gray-300 dark:border-gray-700 my-8 w-3/4 mx-auto"></div>
    </section>
  );
};

export default Hero;
