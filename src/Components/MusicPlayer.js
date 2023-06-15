import React, { useEffect, useRef, useState } from "react";
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward
} from "react-icons/fa";
import "../styles/MusicPlayer.css";

function MusicPlayer({ selected }) {
  const [isPlaying, setPlay] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const handleLoadedMetadata = () => {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);

      progressBar.current.max = seconds;
    };

    if (audioPlayer.current) {
      audioPlayer.current.addEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    }

    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  useEffect(() => {
    setPlay(false);
  }, [selected]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const whilePlaying = () => {
    if (audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime;
      changeCurrentTime();
    }

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
  };

  const handleForward = () => {
    const newTime = audioPlayer.current.currentTime + 5;
    if (newTime <= audioPlayer.current.duration) {
      audioPlayer.current.currentTime = newTime;
      progressBar.current.value = newTime;
      setCurrentTime(newTime);
      changeCurrentTime();
    }
  };

  const handleBack = () => {
    const newTime = audioPlayer.current.currentTime - 5;
    if (newTime >= 0) {
      audioPlayer.current.currentTime = newTime;
      progressBar.current.value = newTime;
      setCurrentTime(newTime);
      changeCurrentTime();
    }
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img
          src={
            selected.image
              ? selected.image
              : "https://api.deezer.com/album/6157080/image"
          }
          alt=""
        />
      </div>
      <div className="songAttributes">
        <audio ref={audioPlayer} src={selected.preview} preload="metadata" />

        <div className="top">
          <div className="left">
            <i className="download"></i>
          </div>

          <div className="middle">
            <div className="back" onClick={handleBack}>
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward" onClick={handleForward}>
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right"></div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={false}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
