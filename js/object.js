const car ={
    name: "Fiat",
    model: "X5",
    year: 2020,
    color: "black",
    start: function(){ // method of the object: function inside an object: function start(){}
        this.stop(); // call the stop method of the car object
        console.log("Car started");
    },
    stop: function(){
        console.log("Car stopped");
    },
    
};

console.log(car.name); // access the name property of the car object
console.log(car["model"]); // access the model property of the car object
car.start(); // call the start method of the car object
car.stop(); // call the stop method of the car object

