import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const myFetch = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users/${userId}?delay=2`);
        if (!response.ok) {
          setErrorStatus(`gagal merespons data: ${response.status}`);
        }
        let data = await response.json();
        setUser(data.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoadingStatus(false);
      }
    };
    myFetch();
  }, [userId]);

  if (loadingStatus) {
    return <h1>Loading...</h1>;
  } else if (errorStatus) {
    return(
    <div>
    <h1>Terjadi Gangguan...</h1>;
      <button onClick={() => setUserId(prevUser => prevUser -1)}>Prev User</button>
      <button onClick={() => setUserId(prevUser => prevUser +1)}>Next User</button>
    </div> 
    )
  } else {
    return (
      <div className="container">
        <h1>{`${user.first_name} ${user.last_name}`}</h1>
        <figure>
          <img src={user.avatar} alt={user.first_name} />
          <figcaption>{user.email}</figcaption>
        </figure>
        <button onClick={() => setUserId(prevUser => prevUser -1)}>Prev User</button>
        <button onClick={() => setUserId(prevUser => prevUser +1)}>Next User</button>
      </div>
    );
  }
}

export default App;
