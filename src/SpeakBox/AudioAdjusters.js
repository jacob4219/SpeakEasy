import React from 'react';
import { useAudioSettings } from './AudioSettingsContext';

const AudioAdjusters = ({ showVolume, showRate, showPitch }) => {
  const { audioSettings, setAudioSettings } = useAudioSettings();

  return (
    <div>
      {showVolume && (
        <div>
          <label>Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={audioSettings.volume}
            onChange={(e) => setAudioSettings({ ...audioSettings, volume: e.target.value })}
          />
        </div>
      )}
      {showRate && (
        <div>
          <label>Rate</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={audioSettings.rate}
            onChange={(e) => setAudioSettings({ ...audioSettings, rate: e.target.value })}
          />
        </div>
      )}
      {showPitch && (
        <div>
          <label>Pitch</label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={audioSettings.pitch}
            onChange={(e) => setAudioSettings({ ...audioSettings, pitch: e.target.value })}
          />
        </div>
      )}
    </div>
  );
};

export default AudioAdjusters;