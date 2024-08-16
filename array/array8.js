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
  
  var populationsum = 0;
  var populationData = [];
  
  
  for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i])
  
    populationsum = 0;
    for (let j = 0; j < countries[i].states.length; j++) {
      //console.log(countries[i].states[j])
  
      for (let k = 0; k < countries[i].states[j].cities.length; k++) {
        //            console.log(countries[i].states[j].cities[k])
        populationsum =
          populationsum + countries[i].states[j].cities[k].population;
        //   console.log(populationsum);
      }
    }
  
    populationData.push({
      name: countries[i].name,
      population: populationsum,
    });
  }
  console.log(populationsum);
  console.log(populationData);