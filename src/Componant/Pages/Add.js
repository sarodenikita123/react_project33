import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
    const { register, handleSubmit } = useForm();
  const navi = useNavigate();

  function saveData(data) {
    axios.post(' http://localhost:5000/user', data);
    navi('/show')
  }
  return (
    <>
    
    <div className='container'>
          <center><u><h2>PATIENT FORM:</h2></u></center>
        <form onSubmit={handleSubmit(saveData)} className='w-50 m-3 p-3 border border-4'>
            <label htmlFor='n'>Doctor Name</label>
            <input type='text' id='n' className='form-control'
            {...register('doc')}></input>
            <br></br>
            <label htmlFor='c'>Consultanancy Fees</label>
            <input type='number' id='c' className='form-control'
            {...register('con')}></input>
            <br></br>
            <label htmlFor='d'>Appointement Date</label>
            <input type='date' id='d' className='form-control'
            {...register('app')}></input>
            <br></br>
            <label htmlFor='t'>Appointement Time</label>
            <input type='time' id='t' className='form-control'
            {...register('time')}></input>
            <br></br>
            <label htmlFor='s'>Current Status</label>
            <input type='text' id='s' className='form-control'
            {...register('status')}></input>
            <br></br>
            <input type="submit" value="submit" className='btn btn-primary'></input>
            <input type="submit" value='cancel'className='btn btn-warning float-end'></input>
            
        </form>
    </div>
    
    </>
  )
}

export default Add