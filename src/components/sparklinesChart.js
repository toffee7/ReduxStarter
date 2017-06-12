import React, {Component} from 'react';
import  { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  let temp = _.round(_.sum(data)/data.length);  
  return temp - 273;
}

export default (props) => {
  return (
    <div>
      <Sparklines height={80} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  );
}
