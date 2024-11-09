import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.div}>
      <h1>Contact Me</h1>
      <p>
        You can reach me at{" "}
        <a href="mailto:hanzala-waseem@proton.me">hanzala-waseem@proton.me</a>.
      </p>
      <p>
        You can also find me on LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/dev-hanzala/">Hanzala Waseem</a>
        .
      </p>
    </div>
  );
}
