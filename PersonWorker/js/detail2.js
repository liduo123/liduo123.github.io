// JavaScript Document
window.onload=function (){
	
	var oMain1tab=document.getElementById('main1-tab');
	var oMain1pic=document.getElementById('main1-pic');
	var aMaindiv=oMain1pic.getElementsByTagName('div');
	var oMainbtn=document.getElementById('main1-btn');
	var aMainBtn=oMainbtn.getElementsByTagName('li');
	var oMainnow=0; // 当前
	
	// 选项卡
	for (var i=0; i<aMainBtn.length; i++)
	{
		aMainBtn[i].index=i;
		
		aMainBtn[i].onclick=function (){
			oMainnow=this.index;
			
			tab();
		};
	}
	
	// 上一个
	var timer=setInterval(next, 2000);
	
	oMain1tab.onmouseover=function (){
		clearInterval(timer);
	};
	
	oMain1tab.onmouseout=function (){
		timer=setInterval(next, 2000);
	};
	
	function next()
	{
		oMainnow++;
		
		if (oMainnow == aMainBtn.length)
		{
			oMainnow=0;
		}
		
		tab();
	}
	function tab()
	{
		for (var i=0; i<aMainBtn.length; i++)
		{
			aMainBtn[i].className='fl';
			aMaindiv[i].className='';
		}
		
		aMainBtn[oMainnow].className='active fl';
		aMaindiv[oMainnow].className='active';
	}
	

	var oBox=document.getElementById('southbox');
	var oCont=document.getElementById('southcont');
	var oSpan=document.getElementById('southspan1');
	var oUp=document.getElementById('southup'); 
	var oDown=document.getElementById('southdown');
	var oSide=document.getElementById('southside');
	var oScroll=document.getElementById('southscroll');
	var top=0;
	var conttop=0;
	var h=parseInt(getStyle(oBox,'height'))/oCont.offsetHeight*oScroll.offsetHeight;
	oSpan.style.height=h+'px';
	oSpan.onmousedown=function(ev)
	{
		var eve=ev || event;
		var disY=eve.clientY-oSpan.offsetTop;
		
		
		var maxtop=oScroll.offsetHeight-oSpan.offsetHeight;
		var maxcont=oCont.offsetHeight-parseInt(getStyle(oBox,'height'));
		document.onmousemove=function(ev)
		{
			var even=ev || event;
			top=even.clientY-disY;
			if(top<0)
			{
				top=0;	
			}
			else if(top>maxtop)
			{
				top=maxtop;		
			}
			oSpan.style.top=top+'px';
			conttop=top/maxtop*maxcont;
			oCont.style.top=-conttop+'px';
				
		}
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;	
		}
	}
	oUp.onmousedown=function()
	{
		top-=10;
		var maxtop=oScroll.offsetHeight-oSpan.offsetHeight;
		var maxcont=oCont.offsetHeight-parseInt(getStyle(oBox,'height'));
		if(top<0)
			{
				top=0;	
			}
			else if(top>maxtop)
			{
				top=maxtop;		
			}
			oSpan.style.top=top+'px';
			conttop=top/maxtop*maxcont;
			oCont.style.top=-conttop+'px';	
	}
	oDown.onmousedown=function()
	{
		top+=10;
		var maxtop=oScroll.offsetHeight-oSpan.offsetHeight;
		var maxcont=oCont.offsetHeight-parseInt(getStyle(oBox,'height'));
		if(top<0)
			{
				top=0;	
			}
			else if(top>maxtop)
			{
				top=maxtop;		
			}
			oSpan.style.top=top+'px';
			conttop=top/maxtop*maxcont;
			oCont.style.top=-conttop+'px';
	}	
	function getStyle(obj,sName)
	{
		return (obj.currentStyle||getComputedStyle(obj, false))[sName];	
	}	
	function addWheel(obj,fn)
	{
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)
		{
			obj.addEventListener('DOMMouseScroll',function(ev){
				var oEvent=ev||event;
				var down=true;
				if(oEvent.detail>0)
				{
					down=true;	
				}
				else
				{
					down=false;
				}
				fn(down);},false)
					
		}
		else
		{
			obj.onmousewheel=function(ev)
			{
				var oEvent=ev||event;
				var down=true;
				if(oEvent.wheelDelta<0)
				{
					down=true;	
				}
				else{down=false;}
				fn(down);		
			}
			
			
		}	
	};
	addWheel(document,function(down)
	{
		if(down)
		{
			
		top+=10;
		var maxtop=oScroll.offsetHeight-oSpan.offsetHeight;
		var maxcont=oCont.offsetHeight-parseInt(getStyle(oBox,'height'));
		if(top<0)
			{
				top=0;	
			}
			else if(top>maxtop)
			{
				top=maxtop;		
			}
			oSpan.style.top=top+'px';
			conttop=top/maxtop*maxcont;
			oCont.style.top=-conttop+'px';
		}
		else
		{
			top-=10;
			var maxtop=oScroll.offsetHeight-oSpan.offsetHeight;
			var maxcont=oCont.offsetHeight-parseInt(getStyle(oBox,'height'));
			if(top<0)
			{
				top=0;	
			}
			else if(top>maxtop)
			{
				top=maxtop;		
			}
			oSpan.style.top=top+'px';
			conttop=top/maxtop*maxcont;
			oCont.style.top=-conttop+'px';		
		}
		return false;		
	})
	
	var oCatul=document.getElementById('catul');;
	var aLi=oCatul.children;
	var aPos=[];
	var zIndex=1;
	
	
	for(var i=0;i<aLi.length;i++)
	{
		aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
	}
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].style.left=aPos[i].left+'px';
		aLi[i].style.top=aPos[i].top+'px';
		aLi[i].style.position='absolute';
		aLi[i].style.margin='0';
	}
	
	for(var i=0;i<aLi.length;i++)
	{
		flag(aLi[i]);
		aLi[i].index=i;	
	}
	
	function flag(obj)
	{
		obj.onmousedown=function(ev)
		{
			var near=null;
			
			var eve=ev||event;
			var disX=eve.clientX-obj.offsetLeft;
			var disY=eve.clientY-obj.offsetTop;
			obj.style.zIndex=zIndex++;
			document.onmousemove=function(ev)
			{
				var eve=ev||event;
				var left=eve.clientX-disX;
				var top=eve.clientY-disY;
				obj.style.left=left+'px';
				obj.style.top=top+'px';
				near=findNear(obj);
				if(near)
				{
					for(var i=0;i<aLi.length;i++)
					{
						aLi[i].className='';
					}
					near.className='active';
				}
				else
				{
					for(var i=0;i<aLi.length;i++)
					{
						aLi[i].className='';
					}
				}
				
			}
			
			document.onmouseup=function()
			{
				document.onmousemove=null;
				document.onmouseup=null;
				if(near)
				{
					move(obj,aPos[near.index]);
					move(near,aPos[obj.index]);
					var tmp=0;
					tmp=obj.index;
					obj.index=near.index
					near.index=tmp;
					
					for(var i=0;i<aLi.length;i++)
					{
						aLi[i].className='';
					}
						
				}
				else
				{
					move(obj,aPos[obj.index]);	
				}
				
				
			};
			return false;	
		}	
	}
	function col(obj1,obj2)
	{
		var l1=obj1.offsetLeft;
		var r1=l1+obj1.offsetWidth;
		var t1=obj1.offsetTop;
		var b1=t1+obj1.offsetHeight;
		
		var t2=obj2.offsetTop;
		var b2=t2+obj2.offsetHeight;
		var l2=obj2.offsetLeft;
		var r2=l2+obj2.offsetWidth;
		
		if (l2>r1 || l1>r2 || t2>b1 || t1>b2)
		{
			return false;
		}
		else
		{
			return true;
		}
		
	}
	function dis(obj1,obj2)
	{
		var a=obj1.offsetLeft+obj1.offsetWidth/2-(obj2.offsetLeft+obj2.offsetWidth/2);
		var b=obj1.offsetTop+obj1.offsetHeight/2-(obj2.offsetTop+obj2.offsetHeight/2);
		return Math.sqrt(a*a+b*b);	
	}
	function findNear(obj)
	{
		var minN=9999;
		var minindex=-1;
		for(var i=0;i<aLi.length;i++)
		{
			if(obj!=aLi[i])
			{
				if(col(obj,aLi[i]))
				{
					var a=dis(obj,aLi[i]);
					if(a<minN)
					{
						minN=a;
						minindex=i;
					}	
				}
				
			}
		}
		if(minindex!=-1)
		{
			return aLi[minindex];
		}
		else
		{
			return null;
		}
	}
	
	var oMain3ref=document.getElementById('main3-ref');
	var aMain3bb=oMain3ref.getElementsByTagName('div');
	
	function enter(obj){
		var oSpan1=obj.getElementsByTagName('span')[0];
		obj.onmouseenter=function (ev){
			var oEvent=ev || event;
			var n1=getN(obj, oEvent);
			switch (n1)
			{
				
				case 0:
					oSpan1.style.left='150px';
					oSpan1.style.top=0;
					break;
					
				case 1:
					oSpan1.style.left=0;
					oSpan1.style.top='150px';
					break;
				
				case 2:
					oSpan1.style.left='-150px';
					oSpan1.style.top='0';
					break;
					
				case 3:
					oSpan1.style.left='0';
					oSpan1.style.top='-150px';
					break;
			}
			
			move(oSpan1, {top:0, left:0});
		};
	};
	function leave(obj){
		var oSpan1=obj.getElementsByTagName('span')[0];
		obj.onmouseleave=function (ev){
			var oEvent=ev || event;
			var n1=getN(obj, oEvent);
			switch (n1)
			{
				case 0:
					var left=150;
					var top=0;
					break;
					
				case 1:
					var left=0;
					var top=150;
					break;
				
				case 2:
					var left=-150;
					var top=0;
					break;
					
				case 3:
					var left=0;
					var top=-150;
					break;
			}
			
			move(oSpan1, {top:top, left:left});
		};
	};
	
	
	function getN(obj, ev)
	{
		var pos=getPos(obj);
		var x1=pos.left+obj.offsetWidth/2-ev.clientX-getScrollLeft();
		var y1=pos.top+obj.offsetHeight/2-ev.clientY-getScrollTop();
		
		return Math.round((d2a(Math.atan2(y1, x1))+180)/90)%4;
	}
	
	function d2a(d)
	{
		return d*180/Math.PI;
	}
	
for (var i=0; i<aMain3bb.length; i++)
	{
		enter(aMain3bb[i]);
		leave(aMain3bb[i]);
	}
	
	function getPos(obj)
	{
		var left=0;
		var top=0;
		while(obj)
		{
			 left += obj.offsetLeft;
			 top += obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:left,top:top}
	}
	function getScrollLeft()
	{
		var l=document.documentElement.scrollLeft || document.body.scrollLeft;
		return l;
	}
	function getScrollTop()
	{	
		var t=document.documentElement.scrollTop|| document.body.scrollTop;
		return t;
	}

};

















