// Import JSON data from response.json file with import assertion
import response from './response.json' assert { type: "json" };

// Use destructuring to extract necessary properties
const mappedArray = response.map(({ name, vehicle }) => ({
    name,
    year: vehicle.year
}));

const filteredArray = response.filter(({ vehicle }) => vehicle.year > 2020);

// Print the resulting arrays for verification
console.log("Mapped Array:");
console.log(mappedArray);

console.log("\nFiltered Array:");
console.log(filteredArray);
