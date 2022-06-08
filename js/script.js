const addGuestButton = document.querySelector(".invite");
const guestInputLabel = document.querySelector(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potLuckItems = [
    "cheese and crackers",
    "pasta salad",
    "sangria",
    "grilled chicken",
    "roasted veggies",
    "fruit salad",
    "meatballs",
    "cookies",
    "summer roles",
    "veggies and hummus",
    "coleslaw",
    "steak tips"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotLuckIndex = Math.floor(Math.random() * potLuckItems.length);
    let randomPotLuckItem = potLuckItems[randomPotLuckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}.`;
    assignedItems.append(listItem);

    potLuckItems.splice(randomPotLuckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disable = true;
});
