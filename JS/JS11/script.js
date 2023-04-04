// let x = [100, 200, 250, 350];

// console.log(x, "    origin");

// x.map((v, i, arr) => {
//   arr[i] = 50;
// });

// console.log(x);

// x.filter((a) => a < 100);

// const salary = [5000,6556,455,10256]

// console.log(salary.filter(s => s<1000))

// const y = salary.filter(s => s<10000)
// console.log(y)

// const z = salary.filter(s => s<10000).map( a => a*1.2)
// .forEach(k => console.log(k))

// ?-------------REDUCE--------------------

// let x = [2, 4, 3];
// let y = x.reduce((acc, value) => acc + value, 0);
// // ! virgülden sonra ne yazarsan acc o olur, standart 0 dır

// console.log(y);

// console.log(x.reduce((acc,value) => acc*value,1))

const person = {
    name: "ahmet",
    id : 312313123,
    dob : "2003",     
    age: function (){
        return new Date().getFullYear() - this.dob
    }



}

console.log(person)


const personel = {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    salary: 10000,
    job: "developer",
    drivingLicence: false,
    calculateAge: function () {
      return new Date().getFullYear() - this.dob
    },
    summary: function () {
      return `${this.name} is ${this.calculateAge()} years old.`
    },
  }

  console.log(personel)