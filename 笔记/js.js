
JavaScript ( JS ) 是一种具有函数优先的轻量级解释型或即时编译型的编程语言。
例如 node.js、 Apache CouchDB 和 Adobe Acrobat。
JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格

 DOM API-->应用    OO   OOP   function  异步
 平台支撑技术  平台和技术支撑应用

原型编程 
	是 面向对象编程 的一种风格。它的 类 没有明确的定义，只是通过向其它的类中添加属性和方法来得到它，甚至偶尔使用空对象来创建类。

	简单来说，这种类型的风格允许创建一个 object。没有定义其class。

程序是怎么编译的，变量是怎么查找的，js 引擎是什么，引擎和作用域的关系又是什么

好的角度 可以提升80%的智商






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
算法 

快速排序
	function quickSort(arr,l,r){
	  if(l < r){
	    var i = l, j = r, x = arr[i];
	    while(i<j){
	      while(i<j && arr[j]>x)
	        j--;
	      
	      if(i<j)
	        //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
	        arr[i++] = arr[j];
	      
	      while(i<j && arr[i]<x)
	        i++;
	      
	      if(i<j)
	        //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
	        arr[j--] = arr[i];
	    }
	    arr[i] = x;
	    
	    quickSort(arr, l, i-1);
	    quickSort(arr, i+1, r);
	  }
	}

回文串
	function palindrome(str){
	  // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
	  var re = /[\W_]/g;
	  // 将字符串变成小写字符,并干掉除字母数字外的字符
	  var lowRegStr = str.toLowerCase().replace(re,'');
	  // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
	  if(lowRegStr.length===0) return true;
	  // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
	  if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1]) return false;
	  //递归
	  return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
	}


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
	
	分割  split
	"Webkit Moz O ms Khtml".split()    //[ "Webkit Moz O ms Khtml" ]
	"Webkit Moz O ms Khtml".split("")  //[W,e,b,k,i,t, ,M,o,z, ,O, ,m,s, ,K,h,t,m,l]
	"Webkit Moz O ms Khtml".split(" ") //[ "Webkit", "Moz", "O", "ms", "Khtml" ]
	
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


	判断是不是数字
	var a ="123";
	var b ="abc";
	console.log( a-0 ); //123
	console.log( b*1 ); //NAN


	
数组 也是键值 索引是键 项是值
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
    // element:指向当前元素的值  //A
    // index: 指向当前索引       // 0
    // array: 指向Array对象本身  // A,B,C
    console.log(element + ', index = ' + index);
	});


	var s = new Set(['A', 'B', 'C']);
	s.forEach(function (element, sameElement, set) {
		console.log(element);		//A
	    console.log(sameElement);  	//A
	    console.log( set);  		//[object Set]
	});
	
	
	var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
	m.forEach(function (value, key, map) {
	    console.log(value);		//x
	    console.log(key);  		//1
	    console.log(map);  		//[object Map]
	});	




方括号

变量------------------------------------------------------------
	
	编译
	
		在传统编译语言中 程序在执行之前会经历三个步骤统称为   编译
		
		分词/词法分析
			这个过程会把字符串分解成有意义的代码块 这些代码块被称为词法单元--var，a，=，5，
		解析/语法分析
			这个过程是将词法单元流 (数组) 转换成一个由元素逐级嵌套 的程序语法结构树  这个树被称为 抽象语法树
			     var    
	              |
	         ------------    抽象语法树    
	         |          |
	         a          5
	    代码生成
	    	将抽象语法树 转换为可执行代码的过程  叫代码生成   
	    	通过某种方法将抽象语法树转化为机器指令 分配内存 创建a变量 并将5存储在a中
	
	作用域 的朋友
		引擎
			从头到尾负责整个程序的编译及执行过程
		编译器
			负责 语法分析 及 代码生成

			词法---> 语法 ---> 代码	
			语法分析 词法单元流 ----> 语法结构树
			代码生成 语法树    ---->  可执行机器码
		作用域
			负责收集并维护所有声明的标识符 组成的一系列查询  确定当前执行的代码对这些标识符的访问权限
			编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。 是词法作用域的核心内容
	执行 var a = 2   有没有  找到并使用
		1. 编译器会询问作用域 同一作用域有没有a  有就忽略声明  没有就让作用域在当前声明新的变量 命名为a
		2. a = 2 编译器会为引擎生成运行时所需的代码 引擎运行时会首先询问作用域中有没有a变量 在什么位置 找到就赋值  没有就向父级作用域中查找 一直向上找 找不到就报错 
		  
		 两个声明  var a;   a = 2;。  先有蛋（声明）后有鸡（赋值）
		 第一个 定义声明 是在编译阶段进行的。
		 第二个 赋值声明 会被留在原地等待执行阶段


	引擎和作用域的对话
		执行流程
		function foo(a){
			console.log(a);

		}
		foo(2);

		1. 对foo进行右引用 
		2. 对a 进行左引用    a = 2
		3. 对console进行右引用
		4. 对a 进行右引用    console.log(a)

	词法作用域
		作用域 是一套规则，据名称查找变量的一套规则
		 
		作用域有两种主要工作模型：词法作用域和动态作用域。
		
		大部分标准语言编译器的第一个工作阶段叫作词法化。
		 
		词法作用域是 声明的位置 决定的 
		函数的词法作用域都只由函数被 声明 时所处的位置决定

		作用域给引擎提供了位置信息   引擎通过位置信息找到标识符的位置

		作用域链比喻成一个建筑  一层是当前作用域  顶层是全局作用域

	
	 LHS RHS   var a = 2
		对变量进行赋值 LHS。    
		获取变量的值   RHS。   
	
		function foo(a) {
		   // 这里隐式包含了 a = 2 这个赋值，所以对 a 进行了 LHS 查询
		   var b = a;
		   // 这里对 a 进行了 RHS 查询，找到 a 的值，然后对 b 进行 LHS 查询，把 2 赋值给 b
		   return a + b; 
		   // 这里包含了对 a 和 b 进行的 RHS 查询
		}
		
		var c = foo(2);
		// 这里首先对 foo 进行 RHS 查询，找到它是一个函数，然后对 c 进行 LHS 查询把 foo 赋值给 c




	全局变量是全局对象的属性
	局部变量是调用对象的属性

	let 
		只在本地有效
		{
			let a = 10;
			var b = 1;
		}
		
		a //报错
		b //1
		
		for循环的计数器，就很合适使用let命令。
		for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值
			for (let i = 0; i < 10; i++) {
			  // ...
			}
			
			console.log(i);
			// ReferenceError: i is not defined

	作为属性的变量
		var a = 10;
		alert(window.a)
		alert(this.a)
		
	
	作用域链
		JavaScript是基于词法作用域的语言
		在不包含嵌套的函数体内，作用域链上有两个对象，第一个是定义函数参数和局部变量的对象，第二个是全局对象
	变量解析
		当js需要查找 变量a的值的时候 从内向外一层层  依次查找这条链上的对象   没有就报错
	



