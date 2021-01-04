import { Container, Heading, Paragraph } from "theme-ui";

export const About = () => (
  <Container id="about" variant="smallContainer">
    <Heading>Python Pizza</Heading>
    <Paragraph>
      <b>Python Pizza</b> is a micro conference organized by the Python Hamburg
      Community.
    </Paragraph>
    <Paragraph>
      We bring the Python Community together for some amazing original Pizza™
      and Python Talks.
    </Paragraph>
    <br />
    <Paragraph>
      We believe in and encourage practical sessions, in which developers share
      their experience and lessons from real-world projects, each talk is 10
      mins long.
    </Paragraph>
    <br />
    <Paragraph>
      Thanks to the Python Pizza (Naples!) that started this format!
    </Paragraph>
    <Paragraph>
      Check out the past editions:{" "}
      <a href="https://python.pizza" target="_blank" rel="noopener noreferrer">
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
    </Paragraph>
  </Container>
);
