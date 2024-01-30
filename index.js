const getRandom = (max = 1, min = 0) => {
  return Math.ceil(Math.random() * (max - min)) + min;
};

const img = document.querySelector("img");
const factBtn = document.querySelector(".cat-fact");
const container = document.querySelector(".exc1");
const factContainer = document.createElement("div");
factContainer.style.backgroundColor = "beige";
factContainer.style.width = "fit-content";
factContainer.style.fontSize = "2rem";

const loadData = async () => {
  const response = await fetch("https://catfact.ninja/facts");
  const dataArr = await response.json();
  //   for (i = 0; i < dataArr.length; i++) {
  const fact = dataArr.data[getRandom(10, 1)].fact;
  console.log(fact);
  //   }
  createFact(fact);
};

const createFact = (fact) => {
  container.insertBefore(factContainer, factBtn);
  factContainer.textContent = `${fact}`;
};

factBtn.addEventListener("click", (event) => {
  loadData();
});
