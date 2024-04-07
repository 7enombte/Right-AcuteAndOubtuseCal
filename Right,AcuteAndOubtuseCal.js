console.log("Right/oubtuse/acute ang Cal:\n")
var Ra=(  0 )
var Rb=( 0 )
var Rc=(  0)


function Rthag(A,B,C){
  let RA1=A*A
  let RB1=B*B
  let RC1=C*C
  console.log("Step one:\n\tA^2:"+RA1+"\n\tB^2:"+RB1+"\n\tC^2:"+RC1)
   const Rthag1var=[RA1,RB1,RC1]
  return(Rthag1var)
}
var Rthag1varoutput=Rthag(Ra,Rb,Rc)

function Rthag1(A,B,C){
let RA2=A+B
console.log("Step two:\nA+B:\t"+RA2)
var C2right=A+B!=C
var C2oubtuse=A+B<C
var C2acute=A+B>C
console.log("\nRight:\t"+!C2right+"\noubtuse:\t"+C2oubtuse+"\nacute:\t"+C2acute)
const Rthag2var=[C2right,C2oubtuse,C2acute]
return(Rthag2var)
}
var Rthag2varOutput=Rthag1(Rthag1varoutput[0],Rthag1varoutput[1],Rthag1varoutput[2])