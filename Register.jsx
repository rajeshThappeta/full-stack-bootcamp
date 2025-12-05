import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //function to form submit
  const onFormSubmit = (newUser) => {
    newUser.todos = [];
    console.log(newUser);
  };

  return (
    <div>
      <h1 className="text-center text-info display-3">User Registration</h1>
      {/* registration form */}
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <input type="text" {...register("name", { required: true })} className="form-control" placeholder="Name" />
          {/* name vaildation error messages */}
          {errors.name?.type === "required" && <p className="text-danger">Name is required</p>}
        </div>
        <div className="mb-3">
          <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Email" />
          {/* email vaildation error messages */}
          {errors.email?.type === "required" && <p className="text-danger">Email is required</p>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            {...register("password", { required: true })}
            className="form-control"
            placeholder="Password"
          />
          {/* name vaildation error messages */}
          {errors.password?.type === "required" && <p className="text-danger">Password is required</p>}
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
