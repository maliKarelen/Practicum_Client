import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { store } from './store/store'
import './myform.css'
import { useState } from 'react';
import { useDispatch ,useSelector} from "react-redux"
import AddChild from './addChild'
import { postUser } from './apiCalls'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';




//רק בסיעתא דשמיא!!!!!!!!!!!!!!!!!!!!!!!
function Form() {

  const dispatch = useDispatch();
  const [children, setChildren] = useState();
  const user=useSelector(state => state.user);


  function save() {
    console.log(user)
  
    store.dispatch({ type: "init", payload: 0 }).then(postUser(user))

  }


  function addChild(e) {
    store.dispatch({ type: "addChildren", payload: e.target.value })
    let c = []
    console.log(e.target.value)
    for (let i = 0; i < e.target.value; i++) {
      c.push(<AddChild index={i} />)
    }
    setChildren(c)

  }


  function hundleChange(t, e) {
    console.log(e.target.value)
    store.dispatch({ type: t, payload: e.target.value })
  }

  return (
    <div id="divForm">
      <p>רק בסיעתא דשמיא</p>
      <form >


        <h2>MY FORM</h2>

        <div className="row">
          <div className="col">
            <label>First Name</label>
            <input required type="text" placeholder={user.firstName} className="form-control" aria-label="First name" onChange={(e) => { hundleChange('updateFirstName', e) }}></input>

          </div>
          <div className="col">
            <label>Last Name</label>
            <input required type="text" placeholder={user.lastName} className="form-control" aria-label="Last name" onChange={(e) => { hundleChange('updateLastName', e) }}></input>

          </div>
        </div>
        <div className="row">
          <div className="col">

            <label>Identity</label>
            <input type="text" onKeyPress={(event) => (!/[0-9]/.test(event.key)) && event.preventDefault()} required maxLength={9} minLength={9} className="form-control" aria-label="First name" placeholder={user.tz} onChange={(e) => { hundleChange('updateTz', e) }} ></input>

          </div>
          <div className="col">
            <label>Birth Date</label>
            <input required type="date" className="form-control" aria-label="Last name" placeholder={user.birthDate} onChange={(e) => { hundleChange('updateBirthDate', e) }}></input>

          </div>
        </div>


        <br></br>
        <label>HMO</label>
        <Select required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"


          value={store.getState().userHMO}
          defaultValue="none"
          onChange={(e) => { hundleChange('updateHMO', e); console.log(user) }}
          label="Age"
        >

          <MenuItem value={1}>Macabi</MenuItem>
          <MenuItem value={2}>Meuchedet</MenuItem>
          <MenuItem value={3}>Leumit</MenuItem>
          <MenuItem value={4}>Klalit</MenuItem>
        </Select>
        <br></br>
        <RadioGroup required onClick={(e) => {hundleChange('updateGender',e); console.log(e.target.value) }}
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio onClick={(e) =>  {hundleChange('updateGender',e); console.log(e.target.value) }} />} label="Female" />
          <FormControlLabel value="male" control={<Radio onClick={(e) =>   {hundleChange('updateGender',e); console.log(e.target.value) }} />} label="Male" />
          <br></br>
        </RadioGroup>
        <input required type="number" min={0} className="form-control" aria-label="Last name" placeholder="amount children" onChange={(e) => addChild(e)}></input>

        <br></br>
        {children}

        <br></br>

        <button onClick={save} type="submit" className="btn btn-outline-primary"  >save</button>

        <br></br>
      </form>

    </div>



  )

}

export default Form;