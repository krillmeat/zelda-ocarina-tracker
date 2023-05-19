const getCheckValue = sessionValue => {
  if(sessionValue === 'true') return 'check';
  if(sessionValue === 'false' || sessionValue === 'null') return null;
  return sessionValue;
}

export const withSessionStorage = locations => {
  let updatedLocations = locations;
  for(let key of Object.keys(sessionStorage)){
    updatedLocations[key.replace("-"," ").replace("check_","")] = getCheckValue(sessionStorage.getItem(key));
  }
  return updatedLocations;
}
