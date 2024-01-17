const jsonFilePath = "./data.json";

const setImagesToBody = (data) => {
  data.forEach((element, index) => {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    const imgElement = document.createElement("div");
    imgElement.classList.add("id");
    imgElement.textContent =`Id: ${element.id}`;

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = `Name: ${element.name}`;

    const currentPriceDiv = document.createElement("div");
    currentPriceDiv.classList.add("symbol");
    currentPriceDiv.textContent = `Symbol: ${element.current_price}`;

    containerDiv.appendChild(imgElement);
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
