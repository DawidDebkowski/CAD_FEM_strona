import { Link } from "react-router-dom";
import { myRoutes } from "../App";
import "./adminLinkPage.css"
import LinkerButton from "../Components/LinkerButton";

function AdminLinkPage() {
    return (
        <div className="adminPage">
            <LinkerButton moreClasses={" round bigger "} linkTo={myRoutes.addPerson} text={"Dodaj osobę"}/>
            <LinkerButton moreClasses={" round bigger "} linkTo={myRoutes.editMembersPage} text={"Edytuj osoby"}/>
        </div>
    );
}

export default AdminLinkPage;