对象-----------------------------------------------------------
	一个对象就是一系列属性的集合 一个属性的值可以是函数
	基本上 JavaScript 里的任何东西都是对象，而且都可以被储存在变量里
	对象字符串到值的映射 其他叫法 散列 字典 关联数组
	 	JavaScript对象还可以从一个称为原型的对象继承属性。对象的方法通常是继承的属性。这叫“原型式继承”

	var xiaoming = {
	    name: '小明',
	    age: 18,
	    'middle-school': 'No.1 Middle School' };
	
	    对象.属性
	    对象.方法

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
	
	delete 操作符删除一个不是继承而来的属性   
	delete 删除不是用 var 关键字声明
	
	 
	检测 拥有某一属性 用 in
		'name' in xiaoming; // true 可能是继承    
	
	检测 自身拥有的属性  hasOwnProperty() 
		xiaoming.hasOwnProperty('name'); // true	

		
	创建对象
		对象直接量   
			对象直接量是由若干 键/值对 组成的映射表
			var empty={};//没有任何属性的对象
			var point={x:0,y:0};//两个属性
			var book = {
				"for" : "abc"   for是保留字 必须用引号
			}
			

		用new创建对象
			function Person(name, age, sex) {
			    this.name = name;
			    this.age = age;
			    this.sex = sex;
			}
			var rand = new Person("Rand McKinnon", 33, "M");
			var ken = new Person("Ken Jones", 39, "M");
			rand.name="123"
			console.log(rand.name)


		Object.create 方法
			var Animal = {
			  type: "Invertebrates",  
			  displayType : function() {  
			    console.log(this.type);
			  }
			}
			var fish = Object.create(Animal);
			fish.type = "Fishes";
			fish.displayType(); 


	对象属性 
	包括 名字，值 ，属性特性
		一个对象的属性可以被解释成一个附加到对象上的变量
		
		属性名只能是字符串  属性值可以是任意类型  访问不存在的属性不报错，会返回undefined
	
		属性名包含特殊字符，就必须用''括起来：
			var xiaohong = {
		    	name: '小明',
		    	'middle-school': 'No.1 Middle School'
			};

		遍历对象所有属性 <-----锚点ctrl+D
			Object.keys(obj) 返回对象所有的键名 数组形式
				var obj = { 0: 'a', 1: 'b', 2: 'c' };
				console.log(Object.keys(obj));  
				//['0', '1', '2']
			getOwnPropertyNames()  返回所有属性	
				var arr = ["a", "b", "c"];
				console.log(Object.getOwnPropertyNames(arr)); 
				// ["0", "1", "2", "length"]

		使用 this 将传入函数的值赋给对象的属性。
			function Car(make, model, year) {
			  this.make = make;
			  this.model = model;
			  this.year = year;
			}
 
		属性特性”（property attribute）  
			·可写（writable attribute），表明是否可以设置该属性的值。
			·可枚举（enumerable attribute），表明是否可以通过for/in循环返回该属性。
			·可配置（configurable attribute），表明是否可以删除或修改该属性。
	

	对象方法
		方法是一个值为 函数 的对象属性var  myMethod: function(params) {} 
			




	对象特性（object attribute）：
		·对象的原型（prototype）指向另外一个对象，本对象的属性继承自它的原型对象。
		·对象的类（class）是一个标识对象类型的字符串。
		·对象的扩展标记（extensible flag）指明了（在ECMAScript 5中）是否可以向该对象添加新属性。
	
	三类对象
		内置对象
			包括Array、Boolean、Date、Function、Global、Math、Number、Object、RegExp、String
		宿主对象
			浏览器对象 Window Document
		自定义对象
			自己定义
	
	两大属性
		·自有属性（own property）是直接在对象中定义的属性。
		·继承属性（inherited property）是在对象的原型对象中定义的属性。
	

this

	this 在任何情况下都不指向函数的词法作用域
	
	this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调
	用时的各种条件。this 的绑定和函数声明的位置没有任何关系，
	只取决于函数的调用方式。
	
	当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包
	含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的
	其中一个属性，会在函数执行的过程中用到。	
	

