$(function () {

	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.screenWidth;
		if (screenWidth < 768)
		{
			$("#navbarMenu").collapse('hide');
		}
	});
});