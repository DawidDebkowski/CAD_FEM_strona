import Person from "./person";

function People({peopleList})
{
    const rows = []
    peopleList.forEach(person => {
        rows.push(
            <Person name={person.name} lastName={person.lastName} imageSource={person.imageSource} description={person.description}/>
        )
    });
    return (
        <>
            <section>
                {rows}
            </section>
        </>
    )
}

export default People;