const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/path-to-profile.jpg"
            alt="About"
            className="w-48 h-48 rounded-lg shadow"
          />
          <div>
            <p className="text-lg">
              Saya adalah mahasiswa Teknik Informatika dengan spesialisasi di
              bidang Data Mining. Berpengalaman dalam pengolahan data nyata dan
              pemecahan masalah kompleks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
