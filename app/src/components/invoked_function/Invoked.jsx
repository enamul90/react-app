

export default function Invoked() {
    let result = 60;
  return (
    <>
        {(
            () => {
                if(result >=50){
                    return <h2>Result is above or equal to 50</h2>
                }
                else{
                    return <h2>Result is below 50</h2>
                }
            }
        )()}
    </>
  )
}
