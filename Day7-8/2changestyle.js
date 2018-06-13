window.onload = function(){
	var btnArr = document.getElementsByClassName("button");
	var styleElement = document.getElementById("style-sheet");
	// console.log(btnArr.length);
	for(var i=0;i<btnArr.length;i++){
		(function(i){
			var that = i+1;
			btnArr[i].onclick = function(){
				// console.log('./2-'+that+'.css');
				styleElement.href = './2-'+that+'.css';
				for(var j=0;j<btnArr.length;j++){
					// console.log(btnArr[j].id);
					btnArr[j].id = '';
				}
				btnArr[i].id = "active";
			}
		})(i);
	}
}