function Footer() {
  return (
    <footer className="flex justify-center bg-gray-100 py-4">
      <p>Built by</p>
      <a
        className="ml-2 underline decoration-gray-700"
        href="https://github.com/Artis-Dev/"
        target="_blank"
        rel="noreferrer"
      >
        ArtisDev
      </a>
      <span className="ml-2 border-l border-gray-700 pl-2" />
      <a
        className="underline decoration-gray-700"
        href="https://github.com/Artis-Dev/shopping-cart/"
        target="_blank"
        rel="noreferrer"
      >
        Source code
      </a>
    </footer>
  );
}

export default Footer;
