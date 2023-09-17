function Interest({interests}){
    return (
        <>
        <h2>Interest</h2>
        <ul>
           {interests.map(interest=><li>{interest}</li>)}
        </ul>
        </>
    )
}

export default Interest;