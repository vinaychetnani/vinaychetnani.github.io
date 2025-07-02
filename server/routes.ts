import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }
      
      // In a real application, you would send the email here
      // For now, we'll just log it and return success
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      res.status(200).json({ 
        message: "Message sent successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      // Look for resume files in attached_assets directory
      const resumePaths = [
        path.resolve("attached_assets", "Profile_1751464347309.pdf"),
        path.resolve("attached_assets", "Vinay_Chetnani_CV_1 (1)_1751464347310.pdf")
      ];
      
      // Find the first existing resume file
      let resumePath = null;
      for (const filePath of resumePaths) {
        if (fs.existsSync(filePath)) {
          resumePath = filePath;
          break;
        }
      }
      
      if (!resumePath) {
        return res.status(404).json({ 
          message: "Resume file not found" 
        });
      }
      
      // Set headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Vinay_Chetnani_Resume.pdf"');
      
      // Stream the file
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
      
      fileStream.on('error', (error) => {
        console.error("Error streaming resume file:", error);
        if (!res.headersSent) {
          res.status(500).json({ 
            message: "Error downloading resume" 
          });
        }
      });
      
    } catch (error) {
      console.error("Error serving resume:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
