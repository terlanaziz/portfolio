import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Todo App",
      description: "Simple todo app built with React and Tailwind.",
      tech: "React, Tailwind",
      link: "https://github.com/terlanaziz/todo-app",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio you're looking at right now!",
      tech: "React, Tailwind",
      link: "https://github.com/terlanaziz/portfolio",
    },
    {
      title: "Loading",
      description: "Loading",
      tech: "React, Tailwind",
      link: "https://github.com/terlanaziz/portfolio",
    },
    {
      title: "Todo App",
      description: "Simple todo app built with React and Tailwind.",
      tech: "React, Tailwind",
      link: "https://github.com/terlanaziz/todo-app",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio you're looking at right now!",
      tech: "React, Tailwind",
      link: "https://github.com/terlanaziz/portfolio",
    },
    {
      title: "Loading",
      description: "Loading",
      tech: "React, Tailwind",
      link: "https://github.com/terlanaziz/portfolio",
    },

  ];

  return (
    <section id="projects" className=" min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="border-b border-gray-300 dark:border-gray-700 my-8 w-3/4 mx-auto"></div>
    </section>
  );
};

export default Projects;
