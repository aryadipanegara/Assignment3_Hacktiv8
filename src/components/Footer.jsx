import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} AryaGunawan. Hak Cipta Dilindungi.
        </p>
        <p>aryadipanegarag@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
