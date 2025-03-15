import { Link } from "react-router-dom";
import "../styles/Nav.scss"
import { resources } from "../assets/ressurser";

export default function Nav() {
    const categories = [...new Set(resources.map((resource) => resource.category))]

    return (
        <nav>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
}