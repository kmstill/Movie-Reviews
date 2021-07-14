import requests
from  api.config import API_KEY 

def getMovieData(title):
    response = requests.get(f"http://www.omdbapi.com/?t={title}&apikey={API_KEY}").json()
    if not response:
        return {}
    movieData = {
        'title': response['Title'],
        'year': response['Year'],
        'runtime': str(response['Runtime']),
        'director': response['Director'],
        'poster' : response['Poster'],
        'plot' : response['Plot']
    }
    return movieData