调用栈 执行顺序：
	function c() {
	    console.log('c');
	}
	
	function b() {
	    console.log('b');
	    c();
	}
	
	function a() {
	    console.log('a');
	    b();
	}
	
	a();
	这段代码运行时，首先 a 会被加入到调用栈的顶部，然后，因为 a 内部调用了 b，紧接着 b 被加入到调用栈的顶部，当 b 内部调用 c 的时候也是类似的。在调用 c的时候，我们的调用栈从下往上会是这样的顺序：a -> b -> c。在 c 执行完毕之后，c 被从调用栈中移除，控制流回到 b 上，调用栈会变成：a -> b，然后 b 执行完之后，调用栈会变成：a，当 a 执行完，也会被从调用栈移除。







1.对象 
对象由变量和函数组成  称之为对象的属性和方法


2.面向对象
	构建函数和对象实例
	    
		当一个对象实例需要从类中创建出来时，类的构造函数就会运行来创建这个实例。这种创建对象实例的过程我们称之为实例化
	
	实例化对象的函数称为构造函数
	
	定义 Teacher() 构造器函数  
		function Teacher(){}
	-----------------------------------------
	通过函数定义 人
	
	实例化salva
		function createperson(name){
			var obj  = {};   声明一个对象
			obj.name = name;
			obj.greeting = function(){
			alert("hi! "+this.name);
		
		}
		return obj;
		}
		var salva = createNewPerson('salva');  	//实例化salva
		salva.name;
	---------------------------------------
	函数创建实例对象person1
		function Person(name) {
		  this.name = name;
		  this.greeting = function() {
		    alert('Hi! I\'m ' + this.name + '.');
		  };
		}
		var person1 = new Person('Bob');  	//创建实例对象
		person1.name
	---------------------------------------
	Object()构造函数   
	
	
	-->  var person1 = new Object({
		  name : 'Chris',
		  age : 38,
		  greeting : function() {
		    alert('Hi! I\'m ' + this.name + '.');
		  }
		});
		person1.name
	
	使用create()方法
		基于现有对象创建新的对象实例。
		var person2 = Object.create(person1);
	--> //继承了上面的Object 
		person2.name
	 
	--------------------------------------------



3.对象原型

	每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链
	
	
	原型链中的方法和属性没有被复制到其他对象
	原型链就是继承链 
	
	所有通过 对象直接量 创建的 对象 都具有同一个原型对象  可以通过Object.prototype 获得对原型对象的引用
	
	      继承于
	person1---> Person ----> Object
	
	
	person1.__proto__===Person.prototype  //true
		 
	对象的原型对象  =   构造函数的prototype属性
	
	
	
	           Person() 构造器
	  function Person(name) {
	    this.name = name;
	    this.greeting = function() {
	      alert('Hi! I\'m ' + this.name + '.');
	    };
	  }
	  Person.prototype.a = function() {
		console.log("a")
		}
	   
	  var person1 = new Person('Bob');     
	  person1.valueOf()
	  
	Person.prototype.a==person1.a  //true
	
	
	person1对象 的原型对象是 Person
	
	Person() 构造器的原型对象是 Object  

 

每个对象实例都具有 constructor 属性，它指向创建该实例的构造器函数
	
	person1的构造器的名字  
	
	person1.constructor.name  //"Person"
	
	person1.constructor = Person.prototype.constructor
	person1.constructor = Person
	Person===Person.prototype.constructor
	Person()函数是Person.prototype的构造函数

	person1.__proto__===Person.prototype                             //true
	person1.__proto__.constructor===Person.prototype.constructor     //true
	person1.__proto__.__proto__===Person.prototype.__proto__         //true
	Person.prototype.__proto__ ===Object.prototype              
	原型对象  构造函数的prototype对象 站在new出来对象的角度去看原型对象
	站在构造函数的角度去看原型属性

	每一个对象都有原型对象  原型对象提供construction  用construction获得构造函数

	被构造函数创建的实例对象的 [[prototype]] 指向 func 的 prototype 属性。Object.prototype 属性表示Object的原型对象。


	当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索


		总结：

			构造函数可以实例化对象
			构造函数里的prototype  是构造函数的prototype对象    构造函数.prototype
			构造函数里的prototype里有一个construction构造器 这个构造器指向的就是自己 所在的原型对象所在的构造函数
			实例对象的原型对象（__proto__）指向的是 该构造函数的原型对象  
			构造函数的原型对象（prototype）中的方法可以被实例对象直接访问







