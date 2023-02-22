// JavaScript Document


//播放控制
var ISI=document.getElementById('ISI');
ISI.oncanplay=function(){
    var ISIduration=ISI.duration;
	document.getElementById('demo').innerHTML=ISIduration;
}
function playorpause(){
	if(ISI.paused)
		{
			ISI.play();
		}
	else
		{
			ISI.pause();
		}
}




//心情选乐
var moodselectorfine=document.getElementById('moodselectorfine');
moodselectorfine.onclick=function()
{
	ISI.src="D:/music/qqmusic/Dj Blyatman _ Russian Village Boys - Cyka Blyat.mp3";
}
moodselectorfine.onmouseover=function()
{
	this.title='心情不错';
	this.style.filter="opacity(70%)";
}
moodselectorfine.onmouseout=function()
{
	this.title='心情不错';
	this.style.filter="opacity(100%)";
}
var moodselectorsad=document.getElementById('moodselectorsad');
moodselectorsad.onclick=function()
{
	ISI.src="D:/music/qqmusic/saya no uta.mp3";
}
moodselectorsad.onmouseover=function()
{
	this.title='心情很差';
	this.style.filter="opacity(70%)";
}
moodselectorsad.onmouseout=function()
{
	this.title='心情很差';
	this.style.filter="opacity(100%)";
}
var moodselectorbored=document.getElementById('moodselectorbored');
moodselectorbored.onclick=function()
{
	ISI.src="D:/music/qqmusic/Fran Chou Chou.MP3";
}
moodselectorbored.onmouseover=function()
{
	this.title='很无聊啊';
	this.style.filter="opacity(70%)";
}
moodselectorbored.onmouseout=function()
{
	this.title='很无聊啊';
	this.style.filter="opacity(100%)";
}
var moodselectororigin=document.getElementById('moodselectororigin');
moodselectororigin.onclick=function()
{
	ISI.src="D:/music/qqmusic/ISI.mp3";
}
moodselectororigin.onmouseover=function()
{
	this.title='就这样吧';
	this.style.filter="opacity(70%)";
}
moodselectororigin.onmouseout=function()
{
	this.title='就这样吧';
	this.style.filter="opacity(100%)";
}






//危机模式动画
var pointddl=document.getElementById('pointddl');
var ddltag=document.getElementById('ddltag');
var doom=document.getElementsByClassName('doom');
pointddl.onmouseover=function()
{
	pointddl.width=320;
}
pointddl.onmouseout=function()
{
	pointddl.width=300;
}
var background=document.getElementById('background')
var doomflag = 0;
var bilibili=document.getElementsByClassName('bilibili')
pointddl.onclick=function()
{
	for(var i=0;i<5;i++)
		{
				bilibili[i].onmouseover=function()
					{
					if(doomflag == 1)
						xxbblock.style.display="block";	
					}
				bilibili[i].onmouseout=function()
					{
						xxbblock.style.display="none";
					}			
			
		}	 
	if(doomflag == 0)
		{
		background.style="background-image:url('xy.png')";
		pointddl.src="pictures/阿库娅removed.jpg";
		ddltag.style.display="block";
		doom[0].innerHTML='点击释放女神净化';
		doom[0].style.color="#6FE5F0";
		doomflag = 1;
	//危机模式b站禁用
        var bilibilihistoryweb=document.getElementById('bilibilihistoryweb')
		var bilibilifavlistweb=document.getElementById('bilibilifavlistweb')
		var bilibilibangumiweb=document.getElementById('bilibilibangumiweb')
		var bilibilispmweb=document.getElementById('bilibilispmweb')
		var bilibiliheadpictureweb=document.getElementById('bilibiliheadpictureweb')
		var xxbblock=document.getElementById('xxbblock')
		bilibilihistoryweb.href='http://sope.ruc.edu.cn/';
		bilibilifavlistweb.href='http://sope.ruc.edu.cn/';
		bilibilibangumiweb.href='http://sope.ruc.edu.cn/';
		bilibilispmweb.href='http://sope.ruc.edu.cn/';
		bilibiliheadpictureweb.href='http://sope.ruc.edu.cn/';
			
		
		
		
			
			
		}
	else{
		background.style="background-image:url('Huawei Share/photo/zzk.png')";
		pointddl.src="pictures/惠惠removed.jpg";
		ddltag.style.display="none";
		doom[0].innerHTML='点击释放爆裂魔法';
		doom[0].style.color="#DE2528";
		doomflag=0;
	//危机模式b站恢复
		var bilibilihistoryweb=document.getElementById('bilibilihistoryweb')
		var bilibilifavlistweb=document.getElementById('bilibilifavlistweb')
		var bilibilibangumiweb=document.getElementById('bilibilibangumiweb')
		var bilibilispmweb=document.getElementById('bilibilispmweb')
		var bilibiliheadpictureweb=document.getElementById('bilibiliheadpictureweb')
		bilibilihistoryweb.href='https://www.bilibili.com/account/history?spm_id_from=333.1007.0.0';
		bilibilifavlistweb.href='https://space.bilibili.com/38135633/favlist';
		bilibilibangumiweb.href='https://space.bilibili.com/38135633/bangumi?from_spmid=666.4.0.0';
		bilibilispmweb.href='https://t.bilibili.com/?spm_id_from=333.1007.0.0 ';
		bilibiliheadpictureweb.href="https://www.bilibili.com/";
	}
	

}




