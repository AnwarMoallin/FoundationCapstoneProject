async function generateCards() {
  try {
    const response = await fetch("http://localhost:3005");
    if (response.ok) {
      dynamicData = await response.json();
    }
  } catch (e) {}

  const cardContainer = document.getElementById("card-cont");

  cardContainer.innerHTML = "";

  let card = "";

  dynamicData.forEach((item) => {
    card += `
        <div class="card">
            <img src="https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_24315b6a-e3d5-4522-89c9-bed4de1fba66_540x.jpg?v=1656278007"
                alt="Avatar" style="width:100%">
            <div class="container">
                <h2 style="font-size: 2rem;"><b>${item.title}</b></h2>
                <br />
                <p>${item.description}</p>
                <p>${item.yearModel}</p>
                <p>${item.size}</p>
                <br />
                <button onclick="editCard(${item.title})"
                    style="background-color: black; color: white; padding: 1vh 2vh; border-radius: 10px;">Edit</button>
            </div>
        </div>`;
  });
  cardContainer.innerHTML = card;
}

generateCards();
