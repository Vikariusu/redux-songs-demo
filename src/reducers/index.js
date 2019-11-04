import { combineReducers } from 'redux';

// Reducers
const songsReducer = () => {
    return [
        { title: 'Summertime', duration: '4:58'}, 
        { title: 'Paris Summer', duration: '2:59'}, 
        { title: 'Blame it on the Boogie', duration: '3:34'}, 
        { title: 'Libertango', duration: '4:25'}, 
        { title: 'Strange Love', duration: '3:25'}, 
        { title: 'Train Song', duration: '2:15'}, 
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})