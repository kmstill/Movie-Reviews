import requests
from  api.config import API_KEY 

def getMovieInfo(title):
    response = requests.get(f"http://www.omdbapi.com/?t={title}&apikey={API_KEY}").json()
    print(response)
    if 'Error' in response:
        return {}
    movieInfo = {
        'title': response['Title'],
        'year': response['Year'],
        'runtime': str(response['Runtime']),
        'director': response['Director'],
        'poster' : response['Poster'],
        'plot' : response['Plot'],
        'total_reviews': 0,
        'total_rating_points': 0
    }
    return movieInfo