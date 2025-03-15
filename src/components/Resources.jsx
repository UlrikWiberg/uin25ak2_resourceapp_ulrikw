import { useParams } from "react-router-dom";
import { resources } from "../assets/ressurser";
import PageTitle from "./PageTitle";
import "../styles/Resources.scss"

export default function Resources() {
    const { category } = useParams();
    console.log("category", category)

        
        const filteredResources = resources.filter((resource) => resource.category === category);

        console.log("resources", resources)
    return (
        <article id="kategori">
            <PageTitle category={category}/>
            {filteredResources.length > 0 ? (
                <ul>
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