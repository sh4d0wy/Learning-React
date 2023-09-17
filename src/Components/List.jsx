import React from "react";

function List({layout,items}){
    switch (layout) {
      case "numbered":
        return <ol>{items.map((item) => <li key={item}>{item}</li>)}</ol>;
      case "alphabets":
        return <ol type="a">{items.map((item) => <li key={item}>{item}</li>)}</ol>;
      case "bullets":
      default:
        return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
    }
  };

export default List;
