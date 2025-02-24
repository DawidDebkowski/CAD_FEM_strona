import { useState } from "react";
import axios from "axios";
import "./addArticle.css";
import { useLocation } from "react-router-dom";
import AddParagraph from "./AddParagraph";

function AddArticle(props) {
    const location = useLocation();

    let isEdit = false;
    const [paragraphsA, setParagraphsA] = useState([]);

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
        paragraphs: project.paragraphs, //json with multiple paths and descriptions
        more_images: project.more_images //json with multiple paths and descriptions
    });
    const [response, setResponse] = useState(null);

    const makeP_JSON = (e) => {
        const target = e.target;
        console.log(target.id);
        if(paragraphsA.length < target.id) {
            let obj = {
                key: target.id,
                desc: target.value,
                image_path: "",
                image_desc: ""
            }
            paragraphsA[target.id] = obj;
        } else {
            paragraphsA[target.id][target.desc] = target.value;
        }

        paragraphsA.forEach(element => {
            console.log(element);
        });
        console.log(paragraphsA);
        setFormData({
            ...formData,
            ["paragraphs"]: paragraphsA
        });
    }

    const handleChange = (e) => {
        const { name, value, id } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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

                    <AddParagraph id={1} handleChange={makeP_JSON} handleFileChange={handleFileChange} isEdit={isEdit}/>
                    <AddParagraph id={2} handleChange={makeP_JSON} handleFileChange={handleFileChange} isEdit={isEdit}/>
                    <AddParagraph id={3} handleChange={makeP_JSON} handleFileChange={handleFileChange} isEdit={isEdit}/>
                    <AddParagraph id={4} handleChange={makeP_JSON} handleFileChange={handleFileChange} isEdit={isEdit}/>

                    <br /><br />

                    

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {response && <div className="response">{JSON.stringify(response)}</div>}
        </div>
    );
}

export default AddArticle;

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

export default function AddArticle(props) {
    const initialValues = {
        friends: [
            {
                name: '',
                email: '',
            },
        ],
    };

    return (
        <div>
            <h1>Invite friends</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
                        <FieldArray name="friends">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.friends.length > 0 &&
                                        values.friends.map((friend, index) => (
                                            <div className="row" key={index}>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.name`}>Name</label>
                                                    <Field
                                                        name={`friends.${index}.name`}
                                                        placeholder="Jane Doe"
                                                        type="text"
                                                    />
                                                    <ErrorMessage
                                                        name={`friends.${index}.name`}
                                                        component="div"
                                                        className="field-error"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.email`}>Email</label>
                                                    <Field
                                                        name={`friends.${index}.email`}
                                                        placeholder="jane@acme.com"
                                                        type="email"
                                                        as="select"
                                                    />
                                                    <ErrorMessage
                                                        name={`friends.${index}.name`}
                                                        component="div"
                                                        className="field-error"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="secondary"
                                                        onClick={() => remove(index)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="secondary"
                                        onClick={() => push({ name: '', email: '' })}
                                    >
                                        Add Friend
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <button type="submit">Invite</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
