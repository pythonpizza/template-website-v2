/** @jsxRuntime classic */
/** @jsx jsx */
import Image from "next/image";
import { jsx, Heading, Box, Container, Grid } from "theme-ui";

export const Sponsor = () => (
  <Box sx={{ position: "relative" }}>
    <Image
      width={140}
      height="auto"
      sx={{ objectFit: "contain" }}
      src="/sponsors/python-italia.png"
    />
  </Box>
);

export const Sponsors = () => (
  <Container>
    <Heading>Sponsors</Heading>
    <Grid columns={[1, 2, 2, 3]}>
      <Sponsor />
      <Sponsor />
      <Sponsor />
      <Sponsor />
      <Sponsor />
    </Grid>
  </Container>
);
