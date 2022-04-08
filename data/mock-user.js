import { utilService } from '../src/services/util-service.js'

export const user = {
    id: utilService.makeId(),
    expensesInfo: {
        daily: [
            {
                id: utilService.makeId(),
                amount: 300,
                txt:'Monthly gas',
                type: 'gas',
            }

        ],
        collab: [],
        total: 300
    },
    budgetInfo: {
        budgets: [
            {
                id: utilService.makeId(),
                type: 'groceries',
                amount: 1000,
                linkedExpenses: [
                    {
                        txt: 'Milk and eggs',
                        amount: 17
                    }
                ],
            },
            {
                id: utilService.makeId(),
                type: 'gas',
                amount: 400,
                linkedExpenses: [
                    {
                        txt: 'Monthly gas',
                        amount: 30
                    }
                ],
            },
        ],
        total: 1400
    },
    account: {
        money: 32000,
        name: 'Guy Zohar'
    },
    totals: {
        january: {
            expenses: [],
            budgets: [],
            amountSpent: 3200,
            goal: 4000
        }
    }
}

// expense: {
//     id: makeId(),
//     amount: 300,
//     txt:'Monthly gas',
//     type: 'gas',
// }

// budget: {
//             id: makeId(),
//             type: 'gas',
//             amount: 400,
//             linkedExpenses: [
//                 {
//                     txt: 'Monthly gas',
//                     amount: 30
//                 }
//             ]
//         },

// **** Make sure every end of the month reset the expenses and budgets, add to the totals object instead. (see if you can do that with firebase)
// **** A page to see daily expenses, A page to see your budget and how you are dealing with it this month.
// **** Make dashboard to see types of categories and how much you spent.
