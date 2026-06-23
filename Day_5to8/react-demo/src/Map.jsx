function Map() {

    const skills = ["html", "css", "javascript"]
    const age = 31
  return (
    <>
    <h2>Map Component</h2>
    <ul>
        {skills.map((up)=>(
        <li>{up}</li>
    ))}
    </ul>
    <h1>{age>=18 ? "Eligible" : "Not Eligible"}</h1>
    </>
  )
}
export default Map
