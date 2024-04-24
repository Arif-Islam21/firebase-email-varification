import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebasae/Firebase.config";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 charecter");
      return;
    }

    // reset error
    setRegisterError("");
    setSuccess("");

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
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
            required
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
        {registerError ? (
          <p className="text-red-600">{registerError}</p>
        ) : (
          <p className="text-green-600">{success}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
