/******************************************
 *  Author : Author
 *  Created On : Sat Nov 18 2023
 *  File : site.js
 *******************************************/

const user = {
  name: "Tomek",
  write() {
    console.log(user.name);
  },
  showName() {
    console.log(this.name); //odwołujemy się do tego obiektu w którym znajudje siędana metoda, nie musimy znać jej nazwy
  },
};

user.showName();
