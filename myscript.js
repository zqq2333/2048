
var cells=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var testcells=new Array(16);
var score=0;
var ku=0;
var kd=0;
var kl=0;
var kr=0;
var setkeynu=0;

function setkey() {                            //操作设置
	var input=document.getElementById("input");
	var e = window.event || test.caller.arguments[0];
	var el = e.target || e.srcElement;	
	switch(setkeynu){
		case 0:
		ku=setone(el.innerHTML);
		setkeynu++;
		break;
		case 1:
		kd=setone(el.innerHTML);
		setkeynu++;
		break;
		case 2:
		kl=setone(el.innerHTML);
		setkeynu++;
		break;
		case 3:
		kr=setone(el.innerHTML);
		setkeynu++;
		break;
	}
	if (ku&&kd&&kl&&kr) {
		document.getElementById("key").innerHTML="成功配置，按下“Enter”开始游戏";
	}
}

function setone(inner) {                //一个按键的操作设置
	switch(inner){
		case "1":return 49;
		case "2":return 50;
		case "3":return 51;
		case "4":return 52;
		case "5":return 53;
		case "6":return 54;
		case "7":return 55;
		case "8":return 56;
		case "9":return 57;
		case "0":return 48;
		case "q":return 81;
		case "w":return 87;
		case "e":return 69;
		case "r":return 82;
		case "t":return 84;
		case "y":return 89;
		case "u":return 85;
		case "i":return 73;
		case "o":return 79;
		case "p":return 80;
		case "a":return 65;
		case "s":return 83;
		case "d":return 68;
		case "f":return 70;
		case "g":return 71;
		case "h":return 72;
		case "j":return 74;
		case "k":return 75;
		case "l":return 76;
		case "z":return 90;
		case "x":return 88;
		case "c":return 67;
		case "v":return 86;
		case "b":return 66;
		case "n":return 78;
		case "m":return 77;
		case "↑":return 38;
		case "↓":return 40;
		case "←":return 37;
		case "→":return 39;
	}
}

function putNew()            //显示
{
	if (cells[0]!=0) {
		document.getElementById("a0").innerHTML=cells[0];
	}
	else{
		document.getElementById("a0").innerHTML=" ";
	}
	if (cells[1]!=0) {
		document.getElementById("a1").innerHTML=cells[1];
	}
	else{
		document.getElementById("a1").innerHTML=" ";
	}
	if (cells[2]!=0) {
		document.getElementById("a2").innerHTML=cells[2];
	}
	else{
		document.getElementById("a2").innerHTML=" ";
	}
	if (cells[3]!=0) {
		document.getElementById("a3").innerHTML=cells[3];
	}
	else{
		document.getElementById("a3").innerHTML=" ";
	}
	if (cells[4]!=0) {
		document.getElementById("a4").innerHTML=cells[4];
	}
	else{
		document.getElementById("a4").innerHTML=" ";
	}
	if (cells[5]!=0) {
		document.getElementById("a5").innerHTML=cells[5];
	}
	else{
		document.getElementById("a5").innerHTML=" ";
	}
	if (cells[6]!=0) {
		document.getElementById("a6").innerHTML=cells[6];
	}
	else{
		document.getElementById("a6").innerHTML=" ";
	}
	if (cells[7]!=0) {
		document.getElementById("a7").innerHTML=cells[7];
	}
	else{
		document.getElementById("a7").innerHTML=" ";
	}
	if (cells[8]!=0){
		document.getElementById("a8").innerHTML=cells[8];
	}
	else{
		document.getElementById("a8").innerHTML=" ";
	}
	if (cells[9]!=0){
		document.getElementById("a9").innerHTML=cells[9];
	}
	else{
		document.getElementById("a9").innerHTML=" ";
	}
	if (cells[10]!=0){
		document.getElementById("a10").innerHTML=cells[10];
	}
	else{
		document.getElementById("a10").innerHTML=" ";
	}
	if (cells[11]!=0){
		document.getElementById("a11").innerHTML=cells[11];
	}
	else{
		document.getElementById("a11").innerHTML=" ";
	}
	if (cells[12]!=0){
		document.getElementById("a12").innerHTML=cells[12];
	}
	else{
		document.getElementById("a12").innerHTML=" ";
	}
	if (cells[13]!=0){
		document.getElementById("a13").innerHTML=cells[13];
	}
	else{
		document.getElementById("a13").innerHTML=" ";
	}
	if (cells[14]!=0){
		document.getElementById("a14").innerHTML=cells[14];
	}
	else{
		document.getElementById("a14").innerHTML=" ";
	}
	if (cells[15]!=0){
		document.getElementById("a15").innerHTML=cells[15];
	}
	else{
		document.getElementById("a15").innerHTML=" ";
	}
}

function newcell() {         //随机出现
	var i=0;
	var j=0;
	while(i<16){
		if(cells[i]==0){
			j=1;
		}
		i++;
	}
	var e=0;
	if(j==1){
		while(e==0){
			var a;
			var b;
			a=Math.floor(Math.random()*16);
			b=2*Math.ceil(Math.random()*2);
			if (cells[a]==0) {
				cells[a]=b;
				e=1;
			}
		}
	}
}

