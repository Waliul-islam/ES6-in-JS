// You are creating a website for your college. Create a class User with 2 properties, name  & email. It also has a method called viewData() that allows user to view website data.

let DATA = "information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", DATA)
    }
}

let student1 = new user("wali", "adf@gmail.com"); 
let student2 = new user("rifat", "adfdfd@gmail.com"); 


class Product{

    constructor(name,price,brand,owner) {
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.owner = owner;
    }
    details() {
        console.log(` ami  ${this.name} product er details`)
    }
}


const iphone = new Product("iphone", "1234", "apple","jobs");
iphone.details()

const xiaomi = new Product("redmi", 1000, "xiaomi", "jani na");
console.log(xiaomi)

xiaomi.details()