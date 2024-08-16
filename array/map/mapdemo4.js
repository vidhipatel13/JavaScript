var bank={
    users:[
        {
            name:"amit",
            transactions:[
                {
                    type:"debit",
                    debitTrans:[
                        {
                            mode:"cash",
                            amount:1000
                        },
                        {
                            mode:"online",
                            amount:2000
                        },
                        {
                            mode:"upi",
                            amount:3000
                        }
                    ]
                },

                {
                    type:"credit",
                    creditTrans:[
                        {
                            mode:"cash",
                            amount:1200
                        },
                        {
                            mode:"online",
                            amount:2500
                        },
                        {
                            mode:"upi",
                            amount:4000
                        }
                    ]
                }
            ]
        },
          {
            name:"amit",
            transactions:[
                {
                    type:"debit",
                    debitTrans:[
                        {
                            mode:"cash",
                            amount:1000
                        },
                        {
                            mode:"online",
                            amount:2000
                        },
                        {
                            mode:"upi",
                            amount:3000
                        }
                    ]
                },

                {
                    type:"credit",
                    creditTrans:[
                        {
                            mode:"cash",
                            amount:1200
                        },
                        {
                            mode:"online",
                            amount:2500
                        },
                        {
                            mode:"upi",
                            amount:4000
                        }
                    ]
                }
            ]
        }
    ]
}

var dtrac =0
var ctrac =0
// bank.users.map((user)=>{
//     user.transactions.map((t)=>{
//       t.debitTrans?.map((d)=>{
//         dtrac+=d.amount
//       })
//       t.creditTrans?.map((c)=>{
//         ctrac+=c.amount
//       })
//     })
// })
const allDebitTransactions = [];

// Iterate through each user and their transactions
for (const user of bank.users) {
    const debitTransactions = user.transactions
        .filter(transaction => transaction.type === 'debit')
        .map(transaction => transaction.debitTrans);
    allDebitTransactions.push(...debitTransactions);
}

console.log(allDebitTransactions);
// console.log(dtrac)
// console.log(ctrac)


// // debit upi transation....
// console.log(upiTrans)