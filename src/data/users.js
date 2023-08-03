const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
const hobbies = ["Reading", "Swimming", "Cooking", "Gardening", "Painting", "Photography"];

const generateRandomAge = () => {
  return Math.floor(Math.random() * 30) + 20; // Edad entre 20 y 49
};

const generateRandomUser = () => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  const randomAge = generateRandomAge();

  return {
    name: randomName,
    age: randomAge,
    hobby: randomHobby,
  };
};

const generateRandomUsersArray = (count) => {
  const randomUsers = [];
  for (let i = 0; i < count; i++) {
    const user = generateRandomUser();
    randomUsers.push(user);
  }
  return randomUsers;
};

export default generateRandomUsersArray;

