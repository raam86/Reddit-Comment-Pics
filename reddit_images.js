console.log(document.body);
jQuery(document).ready(function($){
    $('.md p').each(function(_,el){
    var pics = /\.jpg|\.gif|\.png/
    var parent = el
    $(el).find('a').each(function(_,link){
          if(link.href.search(pics) > 0){
                $(parent).parents('.md').after($("<img src='" + link.href + "' />").addClass('reddit_comment_added_pic').css({'min-width':"50px",'max-width':'50%'}));
            }
        })
    }) 
})
