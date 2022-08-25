import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

//3 nested arrays of 6 randomized crop strings each
//* Pass into plantSeeds *\\
const yearlyPlan = createPlan();

//Array of currently growing plant objects
const planted = plantSeeds(yearlyPlan);
console.log(planted);

//Array of plant yield after harvest
const cropYield = harvestPlants(planted);
console.log(cropYield);

// Appends each crop to html (Should see blocks of food all over web-page)
Catalog(cropYield);
