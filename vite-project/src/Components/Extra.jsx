function Extra({extras}){
    return (
        <>
        <h2>ExtraCurricullar</h2>
        <ul>
           {extras.map(extra=><li>{extra}</li>)}
        </ul>
        </>
    )
}

export default Extra;