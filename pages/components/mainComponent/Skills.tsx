const Skills = () => {
  const skills = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Data Mining", icon: "/icons/data-mining.svg" },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
