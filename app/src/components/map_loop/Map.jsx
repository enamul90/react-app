

export default function Map() {
    let city = ['New York', 'Dhaka','Alaska', 'Barishal','khuna']
  return (
    <>
        <ol>
            {
                city.map((item,i)=>{
                    return <li key={i}>{item}</li>
                })
            }
        </ol>
    </>
  )
}
