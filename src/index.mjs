import "./styles.css";


function fizzbuzz(number) {
  for (let index = 1; index <= number ; index++) {
    if (index % 3 == 0 && index % 5 == 0 ) {
      console.log("fizzbuzz")
    }else if(index % 3 == 0) {
      console.log("fizz")
  } else if (index % 5 == 0 ) {
    console.log("buzz")
  }  else {
    console.log(index)
  }
  
}
}



fizzbuzz(15)

