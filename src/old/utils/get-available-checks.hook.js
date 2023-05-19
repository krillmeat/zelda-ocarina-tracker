import React, { useEffect, useState, useContext } from "react"
import { AppContext } from '../app';
import { isCheckAvailable } from "./checks.utils";

export const useGetAvailableChecks = () => {
  const [context,setContext] = useContext(AppContext);
  const [availableChecks, setAvailableChecks] = useState([]);

useEffect(()=>{
  // console.log("CHECKS ? ",context.checks);
  // for(let area of Object.keys(context.checks)){
  //   let areaChecks =
  //   console.log("  - ",area);
  //   for(let i in context.checks[area]){
  //     let check = context.checks[area][i];
  //     console.log("    - Check: ",check.checkName);
  //     console.log("      - ",isCheckAvailable(check.reqs,context.collected));
  //     if(isCheckAvailable(check.reqs,context.collected)){
  //       // setAvailableChecks([...availableChecks, ])
  //     }
  //   }
  // }
},[context.collected])

return availableChecks;
}
