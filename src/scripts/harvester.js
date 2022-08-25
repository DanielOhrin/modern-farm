//Define and export harvestPlants:
// accept growingPlants as parameter
    // Returns an array of seed objects
    // Iterates the array of growing plants
    //*Each plant is pushed the same amount of times as its output value\\*
        //--   Return an array with the new plants  --\\  

export const harvestPlants = (seedMap) => {
    const harvestedPlants = [];

    for (const seed of seedMap) {
        for (let i = 0; i < seed.output; i++) {
            if (seed.type === 'Corn') {
                i++;
            }
            harvestedPlants.push(seed);
        }
    }
    return harvestedPlants;
}