

const myObject = {
  myMethod() {
    console.log("object this ::", this)
  }
}
myObject.myMethod();

function myFunction() {
  console.log("func this ::", this)
};

myFunction();
myFunction.call(myObject);
myFunction.call([]);


