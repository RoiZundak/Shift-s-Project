/*
Logic file-Java script.
	25 function that make the shift easier to use.
	We start with the mainPage after it u can login in with 1111- Admin user.
	Use getUserName() & checkValid() methods for validation.
 	After it all other function is for logic.
 	In the last line you have line in comment that u can delete all users.
*/
var array=new Array();
var startManageTemp;
var startManageItem;
var sidurs = new Array();
var passForS;
var locForS;
var passArr=[];
var username;
var flag;
var counter;

function mainPage() {
	
array[0]=new Array("false","false","false","false","false","false","false");
array[1]=new Array("false","false","false","false","false","false","false");
startManageTemp=localStorage.getItem("1111");
startManageItem=JSON.parse(startManageTemp);
	if(!startManageItem){
		sidurs[0]=new Array("  ","  ","  ","  ","  ","  ","  ");
		sidurs[1]=new Array("  ","  ","  ","  ","  ","  ","  ");
		sidurs[2]=new Array("  ","  ","  ","  ","  ","  ","  ");
		sidurs[3]=new Array("  ","  ","  ","  ","  ","  ","  ");

		var item={ "Name":"Manager",
					"password": "1111",
					"sidur":sidurs
					};

	
		var text=JSON.stringify(item);
		localStorage.setItem("1111",text);
	}
	flag = 0;
	counter = 0;
	passForS = '';
	
$("#body").html(

"<div>"+
"<div class = \"wrapper\">"+
"<div class=\"nav\">"+
 "<div class = \"loginBox\">"+
 "<div id= \"textfields\">"+
 "<input  type=\"text\" id=\"password\" maxlength=\"20\" value=\"     			    סיסמא\" onfocus=\"if($(this).val()=='     			    סיסמא')$(this).val('')\" onblur=\"if($(this).val()=='')$(this).val('     			    סיסמא')\" >"+
 "<input  type=\"text\" id=\"userName\" maxlength=\"20\" value=\"            	    שם משתמש\" onfocus=\"if($(this).val()=='            	    שם משתמש')$(this).val('')\" onblur=\"if($(this).val()=='')$(this).val('            	    שם משתמש')\" >"+
 "<\/div>"+
 "<button id=connectButton onclick=\"buildPage(password.val);\">התחבר<\/button>"+
 "<\/div>"+
 "<div id=\"logo\">	<\/div>"+
 "<\/div>"+
 "<div id=\"leftDiv\" >"+
 "<div id =\"leftDivText\">"+
 "ברוכים הבאים למערכת סידור"+
 "משמרות"+
 "<\/br>"+
 ".\"לוגו תאורה\""+
 "<\/br>"+
 ":ליצירת קשר"+
 "<\/br>"+
 "03-37384843"+
 "<\/br>"+
 ",בברכה"+
 "<\/br>"+
 ".לוגו תאורה"+
 "<\/div>"+
 "<\/div>"+
 "<div class=\"main\">"+
 "<div id=\"movie\">"+
 "<video muted width=\"600\" height=\"350\" autoplay=\"autoplay\">"+
 "<source src=\"Files/movie.mp4\"  type=\"video\/mp4\">"+
 "<\/video>"+
 "<\/div>"+
 "<\/div>"+
 "All right reserverd to RocketLeague Team"+
 "<\/div>"+
 "<\/div>"
);
	hopscotch.startTour(tour);
}
function buildPage(password){	
	
	var password = $("#password").val();
	var loc = $("#userName").val();
	if(flag == 0)
	{
		locForS = loc;
		passForS=password;
		if(!checkValid(password,locForS)){
			alert(".שם משתמש וסיסמא אינם תקינים");
				return;
		}
		username=getUserName(password);
		flag++;
	}
	
	if(passForS === '1111'){
		$("#body").html(
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='mainPage();'>יציאה</button>"+
				"<div class='templateNav'>"+"<div class='showUserName'>"+ "שלום  מנהל"+"</div>"+
					"<button class='Mybutton'id=insertShifts onclick='listOfEmployee();'>רשימת עובדים</button>"+
					"<button class='Mybutton'id=insertShifts onclick='newEmployee();'>הכנסת עובד</button>"+
					"<button class='Mybutton'id=insertShifts onclick='deleteEmployee();'>מחיקת עובד</button>"+
					"<button class='Mybutton'id=insertShifts onclick='showShifts();'>הצגת סידור</button>"+
					"<button class='Mybutton'id=insertShifts onclick='ManageShifts();'>עריכת סידור</button>"+
				"</div>"+
				
			"</div>"
		);
	}
	else{
		$("#body").html(
			"<div class = 'templateWrapper'>"+
			"'<button class='backButton' onclick='mainPage();'>יציאה</button>"+
				"<div class='templateNav'>"+
				"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
					"<button class='Mybutton'id=insertShifts onclick='listOfEmployee();'>רשימת עובדים</button>"+
					"<button class='Mybutton'id=insertShifts onclick='enterhShift();'>הכנסת בקשות</button>"+
					"<button class='Mybutton'id=insertShifts onclick='showShifts();'>הצגת סידור</button>"+
				"</div>"+
				
				
			"</div>"
		);
		
	}	
	
}
function getUserName(pass){
	var temp;
	var item;
	var name;
	if(pass != "1111")
	{
		temp=localStorage.getItem(pass);
		item=JSON.parse(temp);
		name=item.Name;
	}

	else
		name="מנהל";

	return name;
}
function checkValid(pass,loc){

	if(pass == "1111")
		return true;

	var temp;
	var item;
	for(var i=0;i<localStorage.length;i++){
		temp=localStorage.getItem(localStorage.key(i));
		item=JSON.parse(temp);
		if(item.password != "1111" && pass == item.password && loc == item.userName)
			return true;

	}
	return false;
}
function enterhShift(){
	for(var i =0; i < 7; i++) {
			array[0][i]="false";
			array[1][i]="false";
	}
		$("#body").html(
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
				
						"<div id='header'>הכנסת בקשות</div>"+

				"<table width='100%'  class='sidurTable'>"+
				"<br>"+
					"<tr id='days'style='font-weight:bold' align='center'>"+
						"<td >שבת</td>"+
						"<td >שישי</td>"+
						"<td >חמישי</td>"+
						"<td >רביעי</td>"+
						"<td >שלישי</td>"+
						"<td >שני</td>"+
						"<td >ראשון</td>"+
						"<td >משמרת/יום</td>"+
						
					"</tr>"+
					
					"<tr align='center'>"+
						"<td></td>"+

						"<td id='5' button class='sButton' onclick='insertToShift(0,5);'></td>"+
						"<td id='4' utton class='sButton' onclick='insertToShift(0,4);'></td>"+
						"<td id='3' button class='sButton' onclick='insertToShift(0,3);'></td>"+
						"<td id='2' button class='sButton' onclick='insertToShift(0,2);'></td>"+
						"<td id='1' button class='sButton' onclick='insertToShift(0,1);'></td>"+
						"<td id='0' button class='sButton' onclick='insertToShift(0,0);'></td>"+
						"<td  class='morning'>בוקר</td>"+
					"</tr>"+
					
					"<tr align='center'>"+
						"<td id='11' button class='sButton' onclick='insertToShift(1,5);'></td>"+
						"<td></td>"+
						"<td id='10'button class='sButton' onclick='insertToShift(1,4);'></td>"+
						"<td id='9' button class='sButton' onclick='insertToShift(1,3);'></td>"+
						"<td id='8' button class='sButton' onclick='insertToShift(1,2);'></td>"+
						"<td id='7' button class='sButton' onclick='insertToShift(1,1);'></td>"+
						"<td id='6' button class='sButton' onclick='insertToShift(1,0);'></td>"+

						"<td  class='morning'>ערב</td>"+
					"</tr>"+
				
				"</table>"+		
				"<button class='shiftInserted' onclick='shiftInserted(array);'>הכנס בקשות</button>"+
			
		"</div>"
		
		);
	
}
function ManageShifts(){
		var temp = localStorage.getItem("1111");
		var item = JSON.parse(temp);
		var arrayForSidor = item.sidur;
		
		
		$("#body").html(
			
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>עריכת סידור עבודה</div>"+

				"<table width='100%'  class='sidurTable'>"+
				"<br>"+
					"<tr id='listHeader'  id='days'style='font-weight:bold' align='center'>"+
						"<td >שבת</td>"+
						"<td >שישי</td>"+
						"<td >חמישי</td>"+
						"<td >רביעי</td>"+
						"<td >שלישי</td>"+
						"<td >שני</td>"+
						"<td >ראשון</td>"+
						"<td >משמרת/יום</td>"+
						
					"</tr>"+
					"<tr align='center' id='MrEveningShifts' >"+
						"<td></td>"+
						"<td id='5' button class='sButton' onclick='listForSidur(0,5);'> "+ arrayForSidor[0][5] +"</td>"+
						"<td id='4' button class='sButton' onclick='listForSidur(0,4);'> "+ arrayForSidor[0][4] +"</td>"+
						"<td id='3' button class='sButton' onclick='listForSidur(0,3);'> "+ arrayForSidor[0][3] +"</td>"+
						"<td id='2' button class='sButton' onclick='listForSidur(0,2);'> "+ arrayForSidor[0][2] +"</td>"+
						"<td id='1' button class='sButton' onclick='listForSidur(0,1);'> "+ arrayForSidor[0][1] +"</td>"+
						"<td id='0' button class='sButton' onclick='listForSidur(0,0);'> "+ arrayForSidor[0][0] +"</td>"+
						"<td  class='morning'>בוקר</td>"+
					"</tr>"+

					"<tr align='center' id='MrEveningShifts'>"+
						"<td></td>"+
						"<td id='5' button class='sButton' onclick='listForSidur(1,5);'> "+ arrayForSidor[1][5] +"</td>"+
						"<td id='4' button class='sButton' onclick='listForSidur(1,4);'> "+ arrayForSidor[1][4] +"</td>"+
						"<td id='3' button class='sButton' onclick='listForSidur(1,3);'> "+ arrayForSidor[1][3] +"</td>"+
						"<td id='2' button class='sButton' onclick='listForSidur(1,2);'> "+ arrayForSidor[1][2] +"</td>"+
						"<td id='1' button class='sButton' onclick='listForSidur(1,1);'> "+ arrayForSidor[1][1] +"</td>"+
						"<td id='0' button class='sButton' onclick='listForSidur(1,0);'> "+ arrayForSidor[1][0] +"</td>"+
						"<td class='morning'>בוקר</td>"+
					"</tr>"+
					"<tr align='center' id='MrEveningShifts' >"+
						"<td id='11' button class='sButton' onclick='listForSidur(2,5);'> "+ arrayForSidor[2][5] +"</td>"+
						"<td></td>"+
						"<td id='10'button class='sButton' onclick='listForSidur(2,4);'> "+ arrayForSidor[2][4] +"</td>"+
						"<td id='9' button class='sButton' onclick='listForSidur(2,3);'> "+ arrayForSidor[2][3] +"</td>"+
						"<td id='8' button class='sButton' onclick='listForSidur(2,2);'> "+ arrayForSidor[2][2] +"</td>"+
						"<td id='7' button class='sButton' onclick='listForSidur(2,1);'> "+ arrayForSidor[2][1] +"</td>"+
						"<td id='6' button class='sButton' onclick='listForSidur(2,0);'> "+ arrayForSidor[2][0] +"</td>"+
						"<td id='managerMorning' class='morning'>ערב</td>"+
					"</tr>"+
					
					"<tr align='center' id='MEveningShifts'>"+
						"<td id='11'button class='sButton' onclick='listForSidur(3,5);' > "+ arrayForSidor[3][5] +"</td>"+
						"<td></td>"+
						"<td id='10' button class='sButton' onclick='listForSidur(3,4);'> "+ arrayForSidor[3][4] +"</td>"+
						"<td id='9' button class='sButton' onclick='listForSidur(3,3);'> "+ arrayForSidor[3][3] +"</td>"+
						"<td id='8' button class='sButton' onclick='listForSidur(3,2);'> "+ arrayForSidor[3][2] +"</td>"+
						"<td id='7' button class='sButton' onclick='listForSidur(3,1);'> "+ arrayForSidor[3][1] +"</td>"+
						"<td id='6' button class='sButton' onclick='listForSidur(3,0);'> "+ arrayForSidor[3][0] +"</td>"+
						"<td class='morning'>ערב</td>"+
					"</tr>"+
				
				"</table>"+		
		
				"<button class='shiftInserted' onclick='buildPage(passForS);'>הכנס סידור</button>"+
				"<button class='clearShifts' onclick='cleanSidur()'>ניקוי סידור</button>"+
		"</div>"
		);

}
function cleanSidur(){
	var x=confirm("האם אתה בטוח שברצונך למחוק את הסידור");
	if (x==true){
	var startManageTemp;
	var startManageItem;
	startManageTemp=localStorage.getItem("1111");
	startManageItem=JSON.parse(startManageTemp);
		for(var i = 0; i < 4; i++)
			for(var j = 0; j < 7; j++)
			{
				startManageItem.sidur[i][j] = "  ";
			}
	
		var text=JSON.stringify(startManageItem);
		localStorage.setItem("1111",text);
		ManageShifts();
	alert("הסידור נמחק");
	}
	return;


		

}
function shiftInserted(){
	var temp;
	var item;

	temp=localStorage.getItem(passForS);
	item=JSON.parse(temp);
	
	for(var i =0; i < 7; i++)
	{
			item.shift[0][i]=array[0][i];
			item.shift[1][i]=array[1][i];
	}
		
	var text=JSON.stringify(item);
	localStorage.setItem(passForS,text);
	alert("הכנסת משמרות בוצעה בהצלחה");
	setTimeout(function(){ buildPage(passForS);}, 1500);

	return;
}
function insertToShift(a,b){

	if(array[a][b]=="false")
	{
		if(a==0 ){
			if(b==0){$("#0").css('background-color','green');array[a][b]="true";}
			if(b==1){$("#1").css('background-color','green');array[a][b]="true";}
			if(b==2){$("#2").css('background-color','green');array[a][b]="true";}
			if(b==3){$("#3").css('background-color','green');array[a][b]="true";}
			if(b==4){$("#4").css('background-color','green');array[a][b]="true";}
			if(b==5){$("#5").css('background-color','green');array[a][b]="true";}
		}
		if(a==1){
			if(b==0){$("#6").css('background-color','green');array[a][b]="true";}
			if(b==1){$("#7").css('background-color','green');array[a][b]="true";}
			if(b==2){$("#8").css('background-color','green');array[a][b]="true";}
			if(b==3){$("#9").css('background-color','green');array[a][b]="true";}
			if(b==4){$("#10").css('background-color','green');array[a][b]="true";}
			if(b==5){$("#11").css('background-color','green');array[a][b]="true";}
		}
	}
	else if(array[a][b]=="true")
	{
		if(a==0)
		{
			if(b==0){$("#0").css('background-color', 'red');array[a][b]="false";}
			if(b==1){$("#1").css('background-color', 'red');array[a][b]="false";}
			if(b==2){$("#2").css('background-color', 'red');array[a][b]="false";}
			if(b==3){$("#3").css('background-color', 'red');array[a][b]="false";}
			if(b==4){$("#4").css('background-color', 'red');array[a][b]="false";}
			if(b==5){$("#5").css('background-color', 'red');array[a][b]="false";}
		}
		if(a==1)
		{
			if(b==0){$("#6").css('background-color', 'red');array[a][b]="false";}
			if(b==1){$("#7").css('background-color', 'red');array[a][b]="false";}
			if(b==2){$("#8").css('background-color', 'red');array[a][b]="false";}
			if(b==3){$("#9").css('background-color', 'red');array[a][b]="false";}
			if(b==4){$("#10").css('background-color', 'red');array[a][b]="false";}
			if(b==5){$("#11").css('background-color', 'red');array[a][b]="false";}
		}
	}

}
function newEmployee(){
	$("#body").html(
		"<div class = 'templateWrapper'>"+
		"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
		"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>הכנסת עובד</div>"+
			"<div class='NEmain'>"+
				"<div class= 'NEtextfields'>"+
					"<input style='height:30px;' type='text' id='pName' maxlength='10'>"+
					" :שם פרטי</br></br>"+
					"<input style='height:30px;' type='text' id='lName' maxlength='10'> :שם משפחה"+
						"</br></br>"+
					"<input style='height:'30px;' type='text' id='phone' maxlength='10'> :מספר טלפון"+
						"</br></br>"+
					"<input style='height:30px;' type='text' id='userName' maxlength='10'>"+
						" :שם משתמש</br></br>"+
					"<input style='height:30px;' type='text' id='mail' maxlength='20'>"+
						" :אי-מייל</br></br>"+
					"<input  type=\"text\"  style='height:30px;' id=\"password\" value=\"מספרים בלבד\" onfocus=\"if($(this).val()=='מספרים בלבד')$(this).val('')\" onblur=\"if($(this).val()=='')$(this).val('מספרים בלבד\')\" >"+
						" :סיסמא</br></br>"+
					"<button class='NEMybutton' id=submit onclick='insertNewEmployee();'>רשום</button>"+
				"</div>"+
			"</div>"+
		"</div>"
	);
}
function showShifts(){
	
		var temp = localStorage.getItem("1111");
		var item = JSON.parse(temp);
		var arrayForSidor = item.sidur;
		
		
		$("#body").html(
			
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>סידור עבודה</div>"+

					"<table width='100%'  class='sidurTable'>"+
				"<br>"+
					"<tr id='listHeader' id='days'style='font-weight:bold' align='center' >"+
						"<td >שבת</td>"+
						"<td >שישי</td>"+
						"<td >חמישי</td>"+
						"<td >רביעי</td>"+
						"<td >שלישי</td>"+
						"<td >שני</td>"+
						"<td >ראשון</td>"+
						"<td >משמרת/יום</td>"+
					"</tr>"+

					"<tr class='mShift' align='center'>"+
						"<td id='5'>-----</td>"+
						"<td id='5' > "+ arrayForSidor[0][5] +"</td>"+
						"<td id='4' > "+ arrayForSidor[0][4] +"</td>"+
						"<td id='3' > "+ arrayForSidor[0][3] +"</td>"+
						"<td id='2' > "+ arrayForSidor[0][2] +"</td>"+
						"<td id='1' > "+ arrayForSidor[0][1] +"</td>"+
						"<td id='0' > "+ arrayForSidor[0][0] +"</td>"+
						"<td class='morning'>בוקר</td>"+
					"</tr>"+
					
					"<tr class='mShift' align='center' >"+
						"<td id='5'>-----</td>"+
						"<td id='5' > "+ arrayForSidor[1][5] +"</td>"+
						"<td id='4' > "+ arrayForSidor[1][4] +"</td>"+
						"<td id='3' > "+ arrayForSidor[1][3] +"</td>"+
						"<td id='2' > "+ arrayForSidor[1][2] +"</td>"+
						"<td id='1' > "+ arrayForSidor[1][1] +"</td>"+
						"<td id='0' > "+ arrayForSidor[1][0] +"</td>"+
						"<td  class='morning'>בוקר</td>"+
					"</tr>"+
					"<tr class='eShift' align='center' >"+
						"<td id='11' > "+ arrayForSidor[2][5] +"</td>"+
						"<td>-----</td>"+
						"<td id='10'> "+ arrayForSidor[2][4] +"</td>"+
						"<td id='9' > "+ arrayForSidor[2][3] +"</td>"+
						"<td id='8' > "+ arrayForSidor[2][2] +"</td>"+
						"<td id='7' > "+ arrayForSidor[2][1] +"</td>"+
						"<td id='6' > "+ arrayForSidor[2][0] +"</td>"+
						"<td class='morning'>ערב</td>"+
					"</tr>"+
					
					"<tr class='eShift' align='center'>"+
						"<td id='11' > "+ arrayForSidor[3][5] +"</td>"+
						"<td>-----</td>"+
						"<td id='10'> "+ arrayForSidor[3][4] +"</td>"+
						"<td id='9' > "+ arrayForSidor[3][3] +"</td>"+
						"<td id='8' > "+ arrayForSidor[3][2] +"</td>"+
						"<td id='7' > "+ arrayForSidor[3][1] +"</td>"+
						"<td id='6' > "+ arrayForSidor[3][0] +"</td>"+
						"<td  class='morning'>ערב</td>"+
					"</tr>"+

				"</table>"+	
		"</div>"
		
		);
}
function listOfEmployee(){
	

	if(passForS=='1111'){
		$("#body").html(
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>רשימת עובדים</div>"+
			"<div class='listMain'>"+
				"<table id='defaultTable'>"+
					"<tr  id='listHeader'>"+
						"<th>סיסמא</th>"+
						"<th >שם משתמש</th>"+
						"<th>Email</th>"+
						"<th >טלפון</th>"+
						"<th >שם משפחה</th>"+
						"<th >שם פרטי</th>"+
						"<th >מס</th>"+
					"</tr>"+
					
					"<script>"+
					"table();"+
					"</script>"+
				
				"</table>"+			
			"</div>"+
		"</div>"	
		);
	}
	else{
	$("#body").html(
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>רשימת עובדים</div>"+
			"<div class='listMain'>"+
				"<table id='defaultTable'>"+
					"<tr  id='listHeader'>"+
						"<th>Email</th>"+
						"<th >טלפון</th>"+
						"<th >שם משפחה</th>"+
						"<th >שם פרטי</th>"+
						"<th >מס</th>"+
					"</tr>"+
					
					"<script>"+
					"table();"+
					"</script>"+
				
				"</table>"+			
			"</div>"+
		"</div>"	
		);	
		
		}
	
}
function deleteEmployee() {
		$("#body").html(
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='buildPage(passForS);'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>מחיקת עובד</div>"+
			"<div class='listMain'>"+
				"<table id='deleteTable'>"+
					"<tr  id='listHeader'>"+
						"<th >שם</th>"+
					"</tr>"+
					
					"<script>"+
					"drawRowForDelete();"+
					"</script>"+
				
				"</table>"+			
			"</div>"+
		"</div>"	
		);
	
	
	
}
function listForSidur(a,b){
var day;
if(a == 0 || a == 1)
{
	if(b==0)day = "ראשון בוקר";
	if(b==1)day = "שני בוקר";
	if(b==2)day = "שלישי בוקר";
	if(b==3)day = "רביעי בוקר";
	if(b==4)day = "חמישי בוקר";
	if(b==5)day = "שישי בוקר";
	if(b==6)day = "שבת בוקר";


}
if(a == 2 || a == 3)
{
	if(b==0)day = "ראשון ערב";
	if(b==1)day = "שני ערב";
	if(b==2)day = "שלישי ערב";
	if(b==3)day = "רביעי ערב";
	if(b==4)day = "חמישי ערב";
	if(b==5)day = "שישי ערב";
	if(b==6)day = "שבת ערב";

}
	
		$("#body").html(
			"<div class = 'templateWrapper'>"+
			"<button class='backButton' onclick='ManageShifts();'>חזור</button>"+
			"<div class='showUserName'>"+ "  שלום   "+username +"</div>"+
			"<div id='header'>משמרת " + day+" </div>"+
			"<div class='listMain'>"+
				"<table id='defaultTableForSidur'>"+
					"<tr  id='listHeader'>"+
						"<th >שם</th>"+
					"</tr>"+
					
					"<script>"+
					"tableForSidur("+a +","+b+");"+
					"</script>"+
				
				"</table>"+			
			"</div>"+
		"</div>"	
		);
	
}
function drawRowForDelete() {
	var temp;
	var item;
	
	for(var i=0;i<localStorage.length;i++)
	{
		temp=localStorage.getItem(localStorage.key(i));
		item=JSON.parse(temp);
		
		if(item.password != "1111")
		{

			var row = $("<tr />")
			$("#deleteTable").append(row); 
		
			row.append($("<td class='deleteFrame'><button id = 'listButton2' onclick='moveEmployeer(" + item.password + ")'>" + item.Last_Name + "  " + item.Name +  "</button></td>"));
			
		}
	}		
	
}
function moveEmployeer(itemPass) {
	var temp;
	var item;
	temp=localStorage.getItem(itemPass);
	item=JSON.parse(temp);
	
	var x=("האם אתה בטוח שברצונך למחוק עובד זה?");
		if(x==true){
		alert("העובד נמחק מהמערכת"); 
		var itemName = item.Name;
		delete localStorage[itemPass];
		buildPage('1111');
	}
}
function table() {

	var temp;
	var item;
	var num;
	var loc=$("#userName").val();
	for(var i=0,j=1;i<localStorage.length;i++)
	{
		temp=localStorage.getItem(localStorage.key(i));
		item=JSON.parse(temp);
		
		if(item.password != "1111")
		{
			drawRow(item, i,j);
			j++;
		}
		
   
	}
}
function tableForSidur(a,b) {

	var temp;
	var item;
	
	for(var i=0;i<localStorage.length;i++)
	{
		temp=localStorage.getItem(localStorage.key(i));
		item=JSON.parse(temp);
		
		if(item.password != "1111")
			drawRowForSidur(item, a,b,i);
		
   
	}
}
function drawRow(rowData, i,j) {

    var row = $("<tr />")
    $("#defaultTable").append(row); 
	if(j % 2 == 0)
	{
		if(passForS=='1111'){
			row.append($("<td class='evenList'>" + rowData.password + "</td>"));
			row.append($("<td class='evenList'>" + rowData.userName + "</td>"));
			}
		row.append($("<td class='evenList'>" + rowData.mail + "</td>"));
		row.append($("<td class='evenList'>" + rowData.phone + "</td>"));
		row.append($("<td class='evenList'>" + rowData.Last_Name + "</td>"));
		row.append($("<td class='evenList'>" + rowData.Name + "</td>"));
		row.append($("<td class='evenList'>" + j + "</td>"));
	}
	else{
		if(passForS=='1111'){
			row.append($("<td class='oddList'>" + rowData.password + "</td>"));
			row.append($("<td class='oddList'>" + rowData.userName + "</td>"));
		}
		row.append($("<td class='oddList'>" + rowData.mail + "</td>"));
		row.append($("<td class='oddList'>" + rowData.phone + "</td>"));
		row.append($("<td class='oddList'>" + rowData.Last_Name + "</td>"));
		row.append($("<td class='oddList'>" + rowData.Name + "</td>"));
		row.append($("<td class='oddList'>" + j + "</td>"));	
	}

}
function drawRowForSidur(rowData, i,j, check) {

    var row = $("<tr />")
    $("#defaultTableForSidur").append(row); 
	var num = 0;
	
	if(i == 1)
		num = 1;
	
	if(i == 2)
		num = 1;
	
	if(i == 3)
		num = 2;
	if(rowData.shift[i- num][j] == "true")
	{
		row.append($("<td class='open'><button id = 'listButton' onclick='changeSidur(" + rowData.password + "," + i + ", "+ j + ")'>" + rowData.Last_Name + "  " + rowData.Name +  "</button></td>"));
	}
	else
	{
		row.append($("<td class='close'><button id = 'listButton' onclick='changeSidur(" + rowData.password + "," + i + ", "+ j +")'>" + rowData.Last_Name + "  " + rowData.Name +  "</button></td>"));
	}
	if(check +1 == localStorage.length)
	{
			var row = $("<tr />")
			$("#defaultTableForSidur").append(row);
			var booli = 0;
			row.append($("<td class='close'><button id = 'listButton' onclick='changeSidur(" + booli + "," + i + ", "+ j +")'>מחיקה</button></td>"));
	}
}
function changeSidur(pass, i , j){
	var temp;
	var item;
	var manangetemp;
	var manageitem;
	temp=localStorage.getItem(pass);
	item=JSON.parse(temp);
	manangetemp = localStorage.getItem("1111");
	manageitem = JSON.parse(manangetemp);
	if(pass == 0)
		name = "  ";
	else if((i == 1 || i == 3) && manageitem.sidur[i - 1][j] == item.Name + " " + item.Last_Name)
	{
		alert(item.Name+" כבר עובד במשמרת זו ");
		name = "  ";
		return;
	}
	else if((i == 0 || i == 2) && manageitem.sidur[i + 1][j] == item.Name + " " + item.Last_Name)
	{
		alert(item.Name+"כבר עובד במשמרת הזאת");
		name = "  ";
		return;
	}
	else if(j != 5 && (i == 2 || i == 3) && (manageitem.sidur[0][j] == item.Name + " " + item.Last_Name || manageitem.sidur[1][j] == item.Name + " " + item.Last_Name))
	{
		if(confirm(item.Name + " כבר עובד בוקר ביום הזה. האם הינך בטוח שברצונך לשבץ אותו?"))
		{
			
			var name = item.Name + " " + item.Last_Name;
		}
		else
		{
			name = "  ";
			return;
		}
	}
	else if(j != 5 && (i == 0 || i == 1) && (manageitem.sidur[2][j] == item.Name + " " + item.Last_Name || manageitem.sidur[3][j] == item.Name + " " + item.Last_Name))
	{
		if(confirm(item.Name + " כבר עובד ערב ביום הזה. האם הינך שברצונך לשבץ אותו?"))
		{
			var name = item.Name + " " + item.Last_Name;
		}
		else
		{
			name = "  ";
			return;
		}
		
	}
	else
		var name = item.Name + " " + item.Last_Name;
	
	manageitem.sidur[i][j] = name;
	var text=JSON.stringify(manageitem);
	localStorage.setItem("1111",text);
	ManageShifts();
		
	
	
}
function create(){

			$("#body").html(
			"<div class = 'templateWrapper'>"+

			"<div id='header'>סידור עבודה</div>"+

				"<table width='100%'  class='sidurTable'>"+
				"<br>"+
					"<tr id='days'style='font-weight:bold' align='center'>"+
						"<td >שבת</td>"+
						"<td >שישי</td>"+
						"<td >חמישי</td>"+
						"<td >רביעי</td>"+
						"<td >שלישי</td>"+
						"<td >שני</td>"+
						"<td >ראשון</td>"+
						"<td >משמרת/יום</td>"+
						"<td > </td>"+
					"</tr>"+
					
					"<tr align='center' id='MrMorningShifts'>"+
						"<td  class='MorningShifts' >------</td>"+
						"<td button class='Mybutton' class='MorningShifts' onclick='a = choose();'>a</td>"+
						"<td button class='Mybutton' class='MorningShifts' onclick='a = choose();'>a</td>"+
						"<td button class='Mybutton' class='MorningShifts' onclick='a = choose();'>a</td>"+
						"<td button class='Mybutton' class='MorningShifts' onclick='a = choose();'>a</td>"+
						"<td button class='Mybutton' class='MorningShifts' onclick='a = choose();'>a</td>"+
						"<td button class='Mybutton' class='MorningShifts' onclick='a = choose();'>a</td>"+
						"<td id='managerMorning'  class='worker'></td>"+
						"<td  class='morning'>בוקר</td>"+
					"</tr>"+
					
					"<tr align='center' id='EMMorningShifts'>"+
						"<td id='friday' class='MorningShifts'>-----</td>"+
						"<td button class='Mybutton' class='MorningShifts'></td>"+
						"<td button class='Mybutton' class='MorningShifts' ></td>"+
						"<td button class='Mybutton' class='MorningShifts'></td>"+
						"<td button class='Mybutton' class='MorningShifts'></td>"+
						"<td button class='Mybutton' class='MorningShifts'></td>"+
						"<td button class='Mybutton' class='MorningShifts'></td>"+
						"<td id='managerMorning' class='worker'>עובד</td>"+
						"<td  ></td>"+
					"</tr>"+
					"<tr align='center' id='MrEveningShifts' bgcolor='#afbdd4'>"+
						"<td button class='Mybutton' class='EveningShifts'></td>"+
						"<td button class='Mybutton' class='EveningShifts'>-----</td>"+
						"<td button class='Mybutton' class='EveningShifts'></td>"+
						"<td button class='Mybutton' class='EveningShifts'></td>"+
						"<td button class='Mybutton' class='EveningShifts'></td>"+
						"<td button class='Mybutton' class='EveningShifts'></td>"+
						"<td button class='Mybutton' class='EveningShifts'></td>"+
						"<td button class='Mybutton' class='worker' >מנהל</td>"+
						"<td button class='Mybutton' class='morning'>ערב</td>"+
					"</tr>"+
					
					"<tr align='center' id='EMEveningShifts'>"+
						"<td id='friday' class='EveningShifts'></td>"+
						"<td id='saturday' class='EveningShifts'>-----</td>"+
						"<td id='thursday' class='EveningShifts'></td>"+
						"<td id='wednesday'class='EveningShifts'></td>"+
						"<td id='tuesday' class='EveningShifts'></td>"+
						"<td id='monday' class='EveningShifts'></td>"+
						"<td id='sunday' class='EveningShifts'></td>"+
						"<td id='managerMorning'  class='worker'>עובד</td>"+
						"<td  ></td>"+
					"</tr>"+
				
				"</table>"+			
		"</div>"
		
		);
	
}
function choose(){

	
$("#body").html(
		"<div class = 'templateWrapper'>"+
	"<div class='listMain'>"+
	"<table id='defaultTable'>"+
		"<tr  id='listHeader'>"+
						"<th >שם משפחה</th>"+
						"<th >שם פרטי</th>"+

					"</tr>"+
					
					"<script>"+
					"table2();"+
					"</script>"+
				
				"</table>"+			
			"</div>"+
		"</div>"	
		);
	
}
function table2() {

	var temp;
	var item;
	var num
	var loc=$("#userName").val();
	for(var i=0;i<localStorage.length;i++)
	{
		temp=localStorage.getItem(localStorage.key(i));
		item=JSON.parse(temp);
		
		if(item.password != "1111")
			drawRow(item, i,j);
		
   
	}

function drawRow(rowData, i,j) {

    var row = $("<tr />")
    $("#defaultTable").append(row); 
	
		row.append($("<td class='evenList'>" + rowData.Last_Name + "</td>"));
		row.append($("<td class='evenList'>" + rowData.Name + "</td>"));	
}

}
function insertNewEmployee(){
	if($("#pName").val() == ""){
		alert("שם פרטי לא הוכנס");
		return;
	}
	if($("#lName").val() == ""){
		alert("שם משפחה לא הוכנס");
		return;
	}
	if($("#phone").val() == ""){
		alert("טלפון לא הוכנס");
		return;
	}
	if($("#userName").val() == ""){
		alert("שם משתמש לא הוכנס");
		return;
	}
	if($("#mail").val() == ""){
		alert("מייל לא הוכנס");
		return;
	}
	if($("#password").val() == ""){
		alert("סיסמא לא הוכנסה");
		return;
	}
	if($("#password").val() == "1111"){
		alert("הוכנסה סיסמת מנהל- אנא הכנס סיסמה אחרת");
		$("#password").val("");
		return;
	}

	var temp=localStorage.getItem($("#password").val());
	var item=JSON.parse(temp);
	if(item)
	{
			alert("סיסמא זו כבר במערכת");
			$("#password").val("");
			return;
	}
	var tmp;
	tmp=parseInt($("#password").val(),10);
	if(isNaN(tmp)===true){
		alert("אנא הכנס ססמא בעלת מספרים בלבד");
		$("#password").val("");
		return;
	}
	for(i=0;i<localStorage.length;i++){
		var temp=localStorage.getItem(localStorage.key(i));
		var item=JSON.parse(temp);
		if($("#userName").val() ==item.userName){
			alert("שם משתמש זה כבר במערכת");
			$("#userName").val("");
			return;
		}

	}


	var name = " "+$("#pName").val()+" ";
	var last_name = $("#lName").val();
	var phone = $("#phone").val();
	var userName = $("#userName").val();
	var mail = $("#mail").val();
	var password = $("#password").val();
	var shifts=new Array();
	shifts[0]=new Array("false","false","false","false","false","false","false");
	shifts[1]=new Array("false","false","false","false","false","false","false");

	var item={ "Name":name,
			"Last_Name":last_name,
			"phone": phone,
			"userName" : userName ,
			"mail": mail,
			"password": password,
			"shift":shifts,
			"sidur":sidurs};


	$("#password").val("");
	$("#pName").val("");
	$("#lName").val("");
	$("#phone").val("");
	$("#mail").val("");
	$("#userName").val("");

	var text=JSON.stringify(item);
	localStorage.setItem(item.password,text);
	alert("ההכנסה בוצעה בהצלחה");
	return;
}
/*
* To delete all data:
* localStorage.clear();
* */