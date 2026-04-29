let scrollTimeout;

export const initScrollEffect = () => {
  const handleScroll = () => {
    document.body.classList.add("scrolling");

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      document.body.classList.remove("scrolling");
    }, 100);
  };

  window.addEventListener("scroll", handleScroll);


  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};