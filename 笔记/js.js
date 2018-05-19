
JavaScript ( JS ) 是一种具有函数优先的轻量级解释型或即时编译型的编程语言。
例如 node.js、 Apache CouchDB 和 Adobe Acrobat。
JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格

原型编程 
	是 面向对象编程 的一种风格。它的 类 没有明确的定义，只是通过向其它的类中添加属性和方法来得到它，甚至偶尔使用空对象来创建类。

	简单来说，这种类型的风格允许创建一个 object。没有定义其class。


数据类型
	数字 
	字符串
	布尔值 &&与  ||或  ！非
	null undefined
	数组
	对象

	由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
	var person={firstname:"John", lastname:"Doe", id:5566};
	变量
	var a; // 申明了变量a，此时a的值为undefined
	var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
	var s_007 = '007'; // s_007是一个字符串
	var Answer = true; // Answer是一个布尔值true
	var t = null; // t的值是null        
	
注释
  
  //    /**/   ``反引号在~下面

字符串
	
	ES6模板字符串
	var name = '小明';
	var age = 20;
	var message = `你好, ${name}, 你今年${age}岁了!`;
	alert(message);	

操作字符串  大小写铭感
	var s = 'Hello, world!';
	s.length; // 13
	s[12]; // '!'
	s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined
	
	大写小写
	var s = 'Hello';
	s.toUpperCase(); // 返回'HELLO'
	var lower = s.toLowerCase();
	
	indexOf() 首次出现的位置
	var s = 'hello, world';
	s.indexOf('world'); // 返回7
	s.indexOf('World'); // 没有找到指定的子串，返回-1   
	
	
	substring() 指定索引区间的子串 

	var s = 'hello, world'
	s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
	s.substring(7); // 从索引7开始到结束，返回'world'
	
数组
	var arr = [1, 2, 3.14, 'Hello', null, true];
	arr.length; // 6
	arr.length = 2;  给length赋值会改变数组大小
	arr变为[1, 2]  

	赋值索引会改变原值
	var arr = ['A', 'B', 'C'];
	arr[1] = 99;
	arr; // arr现在变为['A', 99, 'C']
	
	索引超出范围 会改变与数组大小
	var arr = [1, 2, 3];
	arr[5] = 'x';
	arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
	
	排序
		var arr = ['B', 'C', 'A'];
		arr.sort();
		arr; // ['A', 'B', 'C']
	
	反转
		var arr = ['one', 'two', 'three'];
		arr.reverse(); 
	
	万能方法 splice()
		var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
		// 从索引2开始删除3个元素,然后再添加两个元素:
		arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
		arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
		 
		arr.splice(2, 2);  
		arr; // ['Microsoft', 'Apple', 'Oracle']
		// 只添加,不删除:
		arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
		arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
	
	合并
	concat() 返回新数组
		var arr = ['A', 'B', 'C'];
		arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
	
	分隔符 join()
		arr.join('-'); // 'A-B-C-1-2-3'
	
		
	slice()  截取
	var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	arr.slice(0, 3);
	arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
	
	push()  末尾添加若干元素 arr.push('A', 'B');
	pop()   删除最后一个     arr.pop();
	
	Array() 头部添加若干元素 arr.unshift('A', 'B');
	shift() 删除第一个       arr.shift();
	
对象
	var xiaoming = {
	    name: '小明',
	    age: 18,
	    'middle-school': 'No.1 Middle School' };
	
	查
	xiaoming.name; // '小明'
	xiaohong['middle-school']; // 'No.1 Middle School'
	xiaohong['name']; // '小明'
	 
	增改
	xiaoming.age = 18; // 新增一个age属性
	
	删
	delete xiaoming.age;     // 删除age属性
	delete xiaoming['name']; // 删除name属性
	delete xiaoming.school;  // 删除一个不存在的school属性也不会报错
	JavaScript对象的所有 属性名都是字符串  属性值可以是任意类型  访问不存在的属性不报错，会返回undefined
	
	属性名包含特殊字符，就必须用''括起来：
	var xiaohong = {
    	name: '小明',
    	'middle-school': 'No.1 Middle School'
	};
	
	 
	检测 拥有某一属性 用 in
		'name' in xiaoming; // true 可能是继承    
	
	检测 自身拥有的属性  hasOwnProperty() 
		xiaoming.hasOwnProperty('name'); // true	

条件循环
	if
		var age = 20;
		if (age >= 6) {
		    console.log('teenager');
		} else if (age >= 18) {
		    console.log('adult');
		} else {
		    console.log('kid');
		}
	 
	
	for
		var k=prompt('请输入数字')
		var sum = 1;
		for(var i = 1;i<=k;i++){
		    sum *=i;
		}
		alert(sum);
		
		过滤掉对象继承的属性
		var o = {
		    name: 'Jack',
		    age: 20,
		    city: 'Beijing'
		};
		for (var key in o) {
		    if (o.hasOwnProperty(key)) {
		        console.log(key); // 'name', 'age', 'city'
		    }
		}
	
	
	while
	
		var n = 0;
		do {              //至少执行一次
		    n = n + 1;
		} while (n < 100);
		  	


map  

	js中键必须是str  所以有了map
	Map是一组键值对的结构，具有极快的查找速度
	var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
	m.get('Michael'); // 95
	
	var m = new Map(); // 空Map
	m.set('Adam', 67); // 添加新的key-value
	m.set('Bob', 59);
	m.has('Adam'); // 是否存在key 'Adam': true
	m.get('Adam'); // 67
	m.delete('Adam'); // 删除key 'Adam'
	m.get('Adam'); // undefined
	
	
	
	set集合
	重复元素在Set中自动被过滤：
	var s = new Set([1, 2, 3, 3, '3']);
	s; // Set {1, 2, 3, "3"}
	s.add(4);
	s; // Set {1, 2, 3, 4}
	s.add(4);
	s; // 仍然是 Set {1, 2, 3, 4}
	s.delete(3);      


迭代器  iterable  for ....of
	Array、Map和Set都属于iterable类型。

	for ... in 遍历对象的属性名称 
	数组 也是 对象，它的每个元素的索引被视为一个属性。
	当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果：
	var a = ['A', 'B', 'C'];
	a.name = 'Hello';
	for (var x in a) {
   	    console.log(x); // '0', '1', '2', 'name'
   	}

   	for ... in循环将把name包括在内，但Array的length属性却不包括在内。

	for ... of循环则完全修复了这些问题，它只循环集合本身的元素：
	
	var a = ['A', 'B', 'C'];
	a.name = 'Hello';
	for (var x of a) {
	    console.log(x); // 'A', 'B', 'C'
	}	


forEach()
	var a = ['A', 'B', 'C'];
	a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
	});
