function About() {
  return (
    <div>
      <h1 className="text-5xl mb-4 text-white">Github Finder</h1>
      <p className="mb-4 text-xl font-light">
        A React app to search GitHub profiles and see profile details.
        <br /> This project is made by
        <strong>
          <a href="https://github.com/YoheiKo"> Yohei Komori </a>
        </strong>
        and is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          "React Front To Back"
        </a>{" "}
        Udemy course offered by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          {" "}
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About;
