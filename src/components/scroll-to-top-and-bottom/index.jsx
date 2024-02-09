import { useRef } from "react";
import { useState } from "react";
import useFetch from "../use-fetch";

const ScrollToTopAndBottom = () => {

    const bottomRef = useRef(null)
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  if (pending) {
    return <h1>Loading! Please Wait</h1>;
  }
  if (error) {
    return <h1>Error Occured</h1>;
  }

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  
  const handleScrollToBottom =() =>{
    bottomRef.current.scrollIntoView({behavior:'smooth'})
  }



  return (
    <div>
      <h1>Scroll to top and bottom feature</h1>
      <h3>This is a the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <h3>This is a the Bottom section</h3>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ScrollToTopAndBottom;
