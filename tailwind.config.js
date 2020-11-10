// https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js#L5

require("dotenv").config();
const enablePurge = process.env.enablePurge || true;
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: enablePurge,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
