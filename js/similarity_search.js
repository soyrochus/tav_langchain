import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";
import config from "dotenv";


// Load environment values from the .env file (for the API key)
config.config();

async function main() {



  const vectorStore = await Chroma.fromExistingCollection(new OpenAIEmbeddings(), {
    collectionName: "a-test-collection",
    url: "http://localhost:8000"
  });


  const response = await vectorStore.similaritySearch("nihilism", 5);
  console.log(response);
  
  const context = await response.map((res) => { return res.pageContent + "--------------------------------------\n"});

  console.log(context);


};

main();
