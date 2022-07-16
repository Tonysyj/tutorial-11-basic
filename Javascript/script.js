"use strict";

{
  console.log("hello world");
  let my_name = "Tony";
  console.log(my_name);
  my_name = "Yuejun";
  console.log(my_name);

  let first_name = "Tony",
    last_name = "Sun";
  console.log(first_name, last_name);
  first_name = undefined;
  last_name = null;
  console.log(first_name, last_name);
}

{
  let a = 1;
  console.log(a);
  let b = "this is a b";
  console.log(b);
  let b_2 = 'he said "how are you"';
  console.log(b_2);
  let b_3 = `he said "he 
  like 'fish'"`;
  console.log(b_3);
  let b_4 = `he said ${b}`;
  console.log(b_4);
  let b_5 = "he said" + b;
  console.log(b_5);
  let b_6 = "he sadi" + a;
  console.log(b_6);
  let b_7 = "" + 1;
  console.log(b_7, typeof b_7);
  let b_8 = +"1";
  console.log(b_8, typeof b_8);

  let c = true;
  let d = undefined;
  let e = null;
  let f = 0;
  //   在一定程度下 undefined和null都算false
  if (c) {
    console.log("good");
  } else if (d) {
    console.log("bad");
  } else if (e) {
    console.log("OK");
  }
  if (d) {
    console.log("good");
  } else {
    console.log("bad");
  }
  if (e) {
    console.log("good");
  } else {
    console.log("bad");
  }
  if (f) {
    console.log("good");
  } else {
    console.log("bad");
  }
}

{
  let obj = {
    name: "Tony",
    age: 30,
    income: 0,
  };
  console.log(obj);
  console.table(obj);
  obj.height = 183;
  console.log(obj);
  obj["name"] = "Yuejun";
  console.table(obj);
}

{
  let a = 1;
  let b = a;
  console.log(a, b);
  b = 2;
  console.log(a, b);

  let obj = {
    name: "Tony",
    age: 30,
    income: 0,
  };

  let obj_1 = obj; //此处的意思为obj_1引用obj，并不是创造了一个新的obj_1变量
  console.log(obj, obj_1);
  obj_1.age = 18;
  console.table(obj_1);

  let obj_2 = { ...obj };
  console.log(obj, obj_2);
  obj_2.income = 10000;
  console.log(obj, obj_2); //table只能显示一个变量，log可以显示多个变量

  let user = {
    name: "Stephen",
    age: 18,
    profile: { cv: "http://xxxx", id: 123123 },
  };
  let user_2 = { ...user };
  user_2.name = "Patty";
  console.log(user, user_2);
  user_2.profile.id = 789789;
  console.log(user, user_2);
}

{
  let array = [1, 2, 3, "4", true, { name: "Tony" }];
  console.log(array[5]);
  array[0] = "haha";
  console.table(array);

  let array_1 = array;
  array_1[3] = false;
  console.log(array, array_1);

  console.log(array.length);
  array[6] = 30;
  console.log(array[6]);
  array[100] = 91;
  console.log(array[100]);
  console.log(array.length);
  // array[100].name = "Yuejun"; //无法赋予
  console.log(array[100].name);
  array[101] = { name: "Yuejun" };
  console.log(array[101]);
}

{
  const password = "1234567890"; //const会锁定住所附的值，所以用const赋值之后无法修改
  const obj = {
    name: "Jack",
  };
  obj.name = "Jeff";
  console.log(obj); //const无法锁定里面的东西
}

{
  let x = 10;
  let y = 5;
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);
  console.log(x % y);
  console.log(x ** y); //x的y次方
  console.log(Math.sqrt(100)); //开根号
  console.log(x++); //自加符号，先使用，再相加
  console.log(x);
  console.log(x--); //自减
  console.log(x);
  console.log(++x); //先相加，后使用
  console.log(x);
  console.log(--x);
  console.log(x);
}

{
  let x = 10;
  x += 5;
  x -= 5;
  x *= 5;
  x /= 5;
  x **= 5;
  x %= 5;
  console.log(x);

  let y = 10;
  y ?? 5; //课后查
  console.log(y);
}

{
  let x = 1;
  console.log(x > 1);
  console.log(x >= 1);
  console.log(x < 1);
  console.log(x <= 1);

  console.log((x = 1));
  console.log(x == 1); //只判断值是否相等
  console.log(x === 1); //判断type和value是否都相等
  console.log(x != 1);
  console.log(x !== 1);

  console.log(true == 1); //1和True能相对
  console.log(false == 0); // 0和False能相对
  console.log(true == 2);
}

