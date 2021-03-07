import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {showStatus, showSpecies, showGender} from '../../redux/actions/filters'
import { loadCharacters } from "../../redux/actions/loadAndPutCharacters";
import { connect } from "react-redux";

function SelectStatus({onloadCharacters, showStatus, showSpecies, showGender,page }) {

  const handleChange = (event) => {
    console.log(page, event.target.value)
    onloadCharacters(page, event.target.value)
  }
  return (
    <FormControl className="SSS">
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        value={10}
       onChange={handleChange}
      >
        <MenuItem value={'alive'}>alive</MenuItem>
        <MenuItem value={"unknown"}>unknown</MenuItem>
        <MenuItem value={"dead"}>dead</MenuItem>
      </Select>
    </FormControl>
  );
}


const mapStateToProps = (state) => {
    return {
      status: state.putCharacters.characters,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onloadCharacters: (page, status) => dispatch(loadCharacters(page,status)),
      showStatus: (status) => dispatch(showStatus(status)),
      showSpecies: (species) => dispatch(showSpecies(species)),
      showGender: (gender) => dispatch(showGender(gender))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectStatus);
