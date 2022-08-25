import { createCorn} from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { addPlant, usePlants } from "./field.js";

//define and export plantSeeds:
    // Accept yearlyPlan as parameter
    // The plan is an array of arrays
    // For each plant-string, growingPlants.push() the plant as its factory function's return value

export const plantSeeds = (rowMap) => {
    let cornArr = createCorn();
    for (const row of rowMap) {
        for (const seed of row) {
            switch (seed) {
                case 'Asparagus':
                    addPlant(createAsparagus());
                    break;
                case 'Potato':
                    addPlant(createPotato());
                    break;
                case 'Soybean':
                    addPlant(createSoybean());
                    break;
                case 'Sunflower':
                    addPlant(createSunflower());
                    break;
                case 'Wheat':
                    addPlant(createWheat());
                    break;
                case 'Corn':
                    cornArr.forEach(corn => addPlant(corn));
                    break;
                default:
                    console.log('Error. Plant type not found.');
            }
        }
    }
    return usePlants();
}