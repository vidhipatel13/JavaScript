var countries = [
    {
        name:"India",
        states:[
            {
                name:"Gujarat",
                population: 5000000,
                placeToVisit:[
                    {
                        name:"somnath",
                        visitors:1200
                    },
                    {
                        name:"dwarka",
                        visitors:1000
                    }
                ]

            },
            {
                name:"Maharashtra",
                population: 6000000,
                placeToVisit:[
                    {
                        name:"mumbai",
                        visitors:2000
                    },
                    {
                        name:"pune",
                        visitors:1500
                    }
                ]
            }
        ]
    },
    {
        name:"UAE",
        states:[
            {
                name:"Dubai",
                population: 18000,
                placeToVisit:[
                    {
                        name:"burj khalifa",
                        visitors:20000
                    },
                    {
                        name:"burj al arab",
                        visitors:4500
                    }
                ]

            },
            {
                name:"Abu Dhabi",
                population: 15000,
                placeToVisit:[
                    {
                        name:"ferrari world",
                        visitors:6500
                    },
                    {
                        name:"grand mosque",
                        visitors:5000
                    }
                ]
            }
        ]
    }
]

// for(let i=0;i<countries.length;i++){

//     console.log("Country Name: "+countries[i].name);
//     for(let j=0;j<countries[i].states.length;j++){

//         console.log("State Name: "+countries[i].states[j].name);

//         for(let k=0;k<countries[i].states[j].placeToVisit.length;k++){
//             console.log("Place Name: "+countries[i].states[j].placeToVisit[k].name);
//         }
//     }
// }

//country countries[i]
var totalVisitors = 0;
var totalvisbycountry=[];

var x = countries.map((country)=>{

        totalVisitors = 0;
        country.states.map((state)=>{
            
            state.placeToVisit.map((place)=>{
                //console.log("Place Name: "+place.name + " Visitors: "+place.visitors);
                // console.log("Place Name: "+place.visitors);
                totalVisitors = totalVisitors + place.visitors;
                //totalvisbycountry.push(place.visitors);
            })

            
        })
        
        return {country:country.name,visitors:totalVisitors}
        
})
console.log("total vist.....",x);
console.log("Total Visitors: "+totalVisitors);
console.log("Total Visitors: "+totalvisbycountry);