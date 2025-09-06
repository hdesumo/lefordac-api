import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./src/models/index.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import memberRoutes from "./src/routes/memberRoutes.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import messageRoutes from "./src/routes/messageRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/messages", messageRoutes);
app.use("/uploads", express.static(path.resolve("uploads")));

// Routes de test
app.get("/", (req, res) => res.json({ message: "FORDAC API is running 🚀" }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected");
  } catch (err) {
    console.error("❌ DB error:", err);
  }
  console.log(`🚀 API running on port ${PORT}`);
});
