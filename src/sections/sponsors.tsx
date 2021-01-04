/** @jsxRuntime classic */
/** @jsx jsx */
import Image from "next/image";
import { jsx, Heading, Box, Container, Grid } from "theme-ui";
import { SPONSORS, Sponsor } from "~/data/sponsors";

type SponsorProps = {
  sponsor: Sponsor;
};

export const SponsorItem: React.FC<SponsorProps> = ({ sponsor }) => (
  <a
    href={sponsor.link}
    rel="noopener noreferrer"
    target="_blank"
    sx={{ position: "relative" }}
  >
    <Image
      width={140}
      height="auto"
      objectFit="contain"
      src={sponsor.image}
      alt={sponsor.name}
    />
  </a>
);

export const Sponsors = () => (
  <Container id="sponsors">
    <Heading>Sponsors</Heading>
    <Grid columns={[1, 2, 2, 3]}>
      {SPONSORS.map((sponsor) => (
        <SponsorItem sponsor={sponsor} />
      ))}
    </Grid>
  </Container>
);
