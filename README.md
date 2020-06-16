# _Address Book_

#### _Simple webpage program to take user input and store them in javascript objects as an Address Book, June 15th, 2020_

#### By _**Nikolas Kososik**_

## Description

_This project focuses on the use of BDD, utilizing HTML, CSS, and JS to create a webpage that will take a user input and create a Javascript Object Constructor as a lesson for Epicodus._

## Specifications

**Behavior** Takes user input and returns it
* Input: text
* Output text

**Behavior** Checks to see if input is empty 
* Input: empty input
* Output "Empty or incorrect input"

**Behavior** It creates an Address Book
* Input: no input necessary 
* Output: Address Book Object: {contacts: [], currentId: 0}

**Behavior** Program creates a contact
* Input: User's "first name, last name, phone number, email address, physical address"
* Output: Contact Object: {firstName, lastName, phoneNumber, emailAddress, physicalAddress}

**Behavior** Program provides contact object's properties
* Input: "Click" on contact name
* Output: firstName, lastName, phoneNumber, emailAddress, physicalAddress

**Behavior** Add contact to the address book and assigns Id
* Input: Contact Object: {firstName: "Sam" , lastName: "Lot" , phoneNumber: "5555556565", emailAddress: "myemail@gmail.com", physicalAddress: "420 Paper Street"}
* Output: AddressBook Object has 1 contact: {id: 1, firstName: "Sam" , lastName: "Lot" , phoneNumber: "5555556565", emailAddress: "myemail@gmail.com", physicalAddress: "420 Paper Street"}

**Behavior** Program finds contact with given id
* Input: id 7
* Output: Contact Object: {id: 7, firstName: "Rex" , lastName: "Burg" , phoneNumber: "1112223434", emailAddress: "youremail@yahoo.com", physicalAddress: "55 E Trail Mix Lane"}

**Behavior** Program deletes contact with given id
* Input: id 7
* Output: Contact Object with id 7 has been deleted from the address book


## Setup/Installation Requirements

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/nkososik/myAddressBook`
2. Navigate into the `myAddressBook` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`



## Known Bugs

_There are no known issues with bootstrap.css, styles.css, scripts.js, jquery, or index.html files at the latest update of the README._

## Support and contact details

*  _If you run into any issues in the code, feel welcome to edit. You can contact me at nikolas.kososik@gmail.com or through github (user: nkososik) for any support needs._

## Technologies Used

* HTML
* CSS
* Git
* javascript
* jquery
* bootstrap

### License

MIT - License

Copyright (c) 2020 **_Nikolas Kososik_**