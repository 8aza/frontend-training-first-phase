
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 16 * (clientWidth / 1920) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

if (document.readyState !== 'loading') {
  eventHandler();
} 
else {
  document.addEventListener('DOMContentLoaded', eventHandler);
}

function checkEmail(email){ 
var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
var res = reg.test(email); 
return res; 
} 

function eventHandler(){
	account.addEventListener('change', function(data){
			if (!checkEmail(data.target.value))
			{
				account_tip.innerText = "账号不是邮箱格式";
			}
			else
			{
				account_tip.innerText = "";
			}
			login_tip.innerText = "";
	});

  login_submit.addEventListener('click', ()=>{
  		if (account_tip.innerText.length > 0)
  			return;
  		var data=localStorage.getItem(account.value);
  		
  		if (data == null)
  		{
  			login_tip.innerText = "账号不存在";
  		}
  		else
  		{
  			if (data != pwd.value)
  			{
  				login_tip.innerText = "密码错误";
  			}
  			else
  			{
	  			login_tip.innerText = "";
	  			alert("登录成功");
  			}
  		}
  });
  
  register_submit.addEventListener('click', ()=>{
  		if (account_tip.innerText.length > 0)
  			return;
  		var data=localStorage.getItem(account.value);
  		
  		if (data == null)
  		{
  			login_tip.innerText = "";
  			localStorage.setItem(account.value, pwd.value);
  			alert("注册成功");
  		}
  		else
  		{
  			login_tip.innerText = "账号已存在";
  		}
		});
};

