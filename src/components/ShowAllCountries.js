import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Route, NavLink, Routes  } from 'react-router-dom';
import UpdateCountry from './UpdateCountry';
import DeleteCountry from './DeleteCountry';

const ShowAllCountries = (props) => {

  const baseURL = "http://localhost:9080/country/findAll"

  const [countryList, setCountryList] = useState([]);

  const navigate = useNavigate();

  const [fetchDone,setFetchDone] = useState(false)


  // useEffect(() => {
  //     fetch(baseURL)
  //     .then(response=>response.json)
  //     .then(data=>{
    
  //       console.log("Data is :::: "+data.countryList)
  //       setCountryList(data.countryList)
  //     })
  //     .catch(err=>console.error(err));
  {/*   <td><button style={{ marginLeft: "10px" }} onClick={updateCountry(country)}>Update</button>
                  <button style={{ marginLeft: "10px" }} onClick={deleteCountry(country)}>Delete</button> </td> */}
  // },[]);

  useEffect(()=> {
    // let result = [];
    console.log("fetch done is::: "+fetchDone)
    axios.get(baseURL).then((res)=>{
      console.log(res.data);
      console.log(res.data[0]);
      // if(!fetchDone) {
      setCountryList(res.data);
      // }
      // setFetchDone(true)
    }) // [] ==> Will ensure that useEffect is called only once.
 
  },[]);


  // let html =
  //   <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th> Sl Number</th>
  //           <th> Name</th>&nbsp;&nbsp;&nbsp;
  //           <th>Actions</th>&nbsp;&nbsp;&nbsp;
  //         </tr>
  //         <tbody>
  //           {countryList.map((country) =>
  //             <tr key={country.serialNo}>
  //               <td>{country.serialNo}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //               <td>{country.countryDTO.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  //             </tr>
  //           )}
  //         </tbody>
  //       </thead>
  //     </table>
  //   </div>


  let html =                 <td>{country.serialNo}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <td>{country.countryDTO.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


  return (
    
    <>
      <h2>Show All Countries</h2>
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
      {/* {html} */}

      <div>
      <table>
        <thead>
          <tr>
            <th> Sl Number</th>
            <th> Name</th>&nbsp;&nbsp;&nbsp;
            <th>Actions</th>&nbsp;&nbsp;&nbsp;
          </tr>
          <tbody>
            {countryList.map((country) =>
              <tr key={country.serialNo}>
                {/* <td>{country.serialNo}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>{country.countryDTO.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                {html}
              </tr>
            )}
          </tbody>
        </thead>
      </table>
    </div>


    </>
  );

}

export default ShowAllCountries;