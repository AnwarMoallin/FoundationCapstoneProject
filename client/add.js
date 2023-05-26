async function addCard(event) {
  event.preventDefault();
  try {
    const url = "http://localhost:3005";

    const shoeData = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      size: document.getElementById("size").value,
      yearModel: document.getElementById("yearModel").value,
    };

    const response = await fetch(url, {
      method: "POST",
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
