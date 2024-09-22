import { Link } from "react-router-dom";
import Person from "./Person";
import "./people.css"
import { myRoutes } from "../../App";

/*
{"id":1,
"fname":"Dawid",
"second_name":"D\u0119bkowski",
"department":"Informatyk",
"descr":"Zrobi\u0142 strone",
"image_path":"\/zdjecia\/osoby\/dawiddebkowski.png"},
*/


function DepartmentRow({ name }) {
    console.log(name)
    return (
        <div className="departmentRow">
            <h1>
                {name}
            </h1>
            <hr></hr>
        </div>
    )
}

function DepartmentDiv({ depName, peopleList, isAdmin=false }) {
    const rows = []
    peopleList.forEach(person => {
        console.log(person.department)
        rows.push(
            <>
                <Person key={person.id} name={person.fname} lastName={person.second_name} imageSource={person.image_path} description={person.descr} />
                {isAdmin==true ? ( <Link state={{person: person}} to={{pathname:myRoutes.addPerson, state: {person}}}>EDYTUJ</Link>) : <></>}
                {isAdmin==true ? ( <Link state={{person: person}} to={{pathname:myRoutes.removeMemberPage, state: {person}}}>USUŃ</Link>) : <></>}
            </>
        )
    });
    return (
        <>
            <div className="departmentDiv">
                <DepartmentRow name={depName} />
                <section id="peopleSec">
                    <div id="people">
                        {rows}
                    </div>
                </section>
            </div>
        </>
    )
}

function People({ peopleList, isAdmin = false }) {
    console.log("Wywolanie people");
    const departments = []
    const rows = []
    peopleList.forEach(person => {
        //dealing with departments
        if (!departments.includes(person.department)) {
            const departmentList = [];
            peopleList.forEach(person2 => {
                if (person2.department == person.department) {
                    departmentList.push(person2);
                }
            });
            rows.push(<DepartmentDiv isAdmin={isAdmin} key={person.id} depName={person.department} peopleList={departmentList} />);
            departments.push(person.department)
        }
    });
    return (
        <>
            <section id="departments">
                {/* <div section="departments"> */}
                {rows}
                {/* </div> */}
            </section>
        </>
    )
}

export default People;