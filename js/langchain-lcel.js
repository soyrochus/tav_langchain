import { config } from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';
import { RunnableSequence } from '@langchain/core/runnables';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

// Load environment values from the .env file (for the API key)
config();

async function main() {
  const args = process.argv;
  const paramIndex = args.indexOf('-p');
  let userMessage = `Which countries played the final in the FIFA world cup in 2010?
Who won the game? Which players scored?`;

  if (paramIndex !== -1 && args.length > paramIndex + 1) {
    userMessage = args[paramIndex + 1];
  }

  // Define the prompt template
  const promptTemplate = ChatPromptTemplate.fromMessages([
    [ "system", "You are a helpful assistant." ],
    ["human", "{user_message}"]
  ]);



  // Set up the OpenAI model
  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o"
  });

  // Define a simple parser
  const parser = new StringOutputParser();

  // Create the chain
  const chain = RunnableSequence.from([promptTemplate, model, parser]);

  // Invoke the chain
  const response = await chain.invoke({ user_message: userMessage });

  console.log("Response...");
  console.log(response);
};

main().catch(console.error);
