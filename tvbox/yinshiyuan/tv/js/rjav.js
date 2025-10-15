var rule = {
    title: 'RJAV',
    host: 'https://rjav.tv/zh',
    url: '/videotype/fyclass-fypage.html',
    searchUrl: '/vod/search/**.html',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'PC_MOBILE',
    },
    timeout: 5000,
    class_name: '馬賽克破壞&JAV_Uncensored&Mosaic_Removed&Asian_Amateur&FC2-PPV&MGS',
    class_url: 'JAV_Censored&/JAV_Uncensored&Mosaic_Removed&Asian_Amateur&FC2-PPV&MGS',
    play_parse: true,

    lazy: 'js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=="1"){url=unescape(url)}else if(html.encrypt=="2"){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}',
    一级: '.row-space7&&li;h2&&Text;img&&src;;a:eq(0)&&href',
    二级: {
        "title": ".row-space7 h2&&Text",
        "img": "img:eq(0)&&src",
        "code": ".info-tags:contains('代碼')&&span:eq(1)&&Text",
        "release_date": ".info-tags:contains('發布日期')&&span:eq(1)&&Text",
        "duration": ".info-tags:contains('片長')&&span:eq(1)&&Text",
        "tags": ".info-tags:contains('標籤') a&&Text",
        "actors": ".info-tags:contains('女優') a&&Text"
    },
    搜索: '.row-space20 .col-17;h1&&Text;img&&src;;a:eq(0)&&href',
}