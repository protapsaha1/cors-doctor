import { Link } from 'react-router-dom';
import logImg from '../../../assets/images/login.avif';
import { FaFacebook, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useContext,  } from 'react';
import { UserContext } from '../../../Auth/AuthContext';
import Swal from 'sweetalert2';
// useRef resetPassword
// const passRef = useRef(true);
const Login = () => {
    const { googleLogin, loginEmailAndPass,  } = useContext(UserContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { email, password }

        loginEmailAndPass(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Google login has been successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    position: 'middle',
                    icon: 'error',
                    title: "login is not successful",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-24 lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-rose-700">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover" ref={passRef}>Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <h1 className='text-center my-3'>New to cars Doctors? <Link className='text-rose-600 font-bold ' to="/sign-up">Sign Up</Link></h1>
                        <div className='flex justify-center'>
                            <button className="btn btn-square btn-outline mx-2">
                                <FaFacebook className='w-6 h-6' />
                            </button>
                            <button className="btn btn-square btn-outline mx-2">
                                <FaLinkedinIn className='w-6 h-6' />
                            </button>
                            <button className="btn btn-square btn-outline mx-2" onClick={handleGoogleLogin}>
                                <FaGoogle className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;