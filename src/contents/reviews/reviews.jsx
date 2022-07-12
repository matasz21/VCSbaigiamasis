import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import data from './atsiliepimai';
import './reviews.css';
function Reviews() {
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="background">
      <div className="title">
        <h2>
          ATSILIEPIMAI
        </h2>
        <div className="double-line"></div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <h4>{name}</h4>
              <p className="text"><q>{quote}</q></p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ChevronLeftIcon />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ChevronRightIcon />
        </button>
      </div>
      </div>
    </section>
  );
}

export default Reviews;