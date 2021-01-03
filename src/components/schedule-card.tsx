/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Card, Heading, Text } from "theme-ui";
import { Avatar } from "./avatar";
import { Event } from "~/data/schedule";
import { format } from "date-fns";

type Props = {
  variant?: "talk" | "info";
  invert?: boolean;
  schedule: Event;
};

const TalkCard: React.FC<{
  invert: Props["invert"];
  schedule: Props["schedule"];
}> = ({ invert, schedule }) => (
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
      src={schedule.photo}
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
      {schedule.title}
    </Heading>

    <Text
      sx={{
        fontSize: ["smallBody", "body"],
      }}
    >
      {schedule.name}
    </Text>
  </Card>
);

const InfoCard: React.FC<{ schedule: Props["schedule"] }> = ({ schedule }) => (
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
      {schedule.label}
    </Text>
  </Card>
);

export const ScheduleCard: React.FC<Props> = ({
  variant = "talk",
  invert = false,
  schedule,
}) => (
  <Box
    sx={{
      position: "relative",
      mt: variant === "talk" ? ["90px", "primary"] : "primary",
    }}
  >
    {variant === "talk" && <TalkCard schedule={schedule} invert={invert} />}
    {variant === "info" && <InfoCard schedule={schedule} />}

    {schedule.when && (
      <Text
        sx={{
          position: "absolute",
          top: ["-30px", "50%"],
          left: invert ? ["50px", "20px"] : ["50px", "calc(100% - 20px)"],
          transform: [
            null,
            invert
              ? "translateY(-50%) translateX(0)"
              : "translateY(-50%) translateX(-100%)",
          ],
          color: variant === "info" ? ["text", "white"] : "text",
        }}
      >
        {format(new Date(schedule.when), "HH:mm")}
      </Text>
    )}
  </Box>
);
