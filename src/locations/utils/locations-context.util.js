export const toggleCheck = (locationName,context,setContextCallback) => {
  const currLocationValue = context.locations[locationName];
  console.log("CLV ?",currLocationValue)
  setContextCallback({
    ...context,
    locations: {
      ...context.locations,
      [locationName]: currLocationValue ? null : 'check' 
    }
  })
}
