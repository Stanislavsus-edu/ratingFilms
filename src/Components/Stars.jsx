import React, { useState } from 'react';
import Star from "./Star";
import shortid from "shortid"

export default function Stars({count}) {

  if(typeof count !== 'number' || count < 0 || count > 5 ){
    return null
  }

  const starsElements = []
  for (let i = 0; i < count; i += 1) {
    starsElements.push(<Star key={shortid.generate()} />);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {starsElements}
    </ul>
  )
}