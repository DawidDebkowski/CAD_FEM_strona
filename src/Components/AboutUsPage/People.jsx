import Person from "./Person";
import "./people.css"

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

function DepartmentDiv({ depName, peopleList }) {
    const rows = []
    peopleList.forEach(person => {
        console.log(person.department)
        rows.push(
            <Person key={person.id} name={person.fname} lastName={person.second_name} imageSource={person.image_path} description={person.descr} />
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

function People({ peopleList }) {
    console.log("Wywolanie people");
    const departments = []
    const rows = []
    peopleList.forEach(person => {
        if (!departments.includes(person.department)) {
            console.log(person)
            const departmentList = [];
            peopleList.forEach(person2 => {
                if (person2.department == person.department) {
                    console.log(person)
                    departmentList.push(person2);
                }
            });
            rows.push(<DepartmentDiv key={person.id} depName={person.department} peopleList={departmentList} />);
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