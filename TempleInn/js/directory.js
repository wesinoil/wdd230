const requestURL = 
"data/templedata.json";

const card = document.querySelector(".card");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject["temples"];

    function displayTemples(temples) {
      // Create elements to add to the document
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let address = document.createElement("address");
      let phone = document.createElement("phone");
      let image = document.createElement("image");
      let closures = document.createElement("closures");
      let history = document.createElement("history");
      let services = document.createElement("services");

      // Change the textContent property of the h2 element to contain the temple name
      h2.textContent = `${temples.name}`;
      address.textContent = `${temples.address}`;
      phone.textContent = `${temples.phone}`;
      image.textContent = `${temples.image}`;
      closures.textContent = `${temples.closures}`;
      history.textContent = `${temples.history}`;
      services.textContent = `${temples.services}`;
      // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      image.setAttribute('src', temples.image);

      // portrait.setAttribute('alt', 'Portait of ' + temples.name);
      // portrait.setAttribute('loading', 'lazy');
      // image.setAttribute('src', temple.imageurl);
      // image.setAttribute('alt', 'Image of ' + temple.name);
      // image.setAttribute('loading');
      // Add/append the section(card) with the h2 element
      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(image);
      card.appendChild(closures);
      card.appendChild(history);
      card.appendChild(services);
      // card.appendChild(portrait);

      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector("div.card").append(card);
    }
    temples.forEach(displayTemples);
  });
