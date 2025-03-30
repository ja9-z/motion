from flask import Flask, redirect, url_for, request, render_template, flash,jsonify
import pandas as pd
import numpy as np

from flask_cors import CORS


#import python file
import movie_recommendation
import spotify_recommendation

#movie_recommendation.get_recommendations('Interstellar', movie_recommendation.cosine_sim2)

movie_name = ""

# Flask constructor
app = Flask(__name__) 
CORS(app)  
@app.route("/", methods=["POST"])
def receive_movie():
    data = request.json  
    movie_name = data.get("movie")

    print("Received movie:", movie_name)
    print(movie_recommendation.get_recommendations(movie_name, movie_recommendation.cosine_sim2))  # Print to console
    return "Succes"

    if(request.method == "POST"):
        #can check if request.form["nm"] not blank, do more stuff with it
        movie_name = data.get("movie", "").strip()
        print("Received movie:", data.get("movie"))
        return redirect(url_for("motion", mv = movie_name))
    else:
        return render_template("login.html")
    #data.get("movie")
    #return redirect(url_for("motion", mv = data.get("movie")))
"""
    print("Received movie:", data.get("movie"))  # Print to console
    return "Success"""


"""
@app.route("/", methods = ["POST", "GET"])
def home():
    if(request.method == "POST"):
        #can check if request.form["nm"] not blank, do more stuff with it
        user = request.form["nm"]
        return redirect(url_for("user", usr = user))
    else:
        return render_template("login.html")"
        """

@app.route("/getRecs")
def getRecs(mv):
    MovieRecommendations = movie_recommendation.get_recommendations(movie_name, movie_recommendation.cosine_sim2)
    if MovieRecommendations:
        return render_template('recommendation.html', movies=MovieRecommendations, songs=spotify_recommendation.get_recommendation(movie_name))
    else:
        return render_template('recommendation.html', movies=[], message="NO MOTION DETECTED")

#@app.route("/<usr>/spot")
#def user(usr):
    

if __name__=='__main__':
    app.run(debug = True)