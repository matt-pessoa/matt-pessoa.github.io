import React from 'react';

function LandingText() {
  return (
    <div>
      <h1 className='heading'>
        <span className='green-text'>class</span> matt{' '}
        <span className='green-text'>{`{`}</span>
      </h1>
      <div className='content'>
        <p className='name'>
          this.name = <span className='blue-text'>Matt Pessoa</span>
        </p>
        <p className='occupation'>
          this.occupation ={' '}
          <span className='blue-text'>frontend developer</span>
        </p>
      </div>
      <p>
        <span className='green-text'>{`}`}</span>
      </p>
    </div>
  );
}

export default LandingText;
