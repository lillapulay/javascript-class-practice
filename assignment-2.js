// Creating a class
class Countries {
    constructor(apiURL) {
        this.apiURL = apiURL;
    }

    // Return a list of all countries
    getAllCountries() {
        fetch(`${this.apiURL}/all`)
            .then(
                res => res.json()
                )
            .then(
                countries => {
                    console.log('List of ALL countries:', countries)
                })
            .catch (err => console.log(err.message))
    }
}

const myCountries = new Countries ('https://restcountries.eu/rest/v2')

// Calling functions
// myCountries.getAllCountries()