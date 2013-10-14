    var text_max = 300;
    $('#textarea_feedback').html(text_max + ' characters');

    $('#codeData').keyup(function() {
        var text_length = $('#codeData').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' characters');
    });

	$("#generate").click(function() {

	    var datainput = $("#codeData").val().replace(/\s/g, '+');
	    var size = $("#codeSize").val();
	    var encoding = $("#SelectCodding").val();
        var codecolor = $("#codeColor").val(function(i, v) {return v.replace("#","");}).val();


	    if(datainput == "") {
	        showalert('Please enter a url or text or look at the Help data formats !','alert-danger');
	        $("#generate").prop("disabled", true);
	        return false;

	    } else {

	        if( $("#image").is(':empty')) {
	            $("#image").append("<img src='http://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(datainput) + "&qzone=2&bgcolor=" + codecolor + "&size=" + size + "&charset-target=" + encoding + "&ecc=L&format=png' data-name='" + datainput + "' />");
	            $("#arrow").show();
	            return false;
	        } else {
	            $("#image").html("");
	            $("#image").append("<img src='http://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(datainput) + "&qzone=2&bgcolor=" + codecolor + "&size=" + size + "&charset-target=" + encoding + "&ecc=L&format=png' data-name='" + datainput + "' />");
	            $("#arrow").show();
	            return false;
	        }
	    }

	});

	$("#image").click(function() {

        //alert($("#image").html());
        //return false;
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