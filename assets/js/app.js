import express from "express";
import morgan from "morgan";

// Routes
import languageRoutes from "../v1/routes/language.routes"

const app=express();

// Settings
app.set("port", 4000);

// Midlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/usuarios",languageRoutes);

export default app;