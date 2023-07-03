import "./App.css";

function SoundButton({ sound, keyChar, name }) {
  function playSound() {
    const soundObj = new Audio(sound);
    soundObj.play();
  }

  return (
    <div className="button" onClick={playSound}>
      <div className={name.toLowerCase()}>
        <h4 className="key">{keyChar}</h4>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default function DrumKit() {
  const soundData = [
    { sound: require("./assets/sounds/boom.mp3"), keyChar: "A", name: "Boom" },
    { sound: require("./assets/sounds/clap.mp3"), keyChar: "S", name: "Clap" },
    {
      sound: require("./assets/sounds/hihat.mp3"),
      keyChar: "D",
      name: "Hihat",
    },
    { sound: require("./assets/sounds/kick.mp3"), keyChar: "F", name: "Kick" },
    {
      sound: require("./assets/sounds/openhat.mp3"),
      keyChar: "G",
      name: "Openhat",
    },
    { sound: require("./assets/sounds/ride.mp3"), keyChar: "H", name: "Ride" },
    {
      sound: require("./assets/sounds/snare.mp3"),
      keyChar: "J",
      name: "Snare",
    },
    { sound: require("./assets/sounds/tink.mp3"), keyChar: "K", name: "Tink" },
    { sound: require("./assets/sounds/tom.mp3"), keyChar: "L", name: "Tom" },
  ];

  return (
    <>
      <div className="drum-kit">
        {soundData.map((sound) => (
          <SoundButton
            key={sound.keyChar}
            sound={sound.sound}
            keyChar={sound.keyChar}
            name={sound.name}
          />
        ))}
      </div>
    </>
  );
}
