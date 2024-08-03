import './Search.css'
import { useState } from "react";

const Search = ({data}) => {

  const [val, setVal] = useState('')
  const [filteData, setFilterData] = useState(data)

  const filterHandler = () =>{
    let res = val.filter((item)=> item.title.toLowerCase().includes(val.toLowerCase()))
    setFilterData(res)
  }

  return (
    <>
      <div className="input-field">

        <div className="left">
          <h1 className="heading">Apna Store <br /><span>Made in Indian</span></h1>
        </div>
        <div className="right">
          <input type="text" placeholder = "Search you Items" onChange={(e)=>setVal(e.target.value)}/>
          <button onClick={filterHandler} id="btn">Search</button>
        </div>

      </div>
    </>
  );
};

export default Search;
