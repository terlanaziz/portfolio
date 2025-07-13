const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="bg-slate-100 md:hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white shadow-md rounded-lg p-5 flex flex-col justify-between h-full transition-transform duration-200 md:hover:scale-102">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-3">{description}</p>
        <p className="text-sm opacity-80 mb-3">🛠 {tech}</p>
      </div>
      <div className="mt-auto">
        <a href={link}target="_blank"className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
