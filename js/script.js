let car1={
    // 1. Property:Value(Many)
    brand:"TATA",
    year: 2023,
    model: 'Harrier',
    color:  `Black`,
    type: 'SUV',
    engine:"Petrol",
    price: 1500000,

    // 2. Functions/Method (Many)
    getFullDetail(){
        //Every function returnsomething
        return this.brand+" "+this.year+" "+this.model+' '+this.color;
    }
}

const car2 ={
    // 1. Property:Value(Many)
    brand:"TATA",
    year: 2023,
    model: 'Harrier',
    color:  `Black`,
    type: 'SUV',
    engine:"Diesel",
    price: 1500000,

    // 2. Fucntions (Many)

}


console.log(car1.getFullDetail());