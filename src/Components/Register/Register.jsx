import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebasae/Firebase.config";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(accepted);

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 charecter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your Password Should have at least one upper case");
      return;
    } else if (!accepted) {
      setRegisterError("Please Accept Our Terms And Condition");
    }

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
          <div className="relative ">
            <input
              placeholder="Password"
              className="mb-4 w-3/4 py-2 px-4"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-44"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <br />
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Please accept our terms and condition
            </label>
          </div>
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
