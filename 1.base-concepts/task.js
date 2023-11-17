"use strict";

function solveEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let result;
    if (d<0) {
        result = [];
    } else if (d===0) {
        result = [(-b / (2 * a))] ;
    } else {
        result = [((-b + Math.sqrt(d) )/(2*a)), ((-b - Math.sqrt(d) )/(2*a))];

    }
    return result;
    

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let translationPercent = (percent/100)/12;
  let bodyCredit =  amount - contribution;
  let monthPay = bodyCredit * (translationPercent + (translationPercent / (( Math.pow((1 + translationPercent), countMonths)) - 1)));
  let result = monthPay*countMonths;
  return +result.toFixed(2);
}