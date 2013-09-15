tinymce4-plugin-qrcode
======================

A QRcode wizzard plugin for tinymce 4

Create map qrcode in tinymce/plugins/

Upzip all files in to the map qrcode

Now add qrcode to the plugins: and toolbar:

2.<script type="text/javascript">
3.tinymce.init({
4.    selector: "textarea",
5.    plugins: [
6.        "advlist autolink lists link image charmap print preview anchor",
7.        "searchreplace visualblocks code fullscreen",
8.        "insertdatetime media table contextmenu paste qrcode"
9.    ],
10.    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image qrcode"
11.});
12.</script>

