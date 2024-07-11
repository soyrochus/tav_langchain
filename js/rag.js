import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { formatDocumentsAsString } from "langchain/util/document";
import { PromptTemplate } from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import config from "dotenv";


// Load environment values from the .env file (for the API key)
config.config();

async function main() {

  // Set up the OpenAI model
  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o"
  });


  const vectorStore = await Chroma.fromExistingCollection(new OpenAIEmbeddings(), {
    collectionName: "a-test-collection",
    url: "http://localhost:8000"
  });

  const retriever = vectorStore.asRetriever();

  const prompt =
  PromptTemplate.fromTemplate(`Answer the question based only on the following context:
      {context}

      Question: {question}`);

  const chain = RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  const result = await chain.invoke("What did Nietszche say about nihilism?");

  console.log(result);

};

main();