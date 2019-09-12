import Typography from "typography"

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.75,
  scaleRatio: 4,
  headerFontFamily: [
    "Baloo",
    "Helvetica Neue",
    "Segou UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Merriweather", "Georgia"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
