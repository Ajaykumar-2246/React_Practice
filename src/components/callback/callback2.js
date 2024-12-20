import React from "react";
import { memo } from "react";

function Child({incre,count}){
    console.log("i am executing..")
    return(
        <React.Fragment>

        </React.Fragment>
    );
}

export default memo(Child);