{
  let points = 100;
  if (points > 100) {
    console.log("gold");
  } else {
    console.log("silver");
  }

  let socer = 110;
  console.log(socer > 100 ? "gold" : "silver"); //三联运算符
}

{
  console.log(true && true); // && 就是 AND判断
  let dayTime = 8;
  if (dayTime > 18 && dayTime < 24) {
    console.log("night");
  } else {
    console.log("day");
  }

  console.log(false || true); // || 就是 OR判断
  let day_time = 8;
  if ((day_time > 18 && day_time < 24) || (day_time > 0 && day_time < 6)) {
    console.log("night");
  } else {
    console.log("day");
  }

  console.log(0 || false);
  console.log(3 || false); // 因为0自身代表False，所以结果显示False。其他数字都是显示数字本身
  console.log(4 || 10); // 如果前面的是真，则显示前面的。否则就看后面是否是真。如果后面也是假，就直接显示False

  console.log(!true); // ! 就是取反的意思
  console.log(!2); // 2的取反结果为False，是因为2本身存在，但是取反之后会变成undefined。undefined会显示False
}

// 第二节课
{
  const roles = ["student", "teacher", "boss"];
  let role = roles[1];

  // if (role === "student") {
  //   console.log("hello!");
  // } else if (role === "teacher") {
  //   console.log("hi");
  // } else if (role === "boss") {
  //   console.log("??");
  // } else {
  //   console.log("...");
  // }  这种写法比较麻烦，而且会有概率出现不小心打错字影响最终结果的情况，推荐用下面的写法

  if (role === roles[0]) {
    console.log("hello!");
  } else if (role === roles[1]) {
    console.log("hi");
  } else if (role === roles[2]) {
    console.log("??");
  } else {
    console.log("...");
  }

  switch (role) {
    case "student":
      console.log("good morning");
      break; //如果不使用break截住，系统会直接继续看下面的命令并同时返回所有命令的结果。
    case roles[1]:
      console.log("goodbye");
    // break;
    case "boss":
      console.log("yes sir");
      break;
    default:
      console.log("...");
  } //这种写法和上面的写法是同一个道理，不同点在于if...else可以做复杂判断用，而switch只能做筛选
}

