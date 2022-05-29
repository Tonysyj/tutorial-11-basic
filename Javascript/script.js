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
  let b_4 = `he said $(b)`;
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
  array[100].name = "Yuejun"; //无法赋予
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
