import "./addPerson.css"
function AddPerson() {
    return (<div className="addPerson">
        <form>
            <fieldset>
                <legend>Dodaj osobę</legend>
                <label>Imie: </label><br />
                <input name="fname" className="addPersonInput" type="text" /><br />

                <label>Nazwisko: </label><br />
                <input name="lname" className="addPersonInput" /><br />

                <label>Krótki opis: </label><br />
                <input name="desc" className="addPersonInput" /><br />

                <label htmlFor="department">Wybierz dział: </label><br />
                <select name="dep" id="department" >
                    <option value="Zarząd">Zarząd</option>
                    <option value="Promocja">Promocja</option>
                    <option value="Informatyk">Informatyk</option>
                    <option value="Członek">Członek</option>
                </select>

                <br /><br />
                <label htmlFor="photo">Wybierz zdjęcie: </label> <br />
                <input type="file" id="photo" name="pic" />

                <br/><br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    </div>
    );
}

export default AddPerson;