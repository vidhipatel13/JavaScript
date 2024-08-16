var countries = [
    {
      name: "India",
      states: [
        {
          name: "Gujarat",
          cities: [
            {
              name: "Ahmedabad",
              population: 1200,
            },
            {
              name: "Surat",
              population: 800,
            },
          ],
        },
      ],
    },
    {
      name: "USA",
      states: [
        {
          name: "Texas",
          cities: [
            {
              name: "Dallas",
              population: 900,
            },
            {
              name: "Austin",
              population: 700,
            },
          ],
        },
      ],
    },
  ];
  
  //get city population
  
  var cityPopulation = countries
    .map((country) => {
      return country?.states?.map((states) => {
        return states.cities.map((city) => {
          return {
            city: city.name,
            population: city.population,
          };
        });
      });
    })
    .flat(2);
  console.log(cityPopulation);
  //get state population
  
  citypop = 0;
  var statePopulation = countries
    .map((country) => {
      return country?.states?.map((state) => {
        // return ({
        //     state: state.name,
        //     population : state.cities.map((city)=>{
        //         return citypop  = citypop + city.population
        //     })
        // })
  
        return {
          state: state.name,
          population: state.cities.reduce(
            (acc, city) => acc + city.population,
            0
          ),
        };
      });
    })
    .flat(2);
  console.log(statePopulation);
  
  //map  --> all record..
  //filter--> some record..
  //reduce.. --> single value..
  
  var marks = [10, 20, 30, 40, 50];
  //sum using reduce
  
  var total = marks.reduce((sum, marks) => sum * marks, 0);
  console.log("*",total);
  
  // var sum =0;
  // for(let i=0;i<marks.length;i++){
  
  //     sum = sum + marks[i]
  
  // }
  // console.log(sum)
  
  //get country population
  
  var countryPopulation = countries.map((country) => {
    return {
      country: country.name,
      population: country.states.reduce(
        (acc, state) =>
          acc + state.cities.reduce((acc, city) => acc + city.population, 0),
        0
      ),
    };
  });
  
  console.log(countryPopulation);
  
  
  
  var age = [[10,20,30],[20,20,20],[100,20,200]]
  //60,60,320 = 440
  
  // var totalAge = age.map((age)=>{
  //     return age.reduce((acc,age)=>acc+age,0)
  // })
  // var x = totalAge.reduce((acc,age)=>acc+age,0)
  // console.log(x)
  
  
  var totalAge = age.reduce((acc,age)=>{
      return acc + age.reduce((acc,age)=>acc+age,0)
  },0)
  console.log(totalAge)
  
  
  
  var data = [[[10,20]],[[20,30]],[[40,50]]]
  
  var total   = data.reduce((acc,data)=>{
      return acc + data.reduce((acc,data)=>{
          return acc + data.reduce((acc,data)=>acc+data,0)
      },0)
  },0)    
  console.log(total)
  
  
  var names = ["vijay","ajay","jay","sanjay"]
  //reduce//
  
  var name = names.reduce((acc,name)=>{
      return acc + name
  },"")