

export default function Ternary_Operator() {
    let statuses = true;
    return (
      <div>
  
          {statuses? <button>Sing out</button> : <button>Sing in</button>}
          
      </div>
    )
}
