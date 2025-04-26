import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "host/actions";

const About = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="about-container">
      <div className="counter">
        <h3>About - Microfrontend: MFE-1</h3>
        <p>Couter : {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default About;
