$(document).ready(function(){	
			$("#tab1").click(function(){
				$('#tab_box1').show();
				$('#tab_box2').hide();
			});

			$("#tab2").click(function(){
				$('#tab_box2').show();
				$('#tab_box1').hide();
			});
});