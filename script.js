// Create
const user = { first: 'email@example.com'}
//store as a stringified JSON
localStorage.setItem('user', JSON.stringify(user));

// Read
console.log(JSON.parse(localStorage.getItem('user')))
//output will be a JSON: {first: "email"}

// Update
const update = { first: 'email@example.com' }
localStorage.setItem('user', JSON.stringify(update));

// Delete
localStorage.removeItem('user');