//找儿子
var inputtext=document.getElementById("inputtext")
var inputinform=document.getElementsByClassName("inputinform")
inputtext.onfocus=function()
{
	if(inputtext.value=="请输入你父亲的名字")
	{
		inputtext.value="";
		inputtext.style.color="#333";
	}
}
inputtext.onblur=function()
{
	inputtext.style.color="#999";
	if(inputtext.value!="闻富琪")
		{
			inputinform[0].className="inputinform wronged";
			inputinform[0].innerHTML="你不能填写除了闻富琪以外的任何答案";
			
			
		}
	else
		{
			inputinform[0].className="inputinform";
			inputinform[0].innerHTML="ε=(´ο｀*)))唉，我的好大儿";
		}
}
//找儿子结束


//应用
var thead=document.getElementById("thead");
var theadcontent=thead.querySelectorAll('td');
var tbody=document.getElementById("tbody")
var tbodycontent=tbody.querySelectorAll("div")
for(var z=0;z<4;z++)
	{
		tbodycontent[z].style.display="none";
	}
tbodycontent[0].style.display="block";
for(var i=0;i<=3;i++)
	{
		theadcontent[i].style.width=200;
		theadcontent[i].setAttribute("index",i)
		theadcontent[i].onclick=function()
		{
			for(var j=0;j<4;j++)
				{
					theadcontent[j].className="";
				}
			this.className="theadcontent"
			for(var z=0;z<4;z++)
			{
				tbodycontent[z].style.display="none";
			}
			var index=this.getAttribute("index");
			tbodycontent[index].style.display="block";
		}
	}

//音乐下拉菜单
var boxtype=document.getElementById("musicbox").children;
var subbox=[1,2,3,4];

for(var m=0;m<4;m++)
	{
		subbox[m]=boxtype[m].querySelector("div");
		subbox[m].style.display="none";
		subbox[m].className="subbox";
		subbox[m].style.marginTop=-328;
		var subline=subbox[m].querySelectorAll("div");
		for(i=0;i<7;i++)
			{
				subline[i].className="subline";
				subline[i].style.marginTop=i*57;
				subline[i].onmouseover=function()
				{
					this.style.backgroundColor="rgba(236,243,144,0.3)";
				}
				subline[i].onmouseout=function()
				{
					this.style.backgroundColor="rgba(236,243,144,0)";
				}
			}
	}

for(m=0;m<4;m++)
	{
		boxtype[m].setAttribute("sub",m);
		boxtype[m].onmouseover=function()
		{
			for(var m=0;m<4;m++)
			{
				subbox[m].style.display="none";	
			}
			var sub=this.getAttribute("sub");
			subbox[sub].style.display="block";
			this.style="background-image:url('pictures/zack.jpg')";
		}
		boxtype[m].onmouseout=function()
		{
			for(var m=0;m<4;m++)
			{
				subbox[m].style.display="none";	
			}
			this.style=" ";
		}
		
		
	}






