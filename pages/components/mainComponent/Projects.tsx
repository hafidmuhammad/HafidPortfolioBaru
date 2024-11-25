const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Deskripsi singkat proyek pertama.",
      technologies: ["React", "Node.js"],
      link: "https://github.com/username/project1",
      image: "/images/project1.jpg",
    },
    {
      name: "Project 2",
      description: "Deskripsi singkat proyek kedua.",
      technologies: ["Python", "Data Mining"],
      link: "https://github.com/username/project2",
      image: "/images/project2.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-base text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
