/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Card, Heading, Text } from "theme-ui";
import { Avatar } from "./avatar";

type Props = {
  variant?: "talk" | "info";
  invert?: boolean;
};

const TalkCard: React.FC<{ invert: Props["invert"] }> = ({ invert }) => (
  <Card
    sx={{
      minHeight: "128px",
      p: [
        "32px 40px 20px",
        invert ? "20px 170px 20px 100px" : "20px 100px 20px 170px",
      ],
    }}
  >
    <Avatar
      sx={{
        position: "absolute",
        top: [0, "50%"],
        left: invert ? ["50%", "auto"] : ["50%", 0],
        right: invert ? ["50%", 0] : "auto",
        transform: ["translate(-50%,-75%) scale(1)", "translateY(-50%)"],
      }}
    />

    <Heading
      as="h2"
      sx={{
        mt: 0,
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

export const ScheduleCard: React.FC<Props> = ({
  variant = "talk",
  invert = false,
}) => (
  <Box
    sx={{
      mt: variant === "talk" ? ["90px", "primary"] : "primary",
    }}
  >
    {variant === "talk" && <TalkCard invert={invert} />}
    {variant === "info" && <InfoCard />}
  </Box>
);
