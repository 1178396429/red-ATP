
JavaScript ( JS ) 是一种具有函数优先的轻量级解释型或即时编译型的编程语言。
例如 node.js、 Apache CouchDB 和 Adobe Acrobat。
JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格

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

	基本上 JavaScript 里的任何东西都是对象，而且都可以被储存在变量里
	
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

对象 字符串到值的映射 
	 其他叫法 散列 字典 关联数组
	 JavaScript对象还可以从一个称为原型的对象继承属性。对象的方法通常是继承的属性。这叫“原型式继承”

每个属性还有一些与之相关的值，称为“属性特性”（property attribute）  
	·可写（writable attribute），表明是否可以设置该属性的值。
	·可枚举（enumerable attribute），表明是否可以通过for/in循环返回该属性。
	·可配置（configurable attribute），表明是否可以删除或修改该属性。

每个对象还拥有三个相关的对象特性（object attribute）：
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

创建对象
	对象直接量
		var empty={};//没有任何属性的对象
		var point={x:0,y:0};//两个属性



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
	 	var f = function(x,y){return x+y};  //这两条代码是等价的  
	
	Function()构造函数
		
		var f = new Function("x","y","return x+y");  //Function()构造函数  
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
	
方法
		apply()
		call()
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
	

闭包

	 

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




function han1 (值) {
    alert(值);
}
function execute (han2, 值) {
    han2(值);
}
execute(han1, 'hi js.');



浏览器------------------------------------------------------------------
















api

事件-------------------
addEventListener() 添加事件句柄
	element.addEventListener() 方法为指定元素添加事件句柄。
	document.addEventListener(event, function, useCapture)
	useCapture 
		true - 事件句柄在捕获阶段执行
		false- 默认。事件句柄在冒泡阶段执行	
    
removeEventListener()  移除 addEventListener() 方法添加的事件句柄


文档对象----------------
querySelector() 
	document.querySelector("body");//返回body节点
	document.querySelector("#k");//返回id为k的节点
	document.querySelector("#k span");//返回id为k的节点下的第一个span节点
	document.querySelector("#k").querySelector("span");//返回id为k的节点下的第一个span节点
	
	document.querySelectorAll("li");//返回所用tagName为li的节点集合（NodeList）
	document.querySelectorAll("div .li");//返回class为li的div


元素对象----------------

textContent  设置或者返回指定节点的文本内容。
	语法
	设置节点文本内容:node.textContent=text
	返回节点文本内容:node.textContent
	获取所有列表的文本内容：
	document.getElementById("myList").textContent;



browser-sync start --server --files "css/*.css"
browser-sync start --server --files "css/*.css, *.html"
browser-sync start --server --files "**/*.css, **/*.html"






<ul id="myList"><li id="item1">Coffee</li><li id="item2">Tea</li></ul>
<p id="demo">单击按钮获取列表元素的文本内容</p>
<button onclick="myFunction()">点我</button>


function myFunction(){
	var lst=document.getElementById("myList");
	var x=document.getElementById("demo");  
	x.innerHTML=lst.textContent;




