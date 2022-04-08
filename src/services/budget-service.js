import { utilService } from './util-service.js'
import { userService } from './user-service.js'

export const budgetService = {
    getExpenses,
    getBudgets,
    getTotalExpensesForBudgets,
    getTotalExpensesForBudget,
    getTotalBudgetsAmount
}

const user = userService.getUser()

function getTotalBudgetsAmount(budgets) {
    return budgets.reduce((acc, budget) => {
        return acc + budget.amount
    }, 0)
}

function getTotalExpensesForBudget(budget) {
    return budget.linkedExpenses.reduce((acc, expense) => {
        return acc + expense.amount
    }, 0)
}

function getTotalExpensesForBudgets(budgets) {
    return budgets.reduce((acc, budget) => {
        return acc + getTotalExpensesForBudget(budget);
    }, 0)
}

function getExpenses() {
    const { expenses } = user
    return expenses
}

function getBudgets() {
    const { budgets } = user.budgetInfo
    return budgets
}

function getEmptyBudget() {

    return {
        id: utilService.makeId(),
        type: '',
        linkedExpenses: [
            {
            txt: '',
            amount: 0
            }
        ]
    }
}

function getEmptyExpense() {

    return {
        id: utilService.makeId(),
        amount: 0,
        type: '',
        txt: ''
    }
}