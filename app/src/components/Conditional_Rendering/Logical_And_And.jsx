

export default function Logical_And_And() {
    let statuses= true;
  return (
    <div>
        {statuses && <button></button>}
        <h2>{statuses && "Condition is true"}</h2>
    </div>
  )
}
