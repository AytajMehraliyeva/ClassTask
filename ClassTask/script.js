class Car {
    constructor(brand, model, color, year, speed, fuelCapacity, km, fuelFor1Km, currentFuel) {
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year
        this.speed = speed
        this.fuelCapacity = fuelCapacity
        this.km = km
        this.fuelFor1Km = fuelFor1Km
        this.currentFuel = currentFuel
    }

    ShowInfo() {
        return this
    }

    AddFuel(yanacaq) {
        if (this.currentFuel + yanacaq > this.fuelCapacity) {
            return "Yanacaq ceninde yeteri qeder yer yoxdur"

        } else {
            return "Yanacaq ugurla elave edildi"
        }
    }

    Drive(yol) {
        let lazimliYanacaq = yol * this.fuelFor1Km
        if (lazimliYanacaq > this.currentFuel) {
            return "Yanacaq ceninde yeteri qeder yer yoxdur"

        } else {
            return "Unvana catdiq"
        }

    }

}



car1 = new Car("Kia", "Picanto", "Black", "2022", 180, 55, 200, 0.2, 40)
car2 = new Car("Kia", "Sorento", "Gray", "2022", 120, 65, 300, 0.1, 50)
console.log(car1.ShowInfo())
console.log(car2.ShowInfo())

console.log(car1.AddFuel(20))
console.log(car2.AddFuel(10))

console.log(car1.Drive(400))
console.log(car2.Drive(200))
