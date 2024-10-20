

const Immediately_Invoked = () => {
    let statuses = true;
    return (
        <>
            {(()=>{
                if(statuses) {
                    return <button>Sign out</button>
                }
                else {
                    return <button>Sign in</button>
                }
            })()}
        </>
    );
};

export default Immediately_Invoked;