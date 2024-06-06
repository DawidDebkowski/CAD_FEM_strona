import { useEffect, useState } from 'react';
import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: test,
    error,
    isValidating,
  } = useSWR('https://cadfem.pwr.edu.pl/apitest/index.php', { mode: "no-cors"}, fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>{error.text}</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  console.log(test);

  return (
    <div>
      <p>{test}</p>
    </div>
  );
};

export function Test() {
    const [user, setUser] = useState(null)

    useEffect( () => {
        fetch('https://cadfem.pwr.edu.pl/apitest/index.php', {mode:"no-cors"}).then(res => res.json).then(data => setUser(data));
    }, [])

    return (
        <div>
            <p>{user}</p>
        </div>
    )
}

export default Swr;