4.继承
	Teacher() 从Person()的原型对象里继承方法
	Teacher.prototype = Object.create(Person.prototype);
	
	/**
	每一个函数对象（Function）都有一个prototype属性，并且只有函数对象有prototype属性，因为prototype本身就是定义在Function对象下的属性。当我们输入类似var person1=new Person(...)来构造对象时，JavaScript实际上参考的是Person.prototype指向的对象来生成person1。另一方面，Person()函数是Person.prototype的构造函数，也就是说Person===Person.prototype.constructor（不信的话可以试试）。
	
	在定义新的构造函数Teacher时，我们通过function.call来调用父类的构造函数，但是这样无法自动指定Teacher.prototype的值，这样Teacher.prototype就只能包含在构造函数里构造的属性，而没有方法。因此我们利用Object.create()方法将Person.prototype作为Teacher.prototype的原型对象，并改变其构造器指向，使之与Teacher关联。
	
	任何您想要被继承的方法都应该定义在构造函数的prototype对象里，并且永远使用父类的prototype来创造子类的prototype，这样才不会打乱类继承结构。
	**/
	
	在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别
	


	继承分两种：
	原型继承：在对象的原型对象中添加东西   原型对象有了东西  对象才能继承    对原型链的增删改 让当前对具有某些方法
		1. 利用对象的动态特性添加成员
	
			 
			function person(){};
			person.prototype.sayhello=function(){
				alert("hahaha");
			}
			person.sayhello()
			添加的成员都会被构造函数创建出来的对象所继承

		2. 利用覆盖原型对象
     			 function Person() {}
     			 
     			 Person.prototype = {
     			   constructor: Person,       //覆盖原型对象实现继承的时候, 一定要给新对象添加一个 constructor 属性  以便模拟对象的类型
     			   sayHello: function() {},
     			   sayGoodbye: function() {},
     			   sayLove: function () {}
     			   
     			 };
     			
     			 var p = new Person();
     	 console.log( p.constructor.name );

	组合继承：将其他对象中的成员加到自己身上
		var o1 = { name: 'jim', age:19, gender: '男' };
		var o2 = { score: {
					math: 100,
					english:90,
					chinese:120
				} };

		for(var k in o1){o2[k]=o1[k]}

		extend()方法

			o2.extend = function(obj){
				for (var k in obj){
					this[k] = obj[k]
				}
			}
			o2.extend(o1);   //o2继承了o1
			o2.extend({      //o2继承了 id tag
				id:function(id){}
				tag:function(tag){}
			})
	
	通过原型来实现继承

    function Person(name,age,sex) {
      this.name=name;
      this.sex=sex;
      this.age=age;
    }
 
    function Student(score) {
      this.score=score;
    }
  
    Student.prototype=new Person("小明");
    
     
    var stu=new Student(100);
    console.log(stu.name);
	 
	
	借用构造函数 继承
	语法：
		构造函数名字.call(当前对象,属性,属性,属性....);
	    //解决了属性继承,并且值不重复的问题
	    //缺陷:父级类别中的方法不能继承

		function Product(name, price) {
		 this.name = name;
		 this.price = price;
		}
                                      
		function Toy(name, price) {
		  Product.call(this, name, price);
		  this.category = 'toy';
		}
		var car = new Toy('robot', 40);
		car.name






	经典范例

	var obj1 = {name:"jim"};
	var obj2 = Object.create(obj1);  //类型无关

	var create = function(obj){
		function F() {}
		F.prototype = obj;
		return new F();
	}


	obj2的原型对象就是obj1
	obj2的原型对象由 构造函数的prototype决定
	obj2的构造函数的prototype = obj1
	  
	浏览器兼容   
	 如果浏览器没有create方法  就自己写
		var create = function( obj ) {
				if ( Object.create ) {
					return Object.create( obj );
				} else {
					
					function F() {}
					F.prototype = obj;
					return new F();
				}
			}
	
	
	拷贝继承  
	把一个对象中的属性或者方法直接复制到另一个对象中
    function Person() {}
    Person.prototype.age=10;
    Person.prototype.sex="男";
    Person.prototype.height=100;
    Person.prototype.play=function () {
      console.log("玩的好开心");
    };
    var obj2={};

    for(var key in Person.prototype){
      obj2[key]=Person.prototype[key];
    }
    console.dir(obj2);
    obj2.play();
	


原型链 
	原型链是一种关系 实例对象和原型对象之间的关系  是通过__proto__来联系的

	function fn(){}
	var o = =new fn()
	o.__proto__ = fn
	o.__proto__.__proto__ = Object
	o.__proto__.__proto__.__proto__ =null
	
	var arr = [];
	arr > Array.prototype > Object.prototype > null
	
	var o = new Object();
	o > Object.prototype > null
	
	var Person  = function(){}
	var p = new Person();
	p > Person.prototype >Object.prototype > null	
	
	
	原型链查找
	function person(name) {
	    this.name = name;
	    this.greeting = function() {
	      alert('Hi! I\'m ' + this.name + '.');
	    };
	  }
	var p = new person('Bob');     
	  person1.valueOf()
	console.log(p.sssssssssssss) 已经有了sssssssssss属性   只是没有赋值 
	
5.json-----------
	JSON 是一种按照JavaScript对象语法的数据格式
	JSON 是一种纯数据格式，它只包含属性，
	对象
		{
		  
		  "a" : [
		          {"b" : []},
		        ]
		}
		
	数组	
		[
		  { "a" : []},
		  { "a" : []}
		]
	
	访问方式
		superHeroes.hometown
		superHeroes["active"]
	


获得对象的类名

//字符串处理函数
function Person(){}
var p = new Person();
var ctr = p.constructor; 
var s = "" + ctr;  //"function Person(){}"
获得函数名
方法一
	s = s.replace("function","|")
	var start = s.indexOf('|');
	var end = s.indexOf('(');
	if (start != -1&&end !=-1){
		
		var name = s.slice(start+2,end);
		alert(name)
	}

方法二
	var ctr = p.constructor;
	alert(ctr.name)

获取函数名
	function getname(fn){return fn.name}
	function abc(){}
	var o = new abc();
	var name = getname(o.constructor);
	alert(name)








函数  ------------------------------------------------------------------------------------------------

	函数是对象 
	对象有 属性 和 方法 
	函数有 属性 和 方法
	 
	我觉得这是个哲学问题，基于类的是创建模型，基于原型的是经验模型，
	前者是现有马这个概念，才有马这个实体，
	后者是先有马这个实体，才有马这个概念。
	在思考面向原型的时候，类的概念有是可以的，因为本质上对象的原型就是类。但是，类构造出对象的这个过程却要不得，面向原型里，是由具体对象推导出原型来的。
	访问对象的属性或者方法时，会访问其__proto__以及__proto__的__proto__，直到找到这个属性或者方法为止，而函数的prototype属性执行后会返回执行结果的__proto__.
	
	函数可以定义 可以调用 是js的词法特性

