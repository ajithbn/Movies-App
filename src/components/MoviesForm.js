import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovies } from '../actions/Movies'

const MoviesForm = (props) => {
    const [name, setName] = useState('')
    const [rank, setRank] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'name') {
            setName(e.target.value)
        } else if(attr === 'rank') {
            setRank(e.target.value) 
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id : Number(new Date()),
            name: name,
            rank: rank
        }
        dispatch(addMovies(formData))
        setName('')
        setRank('')
        //console.log('formData', formData)
    }
    return (<div>
        <h4 className=''>Add Movie</h4>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} onChange={handleChange} placeholder='Enter Movie Name' className='form-control form-control-sm'/><br/>
            <input type='number' name='rank' value={rank} onChange={handleChange} placeholder='IMDB Ranking' className='form-control form-control-sm'/>
            <br/>
            <input type='submit' value='Add' className='btn btn-primary btn-sm w-25'/>
        </form>
    </div>)
}

export default MoviesForm 