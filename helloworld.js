/* ============ For Loop ==================*/
var i
var sum=0
for(i = 1; i<=10; i++){
  sum=i*(i+1)/2
  console.log(sum)
}

/* =========== while Loop =============*/
var i=1;
var sum;
while(i<1){
  if(i % 2 !=0){
    console.log('Hello');
  } else {
    sum=i*(i+1)/2
    console.log(sum)
  }
  i++
}

/*============= do while =======================*/
var i=1;
var sum=0;
do {
  sum=i*(i+1)/2
  console.log(sum)
  i++
}
while(i<1);
