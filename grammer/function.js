let func1 = function () {
  console.log("good");
};

func1();

let func2 = (props) => {
  console.log("익명함수" + props);
};

let str = "변수";
func2(str);

console.log("test");
