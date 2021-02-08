const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
}

const displayFoods = foods => {
    // console.log(foods);
    const foodContainer = document.getElementById("food-container");
    foodContainer.innerHTML = "";
    foods.forEach(food => {
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

// get recipe of the meal

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