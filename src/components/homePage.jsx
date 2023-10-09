import "./styles.css"
import Introduction from "../components/introduction"
import Details from "../components/details"
import AboutMe from "../components/aboutMe"
import ContactMe from "../components/contactMe"

function HomePage() {
    return (
        <div>
            <Introduction />
            <Details />
            <AboutMe />
            <ContactMe />
        </div>   
    )
}

export default HomePage