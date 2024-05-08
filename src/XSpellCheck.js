import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function XSpellCheck() {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    // Function to find the first misspelled word and its correction
    const findMisspelling = (input) => {
      const words = input.split(' ');

      for (const word of words) {
        // Normalize the word to lowercase
        const lowerCaseWord = word.toLowerCase();
        if (customDictionary[lowerCaseWord]) {
          return {
            misspelledWord: word,
            correctedWord: customDictionary[lowerCaseWord]
          };
        }
      }
      return null;
    };

    const result = findMisspelling(inputText);

    if (result) {
      setSuggestion(`Did you mean: ${result.correctedWord}?`);
    } else {
      setSuggestion('');
    }
  };

  return (
    <div>
      <h1>Real-time Spell Checker</h1>
      <textarea 
        value={text}
        onChange={handleTextChange}
        rows="5"
        cols="50"
        placeholder="Start typing..."
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default XSpellCheck;
