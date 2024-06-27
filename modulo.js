export const usuarios = async () => {
  const lista = await fetch("https://jsonplaceholder.typicode.com/users"); //https://jsonplaceholder.typicode.com/users  ---  http://localhost:3000/users
  const user = await lista.json();
  return user;
};