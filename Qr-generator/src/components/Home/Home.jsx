// src/pages/HomePage.jsx
import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const HomePage = () => {
  const [text, setText] = useState('');
  const qrRef = useRef();

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.png';
    a.click();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>QR Code Generator</h1>

      <input
        style={styles.input}
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div ref={qrRef} style={styles.qrWrapper}>
        {text && <QRCodeCanvas value={text} size={200} />}
      </div>

      {text && (
        <button onClick={downloadQR} style={styles.button}>
          Download QR Code
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    width: '60%',
    maxWidth: '400px',
    marginBottom: '1rem',
  },
  qrWrapper: {
    margin: '1rem 0',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default HomePage;
