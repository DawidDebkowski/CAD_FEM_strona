import axios from "axios";
import LinkerButton from "../../Components/LinkerButton";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function RemoveMemberPage() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    const removePerson = () => {
        let person = location.state?.person;

        if(person!=null) {
            axios.delete(import.meta.env.VITE_API_LINK + "/cadfemapi/addPerson/" + person.id.toString())
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                setError(`Error: ${error.message}, ${error.file}, ${error.line}`);
            });
        }
    }

    return (
        <>
            <h1>Czy na pewno?</h1>
            <button onClick={removePerson}>TAK</button>
            {response && (<div>{response["message"]}</div>)}
            {error && (<div>{error}</div>)}
        </>
    );
}

export default RemoveMemberPage;