
const buttonStatus = (state)=>{
    if (state){
        return <button>Sign out</button>
    }
    else {
        return <button>Sign in</button>
    }
}

export default function If_Else_Next() {
  return (
    <>
        {buttonStatus(true)} 
    </>
  )
}
