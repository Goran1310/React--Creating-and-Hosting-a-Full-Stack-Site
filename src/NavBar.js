import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>

            {/* <div className="App-header"> */}
                <img src="Octocat.png" className="App-logo" alt="logo" />
            {/* </div> */}
            </ul>

        </nav>
    );
}

export default NavBar;