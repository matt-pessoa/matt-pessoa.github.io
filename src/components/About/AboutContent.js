// todo implementar download PDF do currículo
// todo implementar geração de palavras (creative, task-driven, team player, innovative...)

import React from 'react';

function AboutContent() {
  return (
    <div className='limiter'>
      <div className='about-headings'>
        <h1 className='about-heading'>&lt;about me&gt;</h1>
        {/* <h2>Download my curriculum vitae</h2>  */}
      </div>
      <div className='about-content'>
        <h3 className='about-sentence'>
          I'm a <span className='red-text'>creative</span> developer
        </h3>
        <div className='about-columns'>
          <div className='about-matt'>
            <h3 className='column-title'>
              <span className='orange-text'>$ man</span>{' '}
              <span className='blue-text'>matt</span>
            </h3>
            <p className='about-paragraph'>
              Matheus Pessoa is a brazillian frontend developer and Software
              Engineering student based in Belo Horizonte, Brazil.
            </p>
          </div>
          <div className='about-hobbies'>
            <h3 className='column-title'>
              <span className='orange-text'>$ cd</span>{' '}
              <span className='blue-text'>hobbies</span>
            </h3>
            <p className='about-paragraph'>
              If you can't find me editing text files, I'll probably be
              somewhere painting with watercolors or playing the guitar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
