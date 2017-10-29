import React from 'react';
import shortid from 'shortid';
import Result from '../components/Result';

const ResultList = ({ wiki, duck }) => {
  //  combine results from Wikipedia API and DuckDuckGo API with the spread operator
  const results = [...wiki, ...duck];
  //  filter through the results if any are undefined and do not include those in the array
  const resultsFiltered = results.filter(result => (
    result.title !== undefined
  ));
  //  mix the array randomly
  resultsFiltered.sort(() => Math.random() - 0.5);
  //  map through the filtered array and for each object create a Result component to contain it
  return (
    resultsFiltered.map(result =>
      (<Result
        key={shortid.generate()}
        src={result.src}
        alt={result.alt}
        title={result.title}
      />))
  );
};

export default ResultList;
