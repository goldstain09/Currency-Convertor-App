import React, { useEffect, useRef, useState } from "react";
import './HomePage.css'
import Input from "./Input";
import { useDispatch } from "react-redux";
import { getAllCurrencyDataStart } from "../Redux/CC.Actions";
import anime from "animejs";
function HomePage() {

  // for showing or visible of Input Component
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();


  // anime
  const btn_element = useRef();
  useEffect(() => {
    const btn_eLE = btn_element.current;
    anime({
      targets: btn_eLE,
      translateX: {
        value: 210,
        duration: 800
      },
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250
    });
  }, [])


  return (
    <>
      <div className="container-fluid">
        {
          check ? <Input /> : (<div>

            <button ref={btn_element} onClick={() => {
              setCheck(true);
              dispatch(getAllCurrencyDataStart());
            }}>
              {'Get Started >'}
            </button>
            <div className="div1">
            </div>
            <div className="div2">
            </div>
            <div className="div3">
            </div>
            <div className="div4">
            </div>
          </div>)
        }
      </div>
    </>
  );
}

export default HomePage;
