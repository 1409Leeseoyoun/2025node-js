// Q) 다음과 같은 결과로 계산이 될 수 있도록 Calculator 인터페이스를 정의하고 해당 인터페이스를 따르는 객체를 대입받은 calc 변수 생성

interface Calculator {
    add(num1: number, num2: number): number;
    subtract(num1: number, num2: number): number;
}

const calc: Calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    } 
}

const result1 = calc.add(1, 2);
const result2 = calc.subtract(5, 3);