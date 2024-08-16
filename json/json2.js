var IPL = {

    year:2019,
    sponsor:"VIVO",
    teams:[
        {
            name:"CSK",
            captain:"MSD",
            vicecaptain:"RAINA",
            players:[
                {
                    jno:7,
                    name:"MSD",
                    role:"keeper",
                    country:"india",
                },
                {
                    jno:3,
                    name:"RAINA",
                    role:"Allrounder",
                    country:"india",
                }

            ]
        },
        {
            name:"RCB",
            captain:"VIRAT",
            vicecaptain:"ABD",
            players:[
                {
                    jno:18,
                    name:"VIRAT",
                    role:"batsman",
                    country:"india",
                },
                {
                    jno:17,
                    name:"ABD",
                    role:"batsman",
                    country:"south africa",
                }

            ]
        },
    ]

}

console.log(IPL);
console.log("year",IPL.year);
console.log("sponsor",IPL.sponsor);
console.log("teams",IPL.teams);
console.log("teams",IPL.teams[0]);
console.log("teams",IPL.teams[0].name);
console.log("teams",IPL.teams[0].players);
console.log("-------------------------------")
console.log("teams",IPL.teams[1]);
console.log("teams",IPL.teams[1].name);
console.log("teams",IPL.teams[1].players);