import React, { Component } from 'react';
import fetchjsonp from 'fetch-jsonp';
import { Debounce } from 'react-throttle';
import Search from '../components/Search';
import ColorsLogo from '../components/Colors';
import ResultList from './ResultList';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      resultsWiki: [],
      resultsDuck: [],
    };
  }

  async getData(query) {
    //  make an API request if the query is not full (the user wrote something)
    if (query !== '') {
      //  Wikipedia API
      try {
        //  get response from Wikipedia API with query
        const response = await fetchjsonp(`https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=${query}`);
        //  parse response
        const data = await response.json();
        //  empty array which receives data after map
        const results = [];
        //  map through the data and push an object to empty array
        data.query.search.map(result =>
          results.push({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wikipedia-logo.png/50px-Wikipedia-logo.png',
            alt: 'Wikipedia Logo',
            title: result.title,
          }));
        //  assign new state of resultsWiki which equals to API data
        this.setState({ resultsWiki: results });
      } catch (err) {
        console.log(`An error occured while getting data from Wikipedia: ${err}`);
      }
      //  DuckDuckGo API
      try {
        //  get response from DuckDuckGo API with query
        const response = await fetchjsonp(`https://api.duckduckgo.com/?q=${query}&format=json`);
        //  parse response
        const data = await response.json();
        //  empty array which receives data after map
        const results = [];
        //  map through the data and push an object to empty array
        data.RelatedTopics.map(result =>
          results.push({
            src: 'https://duckduckgo.com/assets/icons/meta/DDG-icon_256x256.png',
            alt: 'DuckDuckGo Logo',
            title: result.Text,
          }));
        //  assign new state of resultsDuck which equals to API data
        this.setState({ resultsDuck: results });
      } catch (err) {
        console.log(`An error occured while getting data from Wikipedia: ${err}`);
      }
    } else {
      //  if the query is empty, reset the resultsDuck array
      this.setState({ resultsDuck: [], resultsWiki: [] });
    }
  }

  //  handles change from child input and calls an API call
  //  which equals what the user wrote in the input
  handleChange(event) {
    this.getData(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="containerHeader">
          <ColorsLogo />
          <Debounce time="1000" handler="onChange">
            <Search onChange={this.handleChange} />
          </Debounce>
          <div className="extra" />
        </div>
        <div className="containerResultList">
          <ResultList wiki={this.state.resultsWiki} duck={this.state.resultsDuck} />
        </div>
      </div>
    );
  }
}
