CKEDITOR.plugins.add('btvideo',{
  init : function( editor )
  {
    function stringIsNull(val) {
      return (val == null || val.length <= 0 || val ==="undefined") ? true : false;
    }

    /*
     /* 获取CKEditorFuncNum
     */
    var getFuncNum = function(url) {
      if (stringIsNull(url)) {
        return '';
      }

      var reParam = new RegExp('(?:[\?&]|&amp;)CKEditorFuncNum=([^&]+)', 'i') ;
      var match = url.match(reParam) ;
      return (match && match.length > 1) ? match[1] : '' ;
    };
    /*
     /*  iframe onload处理
     *  这段可以放在外面，根据不同的返回值自行进行处理
     */
    var getAjaxResult = function (t){
      var _id = this.getId();
      var _doc = this.getFrameDocument();
      //获取页面返回值
      var data = _doc.getBody().getHtml();
      //firebrowser的处理,不需要回调，回调会有问题
      //CKEDITOR.tools.callFunction(t.listenerData, data);
      this.removeListener('load', getAjaxResult);
    };

    CKEDITOR.dialog.add('btvideo', function( editor )
    {
      return {
        title : '添加视频',
        minWidth : 600,
        minHeight :400,
        contents :
          [
            {
              id : 'addVideoImage',
              label : '添加视频图片',
              title : '添加视频图片',
              filebrowser : 'uploadImageButton',
              elements :
                [
                  {
                    id : 'imageUrl',
                    type : 'text',
                    label : '图片网址',
                    required: true
                  },
                  {
                    id : 'photo',
                    type : 'file',
                    label : '上传图片',
                    style: 'height:40px',
                    size : 38
                  },
                  {
                    type : 'fileButton',
                    id : 'uploadImageButton',
                    label : '上传',
                    filebrowser :
                    {
                      action : 'QuickUpload',
                      target : 'addVideoImage:imageUrl',
                      onSelect:function(fileUrl, errorMessage){
                        //在这里可以添加其他的操作
                      }
                    },
                    onClick: function(){
                      var d = this.getDialog();
                      var _photo =  d.getContentElement('addVideoImage','photo');
                      var _funcNum = getFuncNum(_photo.action);
                      var _iframe =  CKEDITOR.document.getById(_photo._.frameId);
                      //可以查看ckeditor.event doc 了解此段代码
                      //http://docs.cksource.com/ckeditor_api/
                      _iframe.on('load', getAjaxResult, _iframe, _funcNum);
                    },
                    'for' : [ 'addVideoImage', 'photo']
                  }
                ]
            },
            {
              id : 'addVideo',
              label : '添加视频',
              title : '添加视频',
              filebrowser : 'uploadVideoButton',
              elements :
                [
                  {
                    id : 'videoUrl',
                    type : 'text',
                    label : '视频地址',
                    required: true
                  },
                  {
                    id : 'video',
                    type : 'file',
                    label : '上传视频',
                    style: 'height:40px',
                    size : 38
                  },
                  {
                    type : 'fileButton',
                    id : 'uploadVideoButton',
                    label : '上传视频',
                    filebrowser :
                    {
                      action : 'QuickUpload',
                      target : 'addVideo:videoUrl',
                      onSelect:function(fileUrl, errorMessage){
                        //在这里可以添加其他的操作
                      }
                    },
                    onClick: function(){
                      var d = this.getDialog();
                      var _video =  d.getContentElement('addVideo','video');
                      var _funcNum = getFuncNum(_video.action);
                      var _iframe =  CKEDITOR.document.getById(_video._.frameId);
                      //可以查看ckeditor.event doc 了解此段代码
                      //http://docs.cksource.com/ckeditor_api/
                      _iframe.on('load', getAjaxResult, _iframe, _funcNum);
                    },
                    'for' : [ 'addVideo', 'video']
                  }
                ]
            }
          ],
        onOk : function(){
          //图片地址
          var imageurl = this.getContentElement('addVideoImage', 'imageUrl').getValue();
          var videoUrl = this.getContentElement('addVideo', 'videoUrl').getValue();
          if ((imageurl.match(/(^\s*(\d+)((px)|\%)?\s*$)|^$/i)) ||
            (videoUrl.match(/(^\s*(\d+)((px)|\%)?\s*$)|^$/i))) {
            alert('请上传图片、和视频');
            return false;
          }

          var insetHtml = "<div><video class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"auto\" poster=\""+ imageurl +"\" data-setup=\"{'fluid':true}\"><source src=\""+ videoUrl +"\" type=\"video/mp4\"></video></div>";

          editor.insertHtml(insetHtml);
        }
      };
    });
    editor.addCommand('uploadVideoCmd', new CKEDITOR.dialogCommand('btvideo') );
    editor.ui.addButton('AddVideoBtn',
      {
        label : '图片',
        icon:this.path+'btvideo-logo.png', //toolbar上icon的地址,要自己上传图片到images下
        command : 'uploadVideoCmd'
      });
  },
  requires : [ 'dialog' ]
});
