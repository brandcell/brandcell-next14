async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

//usually use try catch but now using Error Boundaries that will allow user to try again

export default getAllUsers;