函数定义
	函数声明语句
		function f(){} 
		区别 
			函数声明 和 函数表达式 重要的区别是它们的名称标识符将会绑定在何处
	
	函数定义的表达式
		 
		函数表达式存储在变量后，变量也可作为一个函数使用
	 	var f = function(x,y){return x+y};  
	
	Function()构造函数
		
		var f = new Function("x","y","return x+y");   等价于函数表达式
	对象直接量
		var o = {}
		var o = {x:0, y:0, square:function(x){return x*x} }
		var y = o.square(3);
	
	数组直接量
		var a = [function(x) {return x*x}, 20]
		a[0](a[1]);  //400
	行内函数表达式  
		setTimeout(function timerHandler () {console.log("I wait for one second.")}, 1000);
	匿名函数 
		属于函数表达式
		function () {}
		(function(a){console.log(a);})(123);
		 
		(function(a){console.log(a);}(1234));

	立即执行函数
		var fnName=function(){alert('Hello World');}();

函数组成

	function 函数名称标识符 () {}

	函数名称是函数声明语句必需的部分 对函数定义表达式来说 名字是可选的 只存在于函数体内 指代该函数对象本身


函数的调用 4种 
	普通函数调用  f()
	方法调用      f.kan()   
		有参数  
			点访问 f.kan(x,y)   
			方括号访问 f["kan"](x,y)
		f().m() 在f()调用结束后继续调用返回值中方法m()
		任何函数 只要作为方法调用实际上都会传入一个隐式实参 这个实参是对象 方法调用的母体就是这个对象 基于这个对象的方法可以执行多种操作

		this
		关键字this 没有作用域的限制
		不能继承this
		this的值 指向调用他的对象
        this的值 是全局对象或 undefined

    构造函数调用 
        构造函数调用创建了一个新对象
    	var o = new Object()
    	var o = new Object     凡是没有形参的构造函数都可以省略圆括号
    间接调用
    	call()
    	apply()



函数的参数

	显示参数：函数定义的时候列出函数的显式参数
	隐式参数（Arguments）：函数的隐式参数是函数调用时传递给函数真正的值。
	参数数组： javascript 中的参数在内部是用一个数组来表示的，函数接收到的始终都是这个数组，而不关心数组中包含哪些参数，在函数体内可以通过 Arguments 对象来访问这个参数数组。
	
	参数的省略
		function f(a, b) {
		  return a;
		}
		
		f(1, 2, 3) // 1
		f(1) // 1
		f() // undefined
		
		f.length // 2

	默认值
	function doSome({a,b=2,c}){
	    console.log(a,b,c)
	    }
	    doSome({a:5,c:22}) 
	
	可变参数


	参数传递
		值传递      str  number  
		引用传递    数组  函数  对象


	arguments 对象 
		arguments用于读取参数列表 arguments[1]
		普通环境下  arguments 可以赋值
		严格模式下，arguments对象是一个只读对象，修改它是无效的（不能赋值） 但不会报错。
		arguments.callee 已经被弃用
	将对象属性用作实参
	
函数作为值
	function myFunction(a, b) {
	    return a * b;
	}
	var x = myFunction(4, 3) * 2;
	console.log(typeof(x)) //number

    把函数赋值给变量
		function a(x){return x*x}
		var s = a;
		a(3)
		s(3)

	函数作为方法
		var o = {x:0, y:0, square:function(x){return x*x} }
		var y = o.square(3);	



	
	
执行上下文    
		
	执行上下文环境 是理解变量对象和作用域链的基础
	定义
		当 js引擎开始开始执行预编译生成的代码时 就会进入上下文
		可以将执行上下文看成是一个栈结构  栈底永远是全局上下文  顶部是当前上下文 
		执行到当前上下文时 上下文入栈 执行完毕后 上下文出栈
	
	先加载程序A的上下文，然后开始执行A，保存程序A的上下文，调入下一个要执行的程序B的程序上下文，然后开始执行B,保存程序B的上下文。。。。
	进程就是包换上下文切换的程序执行时间总和 = CPU加载上下文+CPU执行+CPU保存上下文
	当定义的函数被执行时，就进入了函数代码，当前函数上下文被压入 EC 栈中。
	注意，在函数代码中，也不包含定义在该函数内部环境 function 内的代码。
		// 初始化
		EC = [
		  globalContext
		];
		
		// 第一次调用 foo 函数
		EC = [
		  <foo> functionContext,
		  globalContext
		];
		
		// 在 foo 内递归调用自己
		EC = [
		  <foo> functionContext - recursively,
		  <foo> functionContext,
		  globalContext
		];
执行上下文包含什么
	一个执行上下文我们可以抽象的理解为对象（object）。
	每一个执行上下文都有一些属性（又称为上下文状态），它们用来追踪关联代码的执行进度。
	执行上下文包括：全局上下文、函数上下文和 eval() 上下文
 


变量对象
	是一个抽象的概念，指代与执行上下文相关的特殊对象，它存储着在上下文中声明的：

		变量（var）
		函数声明 （function declaration，简写 FD）
		函数的形参（arguments）   
	
	变量对象是 执行上下文和作用域链  中间的桥梁
	this存在于 执行上下文中
	this例子
		var a = 10;  
		console.log(a)         //10                            
		console.log(window.a)  //10       
		console.log(this.a)    //10                

	
