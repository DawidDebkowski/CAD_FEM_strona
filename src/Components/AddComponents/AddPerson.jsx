import { useState } from "react";
import axios from "axios";
import "./addPerson.css";

function AddPerson() {
    const [formData, setFormData] = useState({
        fname: '',
        second_name: '',
        descr: '',
        department: 'Zarząd',
        image_path: null
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

        axios.post("http://localhost/cadfemapi/addPerson/", form)
            .then((response) => {
                setResponse(response.data);
                
            })
            .catch((error) => {
                setResponse(`Error: ${JSON.stringify(error)} ${error.message}, ${error.file}, ${error.line}`);
            });
    };

    return (
        <div className="addPerson">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dodaj osobę</legend>
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
                    <input
                        name="descr"
                        className="addPersonInput"
                        type="text"
                        value={formData.descr}
                        onChange={handleChange}
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
                    <label htmlFor="image_path">Wybierz zdjęcie: </label> <br />
                    <input
                        type="file"
                        id="image_path"
                        name="image_path"
                        onChange={handleFileChange}
                    />

                    <br/><br/>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {response && <div className="response">{JSON.stringify(response)}</div>}
        </div>
    );
}

export default AddPerson;