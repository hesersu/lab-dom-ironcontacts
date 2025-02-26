// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click",() => {
 exampleRow.remove();
});

const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
});

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...

threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

const deleteButton = newRow.querySelector(".btn-delete");
deleteButton.addEventListener("click",() => {
 newRow.remove();
});

const likeButton = newRow.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
});

tableBody.appendChild(newRow);



});
  


// Bonus: ITERATION 4 - Add Random Contacts




const addRandomButton = document.querySelector("#btn-add-random");
addRandomButton.addEventListener("click", () => {

  //! Every time we click the button generates a new random number and selects the contact with this index.

  const newRandomIndex = Math.floor(Math.random() * contacts.length);
  const newRandomItem = contacts[newRandomIndex];

  const randomRow = document.createElement("tr");
randomRow.innerHTML = `
  <td>
    <img src="${newRandomItem.pictureUrl}" />
  </td>
  <td> ${newRandomItem.name} </td>
  <td> ${newRandomItem.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

const deleteButton = randomRow.querySelector(".btn-delete");
deleteButton.addEventListener("click",() => {
 randomRow.remove();
});

const likeButton = randomRow.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
});

tableBody.appendChild(randomRow);


});

// Your code goes here ...