作用域
	
	作用域的作用：
		私有化变量或函数
		规避同名冲突


	全局变量：体外变量 体内无var的变量 在任何地方可调用
	局部变量：var变量 参数变量  在当前函数体调用
	特性:
		忽略块级作用域 
		全局变量是全局对象的属性
		局部变量是调用对象的属性

	JavaScript默认有一个全局对象window  全局变量会绑定到window上
		var course = 'Learn JavaScript';
		alert(course); // 'Learn JavaScript'
		alert(window.course); // 'Learn JavaScript'
	提升
		JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
		函数提升优先于变量提升   赋值操作不会提升
			foo(); // 1
			var foo;
			function foo() {console.log( 1 );}
			foo = function() {console.log( 2 );};		   
 
		表达式定义函数时无法提升
			myFunction(5);
			function myFunction(y) {
			    return y * y;
			}
	


	let const
		用let替代var可以申明一个块级作用域的变量
		const来定义常量，const与let都具有块级作用域：\
	
	
	
	
	
	
	解构赋值   
		以前：
			var array = ['hello', 'JavaScript', 'ES6'];
			var x = array[0];
			var y = array[1];
			var z = array[2];
		现在：
			var [x, y, z] = ['hello', 'JavaScript', 'ES6'];		
		解构赋值嵌套
			let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
			x; // 'hello'
			y; // 'JavaScript'
			z; // 'ES6'
			
			简写
			let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
			z; // 'ES6'
		例子
			var person = {
	    	name: '小明',
	    	age: 20,
	    	gender: 'male',
	    	passport: 'G-12345678',
	    	school: 'No.4 middle school',
	    	address: {
	    	    city: 'Beijing',
	    	    street: 'No.1 Road',
	    	    zipcode: '100001'
	    	}
			};
	    	                         
			把person里的东西 对应给name 
			
			var {name, address: {city, zip}} = person;
			name; // '小明'
			city; // 'Beijing'
			zip; // undefined, 因为属性名是zipcode而不是zip
			// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
			
			// 把passport属性赋值给变量id:
			let {name, passport:id} = person;
			name; // '小明'
			id; // 'G-12345678'
			
			// 如果person对象没有single属性，默认赋值为true:
			var {name, single=true} = person;
			name; // '小明'
			single; // true     
	
	
		使用场景
			交换两个变量x和y的值
				var x=1, y=2;
				[x, y] = [y, x]
			
			快速获取当前页面的域名和路径：
			
				var {hostname:domain, pathname:path} = location;       
	
	
		方法 
			在一个对象中绑定函数 称为这个对象的方法
			
			
			apply  call   继承
			
			猫吃鱼，狗吃肉，奥特曼打小怪兽。
			
			有天狗想吃鱼了
			
			猫.吃鱼.call(狗，鱼)
			
			狗就吃到鱼了
			
			猫成精了，想打怪兽
			
			奥特曼.打小怪兽.call(猫，小怪兽)	
	
	
	
属性
		
	点表示法(dot notation)来访问对象的属性和方法。
	对象的名字表现为一个命名空间(namespace)，它必须写在第一位 然后是一个点(.) 加属性或方法
		name属性     f.name    函数名字
	    prototype属性
	    length属性   f.length  length属性与形参有关
			function f() {
			  return arguments.length;
			}
			
			f(1, 2, 3) // 3
			f(1) // 1
			f() // 0
			
			
			function f(a, b) {
			  return arguments.length;
			}
			
			f(1, 2, 3) //2                 
			f(1)       //2                  
			f()        //2                   
			                   
			f.length   // 2
	
	属性值为列表
		name : ['Bob', 'Smith'],		
		person.name[0] //Bob
	
	属性值为对象
		name : {
		  first : 'Bob',
		  last : 'Smith'
		},
		person.name.first
		person['name']['first']
方法
		apply()
			语法：func.apply(thisArg, [argsArray])

		call()
			语法：fun.call(thisArg, arg1, arg2, ...)
			你可以使用call()来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。
				
			使用call方法调用父构造函数
				function Product(name, price) {
 					 this.name = name;
 					 this.price = price;
 					}
                                                                                                       	
				function Toy(name, price) {
				  Product.call(this, name, price);
				  this.category = 'toy';
				}
				var car = new Toy('robot', 40);
				car.name


				var animals = [
				  {species: 'Lion', name: 'King'},
				  {species: 'Whale', name: 'Fail'}
				];
				
				for (var i = 0; i < animals.length; i++) {
				  (function (i) { 
				    this.print = function () { 
				      console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
				    } 
				    this.print();
				  }).call(animals[i], i);
				}				
				


		bind()     将函数绑定到某个对象 
			//一般用不到
			//toString() toLocaleString()返回整段函数代码的字符串
			//valueOf()  
			//在数值运算里，会优先调用valueOf() 
			//在字符串运算里，会优先调用toString() 
			//var x = {toString: function() {return "foo"; },
		    //valueOf: function() {return 42; }};
		 	//console.log ("x="+x.valueOf());
		 	//console.log ("x="+x.toString());
	

闭包=我是内部的卧底
	只要使用了回调函数，实际上就是在使用闭包！
	闭包是将函数内部和函数外部连接起来的桥梁
	闭包 为了可控 不冲突
	闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。 

