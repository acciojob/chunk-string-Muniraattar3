function stringChop(str, size) {
  // Handle edge cases
  if (!str) return []; // Return an empty array if the input string is null
  if (size <= 0) return []; // Return an empty array if size is not positive

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size)); // Extract chunks of the given size
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
