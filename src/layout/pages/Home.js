import { useNavigate } from 'react-router-dom';

function Home({ user }) {
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return <h1 style={{color: 'white'}}>Please log in to view this page.</h1>;
  }

  return <h1 style={{color: 'white'}}>Welcome, {user.Fullname}!</h1>;
}

export default Home
