var rule = {
    title:'18av',
    host:'https://18av.mm-cg.com',
    url:'/zh/fyclass/all/fypage.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'中文字幕&无码&动漫&自拍',//静态分类名称拼接
    class_url:'chinese_list&uncensored_list&animation_list&dt_list',//静态分类标识拼接
   //class_parse:'ul.animenu__nav&&li;a&&Text;a&&href',
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.posts&&.post;h3&&Text;img&&src;.meta&&Text;a&&href',
    二级:'*',
	
}

