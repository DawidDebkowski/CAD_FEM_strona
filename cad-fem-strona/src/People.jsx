import Person from "./Person";
import "./people.css"

function DepartmentRow({name})
{
    console.log(name)
    return (
        <div id="departmentRow">
            <h2>
                {name}
            </h2>
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
            <DepartmentRow name={depName}/>
            <section id="peopleSec">
                <div id="people">
                    {rows}
                </div>
            </section>
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
                {rows}
            </section>
        </>
    )
}

export default People;