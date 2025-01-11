from flask import Flask, request, jsonify
import random
import json
from fuzzywuzzy import fuzz
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load intents from a separate file
with open('intents.json') as file:
    intents = json.load(file)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message", "").lower()
    print(f"User message: {user_message}")  # Debug: Log user input

    best_match = None
    best_score = 0
    threshold = 70  # Similarity threshold

    for intent in intents["intents"]:
        for pattern in intent["patterns"]:
            score = fuzz.ratio(user_message, pattern.lower())
            print(f"Pattern: {pattern}, Score: {score}")  # Debug: Log scores
            if score > best_score:  # Track the best match
                best_score = score
                best_match = intent

    # print(f"Best score: {best_score}, Best match: {best_match}")  # Debug: Log best match

    # If the best match exceeds the threshold, return a response
    if best_score >= threshold:
        response = random.choice(best_match["responses"])
        # print(f"Response: {response}")  # Debug: Log response
        return jsonify({"response": response})

    # Default response if no match
    default_response = "I'm sorry, I didn't understand that. Can you rephrase?"
    # print(f"Default response: {default_response}")  # Debug: Log default response
    return jsonify({"response": default_response})

if __name__ == '__main__':
    app.run(debug=True)
