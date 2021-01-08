/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Container, Grid } from "theme-ui";
import { Image } from "~/components/image";
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
      width="14rem"
      height="auto"
      objectFit="contain"
      src={sponsor.image}
      alt={sponsor.name}
    />
  </a>
);

export const Sponsors = () => (
  <Container id="sponsors">
    <Heading mb="primary">Sponsors</Heading>
    <Grid columns={[1, 2, 2, 3]} gap="primary">
      {SPONSORS.map((sponsor, index) => (
        <SponsorItem key={index} sponsor={sponsor} />
      ))}
    </Grid>
  </Container>
);
