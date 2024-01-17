const jsonFilePath = "./data.json";

const setImagesToBody = (data) => {
  data.forEach((element, index) => {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container", "border", "p-2");

    const idElement = document.createElement("div");
    idElement.classList.add("fs-3");
    idElement.textContent =`Id: ${element.id}`;

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("fs-5");
    nameDiv.textContent = `Name: ${element.name}`;

    const currentPriceDiv = document.createElement("div");
    currentPriceDiv.classList.add("fs-5");
    currentPriceDiv.textContent = `Symbol: ${element.current_price}`;

    containerDiv.appendChild(idElement);
    containerDiv.appendChild(currentPriceDiv);
    containerDiv.appendChild(nameDiv);

    if (index < 5) {
      containerDiv.style.backgroundColor = 'blue';
      containerDiv.style.color = 'white'; 
    }

    if (element.symbol.toLowerCase() === 'usdt') {
      containerDiv.style.backgroundColor = 'green';
      containerDiv.style.color = 'white';
    }

    document.body.appendChild(containerDiv);
  });
};

fetch(jsonFilePath, {
  mode: 'no-cors'
})
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then((data) => {
  setImagesToBody(data);
})
.catch((error) => {
  console.error("Error:", error.message);
});