function set(m) {          //向下移动
	var i=0;
	var j=0;
	var temp=0;
	while(i<4){
		if (m[i]!=0) {
			temp=m[i];
			m[i]=0;
			m[j]=temp;
			j=j+1;
		}
		i++;
	}   
}

function compare(m) {     //按键后改变

	var p=0;
	set(m);
	while(p<4){
		if(m[p]==m[p+1]){
			m[p]=2*m[p];
			m[p+1]=0;
			score=score+m[p];
		}
		p++;
	}
	set(m);
	document.getElementById("nu").innerHTML="分数"+score;
}

function testCompare(m) {     //检测失败使用按键后改变
	var p=0;
	set(m);
	while(p<4){
		if(m[p]==m[p+1]){
			m[p]=2*m[p];
			m[p+1]=0;
		}
		p++;
	}
	set(m);
}

function inputCompare(m,n,p,q) {     //输入需改变输位编号
	var c=new Array(4);
	c[0]=cells[m];
	c[1]=cells[n];
	c[2]=cells[p];
	c[3]=cells[q];
	compare(c);
	cells[m]=c[0];
	cells[n]=c[1];
	cells[p]=c[2];
	cells[q]=c[3];
}

function testinputCompare(m,n,p,q) {     //检测失败使用输入需改变输位编号
	var c=new Array(4);
	c[0]=testcells[m];
	c[1]=testcells[n];
	c[2]=testcells[p];
	c[3]=testcells[q];
	testCompare(c);
	testcells[m]=c[0];
	testcells[n]=c[1];
	testcells[p]=c[2];
	testcells[q]=c[3];
}


document.onkeyup=function(event) {
	var i=0;
	var j=0;
	var k=event||window.event||arguments.callee.caller.arguments[0];
	if (k&&k.keyCode==13) {
		newGame();
	}
	if(k&&k.keyCode==kd){
		inputCompare(12,8,4,0);
		putNew();
		inputCompare(13,9,5,1);
		putNew();
		inputCompare(14,10,6,2);
		putNew();
		inputCompare(15,11,7,3);
		newcell();
		putNew();
	}

	if(k&&k.keyCode==kr){
		inputCompare(3,2,1,0);
		putNew();
		inputCompare(7,6,5,4);
		putNew();
		inputCompare(11,10,9,8);
		putNew();
		inputCompare(15,14,13,12);
		newcell();
		putNew();
	}

	if(k&&k.keyCode==ku){
		inputCompare(0,4,8,12);
		putNew();
		inputCompare(1,5,9,13);
		putNew();
		inputCompare(2,6,10,14);
		putNew();
		inputCompare(3,7,11,15);
		newcell();
		putNew();
	}

	if(k&&k.keyCode==kl){
		inputCompare(0,1,2,3);
		putNew();
		inputCompare(4,5,6,7);
		putNew();
		inputCompare(8,9,10,11);
		putNew();
		inputCompare(12,13,14,15);
		newcell();
		putNew();
	}

	while(i<16){
		if (cells[i]==2048) {
			j=1;
			break;
		}
		i++;
	}

	if(j==1){
		document.getElementById("world").innerHTML="完成";
		document.getElementById("fail").style.visibility="visible";
	}


	i=0;
	j=0;

	while(i<16){
		if (cells[i]==0) {
			j=1;
			break;
		}
		i++;
	}

	if (j==0) {
		i=0;
		while(i<16){
			testcells[i]=cells[i];
			i++;
		}
		testinputCompare(12,8,4,0);
		testinputCompare(13,9,5,1);
		testinputCompare(14,10,6,2);
		testinputCompare(15,11,7,3);
		testinputCompare(3,2,1,0);
		testinputCompare(7,6,5,4);
		testinputCompare(11,10,9,8);
		testinputCompare(15,14,13,12);
		testinputCompare(0,4,8,12);
		testinputCompare(1,5,9,13);
		testinputCompare(2,6,10,14);
		testinputCompare(3,7,11,15);
		testinputCompare(0,1,2,3);
		testinputCompare(4,5,6,7);
		testinputCompare(8,9,10,11);
		testinputCompare(12,13,14,15);
		i=0;
		while(i<16){
			if (testcells[i]==0) {
				j=1;
				break;
			}
			i++;
		}
		if (j==0) {                              	//失败显示
			document.getElementById("world").innerHTML="失败";
			document.getElementById("fail").style.visibility="visible";
		}
	}
}

function newGame() {
	var i=0;
	while(i<16){
		cells[i]=0;
		i++;
	}
	newcell();
	putNew();
	newcell();
	putNew();
	score=0;
	document.getElementById("nu").innerHTML="分数"+score;
	document.getElementById("fail").style.visibility="hidden";
	document.getElementById("setkey").style.visibility="hidden"
}