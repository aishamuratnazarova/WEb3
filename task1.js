const ITMO_BORN_YEAR = 1900;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

const itmoBornDate = new Date(ITMO_BORN_YEAR,ITMO_BORN_MONTH-1,ITMO_BORN_DAY);

console.log(itmoBornDate.toDateString());