const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = "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";

app.post("/ai-search", async (req, res) => {
  const { query } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Convert user input into short wallpaper search query (max 5 words)"
          },
          {
            role: "user",
            content: query
          }
        ],
        max_tokens: 20
      })
    });

    const data = await response.json();

    const result = data.choices[0].message.content.trim();
    res.json({ query: result });

  } catch (err) {
    console.error(err);
    res.json({ query }); // fallback
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
