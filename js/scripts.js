// Business Logic for AddressBook ---------
function AddressBook() { 
  this.contacts = []; //contacts stored in this array
  this.currentId = 0; // starting id number, prototype below will incrementely increase for each contact and add as property
} // constructor for Address Book

AddressBook.prototype.addContact = function(contact) { 
  contact.id = this.assignId(); // references prototype below, assigns unique id, increments, then pushing it into contacts array in AddressBook
  this.contacts.push(contact);
} // prototype stores method to add contacts

AddressBook.prototype.assignId = function() { 
  this.currentId += 1;
  return this.currentId;
} // prototype stores method to add to id number creating unique id for each entry

AddressBook.prototype.findContact = function(id) { //id referencing unique id assigned to each contact (you put in unique id you are trying to find)
  for (let i = 0; i < this.contacts.length; i++) { //method loops through AddressBook objects contacts array checking each entry's id against id provided to the findContact() method as argument
    if (this.contacts[i]) { // on check an array element id property if that element is a contact
      if (this.contacts[i].id == id) { //when match is found
        return this.contacts[i]; //method returns contact with the specific id referenced
      }
    }
  };
  return false; //else it returns false for id not existing
}

AddressBook.prototype.deleteContact = function(id) { //prototype creates method to delete contact
  for (let i = 0; i < this.contacts.length; i++) { //loops through contact array
    if (this.contacts[i]) { //checks an array to see if id is there
      if (this.contacts[i].id == id) { //until matching id is found
        delete this.contacts[i]; // then deletes contact with matching id
        return true; 
      }
    }
  };
  return false; // returns false if no matching id is found
}

// Business Logic for Contacts ----------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
} // constructor for a contact

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
} // prototype for return a full name