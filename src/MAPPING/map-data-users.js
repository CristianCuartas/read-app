import React, {Component} from 'react';
import dataUsers from '../DATAJSON/data-users';

class Example1 extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

 mapping=()=>{
    var mappingUsers= new Map (dataUsers);
    console.log(Array.from(dataUsers));
}

render(){
    const map=this.mapping();

    return(
         <map/>
    )
};
}

export default Example1;
