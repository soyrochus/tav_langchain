import os
import openai
import sys

# Load environment values from the .env file (for the API key)
from dotenv import load_dotenv
load_dotenv()

def main():
    # Check for the optional -p parameter and assign the value if present
    param_index = sys.argv.index('-p') if '-p' in sys.argv else -1
    user_message = """Which countries played the final in the FIFA worlc cup in 2010?
Who won the game? Wich players scored?"""

    if param_index != -1 and len(sys.argv) > param_index + 1:
        user_message = sys.argv[param_index + 1]

    client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    print("Sending message to OpenAI...")
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message}
        ]
    )

    print("Response...")
    print(response.choices[0].message.content)

if __name__ == "__main__":
    main()
