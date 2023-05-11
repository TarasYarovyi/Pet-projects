const search = document.querySelector(".search");
const drinkList = document.querySelectorAll("li");
search.addEventListener("keyup", showDrink);

function showDrink(e) {
  drinkList.forEach((element) => {
    const text = e.target.value.toLowerCase();
    const drink = element.textContent.toLocaleLowerCase();
    if (drink.includes(text)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
