import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="relative h-full flex-row flex bg-gray-800">
      <a
        href="https://www.instagram.com/niksfenenko/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
        src="Instagram.png"
        alt="instagram"
        className="size-10 border-b-gray-800"
        />

      </a>

      <a
      href="https://www.facebook.com/nik.fenenko.9/"
      target="_blank"
      rel="noopener noreferrer"
      >
        <img
        src="Facebook.png"
        alt="Facebook logo"
        className="size-10 border-gray-800"
        />

      </a>

    <a
    href="https://www.t.me/NiksF04"
    target="_blank"
    rel="noopener noreferrer"
    >

    <img
    src="Telegram.png"
    alt="Telegram logo"
    className="size-10 border-gray-800"
    />
    </a>
    </div>

    
  );
};

export default SocialIcons;