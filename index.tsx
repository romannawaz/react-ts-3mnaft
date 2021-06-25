import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import CoverImageView, { coverImageNegativeMargin } from './CoverImageView';
import './style.css';

const error = true;

const App = () => {
  const [errorState, setErrorState] = useState(error);
  const [contentState, setContentState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentState(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const reload = () => {
    setErrorState(false);

    // const timer = setTimeout(() => setContentState(true), 1500);

    // return () => clearTimeout(time);
  };

  return (
    <div className="wrapper">
      <CoverImageView
        imgSrc={
          'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
        }
      />
      {errorState ? (
        <p
          className="error_message"
          style={{
            marginTop: coverImageNegativeMargin + 10
          }}
        >
          {'Unexpected error'}
          <button onClick={() => reload()}>Reload</button>
        </p>
      ) : contentState ? (
        <div className="card">
          <h2>{'Card Title'}</h2>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
        </div>
      ) : (
        <p style={{ marginTop: coverImageNegativeMargin + 10 }}>Loading...</p>
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));
