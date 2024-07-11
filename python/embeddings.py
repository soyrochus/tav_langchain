import os
from langchain_core.documents import Document
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings

# Load environment values from the .env file (for the API key)
from dotenv import load_dotenv
load_dotenv()

documents = [
    Document(
        page_content="Los perros son grandes compañeros, conocidos por su lealtad y amabilidad.",
        metadata={"source": "mammal-pets-doc"},
    ),
    Document(
        page_content="Los gatos son mascotas independientes que a menudo disfrutan de su propio espacio.",
        metadata={"source": "mammal-pets-doc"},
    ),
    Document(
        page_content="Los peces dorados son mascotas populares para principiantes, que requieren un cuidado relativamente sencillo.",
        metadata={"source": "fish-pets-doc"},
    ),
    Document(
        page_content="Los loros son aves inteligentes capaces de imitar el habla humana.",
        metadata={"source": "bird-pets-doc"},
    ),
    Document(
        page_content="Los conejos son animales sociales que necesitan mucho espacio para saltar.",
        metadata={"source": "mammal-pets-doc"},
    ),
]


def main():
    vectorstore = Chroma.from_documents(
        documents,
        embedding=OpenAIEmbeddings(api_key=os.getenv("OPENAI_API_KEY")),
    )


if __name__ == "__main__":
    main()  
