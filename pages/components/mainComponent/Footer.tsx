const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>© 2024 Nama Anda. All rights reserved.</p>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/username/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:underline mx-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:underline mx-2"
        >
          GitHub
        </a>
        <a
          href="mailto:email@example.com"
          className="text-yellow-500 hover:underline mx-2"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
