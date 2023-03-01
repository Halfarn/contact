import React from "react";

export default function Card(props) {
  return (
    <div>
      
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
    </div>
  );
}
