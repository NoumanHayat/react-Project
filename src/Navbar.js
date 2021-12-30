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
  image,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img
        src={
          image
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
  let replys = [];
  const getData = async (url, data) => {
    let res = await axios.get(url);
    return res.data;
  };

  let getAllTour = async () => {
    const url = `http://172.27.112.1:3000/api/v1/tours`;
    const newData = await getData(url);
    console.log(newData.data.data);
    setReply(newData.data.data);
  };

  useEffect(() => {
    async function fetchData() {
      const url = `http://172.27.112.1:3000/api/v1/tours`;
      const newData = await getData(url);
      console.log(newData.data.data);
      replys = newData.data.data;
      console.log(replys[0].name);
      setReply(newData.data.data);
    }
    fetchData();
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
        <div className="mainContent">
          {reply.map((e) => {
            return (
              <Tour
                id={1}
                image={e.imageCover}
                summary={e.summary}
                name={e.name}
                price={e.price}
                ratingsAverage={e.ratingsAverage}
                difficulty={e.difficulty}
                duration={e.duration}
                slug={e.slug}
              ></Tour>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Navbar;
