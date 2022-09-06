const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./src/config/config.env" });

connectDB.once("open", async () => {
  console.log(`Database Connected`);
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
