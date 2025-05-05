const dotenv = require('dotenv');
dotenv.config();

const ChatWithAI = async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ msg: "message field is empty" });
  }

  try {
    const { default: OpenAI } = await import("openai"); // dynamic ESM import
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: process.env.DEEPSEEK_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-prover-v2:free",
      messages: [
        { role: "system", content: "You are a helpful assistant for a technical club." },
        { role: "user", content: message }
      ],
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "Failed to get reply from OpenAI" });
  }
};

module.exports = { ChatWithAI };
