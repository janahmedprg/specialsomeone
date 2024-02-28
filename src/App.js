import "./App.css";
import React, { useState } from "react";

function App() {
  const [cipherText, setCipherText] = useState("");
  const [keyC, setKeyC] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [keyE, setKeyE] = useState("");
  const [message, setMessage] = useState("");

  function isUpperCase(character) {
    if (character === character.toUpperCase()) {
      return true;
    }
    if (character === character.toLowerCase()) {
      return false;
    }
  }

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  }

  const decryptVigenere = () => {
    let result = "";

    for (let i = 0, j = 0; i < cipherText.length; i++) {
      const c = cipherText.charAt(i);
      if (isLetter(c)) {
        if (isUpperCase(c)) {
          result += String.fromCharCode(
            90 -
              ((25 - (c.charCodeAt(0) - keyC.toUpperCase().charCodeAt(j))) % 26)
          );
        } else {
          result += String.fromCharCode(
            122 -
              ((25 - (c.charCodeAt(0) - keyC.toLowerCase().charCodeAt(j))) % 26)
          );
        }
      } else {
        result += c;
      }
      j = ++j % keyC.length;
    }
    setDecryptedText(result);
  };

  const encrypt = () => {
    let result = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i);
      if (isLetter(c)) {
        if (isUpperCase(c)) {
          result += String.fromCharCode(
            ((c.charCodeAt(0) + keyE.toUpperCase().charCodeAt(j) - 2 * 65) %
              26) +
              65
          ); // A: 65
        } else {
          result += String.fromCharCode(
            ((c.charCodeAt(0) + keyE.toLowerCase().charCodeAt(j) - 2 * 97) %
              26) +
              97
          ); // a: 97
        }
      } else {
        result += c;
      }
      j = ++j % keyE.length;
    }
    setEncryptedText(result);
  };

  return (
    <div>
      <h1>Vigenere Cipher Decryptor</h1>
      <div style={{ margin: "50px" }}>
        <label>
          Cipher Text:
          <textarea
            value={cipherText}
            onChange={(e) => setCipherText(e.target.value)}
            style={{ width: "300px", height: "100px", resize: "vertical" }} // Adjust the width, height, and resize property as needed
          />
        </label>

        <br />

        <label>
          Key:
          <input
            type="text"
            value={keyC}
            onChange={(e) => setKeyC(e.target.value)}
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
      <div style={{ margin: "50px" }}>
        <label>
          Encrypt Text:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "300px", height: "100px", resize: "vertical" }} // Adjust the width, height, and resize property as needed
          />
        </label>

        <br />

        <label>
          Key:
          <input
            type="text"
            value={keyE}
            onChange={(e) => setKeyE(e.target.value)}
          />
        </label>

        <br />

        <button onClick={encrypt}>Encrypt</button>

        <br />

        <label>
          Encrypted Text:
          <textarea rows="4" value={encryptedText} readOnly />
        </label>
      </div>
    </div>
  );
}

export default App;
