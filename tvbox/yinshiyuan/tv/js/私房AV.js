var rule = {
    title:'私房TV📺',
    host:'https://ig.16kakababa.sbs',
    url:'/index.php/fyclass/page/fypage.html',
    headers:{ 
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'热门🔥&偷拍自拍&91视频合集&海角社区&国产AV&网红福利&女优/无码&更多分类',//静态分类名称拼接
    class_url:'label/hot&vod/type/id/23&vod/type/id/30&vod/type/id/33&vod/type/id/27&vod/type/id/31&vod/type/id/26&topic/detail/id/133',//静态分类标识拼接
    //class_parse:'ul.navbar-nav&&li:gt(1):lt(6);a&&Text;a&&href',
   //filterable:1,
    //filter_url:'{{fl.cateId}}',
    filterable:1,
    filter_url:'/index.php/{{fl.class}}/page/{{fypage}}.html',
	
    filter:{
"topic/detail/id/133":[{"key":"class","name":"分类","value":[
{"n":"黑料","v":"topic/detail/id/133"}, 
{"n":"美少女","v":"topic/detail/id/52"}]}]},
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.videos-list&&article&&;.entry-header&&Text;img&&data-src;.fa.fa-clock-o&&Text;a&&href',
    二级:'*',
	
}

