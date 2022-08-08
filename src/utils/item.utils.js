import { ITEM_CLASS_ON_OFF } from "../constants/item.const"

const getItemNextState = itemName => {
  if(ITEM_CLASS_ON_OFF.indexOf(itemName) !== -1){ // On/Off Item (have or don't have)
    return true
  }
}

export const getItemState = itemName => {
  if(ITEM_CLASS_ON_OFF.indexOf(itemName) !== -1){
    return 'on-off'
  }
  return 'wut'
}