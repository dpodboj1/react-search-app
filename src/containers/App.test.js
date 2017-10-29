import fetchJsonp from 'fetch-jsonp';

describe('Api test for WikipediaAPI', () => {
  it('should get data from WikipediaAPI', async () => {
    const data = await fetchJsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=Croatia')
    expect(data).toBeDefined()
  })
})

describe('API test for DuckDuckGoAPI', () => {
  it('should get data from DuckDuckGoAPI', async () => {
    const data = await fetchJsonp('https://api.duckduckgo.com/?q=Croatia&format=json')
    expect(data).toBeDefined()
  })
})
