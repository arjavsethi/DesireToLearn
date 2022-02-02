import React from "react";
import "./QuestionList.css";
import Question from "./Question";
import { useState, useEffect } from "react";
const QuestionsList = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const host = window.location.hostname;
    const fetchData = async () => {
      var x = await fetch(`http://${host}:4000/api/v1/post`);
      var parsedData = await x.json();

      setdata(parsedData.posts);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="heading-mid currentAffairs mt-3 pt-3">
          Current Affairs!!{" "}
        </h2>
        <div className="row">
          {data.map((element) => {
            return (
              <div className="col md-4" key={element.imageUrl}>
                <Question url={element.imageUrl} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionsList;
