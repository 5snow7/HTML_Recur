 
 function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 
 function rec(t,len,lev){
	 if(lev==0){}//t.fd(len);}
	 else{
	t.fd(len);t.rt(144);t.fd(len/2);t.lt(72);//junk
	rec(t,len/2,lev-1);//calling myself back
	t.fd(len);t.rt(144);
	}
 }
 
function funcTest(){
	 rec(t_Test,300,6);
	  }
 


 function v(t,len,lev){
	 if(lev==0){}
	 else{
		 t.rt(40);
		 t.fd(len);v(t,len/2,lev-1);t.bk(len);
		 t.lt(80);
		 t.fd(len);v(t,len/2,lev-1);t.bk(len);
	     t.rt(40);
	}
	}
	



	
function recur1(){
clear_Can();
v(trecur,200,k);k++;
if(k>6){k=1;}

}

function funcLD(){
tLD.set1(300,300,-90);
funcLDbasic();tLD.rt(90);
funcLDbasic();tLD.rt(90);funcLDbasic();tLD.rt(90);
funcLDbasic();tLD.rt(90);
}	
function funcLDbasic(){
	tLD.c.strokeStyle="green";
	let x=[];let y=[];
	for(let j=1;j<21;j++){
	tLD.fd(20);x[j]=tLD.xpos();y[j]=tLD.ypos();	
	}
	tLD.bk(400);tLD.rt(90);
	for(let j=21;j<41;j++){
	tLD.fd(20);x[j]=tLD.xpos();y[j]=tLD.ypos();	
	}
	for(let j=1;j<21;j++){
	tLD.line(x[21-j],y[21-j],x[20+j],y[20+j]);	
	}
    tLD.bk(400);tLD.lt(90);
	tLD.c.strokeStyle="red";
	}	

function koch(t,len,lev){
if(lev==0){t.fd(len);}
else{
koch(t,len/3,lev-1);t.lt(60);	
koch(t,len/3,lev-1);t.rt(120);
koch(t,len/3,lev-1);t.lt(60);
koch(t,len/3,lev-1);
}
}

function koch1(){
tk.set1(450,250,0)
cntk++;clear_Can();
for(let j=1;j<13;j++){
koch(tk,inputLen,cntk);
tk.set1(450,250,30*j);}
if(cntk>4){cntk=0;}
tk.set1(450,250,0)
}


function kochAng(t,ang,len,lev){
if(lev<=0){t.fd(len);}
else{
kochAng(t,ang,len/3,lev-1);t.lt(ang);	
kochAng(t,ang,len/3,lev-1);t.rt(180-ang);
kochAng(t,ang,len/3,lev-1);t.rt(180-ang);
kochAng(t,ang,len/3,lev-1);lt(ang);
kochAng(t,ang,len/3,lev-1);
}
}

function kochAng1(){
tk.set1(450,250,0)
cntk++;clear_Can();
//for(let j=1;j<13;j++){
kochAng(tk,90,inputLen,cntk);
tk.set1(450,250,0);//*j);
//}
if(cntk>4){cntk=0;}
tk.set1(450,250,0)
}

function inPut1(){
inputLen=document.getElementById("text1").value;

}	
	  
	  
