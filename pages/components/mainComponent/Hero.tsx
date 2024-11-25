// components/Hero.tsx
import Section from "../../layouts/Section";

const Hero = () => {
  return (
    <Section id="hero" title="Hero">
      <div className="flex flex-col items-center justify-center text-center min-h-screen ">
        <img
          src="https://marketplace.canva.com/EAFHfIs8clg/1/0/1600w/canva-inspiration-modern-instagram-profile-picture-5tBnIWrN4cU.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold">Hello, I'm hafid</h1>
        <p className="text-lg mt-4">
          Data Scientist passionate about solving real-world problems.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-lg shadow hover:bg-yellow-100"
          >
            Download CV
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
