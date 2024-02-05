import fetchFlowerData from './apiController';

const wikiData = await fetchFlowerData('List of plants with symbolism');
console.log(wikiData);