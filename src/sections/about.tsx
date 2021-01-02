import { Container, Heading } from "theme-ui";

export const About = () => (
  <Container variant="center">
    <Heading>Python Pizza</Heading>
    <Container variant="smallContainer">
      <p>
        <b>Python Pizza</b> is a micro conference organized by the Python
        Hamburg Community.
      </p>
      <p>
        We bring the Python Community together for some amazing original Pizza™
        and Python Talks.
      </p>
      <p>
        We believe in and encourage practical sessions, in which developers
        share their experience and lessons from real-world projects, each talk
        is 10 mins long.
      </p>
      <p>Thanks to the Python Pizza (Naples!) that started this format!</p>
      <p>
        Check out the past editions:{" "}
        <a
          href="https://python.pizza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naples Python Pizza
        </a>{" "}
        and{" "}
        <a
          href="https://berlin.python.pizza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Berlin Python Pizza
        </a>
        .{" "}
      </p>
    </Container>
  </Container>
);
