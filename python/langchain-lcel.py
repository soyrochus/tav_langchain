import os
import sys
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAI
from langchain_core.runnables import Runnable
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers.string import StrOutputParser


# Load environment values from the .env file (for the API key)
load_dotenv()

def main():
    # Check for the optional -p parameter and assign the value if present
    param_index = sys.argv.index('-p') if '-p' in sys.argv else -1
    user_message = """Which countries played the final in the FIFA world cup in 2010?
Who won the game? Which players scored?"""

    if param_index != -1 and len(sys.argv) > param_index + 1:
        user_message = sys.argv[param_index + 1]

    # Define the prompt template
    prompt_template = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful assistant."),
        ("user", "{user_message}")])
    
    # Set up the OpenAI model
    model = ChatOpenAI(api_key=os.getenv("OPENAI_API_KEY"), model="gpt-4o")

    # Define a simple parser
    parser = StrOutputParser()

    # Create the chain
    chain = prompt_template | model | parser

    # Invoke the chain
    response = chain.invoke({"user_message": user_message})

    print("Response...")
    print(response)

if __name__ == "__main__":
    main()
