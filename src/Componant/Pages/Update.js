import React, {useEffect}from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate ();

    async function fetchData(){
        const result = await axios.get (`http://localhost:5000/user/${userId}`)
        setValue('doc', result.data.doc);
        setValue('con', result.data.con);
        setValue('app', result.data.app);
        setValue('time', result.data.time);
        setValue('status', result.data.status);
    }
  
    function saveData(data){
       
        axios.put(`http://localhost:5000/user/${userId}`, data);
        navi('/show');
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit(saveData)} className=' border border-4 p-3 m-3 mt-5 w-50'>
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
            <input type="submit" value="update" className='btn btn-primary'></input>
            <input type="submit" value='delete'className='btn btn-warning float-end'></input>
            
        </form>
    </div>
    </>
  )
}

export default Update