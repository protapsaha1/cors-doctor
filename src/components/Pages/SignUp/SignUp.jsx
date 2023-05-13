import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logImg from '../../../assets/images/login.avif';
import { useContext } from "react";
import { UserContext } from "../../../Auth/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
    const { googleLogin, CreateEmailAndPass } = useContext(UserContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // const user = { email, password, confirm }

        if (password === confirm) {
            alert("please confirm your password");
        }

        CreateEmailAndPass(email, password)
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error.message)
            })
    }

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
                    position: 'top-end',
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
                        <h2 className="text-3xl font-bold text-rose-700">Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
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
                                <input type="password" name='password' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm  Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h1 className='text-center my-3'>Have an Account in cars Doctors? <Link className='text-rose-600 font-bold ' to="/login">Login</Link></h1>
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

export default SignUp;