import { useParams } from "react-router-dom";
import { resources } from "../assets/ressurser";
import PageTitle from "./PageTitle";
import "../styles/Resources.scss"
/*importerer resources Arrayen slik at jeg kan mappe ut url importer også inn sass filen slik
at jeg kan stilsette og PageTitle komponenten slik at jeg kan få en tittel til ressuresen */

export default function Resources() {
    /*setter category til en parmeter jeg kan filtrere med*/
    const { category } = useParams();
    console.log("category", category)

        /*denne funksjonen tester om category property i arrayen matcher property i url parameteren
        og filterer bort de som ikke har samme category*/
        const filteredResources = resources.filter((resource) => resource.category === category);

        console.log("resources", resources)
    return (
        <article id="kategori">
            <PageTitle category={category}/>
            {filteredResources.length > 0 ? (
                <ul>
                    {/*setter resource.url som key siden det er en unik verdi for hver ressurs
                    og skriver ut urlen til den filtrerte ressuresen til an a tag */}
                    {filteredResources.map((resource) => (
                        <li key={resource.url}>
                            <a href={resource.url} >
                                {resource.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                null
            )}

        </article>
    )
}