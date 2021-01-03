/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Card, Heading, Text } from "theme-ui";
import { Avatar } from "./avatar";

export const ScheduleCard = () => (
  <Card
    sx={{
      minHeight: "128px",
      p: "20px 100px 20px 160px",
    }}
  >
    <Avatar />

    <Heading
      as="h2"
      sx={{
        mb: "4px",
        fontSize: "body",
        color: "text",
      }}
    >
      Codice Ratio: mining nell'Archivio Segreto Vaticano
    </Heading>
    <Text>Speaker name</Text>
  </Card>
);
