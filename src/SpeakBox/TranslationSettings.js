import React from 'react';

const TranslationSettings = ({ translationEnabled, setTranslationEnabled, targetLanguage, setTargetLanguage }) => {
  return (
    <div className="translation-settings">
      <label>
        <input
          type="checkbox"
          checked={translationEnabled}
          onChange={() => setTranslationEnabled(!translationEnabled)}
        /> <> </>
        Enable Translation
      </label>
      {translationEnabled && (
        <div>
          <label>
            Target Language:
            <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default TranslationSettings;