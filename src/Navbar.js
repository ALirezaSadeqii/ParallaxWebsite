import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchway } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav>
      <nav>
        <div class="nav-content">
          <div class="logo">
            <FontAwesomeIcon icon={faArchway} size="2xl" />
          </div>
          <ul class="nav-links">
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
export default Navbar;
