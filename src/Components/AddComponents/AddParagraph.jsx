function AddParagraph({id, handleChange, handleFileChange, isEdit}) {
    return (
        <div className="addParagraphInput">
            <label>Akapit {id.toString()}: </label><br />
            <textarea
                id={id.toString()}
                name={"desc"}
                className="addParagraphInput"
                type="text"
                onChange={handleChange}
            /><br />

            <label htmlFor="p_image">{!isEdit ? "Wybierz zdjęcie:" : "Jeżeli nie chcesz zmieniać zdjęcia, nie wgrywaj nowego pliku."}</label> <br />
            <input
                id={id.toString()}
                type="file"
                name={"p_image" + id.toString()}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default AddParagraph;