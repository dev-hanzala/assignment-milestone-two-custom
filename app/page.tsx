import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.div}>
      <h1>Welcome to My Website</h1>
      <p>
        I built this website with Next.js, a powerful React-based framework.
      </p>
      <p>
        Next.js allows for server-side rendering, enabling faster page loads by pre-rendering pages on the server.
      </p>
      <p>
        With Next.js, you can create dynamic, robust applications effortlessly. It&aps;s developed by Vercel, ensuring top-notch performance.
      </p>
      <p>
        This website showcases various features of Next.js, including static site generation, API routes, and more.
      </p>
      <h2>What is Tailwind CSS?</h2>
      <p>
        Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is different from frameworks like Bootstrap and Bulma, because it doesn&apos;t come with a pre-designed set of UI components.
      </p>
      <p>
        Tailwind is a utility-first framework, meaning it is best used when you are building a site from scratch. You can use Tailwind to generate code for your HTML, CSS and JavaScript based on a set of simple classes that you add to your HTML.
      </p>
      <p>
        Tailwind is a set of pre-defined classes that you can use to style your HTML. It is a very powerful tool for creating consistent styling across your site, and can be used to generate code for your HTML, CSS and JavaScript.
      </p>
      <h2>What is React?</h2>
      <p>
        React is a JavaScript library for building user interfaces. It is a component-based library, meaning it allows you to build your UI by combining smaller components.
      </p>
      <p>
        React is a powerful tool for building web applications, and is used by many popular websites, including Facebook and Instagram.
      </p>
      <h2>What is CSS Modules?</h2>
      <p>
        CSS Modules is a feature that allows you to import CSS files into your JavaScript modules. This allows you to scope CSS to a particular component, and avoid having to worry about class name conflicts.
      </p>
      <p>
        CSS Modules is a powerful tool for managing your CSS, and is used by many popular frameworks, including Next.js.
      </p>
    </div>
  );
}
