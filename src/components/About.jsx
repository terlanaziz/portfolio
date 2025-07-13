const About = () => {
  return (
    <section id="about" className=" min-h-screen py-16 px-4 dark:bg-slate-900 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I'm Terlan, a passionate self-taught front-end developer. I'm currently learning full-stack development with a focus on React and Tailwind CSS.
        </p>
        <p className="text-lg mb-4">
          I enjoy building interactive web applications, improving my coding skills every day, and contributing to real-world projects.
        </p>
        <p className="text-lg">
          Technologies I use: <strong>React, JavaScript, Tailwind CSS, Git, Vite</strong> and more to come!
        </p>
      </div>
      <div className="border-b border-gray-300 dark:border-gray-700 my-8 w-3/4 mx-auto"></div>
    </section>
  );
};

export default About;
