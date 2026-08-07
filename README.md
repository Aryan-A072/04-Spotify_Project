# README Documentation
## Project Overview and Use Case
This project is a **Spotify-inspired music streaming application** where users can browse songs, artists, albums, and playlists. It uses **CognoDB (Graph Database)** to model relationships between users, songs, artists, albums, genres, and playlists, enabling efficient music discovery and recommendation.

## Why a Graph Database?
A graph database is ideal because music platforms are highly relationship-driven. Songs are connected to artists, albums, genres, playlists, and users. CognoDB efficiently traverses these relationships, making recommendations, playlist generation, and artist/song discovery significantly faster than traditional relational databases.

## Data Model / Graph Schema Diagram
### Nodes
- **User**
- **Song**
- **Artist**
- **Album**
- **Genre**
- **Playlist**

### Relationships
- `(Artist)-[:CREATED]->(Song)`
- `(Song)-[:BELONGS_TO]->(Album)`
- `(Song)-[:HAS_GENRE]->(Genre)`
- `(User)-[:CREATED]->(Playlist)`
- `(Playlist)-[:CONTAINS]->(Song)`
- `(User)-[:LIKED]->(Song)`

## Setup and Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create and configure a **CognoDB** instance.
4. Add the database credentials to the `.env` file.
5. Run the data-loading scripts to populate the graph.
6. Start the backend and frontend using `npm run dev`.
7. Open the application in your browser.

## Key Cypher Queries
- **Add Song:** Creates a song and links it to its artist, album, and genre.
- **Create Playlist:** Creates a playlist and connects songs to it.
- **Like a Song:** Connects a user to a liked song.
- **Browse by Genre:** Retrieves all songs belonging to a selected genre.
- **Music Recommendations:** Finds related songs based on shared artists, genres, or playlists.

## User Interface Screenshots
<img width="1917" height="1020" alt="image" src="https://github.com/user-attachments/assets/f744d179-d4ed-4132-9d56-63e7434a37fe" />


## Live UI Link (frontend only for now):
https://spotify-project-aa.vercel.app/
