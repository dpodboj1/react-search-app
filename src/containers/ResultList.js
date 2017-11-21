import React from 'react';
import shortid from 'shortid';
import Result from '../components/Result';

const ResultList = ({ results }) =>
  //  map through the filtered array and for each object create a Result component to contain it
  (results.map(result =>
    (<Result
      key={shortid.generate()}
      src={result.src}
      alt={result.alt}
      title={result.title}
    />))
  );

export default ResultList;
