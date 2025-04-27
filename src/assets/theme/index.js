const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
    foggyColor: "#6A6A6A",
  },
  text: {
    primaryColor: "#222",
    infoColor: "#484848",
    secondaryColor: "#00848A",
    foggyColor: "#6A6A6A",
  },
  mixin: {
    boxShow: `
      transition: all 0.2s;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `,
  },
};

export default theme;
