const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} TerlanDev. All rights reserved.</p>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/terlanaziz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/terlanaziz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
