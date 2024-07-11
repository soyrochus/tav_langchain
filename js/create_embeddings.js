import { Chroma } from "@langchain/community/vectorstores/chroma";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import config from "dotenv";

// Load environment values from the .env file (for the API key)
config.config();

async function main() {

// Create docs with a loader


    // Create docs with a loader
    const loader = new TextLoader("../docs/GutenBerg - Nietzsche - Beyond Good and Evil.txt");

    const docs = await loader.load();

    //Split the document into chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200
    });
    const splitDocs = await splitter.splitDocuments(docs);

    // Create vector store and index the docs
    const vectorStore = await Chroma.fromDocuments(splitDocs, new OpenAIEmbeddings(), {
    collectionName: "a-test-collection",
    url: "http://localhost:8000", // Optional, will default to this value
    //collectionMetadata: {
    //    "hnsw:space": "cosine",
    //}, // Optional, can be used to specify the distance method of the embedding space https://docs.trychroma.com/usage-guide#changing-the-distance-function
    });




};

main();
