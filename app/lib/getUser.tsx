async function getOneUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!res.ok) return "";

  return res.json();
}

export default getOneUser;
