var rule = {
    title:'Missav',
    host:'https://missav.com',
	searchUrl:'/cn/search/**',
    url:'/fyclass?page=fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    //分类获取class_parse: '.navbar-items li:gt(2):lt(8);a&&Text;a&&href;/(\\d+).html',  //:gt(2):lt(8)定位大于2小于8
            //class_parse: '.rounded-md.text-nord0;a&&Text;a&&href;.*/(.*?)',//通配符匹配.*/(.*?).html
			//cate_exclude:'升级 VIP|地址发布',//排除分类
			
    class_name:'最近更新&新作上市&无码流出&SIRO&LUXU&GANA&PRESTIGE&S-CUTE&ARA&FC2&麻豆传媒&本月热门',//静态分类名称拼接
    class_url:'dm454/cn/release&release&uncensored-leak&siro&luxu&gana&maan&scute&ara&fc2&madou&monthly-hot',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.gap-5&&.thumbnail;.text-secondary&&Text;img&&data-src;span&&Text;a&&href',
    二级:'*',
	搜索:'.gap-5&&.thumbnail;.text-secondary&&Text;img&&data-src;span&&Text;a&&href',
	searchable:1,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}

