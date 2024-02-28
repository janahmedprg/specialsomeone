import "./App.css";
import React, { useState } from "react";

function App() {
  const [cipherText, setCipherText] = useState("");
  const [key, setKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const decryptVigenere = () => {
    // Convert both cipherText and key to uppercase for consistency
    const upperCipherText = cipherText.toUpperCase();
    const upperKey = key.toUpperCase();

    let decryptedResult = "";

    for (let i = 0; i < upperCipherText.length; i++) {
      const cipherChar = upperCipherText.charCodeAt(i);
      const keyChar = upperKey.charCodeAt(i % upperKey.length);

      // Check if the character is an uppercase alphabetical character
      if (cipherChar >= 65 && cipherChar <= 90) {
        const decryptedChar = String.fromCharCode(
          ((cipherChar - keyChar + 26) % 26) + 65
        );
        decryptedResult += decryptedChar;
      } else {
        // If the character is not an uppercase alphabetical character, keep it unchanged
        decryptedResult += upperCipherText[i];
      }
    }

    setDecryptedText(decryptedResult);
  };

  return (
    <div>
      <h1>Vigenere Cipher Decryptor</h1>

      <label>
        Cipher Text:
        <input
          type="text"
          value={cipherText}
          onChange={(e) => setCipherText(e.target.value)}
        />
      </label>

      <br />

      <label>
        Key:
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>

      <br />

      <button onClick={decryptVigenere}>Decrypt</button>

      <br />

      <label>
        Decrypted Text:
        <textarea rows="4" value={decryptedText} readOnly />
      </label>
    </div>
  );
}

export default App;
