const tailwindcss = require("tailwindcss");
module.exports = {
  important: "[data-table-library_table]",
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};
