import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ formSub }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSub = (data) => {
    data.id = Date.now();
    data.fav = false;
    formSub(data);
    reset();
  };

  return (
    <div className="col-sm-4 shadow rounded border g-5">
      <h1 className='text-center pt-1 text-secondary h2'>Add Contacts</h1>
      <form onSubmit={handleSubmit(onSub)}>
        <div className="form-group mb-0">
          <label className='col-form-label'>Name :</label>
          <input type="text" className='form-control' {...register("name", { required: "Name is Required" })} />
          {errors.name && (
            <small className='text-danger'>{errors.name.message}</small>
          )}
        </div>
        <div className="form-group mb-0">
          <label className='col-form-label'>Email :</label>
          <input
            type="text"
            className='form-control'
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address!!",
              },
            })}
          />
          {errors.email && (
            <small className='text-danger'>{errors.email.message}</small>
          )}
        </div>
        <div className="form-group mb-0">
          <label className='col-form-label'>Phone number :</label>
          <input
            type="text"
            className='form-control'
            {...register("phone", {
              required: "Phone is Required",
              pattern: {
                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/,
                message: "Invalid Phone number !",
              },
            })}
          />
          {errors.phone && (
            <small className='text-danger'>{errors.phone.message}</small>
          )}
        </div>
        <input type="submit" className='btn btn-primary my-3' value="Add Contact" />
      </form>
    </div>
  );
}

export default Form;
