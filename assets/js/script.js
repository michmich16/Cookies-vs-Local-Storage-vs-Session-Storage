// localStorage.setItem('name','Bob')
// localStorage.getItem('name')
// localStorage.removeItem('name')

// sessionStorage.setItem('name','John')
// sessionStorage.setItem('name','James')
// sessionStorage.getItem('name')

// document.cookie = 'name=Fin; expires=' + new Date(9999, 0, 1).toUTCString()
// document.cookie = 'lastName=Smith; expires=' + new Date(9999, 0, 1).toUTCString()


let myObj = {
    name: 'Dominic',
    age: 56
};

let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem("myObj", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);