import "./App.css";
import { useState } from "react";
import boomMp from "./assets/sounds/boom.mp3";

function Boom() {
  function playSound() {
    const boomSound = new Audio(boomMp);
    boomSound.play();
  }
  return (
    <div className="button" onClick={playSound}>
      <div className="boom">
        <h4 className="key">A</h4>
        <h2>Boom</h2>
      </div>
    </div>
  );
}
function Clap() {
  return (
    <div className="button">
      <div className="clap">
        <h4 className="key">S</h4>
        <h2>Clap</h2>
      </div>
    </div>
  );
}

function Hihat() {
  return (
    <div className="button">
      <div className="hihat">
        <h4 className="key">D</h4>
        <h2>Hihat</h2>
      </div>
    </div>
  );
}

function Kick() {
  return (
    <div className="button">
      <div className="kick">
        <h4 className="key">F</h4>
        <h2>Kick</h2>
      </div>
    </div>
  );
}

function OpenHat() {
  return (
    <div className="button">
      <div className="openhat">
        <h4 className="key">G</h4>
        <h2>Openhat</h2>
      </div>
    </div>
  );
}

function Ride() {
  return (
    <div className="button">
      <div className="ride">
        <h4 className="key">H</h4>
        <h2> Ride</h2>
      </div>
    </div>
  );
}

function Snare() {
  return (
    <div className="button">
      <div className="snare">
        <h4 className="key">J</h4>
        <h2>Snare</h2>
      </div>
    </div>
  );
}

function Tink() {
  return (
    <div className="button">
      <div className="tink">
        <h4 className="key">K</h4>
        <h2>Tink</h2>
      </div>
    </div>
  );
}

function Tom() {
  return (
    <div className="button">
      <div className="tom">
        <h4 className="key">L</h4>
        <h2>Tom</h2>
      </div>
    </div>
  );
}

export default function DrumKit() {
  return (
    <>
      <div className="drum-kit">
        <Boom />
        <Clap />
        <Hihat />
        <Kick />
        <OpenHat />
        <Ride />
        <Snare />
        <Tink />
        <Tom />
      </div>
    </>
  );
}