例子
	function foo(){
		var a = 2;
		function bar(){
			console.log(a);
		}
		return bar;
	}
	var baz = foo()  
	baz()
	
	foo：
	function foo(){
		var a = 2;
		function bar(){
			console.log(a);
		}
		return bar;
	}
		
	baz：
	function bar() {
	        console.log( a );
	    }	
	解析		
		bar() 的可以访问foo()的内部作用域 将bar()函数本身当做值 赋值给全局变量baz 并调用baz()
	
		实际上只是通过不同的标识符 调用了内部的函数 bar()。
		bar() 依然持有对该作用域的引用，而这个引用就叫作闭包
	
	分配给函数 
	function foo() {
	    var a = 2;
	    function baz() {
	        console.log( a ); // 2
	    }
	    bar( baz );  当参数
	}
	function bar(fn) {
	    fn();
	}
	foo()
	
	
	分配给全局变量
	var fn;
	function foo() {
	    var a = 2;
	    function baz() {
	        console.log( a );
	    }
	    fn = baz;  
	}
	function bar() {
	    fn();
	}
	foo();
	bar(); // 2   无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，

	将 timer分配给内置函数
		function wait(message) {
		    setTimeout( function timer() {
		        console.log( message );
		    }, 1000 );
		}
		wait( "Hello, closure!" );

	循环闭包
		for ( var i=1; i<=5; i++) {
		    (function(j){
		        setTimeout( function timer() {
		            console.log( j );
		        }, i*1000 );
		    })(i);
		}  
		//1 2 3 4 5

		for (let i=1; i<=5; i++) {
		    setTimeout( function timer() {
		        console.log( i );
		    }, i*1000 );
		}	
		for 循环头部的 let 声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量
			块作用域和闭包联手便可天下无敌


模块

	两个必要条件：
		1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块
		实例）。
		2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并
		且可以访问或者修改私有的状态
	
	一个具有函数属性的对象本身并不是真正的模块。从方便观察的角度看，一个从函数调用
	所返回的，只有数据属性而没有闭包函数的对象并不是真正的模块	
	
	这个模式在 JavaScript 中被称为模块。最常见的实现模块模式的方法通常被称为模块暴露
		
		function CoolModule() {
		    var something = "cool";
		    var another = [1, 2, 3];
		    function doSomething() {
		        console.log( something );
		    }
		    function doAnother() {
		        console.log( another.join( " ! " ) );
		    }
		    return {
		        doSomething: doSomething,
		        doAnother: doAnother
		    };
		}
		var foo = CoolModule();
		foo.doSomething(); // cool
		foo.doAnother();
		
			    / doSomething: function doSomething() {console.log( something );}
		foo ——<              	
			    \ doAnother: function doAnother() {console.log( another.join( " ! " ) );}          /
		
	
	单例模式
	
	var foo = (function CoolModule() {
	    var something = "cool";
	    var another = [1, 2, 3];
	    function doSomething() {
	        console.log( something );
	    }
	    function doAnother() {
	        console.log( another.join( " ! " ) );
	    }
	    return {                                          函数作为返回值
	        doSomething: doSomething,  可以将这个对象类型的返回值看作本质上是模块的公共 API
	        doAnother: doAnother
	    };
	})();
	foo.doSomething(); // cool        
	foo.doAnother(); // 1 ! 2 ! 3
	
	加参数
		function CoolModule(id) {
		    function identify() {
		        console.log( id );
		    }
		    return {
		        identify: identify
		    };
		}
		var foo1 = CoolModule( "foo 1" );
		var foo2 = CoolModule( "foo 2" );
		
		foo1.identify(); // "foo 1"           
		foo2.identify(); // "foo 2"
	
	命名将要作为公共 API 返回的对象：  
		单例
		var foo = (function CoolModule(id) {
		    function change() {
		// 修改公共 API
		        publicAPI.identify = identify2;
		    }
		    function identify1() {
		        console.log( id );
		    }
		    function identify2() {
		        console.log( id.toUpperCase() );
		    }
		    var publicAPI = {
		        change: change,
		        identify: identify1
		    };
		    return publicAPI;
		})( "foo module" );
		foo.identify(); // foo module
		foo.change();
		foo.identify(); // FOO MODULE
	
	通过在模块实例的内部保留对公共 API 对象的内部引用，可以从内部对模块实例进行修
	改，包括添加或删除方法和属性，以及修改它们的值

箭头函数

	var foo = a=>{console.log(a)};  foo(2)
	var foo = function(a){console.log(a)};foo(2)
	
	var obj = {id:"awesome",
	           cool:function coolfn(){console.log(this.id)}};
	var id = "not awesome"


高阶函数
		函数作 参数    这种函数就称之为高阶函数。
		函数作 返回值 
		函数其实都指向某个变量   变量可以指向函数  函数的参数能接收变量

		编写高阶函数，就是让函数的参数能够接收别的函数
		function add(x, y, f) {
		    return f(x) + f(y);
		}
		var x = add(-5, 6, Math.abs); // 11
		console.log(x);






回调函数

	由另一个函数作为参数的函数称为 (callback function "回调函数")
	
	
	function han1 (值) {
	    alert(值);
	}
	function execute (han2, 值) {
	    han2(值);
	}
	execute(han1, 'hi js.');
	


浏览器------------------------------------------------------------------


dom对象
	getElementByName  
	getElementByTagName  
	
	getAttribute
	setAttribute

	访问子节点childNodes
	访问父节点parentNode
    访问兄弟节点 previousSibling   nextSibling

    插入节点 
    删除节点
    替换节点
    
    创建元素节点
    创建文本节点

    节点属性
    	节点名 nodename
    		元素节点----> 标签名
    		属性节点----> 属性名
    		文本节点----> #text
    		文档节点----> #document
    	节点值 nodevalue
    		元素节点 的nodevalue是 undefined 或 null
    		文本节点 的值是文本自身
    		属性节点的值 是属性值
    	节点类型

    		元素  1
    		属性  2 
    		文本  3
    		注释  8
    		文档  9



