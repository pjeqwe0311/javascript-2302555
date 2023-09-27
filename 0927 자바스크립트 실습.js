// 1.string concatenation
console.log('my' + 'cat');
console.log('1' + 2); //따옴표의 뜻은 수1이 아니라 글자1로 보겠다는 뜻

console.log("ellie's \n\tbook");

//2. Numeric poerators(사칙연산)
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);

//3.Increment and decrement operators
// '='의 왼쪽은 변수 오른쪽은 밸류, =은 할당해주는 연산자

//4.assignment operators
// x += y;  x = x + y;

//5. Comparison opperators(관계 연산)
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. ||(or), &&(and) (논리연산)

//논리곱, 두가지 조건을 모두 만족:and(&&), 논리합, 조건 중 하나만 만족: or(||)
// null: 선언 되어 있으나 define되어 있지 않은

const value1= true;
const value2= 4<2;

// finds the first truthy value
console.log( value1 || value2 || check())
//finds the first falsy value
console.log( value1 && value2 && check())

//equality
console.log(0==false);
console.log(0 === false);
// ''는 null과 비슷
