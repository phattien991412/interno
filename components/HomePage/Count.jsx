import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Count = () => {
  const data = [
    {
      number: "12",
      text: "Years Of Experiance",
      id: "count1"
    },
    {
      number: "85",
      text: "Success Project",
      id: "count2"
    },
    {
      number: "15",
      text: "Active Project",
      id: "count3"
    },
    {
      number: "95",
      text: "Happy Customers",
      id: "count4"
    }
  ];

  const countRef = useRef();
  const countUpRef = useRef([])

  useLayoutEffect(() => {

    const formatNumber = (value, decimals) => {
      let s = (+value).toLocaleString('en-US').split(".");
      return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
    }

    let ctx = gsap.context(() => {
      const matchMediaQuery = window.matchMedia("(min-width: 1200px)");
      const startValue = matchMediaQuery.matches
        ? "-10% center"
        : "-10% center";

        const countElement = countRef.current;

        gsap.from(countUpRef.current, {
          textContent: "0",
          duration: 3,
          ease: "back",
          modifiers: {
            textContent: value => formatNumber(value, 0)
          },
          scrollTrigger: {
            trigger: countElement,
            start: "-10% center",
            end: "20% 20%",
            // markers: true,
            toggleActions: "play none none reverse",
            onUpdate: () => {
              countUpRef.current.textContent = Math.floor(parseFloat(countUpRef.current.textContent));
            }
          }
        });

      // .from("button", { opacity: 0, scale: 1, stagger: 0.1 });
    }, countRef);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div ref={countRef} className="w-full bg-primaryColor3">
      <table className="w-[80%] lg:w-[60%] mx-auto py-16 border-separate text-center">
        <tbody>
          <tr>
            {data.map((item, index) => (
              <td key={item.text} className="border-r border-primaryColor1">
                <p
                  ref={(element) => {
                    if (element) {
                      countUpRef.current[index] = element;
                    }
                  }}
                  className="text-5xl lg:text-[85px] text-primaryColor1"
                >
                  {item.number}
                </p>
                <p>{item.text}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Count;
