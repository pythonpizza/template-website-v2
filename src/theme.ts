export const theme = {
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Roboto Mono', sans-serif",
  },
  space: {
    primary: "50px",
    secondary: "20px",
  },
  sizes: {
    container: "960px",
    smallContainer: "720px",
  },
  colors: {
    text: "#464444",
    background: "#fff",
    primary: "#ed4337",
    white: "#fff",
  },
  fontSizes: {
    large: "80px",
    heading: "35px",
    body: "20px",
    smallBody: "16px",
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 500,
  },
  lineHeights: {
    body: 1.3,
    heading: 1.3,
  },
  cards: {
    primary: {
      position: "relative",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",

      padding: 2,
      borderRadius: "100px",
      boxShadow: "0 4px 28px -8px #cac9c9",
    },
  },
  radii: {
    primary: "8px",
  },
  text: {
    heading: {
      color: "primary",
      fontFamily: "heading",
      fontSize: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      mb: "secondary",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  layout: {
    container: {
      px: "secondary",
    },
    center: {
      textAlign: "center",
    },
    smallContainer: {
      maxWidth: "smallContainer",
      px: "secondary",
    },
  },
};
