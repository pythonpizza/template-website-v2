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
      pt: ["37rem", "20rem", "14rem"],
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
        p: "secondary",
      }}
    >
      <HeroHeading as="h1" large>
        Python Pizza
      </HeroHeading>
      <HeroHeading m={0} as="h2">
        CityName @ Venue
      </HeroHeading>
      <HeroHeading m={0} as="h2">
        9 November 2019
      </HeroHeading>
    </Box>
    <Wave />
  </Flex>
);
