function Education({education}){
    return (
        <>
        <h2>Education</h2>
        <ul>
           {education.map(degree=><li>{degree}</li>)}
        </ul>
        </>
    )
}

export default Education;