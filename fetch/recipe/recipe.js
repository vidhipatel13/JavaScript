const searchRecipe = async (event) => {
    event.preventDefault();
    const name = document.getElementById("recipeName").value;
    fetchRecipe(name);


}
const fetchRecipe = async (name) => {
  const params = new URLSearchParams({
    query: name,
  });
  const headers = {
    "X-Api-Key":"add your api key here"
  }

  const url = "https://api.api-ninjas.com/v1/recipe?" + params.toString();

  const res = await fetch(url,{
    method:"GET",
    headers:headers
  })
  const data = await res.json();
  console.log(data);
  console.log(data[0].title)
  console.log(data[0].ingredients)
  console.log(data[0].instructions)
  console.log(data[0].servings)

    document.getElementById("recipeTitle").innerHTML = data[0].title;
    document.getElementById("ingredients").innerHTML = data[0].ingredients;
    document.getElementById("instructions").innerHTML = data[0].instructions;
    document.getElementById("servings   ").innerHTML = data[0].servings;
};
//fetchRecipe();