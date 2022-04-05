const requestURL = 
"https://wesinoil.github.io/wdd230/templeinn/data/templedata.json";
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

      // Change the textContent property of the h2 element to contain the temple name
      h2.textContent = `${temples.name}`;
      address.textContent = `${temples.address}`;
      phone.textContent = `${temples.phone}`;
      // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      // portrait.setAttribute('src', temples.imageurl);
      // portrait.setAttribute('alt', 'Portait of ' + temples.name);
      // portrait.setAttribute('loading', 'lazy');

      // Add/append the section(card) with the h2 element
      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(phone);
      // card.appendChild(portrait);

      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector("div.card").append(card);
    }
    temples.forEach(displayTemples);
  });
