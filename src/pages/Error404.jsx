import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      Error404
      Return back home
      <Link to='/'>
        <button>Click me</button>
      </Link>
    </>
  );
}

export default Error;