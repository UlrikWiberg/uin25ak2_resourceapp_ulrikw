import { Link } from "react-router-dom";
import "../styles/Nav.scss"
import { resources } from "../assets/ressurser";
/*importer resources Arrayen og Link fra react-router-dom slik at jeg kan sette
opp navigasjon for applikasjonen med Link */

export default function Nav() {
    /*denne funksjonen tar kun category fra hver resource i resources Arrayen, new Set funksjonen fjerner 
    duplikate kategorier https://www.w3schools.com/js/js_sets.asp#:~:text=A%20JavaScript%20Set%20is%20a%20collection%20of%20unique,add%20values%3A%20Create%20a%20Set%20and%20add%20variables%3A */
    const categories = [...new Set(resources.map((resource) => resource.category))]

    return (
        <nav>
            {/*mapper ut categories og gjør de til linker, slik at man kan navigere */}
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