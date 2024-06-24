import "./addPerson.css"
function AddPerson() {
    return (<div className="addPerson">
        <form>
            <label>Imie: </label><br/>
            <input name="fname" className="addPersonInput" type="text" /><br/>

            <label>Nazwisko: </label><br/>
            <input name="lname" className="addPersonInput" /><br/>

            <label>Krótki opis: </label><br/>
            <input name="" className="addPersonInput" /><br/>
            <label htmlFor="department">Wybierz dział: </label>
            <select id="department" name="department">
                <option value="Zarząd">Zarząd</option>
                <option value="Promocja">Promocja</option>
                <option value="Informatyk">Informatyk</option>
                <option value="Członek">Członek</option>
            </select>
        </form>
        <p>test</p>
    </div>
    );
}

export default AddPerson;