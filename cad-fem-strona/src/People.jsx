import Person from "./Person";
import "./people.css"

function DepartmentRow({name})
{
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

function DepartmentDiv({depName, peopleList})
{
    const rows = []
    peopleList.forEach(person => {
        console.log(person.department)
        rows.push(
            <Person name={person.name} lastName={person.lastName} imageSource={person.imageSource} description={person.description}/>
        )
    });
    return (
        <>
            <div className="departmentDiv">
                <DepartmentRow name={depName}/>
                <section id="peopleSec">
                    <div id="people">
                        {rows}
                    </div>
                </section>
            </div>
        </>
    )
}

function People({peopleList})
{
    const departments = []
    const rows = []
    peopleList.forEach(person => {
        if(!departments.includes(person.department))
        {
            const departmentList = [];
            peopleList.forEach(person2 => {
                if(person2.department==person.department)
                {
                    departmentList.push(person);
                }
            });
            rows.push(<DepartmentDiv depName={person.department} peopleList={departmentList}/>);
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