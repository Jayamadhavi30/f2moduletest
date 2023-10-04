document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        // ... Your recipe data here ...
            {
                "name": "Veggie Delight",
                "imageSrc": "https://source.unsplash.com/random?veggies",
                "time": "30 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.2
            },
            {
                "name": "Chicken Grill",
                "imageSrc": "https://source.unsplash.com/random?chicken",
                "time": "45 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.5
            },
            {
                "name": "Cheese Pizza",
                "imageSrc": "https://source.unsplash.com/random?pizza",
                "time": "40 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.1
            },
            {
                "name": "Steak",
                "imageSrc": "https://source.unsplash.com/random?steak",
                "time": "60 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.7
            },
            {
                "name": "Grilled Salmon",
                "imageSrc": "https://source.unsplash.com/random?salmon",
                "time": "50 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.6
            },
            {
                "name": "Tomato Pasta",
                "imageSrc": "https://source.unsplash.com/random?pasta",
                "time": "35 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.0
            },
            {
                "name": "Vegan Salad",
                "imageSrc": "https://source.unsplash.com/random?salad",
                "time": "20 min",
                "type": "veg",
                "isLiked": false,
                "rating": 3.9
            },
            {
                "name": "Fried Chicken",
                "imageSrc": "https://source.unsplash.com/random?friedChicken",
                "time": "55 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.3
            },
            {
                "name": "Mushroom Risotto",
                "imageSrc": "https://source.unsplash.com/random?risotto",
                "time": "45 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.5
            },
            {
                "name": "Burger",
                "imageSrc": "https://source.unsplash.com/random?burger",
                "time": "30 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.2
            },
            {
                "name": "Paneer Tikka",
                "imageSrc": "https://source.unsplash.com/random?paneerTikka",
                "time": "40 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.4
            },
            {
                "name": "BBQ Ribs",
                "imageSrc": "https://source.unsplash.com/random?ribs",
                "time": "70 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.6
            },
            {
                "name": "Caesar Salad",
                "imageSrc": "https://source.unsplash.com/random?caesarSalad",
                "time": "25 min",
                "type": "veg",
                "isLiked": false,
                "rating": 3.8
            },
            {
                "name": "Fish Tacos",
                "imageSrc": "https://source.unsplash.com/random?fishTacos",
                "time": "35 min",
                "type": "non-veg",
                "isLiked": false,
                "rating": 4.3
            },
            {
                "name": "Chocolate Cake",
                "imageSrc": "https://media.istockphoto.com/id/1191458812/photo/chocolate-layer-cake.webp?b=1&s=170667a&w=0&k=20&c=zMwCMtGHZhkLDgpWdQBb-RIjhhdMdQS_Gqtb5rL2mhI=",
                "time": "90 min",
                "type": "veg",
                "isLiked": false,
                "rating": 4.9
            }
    ];

 


    const recipeContainer = document.getElementById("recipeContainer");
    const searchInput = document.getElementById("searchInput");
    const showAllButton = document.getElementById("showAllBtn"); // Corrected the button ID
    const showVegButton = document.getElementById("showVegBtn"); // Corrected the button ID
    const showNonVegButton = document.getElementById("showNonVegBtn"); // Corrected the button ID
    const profilePictureInput = document.getElementById("profilePictureInput");
    const profilePictureLabel = document.querySelector(".profile-picture-label");
    const above4Radio = document.querySelector('input[name="ratingFilter"][value="4above"]');
    const below4Radio = document.querySelector('input[name="ratingFilter"][value="below4"]');

    // Function to display recipes
    // function displayRecipes(recipesToDisplay) {
    //     recipeContainer.innerHTML = "";
    //     recipesToDisplay.forEach((recipe) => {
    //         const recipeCard = document.createElement("div");
    //         recipeCard.classList.add("recipe-card");

    //         // Create HTML structure for the recipe card
    //         // Include recipe name, image, type, time, rating, and a like button
    //         // Use template literals for dynamic content
    //         recipeCard.innerHTML = `
    //             <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
    //             <div class="recipe-info">


    //                 <h2>${recipe.name}</h2>
    //                 <p>Type: ${recipe.type}</p>
    //                 <p>Time: ${recipe.time}</p>
    //                 <p>Rating: ${recipe.rating}</p>
    //                 <button class="like-button">${recipe.isLiked ? "❤️" : "🤍"}</button>
    //             </div>





              

    //         `;

    //         // Add an event listener to the like button to toggle isLiked property
    //         const likeButton = recipeCard.querySelector(".like-button");
    //         likeButton.addEventListener("click", () => {
    //             recipe.isLiked = !recipe.isLiked;
    //             likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";
    //         });

    //         recipeContainer.appendChild(recipeCard);
    //     });
    // }

    // // Initial display of all recipes
    // displayRecipes(recipes);



    // Function to display recipes
