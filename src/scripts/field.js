//*Will store all of the plants growing in the field
//Define a variable with empty array -- 
const growingPlants = [];

//Define and export a function named addPlant:
    //accept a seed object as parameter
    //will add the seed to the field (.push)
export const addPlant = (seed) => {
    growingPlants.push(seed);
}

//Define and export a function named usePlants:
    //takes no parameters
    //returns a copy of growingPlants
export const usePlants = () => {
    const plantsGrowing = growingPlants;

    return plantsGrowing;
}
