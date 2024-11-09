import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.div}>
      <h1>About Me</h1>
      <p>
        I am a passionate web developer with expertise in a variety of modern web technologies. My skill set includes:
      </p>
      <h2>Next.js</h2>
      <p>
        I leverage Next.js to build highly performant, server-rendered React applications. Next.js allows me to implement features such as static site generation and API routes efficiently.
      </p>
      <h2>React</h2>
      <p>
        As a skilled React developer, I create dynamic user interfaces using component-based architecture, ensuring reusable and maintainable code.
      </p>
      <h2>TypeScript</h2>
      <p>
        I use TypeScript to add static typing to JavaScript, enhancing code quality and reducing errors, making my applications robust and reliable.
      </p>
      <h2>Tailwind CSS</h2>
      <p>
        I utilize Tailwind CSS to rapidly design custom user interfaces with a utility-first approach, ensuring consistent styling across applications.
      </p>
      <h2>HTML & CSS</h2>
      <p>
        My strong foundation in HTML and CSS allows me to build well-structured, accessible, and visually appealing web pages.
      </p>
      <h2>JavaScript</h2>
      <p>
        I am proficient in JavaScript, enabling me to develop interactive web applications with rich functionalities and seamless experiences.
      </p>
    </div>
  );
}
