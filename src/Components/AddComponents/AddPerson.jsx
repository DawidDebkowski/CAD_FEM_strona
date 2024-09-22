import { useState } from "react";
import axios from "axios";
import "./addPerson.css";
import { useLocation } from "react-router-dom";

function AddPerson(props) {
    const location = useLocation();

    let isEdit = false;
    let person = {
        id: 0,
        fname: '',
        second_name: '',
        descr: '',
        department: 'Zarząd',
        image_path: null
    }

    if (location.state?.person != null) {
        person = location.state.person;
        isEdit = true;
    }

    const [formData, setFormData] = useState({
        id: person.id,
        fname: person.fname,
        second_name: person.second_name,
        descr: person.descr,
        department: person.department,
        image_path: person.image_path
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        const API_LINK = import.meta.env.VITE_API_LINK + "/cadfemapi/addPerson/";

        if (isEdit) {
            axios.post(API_LINK + person.id.toString(), form)
                .then((response) => {
                    setResponse(response.data);
                })
                .catch((error) => {
                    setResponse(`Error: ${error.message}, ${error.file}, ${error.line}`);
                });
        } else {
            axios.post(API_LINK, form)
                .then((response) => {
                    setResponse(response.data);
                })
                .catch((error) => {
                    setResponse(`Error: ${error.message}, ${error.file}, ${error.line}`);
                });
        }
    };

    return (
        <div className="addPerson">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{isEdit ? "Edytuj osobę" : "Dodaj osobę"}</legend>
                    <label>Imie: </label><br />
                    <input
                        name="fname"
                        className="addPersonInput"
                        type="text"
                        value={formData.fname}
                        onChange={handleChange}
                    /><br />

                    <label>Nazwisko: </label><br />
                    <input
                        name="second_name"
                        className="addPersonInput"
                        type="text"
                        value={formData.second_name}
                        onChange={handleChange}
                    /><br />

                    <label>Krótki opis: </label><br />
                    <textarea
                        name="descr"
                        className="addPersonInput"
                        type="text"
                        value={formData.descr}
                        onChange={handleChange}
                        size={50}
                    /><br />

                    <label htmlFor="department">Wybierz dział: </label><br />
                    <select
                        name="department"
                        id="department"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="Zarząd">Zarząd</option>
                        <option value="Promocja">Promocja</option>
                        <option value="Informatyk">Informatyk</option>
                        <option value="Członek">Członek</option>
                    </select>

                    <br /><br />
                    <label htmlFor="image_path">{!isEdit ? "Wybierz zdjęcie:" : "Jeżeli nie chcesz zmieniać zdjęcia, nie wgrywaj nowego pliku."}</label> <br />
                    <input
                        type="file"
                        id="image_path"
                        name="image_path"
                        onChange={handleFileChange}
                    />

                    <br /><br />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {response && <div className="response">{JSON.stringify(response)}</div>}
        </div>
    );
}

export default AddPerson;