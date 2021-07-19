
import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { updateUser } from "./actions/userAction";
import { useForm } from "react-hook-form";

const EditUser = ({ history, location }) => {
  const user = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();
  const {users} = useSelector(state => state.userReducer) 
  const filteredUsers = users.filter(userData => userData.email !== user.email)

  const dispatch = useDispatch();


  const onSubmit = (data) => {
    const foundUserByphone = filteredUsers.find(userData=> userData.phone === data.phone)
   if(foundUserByphone){
      setError('phone',{message:"user already exist with same phoe number"})}
      else{
    dispatch(updateUser({...data,email:user.email}))
    history.push("/")}
  }

  const onError = (error) => {
    if (error.name) {
      setError("name", { message: "Name cant be empty" })
    }
    // if (error.email) {
    //   setError("email", { message: "Enter a valid email" })
    // }
    if (error.phone) {
      setError("phone", { message: "Phone number must be 10 character long" })
    }
    if (error.dob) {
      setError("dob", { message: "Dob can't be empty " })
    }
  }

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div className="row">
             <h1>Update User</h1>
            </div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="row">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%" }} className="three columns">
            <label >Name</label>  <input
              {...register("name", {
                required: true
              })}
              defaultValue={user.name}
              type="text"
              placeholder="enter name"
            /> <br />
            {errors?.name && <p>{errors.name.message}</p>}
            {/* <label >Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              defaultValue={user.email}
              
              placeholder="enter email"
            /> {errors?.email && <p>{errors.email.message}</p>}<br /> */}
            <label >Phone</label>  <input
              {...register("phone", { required: true, maxLength: 10, minLength: 10 })}
              defaultValue={user.phone}
              type="text"
              placeholder="enter phone number"
            />{errors?.phone && <p>{errors.phone.message}</p>} <br />
            <label >DOB</label>  <input {...register("dob", { required: true })} defaultValue={user.dob} type="date" />{errors?.dob && <p>{errors.dob.message}</p>} <br />
            <button type="submit">Update</button>
          </div> </div> </form>
    </div>
  );
};

export default EditUser;
