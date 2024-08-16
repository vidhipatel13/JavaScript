var countries = [
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
    
  ];
  
  // Use map to transform the countries array
  var populationData = countries.map((country) => 
  {
    var populationsum = 0;

    country.states.forEach((state) => 
    {
      state.cities.forEach((city) => {
        populationsum += city.population;
      });
    });
  
    return {
      name: country.name,
      population: populationsum,
    };
  });
  
  console.log(populationData);

console([1,2,3,4,5,6,7,8,9,0])8780376855
