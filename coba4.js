const sebuahObject = {
    name: 'Bejo Jhonson',
    getName() {
        return this.name;
    }
 }

 sebuahObject.prototype = {
     name: 'Bejo Jhonson',
     getName: () => this.name
 }
 
 console.log(sebuahObject.getName());