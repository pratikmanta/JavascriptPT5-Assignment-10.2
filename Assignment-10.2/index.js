// created class that takes given parameters
class Airplane {                            
    constructor (name,occupancy,speed){             
            this.name = name;
            this.occupancy = occupancy;
            this.speed = speed ;
        }
        
        // validated the class properties according to validation rules
        set name(value1) {
            if(value1 == undefined || value1 == "") {
                throw new Error("Name cannot be undefined or empty");
            }
            this.planeName = value1;
        }

        set occupancy(value2) {
            if(value2 == undefined || value2 < 0 || value2 > 180 ){
                throw new Error("Occupancy cannot be empty , negative and greater than 180");
            }
        this.planeOccupancy = value2;
        }
        
        set speed(value3) {
            if (value3 == undefined || value3 < 0 || value3 > 900) {
                throw new Error("Speed cannot be empty , negative and greater than 900");
            }
            this.planeSpeed = value3;  
        }
        
        // added method that logs the current status of airplane 
        status() {
            console.log (`Airplane : ${this.planeName} with ${this.planeOccupancy} occupancy, is moving at ${this.planeSpeed} km/h`)
        }
        
        // added methods to increase and decrease speed
        increaseSpeed(inc) {
            this.planeSpeed += inc ; 
            console.log(`Airplane : ${this.planeName} with ${this.planeOccupancy} occupancy, is moving at ${this.planeSpeed} km/h`);
        }
        decreaseSpeed(dec){
            this.planeSpeed -= dec ; 
            console.log(`Airplane : ${this.planeName} with ${this.planeOccupancy} occupancy, is moving at ${this.planeSpeed} km/h`);
        }
    }

//created 3 plane objects and called their print methods
var plane1 = new Airplane ("Boeing 777",180,900);
var plane2 = new Airplane ("Typhoon",50,600);
var plane3 = new Airplane ("Jet",100,500);
plane1.status();
plane2.status();
plane3.status();

// increased speed of airplane objects by 200
console.log("-----------------------------");
console.log("After increasing plane speed ");
console.log("-----------------------------");
plane1.increaseSpeed(200);
plane2.increaseSpeed(200);
plane3.increaseSpeed(200);


//showing decreased speed which returns speed to original values
console.log("-----------------------------");
console.log("After decreasing plane speed ");
console.log("-----------------------------");
plane1.decreaseSpeed(200);
plane2.decreaseSpeed(200);
plane3.decreaseSpeed(200);



    
     



