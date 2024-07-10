import config from "dotenv";
import OpenAI from "openai";
import { argv } from "process";

// Load environment values from the .env file (for the API key)
config.config();


async function main() {
  // Check for the optional -p parameter and assign the value if present
  const paramIndex = argv.indexOf('-p');
  let userMessage = `Which countries played the final in the FIFA worlc cup in 2010?\n
  Who won the game? Wich players scored?`;

  if (paramIndex !== -1 && argv[paramIndex + 1]) {
    userMessage = argv[paramIndex + 1];
  }

  const client = new OpenAI();

  console.log("Sending message to OpenAI...");
  const completion = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userMessage }
    ],
    model: "gpt-4o",
  });

  console.log("Response...");
  console.log(completion.choices[0].message.content);
}

main();
