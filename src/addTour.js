import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import './style.css'
const Navbar = () => {
    
    
    let [name, setname] = useState("");
    let [duration, setduration] = useState("");
    let [maxGroupSize, setmaxGroupSize] = useState("");
    let [difficulty, setdifficulty] = useState("");
    let [ratingsAverage, setratingsAverage] = useState("");
    let [price, setprice] = useState("");
    let [summary, setsummary] = useState("");
    let [imageCover, setimageCover] = useState("");
    const [error, seterror] = useState(null)
    let [ID, setID] = useState("");

    // call an api 
    const getData = async (url, data) => {
        let res = await axios.post(url, data);
        return res.data;
    };
    let addTour = async () => {
    
        const url = `http://172.27.112.1:3000/api/v1/tours`;
        const newData = await getData(url, {
            
                "name":name,
                "duration":duration,
                "maxGroupSize":maxGroupSize,
                "difficulty":difficulty,
                "ratingsAverage":ratingsAverage,
                "price":price,
                "summary":summary,
                "imageCover":imageCover
            
        });
        if(newData.status==='success'){
          alert("added")
          window.location.replace("http://localhost:3001/dashbord");
        }else{
          alert ("please check your details")
        }
 
      };


      
  return (
    <>
    
    <nav>
        <div className="nav-center">
          <div className="nav-header"></div>
          <div className="links-container">
            <ul className="links">
              <li>
                <a href={"/dashbord/"}>{"All Tours"}</a>
              </li>
              <li>
                <a href={"/dashbord/addTour"}>{"Add Tours"}</a>
              </li>
              <li>
                <a href={"/dashbord/deleteTour"}>{"Delete Tour"}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container bootstrap snippets bootdey">
          
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
          <div class="row login-page">
              <div class="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
                 
                      <div class="form-content">
                          
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="duration" value={duration} onChange={(e)=>{setduration(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="maxGroupSize" value={maxGroupSize} onChange={(e)=>{setmaxGroupSize(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="difficulty" value={difficulty} onChange={(e)=>{setdifficulty(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="ratingsAverage" value={ratingsAverage} onChange={(e)=>{setratingsAverage(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="price" value={price} onChange={(e)=>{setprice(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="summary" value={summary} onChange={(e)=>{setsummary(e.target.value); seterror(null)}}/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control input-underline input-lg" placeholder="imageCover" value={imageCover} onChange={(e)=>{setimageCover(e.target.value); seterror(null)}}/>
                          </div>
                        
                      </div>
                      {error ? 
                      <p style={{marginTop : '-20px' , fontWeight : '100px' , color : 'red'}}>Invalid id or password</p> : null}

                      <button onClick={()=>{addTour()}}  class="btn btn-info btn-lg">
                          Add tour
                      </button>
                  
              </div>
          </div>
      </div>
      
    </>
  );
};

export default Navbar;
