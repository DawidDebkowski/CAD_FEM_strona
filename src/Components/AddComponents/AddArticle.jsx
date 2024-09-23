import { useState } from "react";
import axios from "axios";
import "./addArticle.css";
import { useLocation } from "react-router-dom";

function AddArticle(props) {
    const location = useLocation();

    let isEdit = false;
    let paragraphsA = new Array();

    let project = {
        id: 0,
        title: '',
        cover_image: '', //path
        cover_desc: '',
        page_url: 'Zarząd',
        paragraphs: null,
        more_images: null //json with multiple paths and descriptions
    }

    if (location.state?.project != null) {
        project = location.state.project;
        isEdit = true;
    }

    const [formData, setFormData] = useState({
        id: project.id,
        title: project.title,
        cover_image: project.cover_image, //path
        cover_desc: project.cover_desc,
        page_url: project.page_url,
        paragraphs: project.paragraphs,
        more_images: project.more_images //json with multiple paths and descriptions
    });
    const [response, setResponse] = useState(null);

    const makeP_JSON = (target) => {
        if(paragraphsA.length < target.id) {
            paragraphsA.push()
        }
    }

    const handleChange = (e) => {
        const { name, value, id } = e.target;
        // setFormData({
        //     ...formData,
        //     [name]: value
        // });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
            image_path: "new file",
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
                    <label>Tytuł: </label><br />
                    <input
                        name="title"
                        className="addPersonInput"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                    /><br /><br />

                    <label htmlFor="cover_image">{!isEdit ? "Wybierz zdjęcie głowne:" : "Jeżeli nie chcesz zmieniać zdjęcia, nie wgrywaj nowego pliku."}</label> <br />
                    <input
                        type="file"
                        id="cover_image"
                        name="cover_image"
                        onChange={handleFileChange}
                    />
                    <br /><br />

                    <label>Opis tytułowy: </label><br />
                    <textarea
                        name="cover_desc"
                        className="addPersonInput"
                        type="text"
                        value={formData.cover_desc}
                        onChange={handleChange}
                    /><br /><br /><br />

                    <label>Akapit 1: </label><br />
                    <textarea
                        name="descr"
                        className="addPersonInput"
                        type="text"
                        value={formData.descr}
                        onChange={handleChange}
                    /><br />

                    <label htmlFor="image_path">{!isEdit ? "Wybierz zdjęcie:" : "Jeżeli nie chcesz zmieniać zdjęcia, nie wgrywaj nowego pliku."}</label> <br />
                    <input
                        type="file"
                        id="image_path"
                        name="image_path"
                        onChange={handleFileChange}
                        multiple
                    />

                    <br /><br />

                    

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {response && <div className="response">{JSON.stringify(response)}</div>}
        </div>
    );
}

export default AddArticle;