import React, { useState, useEffect } from "react";

export const ScrollProgressBar = () => {
  const [scrollProgress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (totalScroll / windowHeight) * 100;

      setProgress(scrollPercentage);
    };

    // { passive: true } keeps the scrolling smooth - important
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};
