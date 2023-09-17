function Skills({skills}){
    return (
        <>
        <h2>Skills</h2>
        <ul>
           {skills.map(skill=><li>{skill}</li>)}
        </ul>
        </>
    )
}

export default Skills;