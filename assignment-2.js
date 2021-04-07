// Creating a class
class Countries {
    constructor(apiURL) {
        this.apiURL = apiURL;
    }

    // Returns a list of all countries
    getAllCountries() {
        fetch(`${this.apiURL}/all`)
            .then (
                res => res.json()
                )
            .then (
                countries => {
                    countries.map(country => {
                        console.log(country)
                    })
                })
            .catch (err => console.log(err.message))
    }

    // Returns a single country by name/native name
    getCountryByName(name) {
        fetch(`${this.apiURL}/name/${name}`)
        .then (
            res => res.json()
        )
        .then (
            country => console.log(country)
        )
        .catch (err => console.log(err.message))
    }

    // Returns bordering countries by name
    getBorderingCountries(name) {
        fetch(`${this.apiURL}/name/${name}`)
        .then (
            res => res.json()
        )
        .then (
            country => console.log(country[0].borders)
        )
        .catch (err => console.log(err.message))
    }

    // Returns countries by language code
    getCountryByLanguage(language) {
        fetch(`${this.apiURL}/lang/${language}`)
        .then (
            res => res.json()
        )
        .then (
            countries => {
              countries.map(
                country => 
              console.log(country.name)
              )
            }
        )
        .catch (err => console.log(err.message))
    }

    // Returns countries that have more population than the input
    getCountryByPopulation(popNumber) {
        fetch(`${this.apiURL}/all`)
        .then (
            res => res.json()
        )
        .then( 
          countries => {
            const biggerCountries = countries.filter( 
              population => population.population > popNumber
              )
              .map( 
                country => country.name
                );
            console.log(biggerCountries);
        })
        .catch (err => console.log(err.message))
    }
}

const myCountries = new Countries ('https://restcountries.eu/rest/v2')

// Calling functions
// myCountries.getAllCountries()
// myCountries.getCountryByName("Hungary")
// myCountries.getCountryByName("Nederland") // Doesn't work with "Magyarország" for example - must be something with the accent on 'a' but couldn't figure
// myCountries.getBorderingCountries("Liechtenstein")
// myCountries.getCountryByLanguage("DE")
// myCountries.getCountryByPopulation(900000000) // Not sure how to change to millions