import { useState } from "react";

const GENRES = ['Pop', 'EDM', 'Rock'];

const OPTIONS = {
  Pop: ['A-Team', 'Thriller', 'Mirrors'],
  EDM: ['Levels', 'Sahara Love', 'Wake me up'],
  Rock: ['Thunderstorm', 'Feel nothing'],
};

const isGenreChecked = (genre, songSelections) => 
  OPTIONS[genre].every((song) => songSelections[song]);

const SongSelector = () => {
  const [songSelections, setSongSelections] = useState({});

  const handleSelectSong = (songName) => {
    return (e) => {
      setSongSelections({ ...songSelections, [songName]: e.target.checked });
    };
  };

  const handleSelectGenre = (genre) => {
    return (e) => {
      const newSongSelections = { ...songSelections };
      
      OPTIONS[genre].forEach((song) => {
        newSongSelections[song] = e.target.checked;
      });

      setSongSelections(newSongSelections);
    };
  };

  const GenreOption = ({ genre }) => {
    return (
      <div>
        <input 
          checked={isGenreChecked(genre, songSelections)}
          type="checkbox"
          onChange={handleSelectGenre(genre)}
        />
        <span><b>{genre}</b></span>
      </div>
    )
  };

  const SongOption = ({ song }) => {
    return (
      <div>
        <input 
          checked={Boolean(songSelections[song])}
          type="checkbox"
          onChange={handleSelectSong(song)}
        />
        <span>{song}</span>
      </div>
    )
  }

  return (
    <div>
      {GENRES.map((genre) => (
        <div>
          <GenreOption genre={genre} />
          <div>
            {OPTIONS[genre].map((song) => (
              <SongOption song={song} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
};

export default SongSelector