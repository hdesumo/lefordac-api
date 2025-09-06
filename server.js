import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sequelize from "./src/models/index.js";

// Routes
import memberRoutes from "./src/routes/memberRoutes.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import messageRoutes from "./src/routes/messageRoutes.js";
import galleryRoutes from "./src/routes/galleryRoutes.js";
//import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/members", memberRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/gallery", galleryRoutes);
//app.use("/api/contacts", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ FORDAC API is running");
});

// DB sync
sequelize.sync().then(() => {
  console.log("📦 Models synchronized");
  app.listen(PORT, () => {
    console.log(`🚀 API running on port ${PORT}`);
  });
}).catch(err => {
  console.error("❌ Database connection error:", err);
});
