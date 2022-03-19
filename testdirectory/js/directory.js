const requestURL = 'https://github.com/wesinoil/wdd230/testdirectory/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];

   
  
    function displayMembers(members) {
      // Create elements to add to the document
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
    
      // Change the textContent property of the h2 element to contain the members's full name
      h2.textContent = `${members.name}  ${members.lastname}`;
    
      // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      // portrait.setAttribute('src', members.imageurl);
      // portrait.setAttribute('alt', 'Portait of ' + members.name + ' ' + members.lastname);
      // portrait.setAttribute('loading', 'lazy');
    
      // Add/append the section(card) with the h2 element
      card.appendChild(h2);
      // card.appendChild(portrait);
    
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('div.cards').append(card);
    }
    members.forEach(displayMembers);

  });

  