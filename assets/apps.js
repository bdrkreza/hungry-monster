// id call 
const searchInput = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const searchFoods = document.getElementById('foods');
const searchResult = document.getElementById('search-result');
// const singleFoods = document.getElementById('single-foods');

//event listener handle
searchBtn.addEventListener('click', getFoodsList);

// Search Foods
function getFoodsList(Element) {
    Element.preventDefault();

    const inputData = (searchInput.value);
    if (inputData.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                searchResult.innerHTML = `<h2> search result for ${inputData} </h2>`;
                if (data.meals === null) {
                    searchResult.innerHTML = `<h3> there are no Result for ${inputData}</h3>`;
                } else {
                    const foodContainer = document.getElementById("food-container");
                    searchFoods.innerHTML = data.meals.map(
                        (food) => {

                            const foodDiv = document.createElement('div');
                            foodDiv.className = "col-lg-3 d-flex justify-content-between mx-auto p-3 py-4"
                            foodDiv.innerHTML = `
                            <div class="card" style="width: 18rem">
                                <img onclick="singleFoods('${food.strMeal}')" class="card-img-top" src="${food.strMealThumb}" alt="Card image cap " />
                            <div class="card-body">
                                <h3 class="card-text">${food.strMeal}</h3>
                            </div>`;
                            foodContainer.appendChild(foodDiv);
                        })
                }
            })


    } else {
        alert("Please enter a search Foods");
    }

}

const singleFoods = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data.meals[0]))
}

const displayInfo = foodInfo => {
    const foodContainer = document.getElementById("foodsDetail");
    foodContainer.innerHTML = "";
    foodContainer.innerHTML = `
    <div class="col-lg-12">
    <img class="food-single" src ="${foodInfo.strMealThumb}">
    <h4 class="">${foodInfo.strMeal}</h4>
    <div id="Ingredients">
    <ul>
    <li>${foodInfo.strIngredient1}</li>
    <li>${foodInfo.strIngredient2}</li>
    <li>${foodInfo.strIngredient3}</li>
    <li>${foodInfo.strIngredient4}</li>
    <li>${foodInfo.strIngredient5}</li>
    <li>${foodInfo.strIngredient6}</li>
    <li>${foodInfo.strIngredient7}</li>
    <li>${foodInfo.strIngredient8}</li>
    <li>${foodInfo.strIngredient9}</li>
    <ul>
    </div>
    </div>`;
}