import React, { useState } from "react";
import "../css/CipherStyles.css";

const Cipher = () => {
  const [cipherText, setCipherText] = useState("");
  const [keyC, setKeyC] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [keyE, setKeyE] = useState("");
  const [message, setMessage] = useState("");

  const isUpperCase = (character) => {
    if (character === character.toUpperCase()) {
      return true;
    }
    if (character === character.toLowerCase()) {
      return false;
    }
  };

  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  };

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
    <div className="container-cipher">
      <h1 className="header-cipher">Vigenere Cipher Decryptor</h1>
      <div className="cipher-wrap" style={{ maxWidth: "800px" }}>
        <div style={{ margin: "20px", width: "100%" }}>
          <p className="form-label">Message to encrypt:</p>
          <textarea
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="form-label">Key:</p>
          <input
            className="form-input"
            type="text"
            value={keyE}
            onChange={(e) => setKeyE(e.target.value)}
          />
          <button className="form-button" onClick={encrypt}>
            Encrypt
          </button>
          <p className="form-label">Encrypted Text:</p>
          <textarea
            className="form-textarea"
            rows="4"
            value={encryptedText}
            readOnly
          />
        </div>

        <div style={{ margin: "20px", width: "100%" }}>
          <p className="form-label">Cipher Text:</p>
          <textarea
            value={cipherText}
            onChange={(e) => setCipherText(e.target.value)}
            className="form-textarea"
          />
          <p className="form-label">Key:</p>
          <input
            type="text"
            value={keyC}
            onChange={(e) => setKeyC(e.target.value)}
            className="form-input"
          />
          <button className="form-button" onClick={decryptVigenere}>
            Decrypt
          </button>
          <p className="form-label">Decrypted Text:</p>
          <textarea
            rows="4"
            value={decryptedText}
            readOnly
            className="form-textarea"
          />
        </div>
      </div>
    </div>
  );
};

export default Cipher;
