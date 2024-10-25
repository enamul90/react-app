import style from '../../assets/css/Login_From.module.css'

const Login_From = () => {


    const FromData = (Event)=>{
        Event.preventDefault();
        let user = Event.target.uname.value;
        let password = Event.target.pwd.value;

        let postBody ={
            username: user,
            password: password
        }

        console.log(postBody);
    };

   


    return (
        <div className={style.card_aria}>
            <h3>Login Form</h3>
            <p>Please enter your username and password</p>

            <br />

            <form onSubmit={FromData}>
                <input className='form-control mb-2' type="text" name='uname' placeholder="Username" required />
                <input className='form-control mb-4' type="password" name='pwd' placeholder="Password" required />
                <button className='btn btn-primary w-100' type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login_From;