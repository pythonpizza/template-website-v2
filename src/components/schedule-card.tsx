/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Card, Heading, Text } from "theme-ui";
import { Avatar } from "./avatar";

type Props = {
  variant?: "talk" | "info";
};

const TalkCard: React.FC = () => (
  <Card
    sx={{
      minHeight: "128px",
      p: ["32px 40px 20px", "20px 100px 20px 160px"],
    }}
  >
    <Avatar />

    <Heading
      as="h2"
      sx={{
        mb: ["10px", "5px"],
        fontSize: "body",
        color: "text",
      }}
    >
      Codice Ratio: mining nell'Archivio Segreto Vaticano
    </Heading>

    <Text
      sx={{
        fontSize: ["smallBody", "body"],
      }}
    >
      Speaker name
    </Text>
  </Card>
);

const InfoCard: React.FC = () => (
  <Card
    sx={{
      p: "20px 100px",
      backgroundColor: "primary",
      color: "white",
      backgroundImage: `linear-gradient(
          45deg,
          transparent 25%,
          rgba(0, 0, 0, 0.05) 25%,
          rgba(0, 0, 0, 0.05) 50%,
          transparent 50%,
          transparent 75%,
          rgba(0, 0, 0, 0.05) 75%
        )`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
      animation: "bg-move 2s infinite linear",
      "@keyframes bg-move": {
        "0%": {
          backgroundPositionX: 0,
        },
        "100%": {
          backgroundPositionX: "48px",
        },
      },
    }}
  >
    <Text
      sx={{
        fontSize: "body",
      }}
    >
      Info here
    </Text>
  </Card>
);

export const ScheduleCard: React.FC<Props> = ({ variant = "talk" }) => (
  <Box
    sx={{
      mt: variant === "talk" ? ["90px", "primary"] : "primary",
    }}
  >
    {variant === "talk" && <TalkCard />}
    {variant === "info" && <InfoCard />}
  </Box>
);
