import Nav from "./Nav";
import Resources from "./Resources";

export default function Layout({children}){
    return (
        <>
        <Nav />
        <Resources />
        {children}
        </>
    )
}