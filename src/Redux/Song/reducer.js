import { ActionType } from "./action";

const initialState = {
    songs: [],
    songsByAlbum: [],
    artist: [],
    favoriteSongs: [],
};

function songReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionType.SET_SONG:
            return {
                ...state,
                songs: action.payload.song,
            };
        case ActionType.GET_SONG_BY_ALBUM:
            return {
                ...state,
                songsByAlbum: action.payload.data,
            };

        case ActionType.GET_ARTIST:
            return {
                ...state,
                artist: action.payload.data,
            };

        case ActionType.ADD_FAVORITE:
            let favoriteSong = [];
            if (action.payload.type === "album") {
                favoriteSong = state?.songsByAlbum?.tracks?.data.find(
                    (song) => song.id === action.payload.songId
                );
            } else {
                favoriteSong = state?.songs?.find(
                    (song) => song.id === action.payload.songId
                );
            }
            if (favoriteSong) {
                const isAlreadyFavorite = state.favoriteSongs.some(
                    (song) => song.id === favoriteSong.songId
                );
                if (!isAlreadyFavorite) {
                    return {
                        ...state,
                        favoriteSongs: [...state.favoriteSongs, favoriteSong],
                    };
                }
            }
            return state;

        case ActionType.DELETE_FAVORITE:
            return {
                ...state,
                favoriteSongs: state?.favoriteSongs?.filter(
                    (song) => song.id !== action.payload.songId
                ),
            };

        default:
            return state;
    }
}
export default songReducer;
