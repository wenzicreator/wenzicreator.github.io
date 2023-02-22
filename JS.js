
//验证密码
var inputtext=document.getElementById("inputtext")
var inputinform=document.getElementsByClassName("inputinform")
inputtext.onfocus=function()
{
	if(inputtext.value=="please enter your father's name")
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
			inputinform[0].innerHTML="answer's wrong";
			
			
		}
	else
		{
			inputinform[0].className="inputinform";
			inputinform[0].innerHTML="ε=(´ο｀*)))oh! it's my son!";
		}
}
//验证密码结束
