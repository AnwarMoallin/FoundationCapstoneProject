async function generateCards(title) {
  try {
    const response = await fetch(
      title ? `http://localhost:3005?title=${title}` : "http://localhost:3005"
    );
    if (response.ok) {
      dynamicData = await response.json();
    } else {
      return;
    }
  } catch (e) {}

  const cardContainer = document.getElementById("card-cont");

  cardContainer.innerHTML = "";

  let card = "";

  dynamicData.forEach((item) => {
    card += `
        <div class="bg-green-300 border-2 border-gray-500">
        
            <img class="cover w-full h-[250px]" src="${
              item.image
                ? item.image
                : "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_24315b6a-e3d5-4522-89c9-bed4de1fba66_540x.jpg?v=1656278007"
            }"
                alt="Avatar">
            <div class="flex flex-col p-2">
                <h2 class="text-3xl text-center pt-2 text-green-900"><b>${
                  item.title
                }</b></h2>
                <br />
                <p class="text-lg text-gray-800" class="init-inp-${
                  item.title
                }"><span class="font-bold text-green-900"> Year made: </span>${
      item.yearModel
    }</p>
                <p class="text-lg text-gray-800" class="init-inp-${
                  item.title
                }"> <span class="font-bold text-green-900"> Shoe size:</span>${
      item.size
    }</p>
                <p class="text-lg text-gray-800" class="init-inp-${
                  item.title
                }"><span class="font-bold text-green-900"> Description:</span> ${
      item.description
    }</p>
                
                <input class="inp-${item.title}" style="display:none" value=${
      item.description
    } />
                <input class="inp-${item.title}" style="display:none" value=${
      item.yearModel
    } />
                <input class="inp-${item.title}" style="display:none" value=${
      item.size
    } />

                <br />

                <button class="bg-green-800 text-white my-1 py-2 hover:bg-green-300 text-green- 800 border-black border-2"  id="btnedit-${
                  item.title
                }" onclick="editCard('${item.title}')">Edit</button>
                <button class="bg-green-800 text-white my-1 py-2 hover:bg-green-300 text-green- 800 border-black border-2" id="btndelete-${
                  item.title
                }" onclick="deleteCard('${item.title}')">Delete</button>
            </div>
        </div>`;
  });
  cardContainer.innerHTML = card;
}

async function editCard(title) {
  let inp = document.getElementsByClassName("inp-" + title);
  let initInp = document.getElementsByClassName("init-inp-" + title);

  if (inp[0].style.display == "none") {
    inp[0].style.display = "block";
    inp[1].style.display = "block";
    inp[2].style.display = "block";

    initInp[0].style.display = "none";
    initInp[1].style.display = "none";
    initInp[2].style.display = "none";

    var button = document.getElementById("btnedit-" + title);
    button.textContent = "Save";
  } else {
    inp = document.getElementsByClassName("inp-" + title);

    try {
      const url = "http://localhost:3005";
      const shoeData = {
        title: title,
        description: inp[0].value,
        size: inp[2].value,
        yearModel: inp[1].value,
      };

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shoeData),
      });

      if (response.ok) {
        const data = await response.json();

        window.location.replace("./index.html");
      }
    } catch (e) {}
  }
}

async function deleteCard(title) {
  var inp = document.getElementsByClassName("inp-" + title);

  var initInp = document.getElementsByClassName("init-inp-" + title);

  try {
    const url = "http://localhost:3005";
    const shoeData = {
      title: title,
      description: inp[0].value,
      size: inp[2].value,
      yearModel: inp[1].value,
    };

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shoeData),
    });

    if (response.ok) {
      const data = await response.json();

      window.location.replace("./index.html");
    }
  } catch (err) {}
}

async function searchFun() {
  let searchTerm = document.getElementById("searchTerm");

  generateCards(searchTerm.value);
}

generateCards();
