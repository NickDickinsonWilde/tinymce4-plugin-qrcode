	$("#generate").click(function() {

	    var data = $("#codeData").val().replace(/\s/g, '+');
	    var size = $("#codeSize").val();
	    var encoding = $("#SelectCodding").val();

	    if(data == "") {
	        showalert('Please enter a url or text or look at the Help data formats !','alert-danger');
	        $("#generate").prop("disabled", true);
	        return false;

	    } else {

	        if( $("#image").is(':empty')) {
	            $("#image").append("<img src='" + window.location.protocol + "//chart.apis.google.com/chart?cht=qr&chl=" + encodeURIComponent(data) + "&chs=" + size + "&choe=" + encoding + "&chld=M|1' alt='Scan QRcode' />");
	            $("#arrow").show();
	            return false;
	        } else {
	            $("#image").html("");
	            $("#image").append("<img src='" + window.location.protocol + "//chart.apis.google.com/chart?cht=qr&chl=" + encodeURIComponent(data) + "&chs=" + size + "&choe=" + encoding + "&chld=M|1' alt='Scan QRcode' />");
	            $("#arrow").show();
	            return false;
	        }
	    }

	});

	$("#image").click(function() {
	    I_InsertHTML($("#image").html());
	    I_Close();
	});

	function I_InsertHTML(sHTML) {
	    parent.tinymce.activeEditor.insertContent(sHTML);
	};

	function I_Close() {
	    parent.tinymce.activeEditor.windowManager.close();
	};

    /**
      Bootstrap Alerts -
      Function Name - showalert()
      Inputs - message,alerttype
      Example - showalert("Invalid Login","alert-error")
      Types of alerts -- "alert-error","alert-success","alert-info"
      Required - You only need to add a alert_placeholder div in your html page wherever you want to display these alerts "<div id="alert_placeholder"></div>"
    **/

    function showalert(message,alerttype) {

      $('#alert_placeholder').append('<div id="alertdiv" class="alert ' +  alerttype + '"><a class="close" data-dismiss="alert">x</a><span>'+message+'</span></div>');

	  $('#alert_placeholder').bind('closed.bs.alert', function () {
	  	$("#generate").prop("disabled", false);
	  })

		setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs

			$("#alertdiv").remove();
			$("#generate").prop("disabled", false);

		}, 3000);

	};

	$('#formatOption').change(function(){
	    var selected_item = $(this).val();
	    $('#codeData').val(selected_item);
	});