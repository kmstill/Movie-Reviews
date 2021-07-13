import requests

API_KEY = 'd6984e10'

def getMovieData(title):
    response = requests.get(f"http://www.omdbapi.com/?t={title}&apikey={API_KEY}").json()
    if response:
        print("movie: " +response['Runtime'])
        movieData = {
            'title': response['Title'],
            'year': response['Year'],
            'runtime': str(response['Runtime']),
            'director': response['Director'],
            'poster' : response['Poster'],
            #'plot': response['Plot']
    }
    else:
        movieData = {}
    return movieData

if __name__ == "__main__":
    title = input("Enter a movie title: ")
    response = requests.get(f"http://www.omdbapi.com/?t={title}&apikey={API_KEY}").json()
    if(response):
        print(response)
        print(response['Title'])