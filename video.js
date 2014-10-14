var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var s = document.createElement('script');
s.type = 'text/javascript';
var code = 'var orig = document.getElementById("watch7-sidebar-modules").innerHTML; ' +
'var querystr = "";' +
'var searchbar = \'<form onsubmit="executeSearch(); return false"> <input type="text" id="queryinput"> <input type="submit" id="side-search-button" value="Search"></form> </br> \' ;' + 

'document.getElementById("watch7-sidebar-modules").innerHTML = searchbar + orig;' +

'function executeSearch()' +
'{' +
'querystr = document.getElementById("queryinput").value; ' +
'if(querystr=="")' +
'{' +
   //'document.getElementById("watch7-sidebar-modules").innerHTML = searchbar + orig;' +
'}' +
'else {' +
'var script2 = document.createElement("script");' +
'script2.src = "//gdata.youtube.com/feeds/mobile/videos?alt=json-in-script&q=" + querystr + "&callback=SearchYouTube";' +
'script2.type = "text/javascript";' +
'document.getElementsByTagName("head")[0].appendChild(script2);' +
'console.log(querystr);' +
'}} ' +

'function getTime(s)' +
'{' +
      "if(s[0] == '0' && s[1] == '0')" +
            'return s.substring(3, 8);' +

      'return s.substring(0, 8);' +
'} ' + 

'function getViews(s)' +
'{' +
      'var ret = "";' +
      'var c = 0;' +
      'for(var i = s.length-1; i >= 0; i--)' +
      '{' +
            'if(c!=0 && c%3==0)' +
                  'ret = "," + ret;' +

            'ret = s[i] + ret;' +
            'c++;' +
      '}' +
      'return ret;'+
'} ' + 

'function SearchYouTube(data)' +  
            '{' +
            'var row = "";' +
            'for (i = 0; i < data.feed.entry.length; i++) {' +
            'row += "<div class=\'search_item\'>";' + 
            'row += "<table width=\'100%\'>";' + 
            'row += "<tr>";' +
            'row += "<td vAlign=\'top\' align=\'left\'>";' + 
            'row += "<a href="+ data.feed.entry[i].media$group.media$player[0].url +"><img width=\'120px\' height=\'80px\' src=" + data.feed.entry[i].media$group.media$thumbnail[0].url + " /></a>";' +
            'row += "</td>";' +
            'row += "<td vAlign=\'top\' width=\'100%\' align=\'left\'>";' +
            'row += "&nbsp <a href="+ data.feed.entry[i].media$group.media$player[0].url + ">&nbsp<b>" + data.feed.entry[i].media$group.media$title.$t + "</b></a><br/>";' +
            'row += "&nbsp <span style=\'font-size:12px; color:#555555\'>&nbsp by " + data.feed.entry[i].author[0].name.$t + "</span><br/>";' + 
            'row += "&nbsp &nbsp <span style=\'font-size:12px\' color:#666666>" + getViews(data.feed.entry[i].yt$statistics.viewCount) + " views" + "<span><br/>";' +
            'row += "&nbsp &nbsp <span style=\'font-size:12px\' color:#666666>" + getTime(data.feed.entry[i].media$group.media$thumbnail[0].time) + "<span><br/>";' +
            'row += "</td>";' +
            'row += "</tr>";' +
            'row += "</table>";' +
            'row += "</div>"; }' +
            'document.getElementById("watch7-sidebar-modules").innerHTML = searchbar + row + "</br><hr>";' +
            'document.getElementById("queryinput").value = querystr;' +
    '}';

try {
s.appendChild(document.createTextNode(code));
document.body.appendChild(s);
} catch (e) {
s.text = code;
document.body.appendChild(s);
}







