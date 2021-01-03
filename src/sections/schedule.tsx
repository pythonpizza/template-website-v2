import { Container, Heading, Paragraph } from "theme-ui";
import { ScheduleCard } from "~/components/schedule-card";

export const Schedule = () => (
  <Container variant="center">
    <Container variant="smallContainer">
      <Heading>Schedule</Heading>
      <Paragraph>The schedule is displayed in</Paragraph>

      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </Container>
  </Container>
);
