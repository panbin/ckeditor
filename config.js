/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:

  //config.toolbar_Full =
  //  [
  //    [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ],
  //    [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ],
  //    [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ],
  //    [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ],
  //    '/',
  //    [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ],
  //    [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ],
  //    [ 'Link','Unlink','Anchor' ],
  //    [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ],
  //    '/',
  //    [ 'Styles','Format','Font','FontSize' ],
  //    [ 'TextColor','BGColor' ],
  //    [ 'Maximize', 'ShowBlocks','-','About' ]
  //  ];

  config.language = 'zh-cn';
  config.uiColor = '#FAFAFA';


  //支持video 标签
  config.allowedContent = true;

  config.image_previewText = ' ';

  //自定义上传图片
  config.filebrowserUploadUrl = 'https://admin.fahand.com/platform/imageGM/articelImageUpload';

  //上传图片路径
  config.filebrowserImageUploadUrl= 'https://admin.fahand.com/platform/imageGM/articelImageUpload';

  config.removeButtons = 'Image,About,ShowBlocks';

  // 多插件支持
  config.extraPlugins = 'btvideoimage,btimage';

};
