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

{
  /* <table>
        <tr>
          <th>Token</th>
          <th>Price Change</th>
          <th>Price Change in Percentage</th>
       
        </tr>
         <tr>
          <td></td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
       </tr>
 </table> */
}
const table = document.querySelector("table");
let row;
const getData = async () => {
  const response = await fetch("https://api2.binance.com/api/v3/ticker/24hr");
  const data = await response.json();
  const ethBtc = data[1];
  const ltcBtc = data[2];
  const bnbBtc = data[3];
  deleteData()
  displayData(ethBtc);
  displayData(ltcBtc);
  displayData(bnbBtc);
};


const displayData = (data) => {
  row = table.insertRow();
  row.classList.add("row");

  const symbol = row.insertCell(0);
  const priceChange = row.insertCell(1);
  const weightedAvgPrice = row.insertCell(2);
  const lastPrice = row.insertCell(3);
  const lastQty = row.insertCell(4);
  const bidPrice = row.insertCell(5);
  const bidQty = row.insertCell(6);
  const askPrice = row.insertCell(7);
  const askQty = row.insertCell(8);
  const highPrice = row.insertCell(9);
  const lowPrice = row.insertCell(10);

  symbol.textContent = `${data.symbol}`;
  priceChange.textContent = `${data.priceChange}`;
  weightedAvgPrice.textContent = `${data.weightedAvgPrice}`;
  lastPrice.textContent = `${data.lastPrice}`;
  lastQty.textContent = `${data.lastQty}`;
  bidPrice.textContent = `${data.bidPrice}`;
  bidQty.textContent = `${data.bidQty}`;
  askPrice.textContent = `${data.askPrice}`;
  askQty.textContent = `${data.askQty}`;
  highPrice.textContent = `${data.highPrice}`;
  lowPrice.textContent = `${data.lowPrice}`;

  highPrice.style.backgroundColor = "green";
  lowPrice.style.backgroundColor = "red";
};

getData();

setInterval(()=> {
  getData();
} , 3000)

const deleteData = () => {
  for (let i = 0; i < 3; i++) {
        const rowCount = table.rows.length;
        if (rowCount > 1) {
          table.deleteRow(rowCount - 1);
        }
      }
}