{
  let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num = 0;
  while (num < 9) {
    arrayNumber[num] += 1;
    num++;
  } //while循环一般用的不是很多，主要用的是for循环
  console.log(arrayNumber);

  let newArrayNumber = [];
  for (let i = 0; i < 10; i++) {
    newArrayNumber[i] = i + 5;
  }
  console.log(newArrayNumber);

  // forEach循环和for循环的区别
  newArrayNumber.forEach((num) => {
    console.log("1:", num);
  });
  for (let i = 0; i < newArrayNumber.length; i++) {
    console.log("2:", newArrayNumber[i]);
  }
  /*forEach像一个迭代器，一个一个元素往外吐。
for是每次i都不一样导致的数字不一样，相当于每次就是一个新的i*/

  let add_arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cum = 0;
  for (let i = 0; i < add_arrayNumber.length; i++) {
    cum += add_arrayNumber[i];
  }
  console.log(cum);

  let sum = 0;
  add_arrayNumber.forEach((num) => {
    sum += num;
  });
  console.log(sum);

  let str = "";
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i}*${j}=${i * j} `;
      if (i === j) {
        str += "\n";
      }
    }
  }
  console.log(str);
}

{
  function func1() {
    console.log("Hello World");
  } //此处为定义function，所以不会打印出结果
  func1(); //此处调用了被定义的function，所以打印出了结果

  function func2(info) {
    console.log(`${info} juice`);
  }
  func2("Orange");
  func2("Apple");
  //function的作用就是把功能打包好放着，等待被调用

  function func3(a, b) {
    console.log(a + b);
  }
  func3(1, 2);

  function func4(array) {
    let cum = 0;
    array.forEach((num) => {
      cum += num;
    });
    console.log(cum);
  }
  func4([1, 2, 5, 18, 100, 6]);

  function func4_1(a, b, ...rest) {
    let cum = a + b;
    rest.forEach((num) => {
      cum += num;
    });
    console.log(cum);
  }
  func4_1(1, 3, 5, 6, 7, 10, 18);

  function func5(a, b) {
    console.log("hello");
    return a + b; //return了之后函数就会停，return之后的东西就不会再起作用
    console.log("haha");
  }
  let cum = func5(1, 2);
  console.log(cum);

  const obj = {
    name: "Tony",
    age: 30,
    gender: "male",
    height: 178,
  };
  function func6(obj) {
    console.log("name:", obj.name);
    console.log("age:", obj.age);
    console.log("gender:", obj.gender);
    console.log("height:", obj.height);
    obj.name = "Yuejun";
    obj.age = 23;
  }
  func6(obj);
  console.log(obj);
  // function func6(obj)入口仅有一个，但是出口有多个：
  // 出口1：return，特点是产生新内容，可以不用更改原始数据。
  // 出口2：复杂结构的传参（如func6），可以获得内容修改。确定是更改了原始的数据。
  func7(obj); /*func7在没有被定义之前就可以使用，因为这种定义方式是静态定义。
  当于所有被定义的function都在一张表里，什么时候用都可以。*/
  function func7({ name, age, gender }) {
    name = "Stephen";
    age = 4;
    return { name, age, gender };
  }
  let newObj = func7(obj); //此处的obj是{name, age, gender}=obj和原始定义的obj并不是一个，但是复制了原始obj的参数。
  console.log(newObj);
  console.log(obj);

  const func8 = function () {
    console.log("func8");
  }; //此处func8是通过变量定义的，所以必须在被定义之后了才能使用。否则会报错。
  func8();
}

{
  // 箭头函数
  const arrow_func1 = () => {
    console.log("array_func1");
  }; // arrow function同理上面的func8
  arrow_func1();

  const arrow_func2 = (a, b) => {
    console.log(a);
  };
  arrow_func2("haha", "heihei");

  const array = [1, 2, 3, 4, 5];
  array.forEach((num) => {
    console.log("1:", num);
  }); //此条代码的本质意思如下：
  const arrow_func3 = (num) => {
    console.log("2:", num);
  };
  array.forEach(arrow_func3);
}

{
  const radius = 1;
  const location = { x: 1, y: 2 };
  const isVisible = true;
  function draw() {
    console.log("draw");
  }
  draw(); //直接调用，没有归属。相对独立，散兵游勇

  const circle1 = {
    radius: 1,
    location: {
      x: 1,
      y: 2,
    },
    isVisible: true,
    draw1: function () {
      console.log("draw1");
    },
    draw2() {
      console.log("draw2");
    },
  };
  circle1.draw1();
  circle1.draw2(); // 都归属于curcle。成帮结伙
  //用object定义的好处，集合，很清楚这个function是干什么的

  function draw3() {
    console.log("draw3");
  }
  const circle2 = {
    radius: radius,
    location: location,
    isVisible: isVisible,
    draw: draw3,
  };
  circle2.draw();

  function draw4() {
    console.log("draw4");
  }
  const circle3 = {
    radius,
    location,
    isVisible,
    draw: draw4,
  };
  circle3.draw();
  // circle1是自己往里写值
  // circle2是把外部的值传进来
  // circle3当前面的名字和后面的名字一致时，直接写名称就可以了

  function createCircle(radius) {
    return {
      radius,
      draw1() {
        console.log("draw1", radius, this.radius);
        //这里的radius是取function定义的radius的值而不是return的。所以会打印出来4。
      },
      draw2: function () {
        console.log("draw2", radius, this.radius);
        //使用this.radius则是取return中的值。所以对radius修改的值（2）会被打印出来。
      },
      draw3: () => {
        console.log("draw3", radius);
        //在return中的箭头函数是无法找到自己的位置的。所以会报错
      },
    };
  }
  const circle4 = createCircle(4);
  circle4.radius = 2;
  console.log(circle4);
  circle4.draw1();
  circle4.draw2();
  circle4.draw3();
}

{
  //操控节点
  const content = document.querySelector("div.content");
  // querySelector只能选择第一个，无法选择多个
  content.innerHTML = "Hello World!";
  console.log(content); //这种方法拿到的是节点本身

  const contents = document.querySelectorAll("div.content");
  console.log(contents); //这种方式以数组的形式拿到所有节点。并且每个节点都是空的。
  contents.forEach((node, index) => {
    node.innerHTML = `content ${index}`;
  });
  // document.getElementById()
  // document.getElementsByClassName()
  // 这两种方法也可以但是都不如querySelector好用，因为querySelector是不管类型的。

  const span = document.createElement("div"); //创造元素
  span.innerHTML = "<h3>Click Me</h3>";
  // contents[contents.length - 1].append(span);
  // contents[contents.length - 1].appendChild(span);
  // 上面两个是一个意思
  const domBody = document.querySelector("body");
  domBody.appendChild(span);

  span.classList.add("active");
  span.classList.remove("active");
  span.classList.toggle("active");
  //toggle是切换，之前是有的时候就变成没有，之前没有就变成有
  span.setAttribute("style", "cursor:pointer");
  span.addEventListener("click", () => {
    span.classList.toggle("active");
  }); //EventListener逗号前面是做了动作，逗号后面是要做什么事
}
