import {Component} from 'react';
import axios from "axios";

class Country extends Component{

baseURL="http://localhost:9080/country/save"

 constructor(props) {
    super(props);
    this.state = {name:''};
    this.state = {message:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

      handleChange(e) {
        this.setState({name:e.target.value})
    }

      handleSubmit = event => {
        console.log("name is:::: "+this.state.name);
        event.preventDefault();
        // axios
        // .post(this.baseURL, {
        //   name: this.state.name
        // })
        // .then((response) => {
        //   console.log(response);
        // });
        const countryDTO = {
          name: this.state.name
        }

        axios.post(this.baseURL,  {name: this.state.name })
        .then(res=>{
          console.log(res);
          console.log(res.data);
        })
     }

    render() {
    return(
          <>
          <h1>Add Country</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <form onSubmit={this.handleSubmit}> 
           <label>Name:</label> 
           <input value={this.state.name} onChange={this.handleChange} type="text" />
           <p>You Entered: {this.state.name}</p>
           <button type="submit">Save</button>
        </form>    
        </>
    )
}
}
export default Country;