// function displayRecipes(recipesToDisplay) {
//     recipeContainer.innerHTML = "";
    
//     // Create a new row for every 3 recipes
//     let currentRow = null;

//     recipesToDisplay.forEach((recipe, index) => {
//         // Create a new row when needed
//         if (index % 3 === 0) {
//             currentRow = document.createElement("div");
//             currentRow.classList.add("recipe-row");
//             recipeContainer.appendChild(currentRow);
//         }

//         const recipeCard = document.createElement("div");
//         recipeCard.classList.add("recipe-card");

//         // Create HTML structure for the recipe card
//         // Include recipe name, image, type, time, rating, and a like button
//         // Use template literals for dynamic content
//         recipeCard.innerHTML = `
//             <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
//             <div class="recipe-info">
//                 <h2>${recipe.name}</h2>
//                 <p>Type: ${recipe.type}</p>
//                 <p>Time: ${recipe.time}</p>
//                 <p>Rating: ${recipe.rating}</p>
//                 <button class="like-button">${recipe.isLiked ? "❤️" : "🤍"}</button>
//             </div>
//         `;

//         // Add an event listener to the like button to toggle isLiked property
//         const likeButton = recipeCard.querySelector(".like-button");
//         likeButton.addEventListener("click", () => {
//             recipe.isLiked = !recipe.isLiked;
//             likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";
//         });

//         // Append the recipe card to the current row
//         currentRow.appendChild(recipeCard);
//     });
// }

// // Initial display of all recipes
// displayRecipes(recipes);


// Function to display recipes
function displayRecipes(recipesToDisplay) {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = ""; // Clear the container

    // Create a row div for every 3 recipes
    for (let i = 0; i < recipesToDisplay.length; i += 3) {
        const row = document.createElement("div");
        row.classList.add("recipe-row");

        // Create and append recipe cards for this row
        for (let j = i; j < Math.min(i + 3, recipesToDisplay.length); j++) {
            const recipe = recipesToDisplay[j];
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            // Create HTML structure for the recipe card
            recipeCard.innerHTML = `
                <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
                <div class="recipe-info">
                    <h2>${recipe.name}</h2>
                    <p>Type: ${recipe.type}</p>
                    <p>Time: ${recipe.time}</p>
                    <p>Rating: ${recipe.rating}</p>
                    <button class="like-button">${recipe.isLiked ? "❤️" : "🤍"}</button>
                </div>
            `;

            // Add an event listener to the like button to toggle isLiked property
            const likeButton = recipeCard.querySelector(".like-button");
            likeButton.addEventListener("click", () => {
                recipe.isLiked = !recipe.isLiked;
                likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";
            });

            row.appendChild(recipeCard);
        }

        // Append the row to the recipe container
        recipeContainer.appendChild(row);
    }
}

// Initial display of all recipes
displayRecipes(recipes);



    // Search functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Filter by recipe type functionality
    showAllButton.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    showVegButton.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    showNonVegButton.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });




     // Radio button event listeners
     above4Radio.addEventListener("change", () => {
        const filteredRecipes = recipes.filter((recipe) => recipe.rating >= 4.0);
        displayRecipes(filteredRecipes);
    });

    below4Radio.addEventListener("change", () => {
        const filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
        displayRecipes(filteredRecipes);
    });


    // Profile picture input change event
    profilePictureInput.addEventListener("change", (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // You can add code here to handle the selected profile picture file
            // For example, you can display the new profile picture and upload it to a server.
            // For simplicity, we will just update the image source here.
            const profilePicture = document.querySelector(".profile-picture");
            profilePicture.src = URL.createObjectURL(selectedFile);
        }
    });

    // Clicking the profile picture label triggers the profilePictureInput click event
    profilePictureLabel.addEventListener("click", () => {
        profilePictureInput.click();
    });
});




