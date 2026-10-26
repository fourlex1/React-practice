import { useState} from "react";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchRandomUser() {
    setIsLoading(true);
    const randomId = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${randomId}`,
    );
    const data = await response.json();
    setUser(data);
    setIsLoading(false);
  }

  return (
    <div>
      <button onClick={fetchRandomUser}>Fetch Random User</button>
      {isLoading && <p>Loading...</p>}
      {user && <p>{user.name}</p>}
    </div>
  );
}

export default RandomUser;