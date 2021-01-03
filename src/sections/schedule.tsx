import { Container, Heading, Paragraph } from "theme-ui";
import { ScheduleCard } from "~/components/schedule-card";

export const Schedule = () => (
  <Container variant="smallContainer">
    <Heading>Schedule</Heading>
    <Paragraph>The schedule is displayed in</Paragraph>

    <ScheduleCard variant="info" />
    <ScheduleCard />
    <ScheduleCard />
  </Container>
);
