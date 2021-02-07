// id call 
const searchInput = document.getElementById('search-input');
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
                    searchFoods.innerHTML = data.meals.map(
                        (food) => `
                        <div class"food-img"> 
                        <img src="${food.strMealThumb}" >
                        <div class"food-Info" foodID = "${food.idMeal}">
                        <h3>${food.strMeal}</h3>
                        </div>
                        </div>
                        `
                    )
                }
            })


    } else {
        alert("Please enter a search Foods");
    }

}