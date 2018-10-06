import React from "react";
import "./LooneyImage.css";

const LooneyImage = props => (
	<div onClick={() => props.cardClick(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default LooneyImage;
