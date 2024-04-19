import React from 'react';

export default function TwoDisplay({ disp, currentIndex }) {
  return (
    <div className='two-grid'>
      <div className='first-box'>
        {disp[currentIndex]?.fileType === 'image' && (
          <img src={disp[currentIndex]?.dispUrl} alt='Image' width="100%" height="100%" />
        )}
        {disp[currentIndex]?.fileType === 'video' && (
          <video autoPlay loop controls width="100%" height="100%">
            <source src={disp[currentIndex]?.dispUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className='second-box'>
        {(disp[currentIndex]?.heading && disp[currentIndex]?.text) ? (
          <div>
            <div>
              <h2 className="heading">{disp[currentIndex]?.heading}</h2>
            </div>
            <div>
              <h3 className="text">{disp[currentIndex]?.text}</h3>
            </div>
          </div>
        ) : (
          (!disp[currentIndex]?.heading && disp[currentIndex]?.text) ?
            (
              <div className="centered-content-text">
                <h3 className="text">{disp[currentIndex]?.text}</h3>
              </div>
            ) : (
              <div className="centered-content-heading">
                <h2 className="heading">{disp[currentIndex]?.heading}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}
