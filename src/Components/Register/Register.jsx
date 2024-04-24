import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebasae/Firebase.config";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-4">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Email"
            className="mb-4 w-3/4 py-2 px-4"
            type="email"
            name="email"
            id=""
          />
          <br />
          <input
            placeholder="Password"
            className="mb-4 w-3/4 py-2 px-4"
            type="password"
            name="password"
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
