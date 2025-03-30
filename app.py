from flask import Flask, request, jsonify
from flask_cors import CORS
import movie_recommendation
import spotify_recommendation

# Initialize the movie_name variable
movie_name = ""

# Flask constructor
app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def receive_movie():
    global movie_name  # Declare movie_name as global
    data = request.json  
    movie_name = data.get("movie")
    
    # Print to console to verify
    print(f"Received movie: {movie_name}")
    return "success"

@app.route("/getMovieRecs", methods=["GET"])
def getMovRecs():
    global movie_name  # Declare movie_name as global
    if not movie_name:
        return jsonify({"error": "No movie selected"}), 400
    
    movies = movie_recommendation.get_recommendations(movie_name, movie_recommendation.cosine_sim2)
    return jsonify({"movies": movies})

@app.route("/getSongRecs", methods=["GET"])
def getSongRecs():
    global movie_name  # Declare movie_name as global
    if not movie_name:
        return jsonify({"error": "No movie selected"}), 400
    
    songs = spotify_recommendation.get_recommendation(movie_name)
    return jsonify({"songs": songs})

if __name__ == '__main__':
    app.run(debug=True)
