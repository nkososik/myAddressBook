// Business Logic for AddressBook ---------
function AddressBook() { 
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) { 
  contact.id = this.assignId(); 
  this.contacts.push(contact);
} 

AddressBook.prototype.assignId = function() { 
  this.currentId += 1;
  return this.currentId;
} 

AddressBook.prototype.findContact = function(id) { 
  for (let i = 0; i < this.contacts.length; i++) { 
    if (this.contacts[i]) { 
      if (this.contacts[i].id == id) { 
        return this.contacts[i]; 
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true; 
      }
    }
  };
  return false;
}

// Business Logic for Contacts ----------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
} 

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
} 

// User Interface Logic --------
let addressBook = new AddressBook // global variable that mimics a database

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts"); //efficient way to store jquery DOM check for ul#contacts in variable
  let htmlForContactInfo = ""; //used to store list items created in forEach below
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" +contact.firstName + " " + contact.lastName + "</li>"; //iterates through saved contacts in AddressBook by contact.id property and makes a list item with first/last name
  });
  contactsList.html(htmlForContactInfo); //.html call adds all list items above to DOM in single method call
};

function showContact(contactId) {
  const contact = addressBook.findContact(contactId); //addressbook is global so we can use it here, contact used to stored found contact for rest of function
  $("#show-contact").show(); //shows hidden contact div
  $(".first-name").html(contact.firstName); //adds firstname into span class
  $(".last-name").html(contact.lastName); //adds lastname into span class
  $(".phone-number").html(contact.phoneNumber); //adds phonenumber into span class
  let buttons = $("#buttons"); //stores button query in variable 
  buttons.empty(); // then empties it
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>"); //then adds delete button
}

function attachContactListeners(){
  $("ul#contacts").on("click", "li", function() { //on click of <li> DOM elements, function will run, function is attached to ul#contacts parent element, uses event delegation
    showContact(this.id); //'this' refering to the id in the <li>, used to pass unique id into the function
  });
  $("#buttons").on("click", ".deleteButton", function() { //listens for click of deletebutton
    addressBook.deleteContact(this.id); //runs deleteContact method
    $("#show-contact").hide(); //hides the show contact div
    displayContactDetails(addressBook); //runs the displayContactDetails to refresh the list of contacts staged for click
  });
};

$(document).ready(function() {
  attachContactListeners(); // function is called as soon as doc is ready
  $("form#new-contact").submit(function(event) { //form submit event listener
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputedPhoneNumber = $("input#new-phone-number").val();

    $("input#new-first-name").val(""); // these 3 lines empty out form fields after submit
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");

    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputedPhoneNumber); //create new Contact Object to passing gathered inputs as arguments
    addressBook.addContact(newContact); // add newContact to AddressBook object
    displayContactDetails(addressBook); //displays contact first/last name as list items, see above, as they are added to the AddressBook object
  })
})