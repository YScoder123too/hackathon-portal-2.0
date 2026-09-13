import app from "./app.js";
import env from "./config/env.js";
import connectDB from "./config/db.js";

const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    // Start Server
    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server");
    console.error(error);
  }
};

startServer();