import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { createUser } from "./actions/userAction";
import { useForm } from "react-hook-form";

const CreateUserForm= ({ history}) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const {users} = useSelector(state => state.userReducer) 
  // const filteredUsers = users.filter(userData => userData.email !== user.email)
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const foundUserByEmail = users.find(user=> user.email === data.email)
    const foundUserByphone = users.find(user=> user.phone === data.phone)
    if(foundUserByEmail){
      setError('email',{message:"User already exists with this email"})
    }else if(foundUserByphone){
      setError('phone',{message:"user already exist with same phoe number"})
    }else{

      dispatch(createUser(data))
      history.push("/")
    }
  }
  

  const onError = (error) => {
    if (error.name) {
      setError("name", { message: "Name cant be empty" })
    }
    if (error.email) {
      setError("email", { message: "Enter a correct email" })
    }
    if (error.phone) {
      setError("phone", { message: "Phone number must be 10 character long" })
    }
    if (error.dob) {
      setError("dob", { message: "Dob can't be empty " })
    }
  }

  return (
    <div style={{width:"50%",margin:"auto"}} className="container">
           <div className="row">
             <h1>Create User</h1>
            </div>
      <form  onSubmit={handleSubmit(onSubmit, onError)}>
      <div  className="row">
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"50%"}} className="three columns">
        <label >Name</label>  <input
          {...register("name", {
            required: true
          })}
          
          type="text"
          placeholder="Enter name"
        /> <br />
        {errors?.name && <p style={{color:"Red"}}>{errors.name.message}</p>}
        <label >Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          
          type="text"
          placeholder="Enter email"
        /> {errors?.email && <p style={{color:"Red"}}>{errors.email.message}</p>}<br />
       <label >Phone</label>  <input
          {...register("phone", { required: true, pattern:/^\d{10}$/ })}
          type="phone"
          placeholder="Enter phone number"
          
        />{errors?.phone && <p style={{color:"Red"}}>{errors.phone.message}</p>} <br />
       <label >DOB</label>  
        <input {...register("dob", { required: true })}  type="date" />
        {errors?.dob && <p style={{color:"Red"}}>{errors.dob.message}</p>}
         <br />
        <button type="submit" style={{backgroundColor:"skyblue"}}>Create</button>
        </div>
        </div>
      </form>
    </div>
  );
};
// const CreateUserForm = ({history}) => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(createUser({ name, email, phone, dob }));
//     history.push('/')
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <h1>Create User</h1>
//         </div>
//       <form onSubmit={handleSubmit}>
//       <div className="row">
//         <div className="three columns">
//       <label > Name</label> <input
//       className="u-full-width"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder="enter name"
//         /><br></br>
//         <label >Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="enter email"
//         /><br></br>
//         <label > Phone</label>
//         <input
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           type="text"
//           placeholder="enter phone number"
//         /><br></br>
//         <label> DOB</label>
//         <input
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//           type="date"
//         /><br></br>
//         <button type="submit" style={{backgroundColor:"skyblue"}}>Create</button>
//         </div>
//         </div>
//       </form>
//     </div>
//   );
// };

export default CreateUserForm;
