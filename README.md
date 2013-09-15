tinymce4-plugin-qrcode
======================

A QRcode wizzard plugin for tinymce 4

Create map qrcode in tinymce/plugins/

Upzip all files in to the map qrcode

Now add qrcode to the plugins: and toolbar:

&lt;script type=&quot;text/javascript&quot;&gt;<br/>tinymce.init({<br/>    selector: &quot;textarea&quot;,<br/>    plugins: [<br/>        &quot;advlist autolink lists link image charmap print preview anchor&quot;,<br/>        &quot;searchreplace visualblocks code fullscreen&quot;,<br/>        &quot;insertdatetime media table contextmenu paste qrcode&quot;<br/>    ],<br/>    toolbar: &quot;insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image qrcode&quot;<br/>});<br/>&lt;/script&gt;
