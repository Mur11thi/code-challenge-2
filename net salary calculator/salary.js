let namePrompt = (undefined) // Where the individual's details are entered
console.log ( "Calculated Salary for" ${namePrompt})
let grossIncome = (undefined) // where individual's gross salary is entered for calculation.
console.log (${grossIncome} )

const nhifDeductions = (grossPay) //determines individuals nhif deduction
if(${grossPay} > 0 && ${grossPay} <= 5999){
   console.log ( "NHIF deduction is" ${grossPay} -150)
}else if(${grossPay} >= 6000 && ${grossPay} <= 7999){
    console.log ( "NHIF deduction is " ${grossPay} -300)
}
else if(${grossPay} >= 8000 && ${grossPay} <= 11999){
    console.log ("NHIF deduction is" ${grossPay} -400)
}
else if(${grossPay} >= 12000 && ${grossPay} <= 14999){
    console.log ("NHIF deduction is" ${grossPay} -500)
}
else if(${grossPay} >= 15000 && ${grossPay} <= 19999){
    console.log ("NHIF deduction is" ${grossPay} -600)
}
else if(${grossPay} >= 20000 && ${grossPay} <= 24999){
    console.log ("NHIF deduction is" ${grossPay} -750)
}
else if(${grossPay} >= 25000 && ${grossPay} <= 29999){
    console.log ("NHIF deduction is" ${grossPay} -850)
}
else if(${grossPay} >= 30000 && ${grossPay} <= 34999){
    console.log ("NHIF deduction is" ${grossPay} -900)
}
else if(${grossPay} >= 35000 && ${grossPay} <= 39999){
    console.log ("NHIF deduction is" ${grossPay} -950)
}
else if(${grossPay} >= 40000 && ${grossPay} <= 44999){
    console.log ("NHIF deduction is" ${grossPay} -1000)
}
else if(${grossPay} >= 45000 && ${grossPay} <= 49999){
    console.log ("NHIF deduction is" ${grossPay} -1100)
}
else if(${grossPay} >= 50000 && ${grossPay} <= 59999){
    console.log ("NHIF deduction is" ${grossPay} -1200)
}
else if(${grossPay} >= 60000 && ${grossPay} <= 69999){
    console.log ("NHIF deduction is" ${grossPay} -1300)
}
else if(${grossPay} >= 70000 && ${grossPay} <= 79999){
    console.log ("NHIF deduction is" ${grossPay} -1400)
}
else if(${grossPay} >= 80000 && ${grossPay} <= 89999){
    console.log("NHIF deduction is" ${grossPay} -1500)
}
else if(${grossPay} >= 90000 && ${grossPay} <= 99999){
    console.log("NHIF deduction is" ${grossPay} -1600)
}
else if(${grossPay} >= 100000){
    console.log("NHIF deduction is" ${grossPay} -1700)
}
grossPay(undefined) // where individual enters grosspay.

const nssfDeductions = (tierValue) // calculates nssf deductions
console.log(0.6 * tierValue)

tierValue(undefined) //where individual enters value as per the tier he/she is in 
                     // (Tier1= 0 -7000),(Tier2=7001-36000)

const payee= (grossIncome) //determines individuals payee
if (${grossIncome} > 0 && ${grossIncome} <= 24000){
    console.log ("Payee is " 0.1 * ${grossIncome})
}if (${grossIncome} >= 24001 && ${grossIncome} <= 32333){
    console.log ("Payee is " 0.25 * ${grossIncome})
}if (${grossIncome} >= 32334 && ${grossIncome} <= 500000){
    console.log ("Payee is " 0.3 * ${grossIncome})
}if (${grossIncome} >= 500001 && ${grossIncome} <= 800000){
    console.log ("Payee is " 0.325 * ${grossIncome})
}if (${grossIncome} > 800000){
    console.log ("Payee is " 0.35 * ${grossIncome})
}
grossIncome(undefined) // where individual enters gross income for payee calculation.


const deductions = ${nhifDeductions} + ${nssfDeductions} // sums up total deductions.
console.log ("Total Deductions" + deductions)

let netSalary = ${grossIncome} - ${deductions}
console.log ("Net Salary is" ${netSalary} ) // displays net salary.




