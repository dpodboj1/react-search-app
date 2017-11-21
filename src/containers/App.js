import React, { Component } from 'react';
import { Debounce } from 'react-throttle';
import getDataFromApi from '../getDataFromApi';
import Search from '../components/Search';
import ColorsLogo from '../components/Colors';
import ResultList from './ResultList';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      results: [],
    };
  }

  async startQuery(query) {
    if (query !== '') {
      const results = [];
      const wiki = await getDataFromApi(`https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=${query}`);
      console.log(wiki);
      wiki.query.search.map(result =>
        results.push({
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wikipedia-logo.png/50px-Wikipedia-logo.png',
          alt: 'Wikipedia Logo',
          title: result.title,
        }));
      const duck = await getDataFromApi(`https://api.duckduckgo.com/?q=${query}&format=json`);
      duck.RelatedTopics.map(result =>
        results.push({
          src: 'https://duckduckgo.com/assets/icons/meta/DDG-icon_256x256.png',
          alt: 'DuckDuckGo Logo',
          title: result.Text,
        }));
      this.setState({ results });
    } else {
      this.setState({ results: [] });
    }
  }

  //  handles change from child input and calls an API call
  //  which equals what the user wrote in the input
  handleChange(event) {
    this.startQuery(event.target.value);
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
          <ResultList results={this.state.results} />
        </div>
      </div>
    );
  }
}
