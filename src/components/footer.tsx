/** @jsxRuntime classic */
/** @jsx jsx */

import { Image } from "~/components/image";

import { Box, Container, jsx } from "theme-ui";
import { Wave } from "./wave";

const SOCIALS = [
  {
    name: "facebook",
    icon: "/socials/facebook.png",
    link: "https://www.facebook.com/pythonpizza/",
  },
  {
    name: "twitter",
    icon: "/socials/twitter.png",
    link: "https://twitter.com/pythonpizzaconf/",
  },
  {
    name: "instagram",
    icon: "/socials/instagram.png",
    link: "https://www.instagram.com/python.pizza/",
  },
];

export const Footer = () => (
  <Box
    sx={{
      backgroundColor: "primary",
    }}
  >
    <Wave invert />
    <Container>
      {SOCIALS.map((social) => (
        <a
          sx={{ mx: "secondary" }}
          target="_blank"
          rel="noopener noreferrer"
          href={social.link}
          key={social.name}
        >
          <Image
            width="35px"
            height="35px"
            src={social.icon}
            alt={social.name}
          />
        </a>
      ))}
    </Container>
  </Box>
);