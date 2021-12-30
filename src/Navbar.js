import React, { useState, useRef, useEffect } from "react";

import axios from "axios";
const Tour = ({
  id,
  summary,
  name,
  price,
  ratingsAverage,
  difficulty,
  duration,
  slug,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img
        src={
          "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
        }
        alt={name}
      />
      <footer>
        <div className="tour-info">
          <h4 className="tour-price2">Name :{name}</h4>

          <br></br>
          <h4 className="tour-price2">Average ratings:{ratingsAverage}</h4>
          <h4 className="tour-price2">duration:{duration}</h4>
          <h4 className="tour-price2">difficulty:{difficulty}</h4>
          <h4 className="tour-price2">slug:{slug}</h4>
        </div>
        <h4 className="tour-price">Price:${price}</h4>
        <p>{summary}</p>
      </footer>
    </article>
  );
};

const Navbar = () => {
  let [reply, setReply] = useState([]);
  const getData = async (url, data) => {
    let res = await axios.get(url);
    return res.data;
  };

  let getAllTour = async () => {
    const url = `http://172.27.112.1:3000/api/v1/tours`;
    const newData = await getData(url);
    console.log(newData.data.data)
    setReply(newData.data.data);
    
  };

  useEffect(async() => {
    
    const url = `http://172.27.112.1:3000/api/v1/tours`;
    const newData = await getData(url);
    console.log(newData.data.data)
    setReply(newData.data.data);
  }, []);
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
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          
          {reply.forEach((tour) => {
            return (
              <Tour
                id={1}
                info="this is the tour"
                name="testing Tour"
                price={1400}
                ratingsAverage={4}
                difficulty="easy"
                duration={7}
                slug="mountain-grind-31"
              ></Tour>
            );
          })}
          <Tour
                id={1}
                info={reply[0].name}
                name="testing Tour"
                price={1400}
                ratingsAverage={4}
                difficulty="easy"
                duration={7}
                slug="mountain-grind-31"
              ></Tour>
        </div>
      </section>
    </>
  );
};

export default Navbar;
