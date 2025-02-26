import axios from "axios";
import LinkerButton from "../../Components/LinkerButton";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function RemoveMemberPage() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const location = useLocation();

    const removePerson = () => {
        let person = location.state?.person;

        if(person!=null) {
            axios.delete(import.meta.env.VITE_API_LINK + "/cadfemapi/addPerson/" + person.id.toString())
            .then((response) => {
                setResponse(response.data);
                setStatus(true);
            })
            .catch((error) => {
                setError(`Error: ${error.message}, ${error.file}, ${error.line}`);
                setStatus(false);
            });
        }
        console.log(status)
        console.log(response)
    }

    return (
        <div className={"m-3 flex flex-col gap-4"}>
            <h1>Czy na pewno? To na stałe usunie tę osobę z bazy danych. Nie można tego cofnąć.</h1>
            <button onClick={removePerson} className={"bg-blue-400 p-2 text-3xl"}>TAK</button>
            {response &&
                <div>
                    <p>
                        {response["message"]}
                    </p>
                </div>}
            {error && (<div>{error}</div>)}
            {status!=null && (<div><h1>{status ? "Usunięto osobę" : "Nie udało się usunąć"}</h1></div>)}
        </div>
    );
}

export default RemoveMemberPage;