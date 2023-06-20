// import React, { useState } from 'react';

// const AudioAdjusters = ({ audioSettings, setAudioSettings }) => {
// const [mute, setMute] = useState(false);

// const handleMute = () => {
// setMute(!mute);
// setAudioSettings({ ...audioSettings, prevVolume: audioSettings.volume, volume: mute ? audioSettings.prevVolume : 0 });
// };

// const handleVolume = (e) => {
// setAudioSettings({ ...audioSettings, prevVolume: audioSettings.volume, volume: e.target.value });
// };

// const handleRate = (e) => {
// setAudioSettings({ ...audioSettings, rate: e.target.value });
// };

// const handlePitch = (e) => {
// setAudioSettings({ ...audioSettings, pitch: e.target.value });
// };

// console.log(audioSettings);
// return (
// <div>
// <div>
// <label>Volume</label>
// <input
//        type="range"
//        min={0}
//        max={1}
//        step={0.1}
//        value={audioSettings.volume}
//        onChange={handleVolume}
//      />
// </div>
// <div>
// <label>Rate</label>
// <input
//        type="range"
//        min={0.5}
//        max={2}
//        step={0.1}
//        value={audioSettings.rate}
//        onChange={handleRate}
//      />
// </div>
// <div>
// <label>Pitch</label>
// <input
// type="range"
// min={0}
// max={2}
// step={0.1}
// value={audioSettings.pitch}
// onChange={handlePitch}
// />

// </div>
// <div>
// <label>Mute</label>
// <button onClick={handleMute}>{mute ? 'Unmute' : 'Mute'}</button>
// </div>
// </div>
// );
// };
// export default AudioAdjusters;

// Original Working Code Above ^^^^ Code generated with Ai below v  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState } from 'react';

const AudioAdjusters = ({ audioSettings, setAudioSettings }) => {
  const [mute, setMute] = useState(false);

  const handleMute = () => {
    setMute(!mute);
    setAudioSettings({ ...audioSettings, prevVolume: audioSettings.volume, volume: mute ? audioSettings.prevVolume : 0 });
  };

  const handleVolume = (e) => {
    setAudioSettings({ ...audioSettings, prevVolume: audioSettings.volume, volume: e.target.value });
  };

  const handleRate = (e) => {
    setAudioSettings({ ...audioSettings, rate: e.target.value });
  };

  const handlePitch = (e) => {
    setAudioSettings({ ...audioSettings, pitch: e.target.value });
  };

  return (
    <div>
      <div>
        <label>Volume</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={audioSettings.volume}
          onChange={handleVolume}
        />
      </div>
      <div>
        <label>Rate</label>
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={audioSettings.rate}
          onChange={handleRate}
        />
      </div>
      <div>
        <label>Pitch</label>
        <input
          type="range"
          min={0}
          max={2}
          step={0.1}
          value={audioSettings.pitch}
          onChange={handlePitch}
        />
      </div>
      <div>
        <label>Mute</label>
        <button onClick={handleMute}>{mute ? 'Unmute' : 'Mute'}</button>
      </div>
    </div>
  );
};
export default AudioAdjusters;


