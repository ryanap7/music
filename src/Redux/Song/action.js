import axios from "axios";

const ActionType = {
  SET_SONG: "SET_SONG",
  GET_SONG_BY_ALBUM: "GET_SONG_BY_ALBUM",
  GET_ARTIST: "GET_ARTIST",
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE"
};

function setSongActionCreator(song) {
  return {
    type: ActionType.SET_SONG,
    payload: {
      song
    }
  };
}

function getSongByAlbumActionCreator(data) {
  return {
    type: ActionType.GET_SONG_BY_ALBUM,
    payload: {
      data
    }
  };
}

function getArtistActionCreator(data) {
  return {
    type: ActionType.GET_ARTIST,
    payload: {
      data
    }
  };
}

function addFavoriteActionCreator(songId, type = "") {
  return {
    type: ActionType.ADD_FAVORITE,
    payload: {
      songId,
      type
    }
  };
}

function deleteFavoriteActionCreator(songId) {
  return {
    type: ActionType.DELETE_FAVORITE,
    payload: {
      songId
    }
  };
}

function asyncSetSong(query = "a") {
  return async (dispatch) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://deezerdevs-deezer.p.rapidapi.com/search",
        params: { q: query },
        headers: {
          "X-RapidAPI-Key":
            "441693b2b4mshaa4d90b3fd576bdp109023jsnec0da8874250",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }
      });
      const song = response.data.data;

      dispatch(setSongActionCreator(song));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncGetSongByAlbum(albumId) {
  return async (dispatch) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`,
        headers: {
          "X-RapidAPI-Key":
            "441693b2b4mshaa4d90b3fd576bdp109023jsnec0da8874250",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }
      });
      const data = response.data;

      dispatch(getSongByAlbumActionCreator(data));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncGetArtist(artistId) {
  return async (dispatch) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`,
        headers: {
          "X-RapidAPI-Key":
            "441693b2b4mshaa4d90b3fd576bdp109023jsnec0da8874250",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }
      });
      const data = response.data;

      dispatch(getArtistActionCreator(data));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setSongActionCreator,
  asyncSetSong,
  addFavoriteActionCreator,
  deleteFavoriteActionCreator,
  asyncGetSongByAlbum,
  getSongByAlbumActionCreator,
  asyncGetArtist,
  getArtistActionCreator
};
