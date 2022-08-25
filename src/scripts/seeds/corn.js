//* Factory function:
//Returns an object with 3 parameters:
// type
// height
// output
//*Array of 2 identical objects

export const createCorn = () => {
    const corn = [{
        type: 'Corn',
        height: 180,
        output: 6
    },
    {
        type: 'Corn',
        height: 180,
        output: 6 
    }]

    return corn;
}