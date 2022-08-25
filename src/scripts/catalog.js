//Define and export a Catalog function
    // Accept the harvested food array as input
    // Iterate the array of food objects
    // Append `<section class="plant">Corn</section>` to innerHTML of <main> that we defined
export const Catalog = (cropYield) => {
    const randomDiv = document.getElementsByClassName("messages")[0]
    randomDiv.remove();

    const main = document.getElementsByClassName("container")[0];
    
    for (const foodObj of cropYield) {
        main.innerHTML += `    <section class="plant">${foodObj.type}</section>\n        `
    }
}

