const date = new Date();
const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

const formattedDate = date.toLocaleDateString('en-US', optionsDate);
const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

// console.log(`Date : ${date.toString()}`); 
