import { Flex, Box, Heading, HeadingProps } from "theme-ui";
import { Wave } from "~/components/wave";

type HeroHeadingProps = HeadingProps & {
  large?: boolean;
};

const HeroHeading: React.FC<HeroHeadingProps> = ({
  children,
  large,
  ...props
}) => (
  <Heading
    {...props}
    sx={{
      fontSize: large ? "large" : "heading",
      textAlign: "center",
      color: "white",
    }}
  >
    {children}
  </Heading>
);

export const Hero = () => (
  <Flex
    sx={{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "url(/background.jpg) center / cover",
      minHeight: "100vh",
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "primary",
        opacity: 0.6,
        "@supports (mix-blend-mode: hard-light)": {
          opacity: 1,
          mixBlendMode: "hard-light",
        },
      },
    }}
  >
    <Box
      sx={{
        zIndex: 1,
        m: "auto",
      }}
    >
      <HeroHeading as="h1" large mb={"secondary"}>
        Python Pizza
      </HeroHeading>
      <HeroHeading as="h2">CityName @ Venue</HeroHeading>
      <HeroHeading as="h2">9 November 2019</HeroHeading>
    </Box>
    <Wave />
  </Flex>
);
