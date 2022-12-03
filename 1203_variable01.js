
// 1. literal
console.log('hello');
console.log("hello");
console.log('hello')

console.log('2022-12-03'); //문자
console.log(2022-12-03);   //숫자, 뺄셈

// 2. 변수
// 변수의 종류 : var, let, const
var num = 123
var greeting = 'hi'

console.log(num)
console.log(greeting)

var x = 2
var y = '2'

console.log(x+x)
console.log(y+y)

// 3. javascript escape sequence ( \ 역슬래시를 활용한 특수문자표현)
console.log('it\'s a book')
console.log("it\'s a book")
console.log("New York is called \"The Big Apple.\"")
console.log('hello\nworld')

// 4. 변수 3가지 종류 비교 (var, let, const)
// Block Scope 지역범위{} VS Global Scope 전역범위

// 4-1. var
// var : 과거에 사용, 현재는 let, const 권함
// var hoisting (move declaration from bottom to top)
{age = 17
 var age}
console.log(age)

// 4-2. let
let globalName = 'global' // let을 {} 밖에서 변수 선언을 할 경우 {} 안과 밖 모두에서 출력 가능
{
  console.log(globalName);
  //Block Scope 지역범위{}
  let name = 'jennie'; //변수 선언과 동시에 데이터를 할당 또는 정의함.
  console.log(name); 
  //let name = 'lisa'; 오류 발생
  // - let을 붙이게 되면 새로운 변수를 생성하는 것인데, 변수명 중복을 허용하지 않는다.
  name = 'ruby';
  console.log(name); 

  name = 'jane';
  console.log(name);
}
console.log(globalName);
// console.log(name); - 출력이 안되는 현상 발생!! 
// let은 {} 안에 변수선언(let name)을 하면 {} 범위scope 안에서만 출력 가능
// 즉, {} 밖에서 출력 시 오류 발생

// 4-3. const 상수(constants)
  const daysInWeek = 7;
  console.log('일주일은 몇 일인가? 답: ' + daysInWeek + '일')
  console.log(`일주일은 몇 일인가? 답: ${daysInWeek}일`) // 주의: 역따옴표(tab키 위의 물결표시와 같이 있음)로 작성