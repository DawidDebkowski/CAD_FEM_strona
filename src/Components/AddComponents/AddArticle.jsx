import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import axios from 'axios';

export default function AddArticle(props) {
    const isEdit = false;

    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('cover_desc', values.cover_desc);
        formData.append('cover_img', values.cover_img);

        values.paragraphs.forEach((paragraph, index) => {
            formData.append(`paragraphs[${index}][desc]`, paragraph.desc);
            formData.append(`paragraphs[${index}][image]`, paragraph.image);
            formData.append(`paragraphs[${index}][imageDesc]`, paragraph.imageDesc);
        });

        values.more_images.forEach((image, index) => {
            formData.append(`more_images[${index}][src]`, image.src);
        });

        try {
            const response = await axios.post(import.meta.env.VITE_API_LINK + "/cadfemapi/addArticle/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const initialValues = {
        paragraphs: [
            {
                key: 0,
                imageDesc: '',
                image: '',
                desc: ''
            }
        ],
        title: '',
        cover_desc: '',
        cover_img: '',
        more_images: [
            {
                key: 0,
                src: ''
            }
        ],
    }

    const handleFileChange = () => {
        return 0;
    }

    return (
        <div>
            <h1>Add Article</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                // {async (values) => {
                //     await new Promise((r) => setTimeout(r, 500));
                //     alert(JSON.stringify(values, null, 2));
                // }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <fieldset>
                            <legend>{isEdit ? "Edit Article" : "Add Article"}</legend>
                            <label>Title: </label><br />
                            <Field
                                name="title"
                                className="addArticleInput"
                                type="text"
                            /><br /><br />

                            <label htmlFor="cover_image">{!isEdit ? "Choose cover image:" : "If you don't want to change the image, don't upload a new file."}</label> <br />
                            <input
                                type="file"
                                id="cover_image"
                                name="cover_image"
                                onChange={(event) => {
                                    setFieldValue("cover_img", event.currentTarget.files[0]);
                                }}
                            />
                            <br /><br />

                            <label>Cover Description: </label><br />
                            <Field
                                name="cover_desc"
                                className="addArticleInput"
                                type="text"
                                as="textarea"
                            /><br /><br /><br />

                            <FieldArray name="paragraphs">
                                {({ insert, remove, push }) => (
                                    <>
                                        {values.paragraphs.length > 0 &&
                                            values.paragraphs.map((paragraph, index) => (
                                                <div className="row" key={index}>
                                                    <fieldset>
                                                    <div className="col">
                                                        <label htmlFor={`paragraphs.${index}.desc`}>Description</label><br />
                                                        <Field
                                                            name={`paragraphs.${index}.desc`}
                                                            placeholder="Description"
                                                            type="text"
                                                            className="addArticleInput"
                                                            as="textarea"
                                                        /><br />
                                                        <ErrorMessage
                                                            name={`paragraphs.${index}.desc`}
                                                            component="div"
                                                            className="field-error"
                                                        /><br />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor={`paragraphs.${index}.image`}>Image</label><br />
                                                        <input
                                                            type="file"
                                                            id={`paragraphs.${index}.image`}
                                                            name={`paragraphs.${index}.image`}
                                                            onChange={(event) => {
                                                                setFieldValue(`paragraphs.${index}.image`, event.currentTarget.files[0]);
                                                            }}
                                                        /><br />
                                                        <ErrorMessage
                                                            name={`paragraphs.${index}.image`}
                                                            component="div"
                                                            className="field-error"
                                                        /><br />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor={`paragraphs.${index}.imageDesc`}>Image Description</label><br />
                                                        <Field
                                                            name={`paragraphs.${index}.imageDesc`}
                                                            placeholder="Image Description"
                                                            type="text"
                                                            className="addArticleInput"
                                                        /><br />
                                                        <ErrorMessage
                                                            name={`paragraphs.${index}.imageDesc`}
                                                            component="div"
                                                            className="field-error"
                                                        /><br />
                                                    </div>
                                                    <div className="col">
                                                        <button
                                                            type="button"
                                                            className="secondary"
                                                            onClick={() => remove(index)}
                                                        >
                                                            X
                                                        </button><br />
                                                    </div>
                                                    </fieldset><br />
                                                </div>
                                            ))}
                                        <button
                                            type="button"
                                            className="secondary"
                                            onClick={() => push({ key: values.paragraphs.length, imageDesc: '', image: '', desc: '' })}
                                        >
                                            Add Paragraph
                                        </button><br />
                                    </>
                                )}
                            </FieldArray>
                            <button type="submit">Submit</button><br />
                        </fieldset>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
