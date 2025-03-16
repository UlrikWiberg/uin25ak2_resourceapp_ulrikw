import Nav from "./Nav";
import Resources from "./Resources";
/*importerer Nav og Resources komponentet slik at jeg definere hvor de skal ligge i Layouten */

export default function Layout({children}){
    return (
        <>
        {/*Setter opp Nav og Resources komponentet i Layout, og definerer hvor children skal
        havne i Layouten. children gjør så jeg kan sende komponentet som data */}
        <Nav />
        <Resources />
        {children}
        </>
    )
}