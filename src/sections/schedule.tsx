import { Container, Heading, Paragraph } from "theme-ui";
import { ScheduleCard } from "~/components/schedule-card";
import { SCHEDULE } from "~/data/schedule";

export const Schedule = () => (
  <Container variant="smallContainer">
    <Heading>Schedule</Heading>
    <Paragraph>The schedule is displayed in your timezone</Paragraph>

    {SCHEDULE.map((schedule, index) => (
      <ScheduleCard
        variant={schedule.label ? "info" : "talk"}
        key={schedule.name}
        schedule={schedule}
        invert={!Boolean(index % 2)}
      />
    ))}
  </Container>
);
