import { ITEM_ADULT_ONLY, ITEM_ALL_AGE, ITEM_CHILD_ONLY } from "../constants/item.const";

export const isCheckAvailable = (reqs,collectedState,currAge) => {
  if(hasNoReqs(reqs) && meetsAgeReq){ return true } // No Requirements at the Right Age (Zero State)

  let fullReqs = reqs.full.length === 0 ? true : meetsFullReqs(reqs.full,collectedState,currAge);
  let oneOfReqs = reqs.one.length === 0 ? true : meetsOneOfReqs(reqs.one,collectedState,currAge);

  return fullReqs && oneOfReqs;
}

const hasNoReqs = reqs => { return reqs.full.length === 0 && reqs.one.length === 0 }
const meetsAgeReq = (reqAge, currAge) => reqAge === currAge || reqAge === 'any';

// TODO - This needs LOTS of logic to handle things like Arrow Elements and Songs
const hasReqItem = (item,collection) => {
  
  if(item.indexOf('song') === 0) return (collection.ocarina !== 0 && collection[item] !== 0)

  return collection[item] || (isReqStaged(item) && isItemReqRightStage(item,collection));
}

const meetsFullReqs = (reqs,collected,currAge) => {
  for(let req of reqs){
    if(!hasReqItem(req,collected) || !isItemReqRightAge(req,currAge)){ return false }
  } return true; // If nothing is missing, you got it!
}

const meetsOneOfReqs = (reqs,collected,currAge) => { 
  for(let req of reqs){
    if(hasReqItem(req,collected) && isItemReqRightAge(req,currAge)){
      return true;
    }
  } return false;
}

const isItemReqRightAge = (item,age) => {
  return ITEM_ALL_AGE.indexOf(item) !== -1 || (age === 'child' ? ITEM_CHILD_ONLY.indexOf(item) !== -1 : ITEM_ADULT_ONLY.indexOf(item) !== -1);
}

export const isReqStaged = req => { return !isNaN(req.charAt(req.length-1)) } // Checks if an item has a "Stage" (ie Longshot = hookshot2)
const isItemReqRightStage = (item,collection) => {
  let destaged = item.substring(0,item.length-1);
  let currStage = collection[destaged];
  let reqStage = item.substring(item.length-1);

  return currStage >= reqStage;
}