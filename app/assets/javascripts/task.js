jQuery(function(){
  // 给 + 按钮绑定事件
  jQuery('#down').click(function(){
    html = 
      "<div class='task'>" +
        "<input type='text' name='textfield' class='task-text'>" +
        "<div class='buttons'>" +
          "<button name='button' class='bt1'>建立</button>" +
          "<button name='button' class='bt2'>取消</button>" +
        "</div>" +
      "</div>";

    jQuery('h1').after(html);
  })

  jQuery(document).on('click', '.task .bt2', function(){
    jQuery(this).closest('.task').remove();
  })

  jQuery(document).on('click', '.task .bt1', function(){
    var url = '/tasks';
    var year  = $('span:eq(0)').text();
    var month = $('span:eq(1)').text();
    var date  = $('span:eq(2)').text();
    var ymd = year+"/"+month+"/"+date;
    var content = jQuery(this).closest('.task').find('input').val();

    var that = this;
    jQuery.ajax({
      url: url,
      type: 'POST',
      data: {
        'task[content]': content,
        'task[date]': ymd
      },

      success: function(res) {
        // console.log(res);
        // 移除表单
        jQuery(that).closest('.task').remove();

        // 添加新行到末尾
        var tr = jQuery("<div>" + res + "</div>").find('table tbody tr').eq(0);
        // console.log(tr);
        jQuery('table tbody').append(tr);
      }

    })
    
  })



jQuery(document).on('click','.delete', function(){
      var task_id=jQuery(this).parent().parent().find('.task_id').text();
      var nod =this;
      jQuery.ajax({
        url: 'tasks/'+task_id,
        type: 'DELETE',
      success: function(res) {
        jQuery(nod).closest('tr').remove();
      }
     })       
  })


  jQuery(document).on('click','.delete', function(evt){ 
    evt.stopPropagation();     
    var task_id = jQuery(this).parent().parent().find('.task_id').text();
    var nod = this;
    jQuery.ajax({
      url: 'tasks/'+task_id,
      type: 'DELETE',
    success: function(res) {
      jQuery(nod).closest('tr').remove();
    }
  })       
})


// date picker 修改时间
// jQuery(document).on('click','.modify', function(){
//       var task_id=jQuery(this).parent().parent().find('.task_id').text();
//       var nod =this;
//       jQuery.ajax({
//         url: 'tasks/'+task_id,
//         type: 'DELETE',
//       success: function(res) {
//         jQuery(nod).closest('tr').remove();
//       }
//      })       
//   })



jQuery(document).on('click', '.tr',function() {
var textarea = "<td>"+
"<input type='text' name='textfield' class='textarea'>"+
"<span class='submit'> 提交 </span>"+
" <span class='cancel'>取消</span>"+
"</td>"
var value = jQuery(this).find('td').eq(1).text();
if (jQuery(this).closest('tbody').find('.textarea').html()!=null)
{alert('先完成修改')}else{
var td1_text = jQuery(this).find('td').eq(1).text();
var data ="<p class ='hidden_data'>"+td1_text+"</p>"
jQuery('h2').after(data)
jQuery(this).find('td').eq(1).after(textarea)
jQuery(this).find('td').eq(1).remove();
}
})


jQuery(document).on('click', '.cancel',function(evt){
  evt.stopPropagation();
  var content="<td>" +jQuery('.hidden_data').text()+"</td>"
  jQuery(this).closest('tr').find('td').eq(0).after(content)
  jQuery(this).closest('td').remove() 
  jQuery('.hidden_data').remove();

});

});

 jQuery(document).on('click', '.submit',function(evt){
 evt.stopPropagation();
 var area_text = jQuery(this).closest('td').find('.textarea').val()


 });


  // $('#down').click(function(){
  //   $('h1').after("<div class=\"task\"><br><input type=\"text\" name=\"textfield\" id=\"textfield\"><br><div class=\"button\"><button name=\"button\" type=\"button\" class=\"bt1\">建立</button><button name=\"button\"  type=\"button\" class=\"bt2\">取消</button></div></div>")

  //   $('.bt2').click(function(){
  //   $(this).parent().parent().remove();
  //   });



  //    $('.bt1').click(function(){
  //     var year = $('span:eq(0)').text()
  //     var month = $('span:eq(1)').text()
  //     var date = $('span:eq(2)').text()
  //     var ymd = year+"/"+month+"/"+date
  //   input_elm = jQuery(this).closest('.task').find('input').val();
  //   $('#task_content').val(input_elm)
  //   $('#task_date').val(ymd)
  //   $('h1').text('1')

  //   $('#1').click();
    
  // });
  // });

