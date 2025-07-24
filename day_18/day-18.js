// EXERCISE 18 : LEVEL 1 3

// Q1 : Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.

const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name,capital,languages,population,area';
const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchCountriesData()

//========================================================================================================


// EXERCISE 18 : LEVEL 2 annd 3

// Q1 level 2 : Print out all the cat names in to catNames variable.
// Q1 level 3 : Read the cats api and find the average weight of cat in metric unit.

let catNames = [];
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
  try {
    const response = await fetch(catsAPI)
    const cats = await response.json()
    console.log(cats)
    catNames = cats.map(cats => cats.name);
    console.log(catNames)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()



const countriesAPI2 = 'https://restcountries.com/v3.1/all?fields=area';
const fetchCountriesData2 = async () => {
  try {
    const response = await fetch(countriesAPI2)
    const countries2 = await response.json()
    console.log(countries2)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchCountriesData()