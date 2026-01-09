const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
 if (!carCollection.includes(carBrand)){
  carCollection.push(carBrand)
  return  `new car collection is : ${carCollection.join(",")}.`
 } else {
  const position = carCollection.indexOf(carBrand)+1
  return `${carBrand} has already existed in the ${position} position of car collection.`
 }
}

console.log(updateCarCollection("mudi")); 

console.log(updateCarCollection("honda"));