dom操作 

	获取节点
		document
			getElementById   元素id
			getElementByName 元素name属性
			getElementByTagName 元素标签
		节点指针
			firstChild
			lastChild
			childNodes
			previousSibling
			nextSibling
			parentNode

	节点操作
		创建节点
			createElement
			createAttribute
			createTextNode
		插入节点
			appendChild   后插
			insertBefore  前插
		
		替换节点 replaceChild

		复制节点 cloneNode

		删除节点 removeChild

	属性操作
		获取属性 getAttribute
		设置属性 setAttribute
		删除属性 removeAttribute

	文本操作
		splitText(3)  分割
		xml
			appendData()	向节点追加数据。
			deleteData()	从节点删除数据。
			insertData()	向节点中插入数据。
			replaceData()	替换节点中的数据。
			replaceWholeText(text)	使用指定文本来替换此节点以及所有相邻的文本节点。
			splitText()	在指定的偏移处将此节点拆分为两个节点，同时返回包含偏移处之后的文本的新节点。
			substringData()	从节点提取数据。
	

window对象
setInterval
	每三秒（3000 毫秒）弹出 "Hello" :
	setInterval(function(){ alert("Hello"); }, 3000);
	setInterval('alert("Hello");', 3000);
	
setTimeout
	3 秒 后弹出 "Hello" :
	setTimeout(function(){ alert("Hello"); }, 3000);



api-----


什么是API
	应用程序接口（API）是以编程语言提供的结构，允许开发人员更容易地创建复杂的功能。它们抽象出更复杂的代码，并提供一些简单的语法来使用。

	客户端JavaScript中的API
	
	本身并不是JavaScript语言的一部分，却建立在JavaScript语言核心的顶部，为使用JavaScript代码提供额外的超强能力

	分两类：
		浏览器api  内置于浏览器中
		第三方API 不会内置于浏览器中  例如Twitter API 推文
	
	JavaScript，API和其他JavaScript工具之间的关系
		JavaScript — 一种内置于浏览器的高级脚本语言
		客户端API — 内置于浏览器的结构程序
		第三方API — 置于第三方普通的结构程序
		JavaScript库 — 通常是包含具有特定功能的一个或多个JavaScript文件，把这些文件关联到您的Web页以快速或授权编写常见的功能。例如包含jQuery和Mootools
		JavaScript框架 — 从库开始的下一步，JavaScript框架视图把HTML、CSS、JavaScript和其他安装的技术打包在一起，然后用来从头编写一个完整的Web应用。
		

API可以做什么
	常见浏览器API
		操作文档的API  内置于浏览器中   例如 DOM API  操作HTML和CSS
		从服务器获取数据的API   用于更新网页的一小部分是相当好用的  XMLHttpRequest
		用于绘制和操作图形的API  例如 Canvas和WebGL
		音频和视频API   Web Audio API
		客户端存储API   存储数据 脱机状态时可用 
	常见第三方API
		Twitter API       推送
		Google Maps API   定位


API如何工作
	它们是基于对象的
	它们有可识别的入口点
	它们使用事件来处理状态的变化
	它们在适当的地方有额外的安全机制




事件----

addEventListener() 添加事件句柄
	element.addEventListener() 方法为指定元素添加事件句柄。
	document.addEventListener(event, function, useCapture)
	useCapture 
		true - 事件句柄在捕获阶段执行
		false- 默认。事件句柄在冒泡阶段执行	
    
removeEventListener()  移除 addEventListener() 方法添加的事件句柄
监听事件发生的构造方法称为事件监听器
响应事件触发而运行的代码块称为 事件处理器


















客户端 服务器 之间：
	网络连接:  发送和接受数据  就像你家到商店的街道
	
	DNS: 域名系统服务器像是一本网站通讯录。当你在浏览器内输入一个网址时，浏览器获取网页之前将会查看域名系统。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。  商店地址
	TCP/IP:  定义数据如何传输的通信协议 怎么去商店
	HTTP: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）  就像你下订单时所说的话一样
	组成文件: 一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型：  得到的商品
		代码 : 网页大体由 HTML、CSS、JavaScript组成，不过你会在后面看到不同的技术。
		资源 : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word文档、PDF文件。	

一个小网络 
	电脑-->路由-->电脑
	电脑-->路由-->猫-->互联网服务商-->猫-->路由-->电脑

	互联网是基础设施，网络是建立在这种基础设施之上的服务值  一些其他服务运行在互联网之上，比如邮箱和IRC.

网络服务主要类型
	1、ISP  网络联线服务商，专指提供网络通路以使用户与网络连线的从业者， 物理线路
	2、IAP  网络中转站、租用信道和电话线路，以提供中介服务，包括连线服务、IP地址分配，电子公告板BBS等。
	3、ICP  内容提供商，是利用IAP线路，通过设立网站提供信息服务的经营者，新浪、雅虎、搜狐  ICP为用户提供发布信息和查询信息的服务，不提供接入服务。
	4、OSP  提供在线服务 检索查询 论坛服务。
	5、IPP  网络平台服务商，为用户提供信息交流和技术服务的空间。
	6、IEP  他是为ISP、ICP等提供接入设备和技术服务的网络产品生产商。
	7、ASP  应用服务提供商，向用户提供一切可能的网络应用服务。	


javascript在 页面上做什么？
	
	通过 DOM API 动态地修改 HTML 和 CSS 来更新用户交界面

怎样向你的页面添加 JavaScript？
	内部的javascript
	<script>
		function createParagraph() {
	  var para = document.createElement('p');         创建元素
	  para.textContent = 'You clicked the button!';  设置文本节点
	  document.body.appendChild(para);               追加元素到body
	}
	
	var buttons = document.querySelectorAll('button');  获取所有的按钮元素
	
	for(var i = 0; i < buttons.length ; i++) {         添加点击事件
	  buttons[i].addEventListener('click', createParagraph);
	}
	</script>
		
	外部的javascript 推荐
		
		<script src="script.js"></script>
	
	内联的javascript  不推荐
		<button onclick="createParagraph()">Click me!</button>



