const min = +prompt('min value')
const max = +prompt('max value')
const minValue1 = 100000
const maxValue1 = 1000000
const minValue2 = 500000
const maxValue2 = 5000000
const maxValue3 = 10000000
let userType;
if (min >= minValue1 && max <= maxValue1) {
    userType = `Standard`
} else if (min >= minValue2 && max <= maxValue2) {
    userType = `Gold`
} else if (min >= maxValue1 && max <= maxValue3) {
    userType = `Premium`
} else if (isNaN(min) || isNaN(max)) {
    userType = 'Not A Number'
} else {
    userType = `empty value`
}
alert(userType);