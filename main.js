function greet(name = 'world') {
  return `Hello, ${name}!`;
}

if (typeof module !== 'undefined') module.exports = { greet }; // for tests

