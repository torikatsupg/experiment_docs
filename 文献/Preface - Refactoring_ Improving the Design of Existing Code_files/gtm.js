
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"417",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdentifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)|^.*conferences.oreilly.com\\\/(strata\\-data\\-ai($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"],["map","key","^.*conferences.oreilly.com\\\/(infrastructure-ops($|\\\/|\\?).*)","value","UA-112091926-13"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",7]],["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",9],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",11]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]],["map","index","2","dimension",["macro",13]],["map","index","3","dimension",["macro",7]],["map","index","4","dimension",["macro",14]],["map","index","5","dimension",["macro",15]],["map","index","6","dimension",["macro",11]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",2],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",2],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",0],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",2],8,16],"+\"\/?\"+",["escape",["macro",0],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",2],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=43;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",32],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orgID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topicSearchValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSuggestGroup"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.experiment"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.variation"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"answersSearchQuery"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.option"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"trialStartDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscriptionStartDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketingTest"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorTest"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)(get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com|learning.oreilly.com|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com)(.*)","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]]],
      "vtp_autoLinkDomains":["macro",28],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",9],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",30]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",11]],["map","fieldName","customTask","value",["macro",31]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",3]],["map","index","4","dimension",["macro",34]],["map","index","9","dimension",["macro",35]],["map","index","10","dimension",["macro",36]],["map","index","11","dimension",["macro",37]],["map","index","12","dimension",["macro",38]],["map","index","13","dimension",["macro",27]],["map","index","14","dimension",["macro",39]],["map","index","15","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","18","dimension",["macro",26]],["map","index","19","dimension",["macro",43]],["map","index","20","dimension",["macro",44]],["map","index","21","dimension",["macro",45]],["map","index","27","dimension",["macro",46]],["map","index","22","dimension",["macro",15]],["map","index","6","dimension",["macro",47]],["map","index","7","dimension",["macro",48]],["map","index","8","dimension",["macro",49]],["map","index","25","dimension",["macro",50]],["map","index","26","dimension",["macro",51]],["map","index","23","dimension",["macro",52]],["map","index","24","dimension",["macro",53]],["map","index","28","dimension",["macro",54]],["map","index","30","dimension",["macro",55]],["map","index","29","dimension",["macro",56]],["map","index","31","dimension",["macro",57]],["map","index","32","dimension",["macro",58]],["map","index","33","dimension",["macro",11]],["map","index","34","dimension",["macro",59]],["map","index","36","dimension",["macro",60]],["map","index","37","dimension",["macro",61]],["map","index","38","dimension",["macro",62]],["map","index","39","dimension",["macro",63]],["map","index","40","dimension",["macro",64]],["map","index","41","dimension",["macro",65]],["map","index","42","dimension",["macro",66]],["map","index","44","dimension",["macro",67]],["map","index","45","dimension",["macro",68]],["map","index","46","dimension",["macro",65]],["map","index","47","dimension",["macro",66]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";if(\"profile icon\"==",["escape",["macro",20],8,16],"\u0026\u0026\"hover\"==",["escape",["macro",21],8,16],"||\"global\"==",["escape",["macro",20],8,16],"\u0026\u0026\"navigation\"==",["escape",["macro",21],8,16],"\u0026\u0026\"your oreilly|hover\"==",["escape",["macro",22],8,16],")a=1;return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",75],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",76],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-170"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"UA-112091926-16"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",9],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",11]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",3]],["map","index","4","dimension",["macro",34]],["map","index","9","dimension",["macro",35]],["map","index","10","dimension",["macro",36]],["map","index","11","dimension",["macro",37]],["map","index","12","dimension",["macro",38]],["map","index","13","dimension",["macro",27]],["map","index","14","dimension",["macro",39]],["map","index","15","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","18","dimension",["macro",26]],["map","index","19","dimension",["macro",43]],["map","index","20","dimension",["macro",44]],["map","index","21","dimension",["macro",45]],["map","index","27","dimension",["macro",46]],["map","index","22","dimension",["macro",15]],["map","index","6","dimension",["macro",47]],["map","index","7","dimension",["macro",48]],["map","index","8","dimension",["macro",49]],["map","index","25","dimension",["macro",50]],["map","index","26","dimension",["macro",51]],["map","index","23","dimension",["macro",52]],["map","index","24","dimension",["macro",53]],["map","index","28","dimension",["macro",54]],["map","index","30","dimension",["macro",55]],["map","index","29","dimension",["macro",56]],["map","index","31","dimension",["macro",57]],["map","index","32","dimension",["macro",58]],["map","index","33","dimension",["macro",11]],["map","index","34","dimension",["macro",59]],["map","index","36","dimension",["macro",60]],["map","index","37","dimension",["macro",61]],["map","index","38","dimension",["macro",62]],["map","index","39","dimension",["macro",63]],["map","index","40","dimension",["macro",64]],["map","index","41","dimension",["macro",65]],["map","index","42","dimension",["macro",66]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",82],8,16],".closest(\"a[class^\\x3d'authLink']\");if(a)return a=a.text.split(\" \"),a[a.length-1].toLowerCase()})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",0],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*artificial-intelligence.*|.*conferences.oreilly.com.*artificial-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*GANS.*|.*conferences.oreilly.com.*GANS.*","value","true"],["map","key",".*www.oreilly.com.*NLP.*|.*conferences.oreilly.com.*NLP.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*NSTM.*|.*conferences.oreilly.com.*NSTM.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",75],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",76]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*databases.*|.*conferences.oreilly.com.*databases.*","value","true"],["map","key",".*www.oreilly.com.*analytics.*|.*conferences.oreilly.com.*analytics.*","value","true"],["map","key",".*www.oreilly.com.*data-show-podcasts.*|.*conferences.oreilly.com.*data-show-podcasts.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*bots.*|.*conferences.oreilly.com.*bots.*","value","true"],["map","key",".*www.oreilly.com.*agents.*|.*conferences.oreilly.com.*agents.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*open-source.*|.*conferences.oreilly.com.*open-source.*","value","true"],["map","key",".*www.oreilly.com.*cloud-native.*|.*conferences.oreilly.com.*cloud-native.*","value","true"],["map","key",".*www.oreilly.com.*software-development.*|.*conferences.oreilly.com.*software-development.*","value","true"],["map","key",".*www.oreilly.com.*blockchain.*|.*conferences.oreilly.com.*blockchain.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*tensorflow.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*data-mining.*","value","true"],["map","key",".*unsupervised-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*machine-learning.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/resources","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":32
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":39
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",18],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",24]],["map","fieldName","title","value",["macro",25]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",24]],["map","fieldName","title","value",["macro",25]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",68,0]],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",71],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["template",["macro",74],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",18],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":294
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","35","dimension",["macro",78]]],
      "vtp_trackingId":"UA-112091926-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":726
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":["macro",71],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":759
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"Gkv3COnv_c8BEJOGuI8D",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1229
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"GFhzCNP_rdABEJOGuI8D",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1231
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-4WZYL59WMV",
      "vtp_enableUserProperties":true,
      "tag_id":1251
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-092EL089CH",
      "vtp_enableUserProperties":true,
      "tag_id":1254
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1279
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"Anybird Remarketing",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1287
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"user login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"social sign in",
      "vtp_eventLabel":["macro",83],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1296
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":true,
      "vtp_eventName":["macro",39],
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1313
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",0],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":1314
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":1315
    },{
      "function":"__cl",
      "tag_id":1316
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1317
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1318
    },{
      "function":"__hl",
      "tag_id":1319
    },{
      "function":"__hl",
      "tag_id":1320
    },{
      "function":"__hl",
      "tag_id":1321
    },{
      "function":"__cl",
      "tag_id":1322
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"input[name='promotionCode']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1064",
      "tag_id":1323
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.orm-ff-NavigationWidget-navigationWidgetContainer",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1106",
      "tag_id":1324
    },{
      "function":"__hl",
      "tag_id":1325
    },{
      "function":"__cl",
      "tag_id":1326
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;\nif(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",2],8,16],".split(\"\/\")[1]}else if(\"shop.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"shop.oreilly.com\"],folders_to_track=",["escape",["macro",2],8,16],".split(\"\/\")[1];else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"twitter.com\/oreillymedia|facebook.com\/OReilly|inkedin.com\/company\/oreilly-media|youtube.com\/user\/OreillyMedia\",isSubDomainTracker=!0,isSeparateDomainTracker=!0,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",\naction:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",label:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=\ndocument.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];mainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0,mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(a){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}function _isSocial(a){return\"\"!=socSites?null!=a.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(a){return\"\"!=folders_to_track?null!=a.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(a){for(var c=0,b=0;b\u003CextDoc.length;b++){var d=a.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[b])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(a,c){var b=a.toLowerCase().split(\".\");b=b[b.length-1].split(\/[#?\u0026?]\/);a=a.toLowerCase().split(c);a=a[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=b;eValues.downloads.label=eValues.outbound_downloads.label=a}\nfunction _tagLinks(a,c,b,d,g,e,f){isGTM?a.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+b+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,a.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+b+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(a){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var b=a.parentNode;null!=b;){if(b==c)return!0;b=b.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;b=\/((.*)oreilly.com\\\/(learning|radar|idea)(.*))\/i;return c.test(a.href)\u0026\u0026b.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(a).parents(\".article-body\").length||\njQuery(a).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",38],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}if(null!==document.querySelector(\"iframe.twitter-share-button\")\u0026\u0026void 0!==document.querySelector(\"iframe.twitter-share-button\")){var c=!1;window.addEventListener(\"blur\",function(){c\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0})});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseover\",\nfunction(){window.focus();c=!0});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseout\",function(){c=!1})}try{window.twttr=function(b,d,e){var f,g=b.getElementsByTagName(d)[0];if(!b.getElementById(e))return b=b.createElement(d),b.id=e,b.src=\"\/\/platform.twitter.com\/widgets.js\",g.parentNode.insertBefore(b,g),window.twttr||(f={_e:[],ready:function(h){f._e.push(h)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(b){b.events.bind(\"tweet\",trackTwitter)})}catch(b){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,c){if(a\u0026\u0026(c=new RegExp(\"[\\\\?\\x26#]\"+c+\"\\x3d([^\\x26#]*)\"),a=c.exec(a),null!=a))return unescape(a[1])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"custom.historyChange\",custom:{historyChangeSource:",["escape",["macro",72],8,16],"}})},a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"domReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction forceInputUppercase(a){var b=a.target.selectionStart,c=a.target.selectionEnd;a.target.value=a.target.value.toUpperCase();a.target.setSelectionRange(b,c)}void 0!=document.getElementById(\"id_promotion\")\u0026\u0026null!=document.getElementById(\"id_promotion\")\u0026\u0026document.getElementById(\"id_promotion\").addEventListener(\"keyup\",forceInputUppercase,!1);\nvoid 0!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026null!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026document.getElementsByName(\"promotionCode\")[0].addEventListener(\"keyup\",forceInputUppercase,!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nonwExpandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-headerListItem a, .orm-ff-NavigationView-headerListItem a\");nonwExpandable.forEach(function(a,b){b+1!=nonwExpandable.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):b+1==nonwExpandable.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar nonwExpandableFo=document.querySelectorAll(\".drop-content li:not(.flyout-parent) a\");\nnonwExpandableFo.forEach(function(a,b){\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1!=nonwExpandableFo.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1==nonwExpandableFo.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar expandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-toggleControls a, .orm-ff-NavigationView-toggleControls a\");expandable.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.parentNode.parentNode.parentNode.querySelectorAll(\".orm-Button-btnContentWrap span\")[0].childNodes[1].textContent+\" | \"+a.textContent})})});var flyoutLinks=document.querySelectorAll(\".flyout a\");\nflyoutLinks.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.closest(\"li.flyout-parent\").getElementsByTagName(\"a\")[0].textContent+\" | \"+a.textContent})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":724
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(c){var b=document.getElementById(c);b.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"End\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0});b.kUnbind(\".pe\")});var d=!1,e=!1,f=!1,g=!1,h=!1;b.addJsListener(\"playerUpdatePlayhead\",function(){var a=b.evaluate(\"{video.player.currentTime}\"),c=b.evaluate(\"{mediaProxy.entry.duration}\");a=100*parseFloat(a\/c);0\u003Ca\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",\neventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));25\u003Ca\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));50\u003Ca\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));75\u003Ca\u0026\u0026!g\u0026\u0026(g=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",38],8,16],",\neventVal:0,nonInteraction:0}));95\u003Ca\u0026\u0026!h\u0026\u0026(h=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));b.kUnbind(\".pp\")})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":744
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"windowReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":746
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70561\u0026amp;conversionId=2173986\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70561\u0026amp;conversionId=2390889\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1239
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"fullstory.com\";window._fs_script=\"edge.fullstory.com\/s\/fs.js\";window._fs_org=\"SAVCH\";window._fs_namespace=\"FS\";\n(function(e,k,l,m,h,f,a,d){l in e?e.console\u0026\u0026e.console.log\u0026\u0026e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(a=e[l]=function(c,b,g){a.q?a.q.push([c,b,g]):a._api(c,b,g)},a.q=[],f=k.createElement(m),f.async=1,f.crossOrigin=\"anonymous\",f.src=\"https:\/\/\"+_fs_script,d=k.getElementsByTagName(m)[0],d.parentNode.insertBefore(f,d),a.identify=function(c,b,g){a(h,{uid:c},g);b\u0026\u0026a(h,b,g)},a.setUserVars=function(c,b){a(h,c,b)},a.event=function(c,b,g){a(\"event\",{n:c,p:b},g)},a.anonymize=\nfunction(){a.identify(!1)},a.shutdown=function(){a(\"rec\",!1)},a.restart=function(){a(\"rec\",!0)},a.log=function(c,b){a(\"log\",[c,b])},a.consent=function(c){a(\"consent\",!arguments.length||c)},a.identifyAccount=function(c,b){f=\"account\";b=b||{};b.acctId=c;a(f,b)},a.clearUserCookie=function(){},a._w={},d=\"XMLHttpRequest\",a._w[d]=e[d],d=\"fetch\",a._w[d]=e[d],e[d]\u0026\u0026(e[d]=function(){return a._w[d].apply(this,arguments)}),a._v=\"1.2.0\")})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1247
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70561\u0026amp;conversionId=2861009\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1250
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(c){var b=3E5,d=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+d+\"\/\"+c+\".js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(\"tvu7up89sc39\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1258
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",64,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getRandomInt(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(Math.random()*(b-a))+a}var random=getRandomInt(1,100);document.cookie=50\u003E=random?\"DriftPlaybook\\x3dA\":\"DriftPlaybook\\x3dB\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1289
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/fast.appcues.com\/48743.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1303
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",66,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ega(function(a){a=(a=document.cookie.match(\"(^|;)\\\\s*_ga\\\\s*\\x3d\\\\s*([^;]+)\"))?a.pop():\"\";Appcues.identify(a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1305
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({\"ld.experiment\":void 0,\"ld.variation\":void 0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1213
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"yes"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VPTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/radar(\\\/.*)*|\\\/content(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"conferences.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"your oreilly|hover"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*|learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers|certifications|answers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(resource-centers|case-studies|learning-paths|videos|certifications|answers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers|certifications|answers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"domReadyTimer"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"custom.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"article|podcast",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"jupyter notebook"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"learning platform sign up",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"updatedEcommerce"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VWO"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"content-team_signup"
    },{
      "function":"_cn",
      "arg0":["macro",79],
      "arg1":"mktoButton"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"online-learning\/enterprise.html"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"PLEASE WAIT"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.com(.*)|www.oreilly.com\\\/register\\\/"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"^www\\.oreilly\\.com$",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",32],
      "arg1":"conferences."
    },{
      "function":"_sw",
      "arg0":["macro",32],
      "arg1":"ai."
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"aerio"
    },{
      "function":"_css",
      "arg0":["macro",82],
      "arg1":"a[class^=\"authLink\"], a[class^=\"authLink\"] *"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.oreilly.com\/library\/view"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.oreilly.com\/library\/view\/temporary-access\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",84],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)|(.*)www.oreilly.com(.*)|(.*)shop.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|radar|ideas)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.review(.*)|www.oreilly.review\\\/register\\\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas|radar|content)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"podcast"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_introduction-to-machine-learning-interpretability.html"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_1064($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_1106($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"online-learning\/government.html"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*learning.oreilly.com\\\/answers\\\/.*"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"content-marketing-solutions.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"www.oreilly.com\/member\/"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"www.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"www.oreilly.com\/content-marketing-solutions.html"
    }],
  "rules":[
    [["if",0,1],["add",2,12]],
    [["if",1,2],["add",2,12]],
    [["if",1],["add",3,7,34,48,36,37,39,40,41,42,43,44,45,46]],
    [["if",1,4],["add",4]],
    [["if",1,5],["add",4]],
    [["if",1],["unless",6],["add",5,17]],
    [["if",7,8],["add",6,8,18]],
    [["if",1,9,10],["add",9]],
    [["if",1,11],["add",9]],
    [["if",9,12],["add",10]],
    [["if",12,13],["add",10]],
    [["if",9,14],["add",11]],
    [["if",1,15],["add",13]],
    [["if",14,16],["add",14]],
    [["if",14,17],["add",14]],
    [["if",14,18],["add",14]],
    [["if",12,19],["unless",20,21],["add",15]],
    [["if",1,23],["unless",20,24],["add",16]],
    [["if",25,27],["unless",26],["add",16]],
    [["if",28,29],["add",16]],
    [["if",28,30],["add",16,58]],
    [["if",31,32],["add",19]],
    [["if",33,35,36],["unless",34],["add",20]],
    [["if",31,37,38],["add",21]],
    [["if",12,39],["add",22]],
    [["if",40],["add",23]],
    [["if",42],["unless",41],["add",24]],
    [["if",12,22],["add",25],["block",15]],
    [["if",1,43],["add",26]],
    [["if",12,44,45,46],["add",27,60]],
    [["if",1,47],["add",28]],
    [["if",1,48],["add",29]],
    [["if",1],["unless",49,50],["add",30]],
    [["if",25,27],["unless",49,50],["add",30]],
    [["if",35,51],["add",31]],
    [["if",8,52],["add",32]],
    [["if",1,53],["unless",54],["add",33]],
    [["if",1,55],["add",35]],
    [["if",56],["add",38,52,56,57]],
    [["if",1,57],["add",0,1]],
    [["if",32,58],["unless",59],["add",47]],
    [["if",32,60],["add",48,49]],
    [["if",56,61],["add",50]],
    [["if",32,62],["add",51]],
    [["if",25,27,28],["add",53]],
    [["if",28,32],["add",54]],
    [["if",1,63],["add",55]],
    [["if",64,65],["add",56]],
    [["if",64,66],["add",57]],
    [["if",31,56],["add",58,59]],
    [["if",12,44,46,67],["add",61]],
    [["if",1,68],["add",62]],
    [["if",12,44,46,69],["add",63]],
    [["if",1,71],["unless",70],["add",64,65]],
    [["if",1,72],["add",66,67]],
    [["if",1,3],["block",2,4,5,7,17]],
    [["if",47,56],["block",52]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ea=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},fa=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ia=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ia,oa=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Bi=b.prototype},pa=this||self,ua=function(a){if(a&&a!=pa)return sa(a.document);null===ta&&(ta=sa(pa.document));return ta},xa=/^[\w+/_-]+[=]{0,2}$/,ta=null,sa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&xa.test(c))return c}return""},ya=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},za=function(a,b){function c(){}c.prototype=b.prototype;a.Bi=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ui=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},Aa=function(a){return a};var Ba=function(a,b){this.g=a;this.o=b};var Ca=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ea=function(){this.D={};this.s=!1;this.J={}};Ea.prototype.get=function(a){return this.D["dust."+a]};Ea.prototype.set=function(a,b){this.s||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Ea.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};var Fa=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.o=new Ea;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Ca(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!Ca(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else Ca(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():Ca(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Nb=function(){for(var a=Fa(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};
var Ga=function(a,b){if(Ca(b))delete a.g[Number(b)];else{var c=a.o,d;d="dust."+b;c.s||c.J.hasOwnProperty(d)||delete c.D[d]}};aa=k.prototype;aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};
aa.has=function(a){return Ca(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ia=function(){function a(f,g){if(b[f]){if(b[f].zc+g>b[f].max)throw Error("Quota exceeded");b[f].zc+=g}}var b={},c=void 0,d=void 0,e={$h:function(f){c=f},rf:function(){c&&a(c,1)},bi:function(f){d=f},Ra:function(f){d&&a(d,f)},yi:function(f,g){b[f]=b[f]||{zc:0};b[f].max=g},Ch:function(f){return b[f]&&b[f].zc||0},reset:function(){b={}},nh:a};e.onFnConsume=e.$h;e.consumeFn=e.rf;e.onStorageConsume=e.bi;e.consumeStorage=e.Ra;e.setMax=e.yi;e.getConsumed=e.Ch;e.reset=e.reset;e.consume=e.nh;return e};var Ja=function(a,b){this.J=a;this.U=function(c,d,e){return c.apply(d,e)};this.s=b;this.o=new Ea;this.g=this.D=void 0};Ja.prototype.add=function(a,b){Ka(this,a,b,!1)};var Ka=function(a,b,c,d){if(!a.o.s)if(a.J.Ra(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ja.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.s&&this.s.has(a)?this.s.set(a,b):(this.J.Ra(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ja.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.s?this.s.get(a):void 0};Ja.prototype.has=function(a){return!!this.o.has(a)||!(!this.s||!this.s.has(a))};var La=function(a){var b=new Ja(a.J,a);a.D&&(b.D=a.D);b.U=a.U;b.g=a.g;return b};var Ma=function(){},Na=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Oa=function(a){return"number"==typeof a&&!isNaN(a)},Pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},B=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Qa=function(a,b){if(a&&Pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Sa=function(a,b){if(!Oa(a)||
!Oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ua=function(a,b){for(var c=new Ta,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Va=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Wa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ya=function(a){return Math.round(Number(a))||0},cb=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},db=function(a){var b=[];if(Pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},eb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},fb=function(){return(new Date).getTime()},Ta=function(){this.prefix="gtm.";this.values={}};Ta.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ta.prototype.get=function(a){return this.values[this.prefix+a]};
var gb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ib=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},mb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},nb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ob=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},pb=function(a,b){var c=E;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=B(b,d))return}return d},
qb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},rb=function(a){var b=[];Va(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var sb=function(a,b){Ea.call(this);this.g=a;this.U=b};oa(sb,Ea);sb.prototype.toString=function(){return this.g};sb.prototype.Nb=function(){return new k(Fa(this))};sb.prototype.o=function(a,b){a.J.rf();return this.U.apply(tb(this,a),Array.prototype.slice.call(arguments,1))};var tb=function(a,b){var c=function(d,e){this.o=d;this.s=e};c.prototype.g=function(d){var e=this.s;return Pa(d)?vb(e,d):d};c.prototype.J=function(d){return wb(this.s,d)};c.prototype.D=function(){return b.J};return new c(a,b)};
sb.prototype.Ta=function(a,b){try{return this.o.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var wb=function(a,b){for(var c,d=0;d<b.length&&!(c=vb(a,b[d]),c instanceof Ba);d++);return c},vb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof sb))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.D;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var xb=function(){Ea.call(this)};oa(xb,Ea);xb.prototype.Nb=function(){return new k(Fa(this))};var yb={control:function(a,b){return new Ba(a,this.g(b))},fn:function(a,b,c){var d=this.s,e=this.g(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.D().Ra(a.length+f.length);return new sb(a,function(){return function(g){var h=La(d);void 0===h.g&&(h.g=this.s.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.g(l[m]),l[m]instanceof Ba)return l[m];for(var p=e.get("length"),n=
0;n<p;n++)n<l.length?h.add(e.get(n),l[n]):h.add(e.get(n),void 0);h.add("arguments",new k(l));var t=wb(h,f);if(t instanceof Ba)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.D();b.Ra(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.g(arguments[d]);"string"===typeof e&&b.Ra(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.D(),c=new xb,d=0;d<arguments.length-1;d+=2){var e=this.g(arguments[d])+"",f=this.g(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ra(g);c.set(e,f)}return c},undefined:function(){}};var zb=function(){this.s=Ia();this.g=new Ja(this.s)},Ab=function(a,b,c){var d=new sb(b,c);d.s=!0;a.g.set(b,d)};zb.prototype.Dc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};zb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=vb(this.g,arguments[c]);return b};zb.prototype.D=function(a,b){var c=La(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=vb(c,arguments[e]);return d};var Bb=function(a){if(a instanceof Bb)return a;this.va=a};Bb.prototype.toString=function(){return String(this.va)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Cb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Db=function(a){if(null==a)return String(a);var b=Cb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Eb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fb=function(a){if(!a||"object"!=Db(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Eb(a,"constructor")&&!Eb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Eb(a,b)},G=function(a,b){var c=b||("array"==Db(a)?[]:{}),d;for(d in a)if(Eb(a,d)){var e=a[d];"array"==Db(e)?("array"!=Db(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Fb(e)?(Fb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Hb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Fa(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=B(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.Nb(),n=0;n<p.length();n++)m[p.get(n)]=g(h.get(p.get(n)));return m}if(h instanceof xb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof sb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Gb(u[v],b,!!c);var w=b?b.J:Ia(),y=new Ja(w);
b&&(y.g=b.g);return g(h.o.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Gb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=B(d,
h);if(-1<l)return e[l];if(Pa(h)||Wa(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Fb(h)){var n=new xb;d.push(h);e.push(n);f(h,n);return n}if("function"===typeof h){var t=new sb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Hb(this.g(v[w]),b,!!c);return g((0,this.s.U)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Ib=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jb=function(a){if(void 0===a||Pa(a)||Fb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ib(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ga(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ib(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.o(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ga(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mb=new Ba("break"),Nb=new Ba("continue"),Ob=function(a,b){return this.g(a)+this.g(b)},Qb=function(a,b){return this.g(a)&&this.g(b)},Rb=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=B(Lb,b))return Gb(a[b].apply(a,Ib(c)),this.s);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof sb){var e=Ib(c);e.unshift(this.s);return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=B(Kb.supportedMethods,b)){var f=Ib(c);f.unshift(this.s);
return Kb[b].apply(a,f)}}if(a instanceof sb||a instanceof xb){if(a.has(b)){var g=a.get(b);if(g instanceof sb){var h=Ib(c);h.unshift(this.s);return g.o.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof sb?a.g:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ib(c))}if(a instanceof Bb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Sb=function(a,b){a=this.g(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.s;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.g(b);c.set(a,d);return d},Tb=function(a){var b=La(this.s),c=wb(b,Array.prototype.slice.apply(arguments));if(c instanceof Ba)return c},Vb=function(){return Mb},Wb=function(a){for(var b=this.g(a),c=0;c<b.length;c++){var d=this.g(b[c]);if(d instanceof Ba)return d}},Xb=function(a){for(var b=this.s,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.g(arguments[c+1]);Ka(b,d,e,
!0)}}},Yb=function(){return Nb},Zb=function(a,b,c){var d=new k;b=this.g(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.s.add(a,this.g(f))},$b=function(a,b){return this.g(a)/this.g(b)},ac=function(a,b){a=this.g(a);b=this.g(b);var c=a instanceof Bb,d=b instanceof Bb;return c||d?c&&d?a.va==b.va:!1:a==b},bc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.g(arguments[c]);return b};
function cc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=wb(f,d);if(g instanceof Ba){if("break"===g.g)break;if("return"===g.g)return g}}}function dc(a,b,c){if("string"===typeof b)return cc(a,function(){return b.length},function(f){return f},c);if(b instanceof xb||b instanceof k||b instanceof sb){var d=b.Nb(),e=d.length();return cc(a,function(){return e},function(f){return d.get(f)},c)}}
var ec=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return dc(function(e){d.set(a,e);return d},b,c)},hc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return dc(function(e){var f=La(d);Ka(f,a,e,!0);return f},b,c)},ic=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return dc(function(e){var f=La(d);f.add(a,e);return f},b,c)},kc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return jc(function(e){d.set(a,e);return d},b,c)},lc=
function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return jc(function(e){var f=La(d);Ka(f,a,e,!0);return f},b,c)},mc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return jc(function(e){var f=La(d);f.add(a,e);return f},b,c)};
function jc(a,b,c){if("string"===typeof b)return cc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return cc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var nc=function(a,b,c,d){function e(p,n){for(var t=0;t<f.length();t++){var r=f.get(t);n.add(r,p.get(r))}}var f=this.g(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.s;d=this.g(d);var h=La(g);for(e(g,h);vb(h,b);){var l=wb(h,d);if(l instanceof Ba){if("break"===l.g)break;if("return"===l.g)return l}var m=La(g);e(h,m);vb(m,c);h=m}},pc=function(a){a=this.g(a);var b=this.s,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},qc=function(a,b){var c;a=this.g(a);b=this.g(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof xb||a instanceof k||a instanceof sb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Ca(b)&&(c=a[b]);else if(a instanceof Bb)return;return c},rc=function(a,b){return this.g(a)>this.g(b)},
sc=function(a,b){return this.g(a)>=this.g(b)},tc=function(a,b){a=this.g(a);b=this.g(b);a instanceof Bb&&(a=a.va);b instanceof Bb&&(b=b.va);return a===b},uc=function(a,b){return!tc.call(this,a,b)},vc=function(a,b,c){var d=[];this.g(a)?d=this.g(b):c&&(d=this.g(c));var e=this.J(d);if(e instanceof Ba)return e},wc=function(a,b){return this.g(a)<this.g(b)},xc=function(a,b){return this.g(a)<=this.g(b)},yc=function(a,b){return this.g(a)%this.g(b)},zc=function(a,b){return this.g(a)*this.g(b)},Ac=function(a){return-this.g(a)},
Gc=function(a){return!this.g(a)},Hc=function(a,b){return!ac.call(this,a,b)},Ic=function(){return null},Jc=function(a,b){return this.g(a)||this.g(b)},Kc=function(a,b){var c=this.g(a);this.g(b);return c},Lc=function(a){return this.g(a)},Mc=function(a){return Array.prototype.slice.apply(arguments)},Nc=function(a){return new Ba("return",this.g(a))},Oc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof sb||
a instanceof k||a instanceof xb)&&a.set(b,c);return c},Pc=function(a,b){return this.g(a)-this.g(b)},Qc=function(a,b,c){a=this.g(a);var d=this.g(b),e=this.g(c);if(!Pa(d)||!Pa(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.g(d[h]))if(f=this.g(e[h]),f instanceof Ba){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.g(e[e.length-1]),f instanceof Ba&&("return"===f.g||"continue"===
f.g)))return f},Rc=function(a,b,c){return this.g(a)?this.g(b):this.g(c)},Sc=function(a){a=this.g(a);return a instanceof sb?"function":typeof a},Tc=function(a){for(var b=this.s,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Uc=function(a,b,c,d){var e=this.g(d);if(this.g(c)){var f=this.J(e);if(f instanceof Ba){if("break"===f.g)return;if("return"===f.g)return f}}for(;this.g(a);){var g=this.J(e);if(g instanceof Ba){if("break"===g.g)break;if("return"===g.g)return g}this.g(b)}},
Vc=function(a){return~Number(this.g(a))},Wc=function(a,b){return Number(this.g(a))<<Number(this.g(b))},Xc=function(a,b){return Number(this.g(a))>>Number(this.g(b))},Yc=function(a,b){return Number(this.g(a))>>>Number(this.g(b))},Zc=function(a,b){return Number(this.g(a))&Number(this.g(b))},$c=function(a,b){return Number(this.g(a))^Number(this.g(b))},ad=function(a,b){return Number(this.g(a))|Number(this.g(b))};var cd=function(){this.g=new zb;bd(this)};cd.prototype.Dc=function(a){return dd(this.g.o(a))};
var id=function(a,b){return dd(ed.g.D(a,b))},bd=function(a){var b=function(d,e){var f=a.g,g=String(e);yb.hasOwnProperty(d)&&Ab(f,g||d,yb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ab(a.g,String(d),e)};c(0,Ob);c(1,Qb);c(2,Rb);c(3,Sb);c(53,Tb);c(4,Vb);c(5,Wb);c(52,Xb);c(6,Yb);c(9,Wb);c(50,Zb);c(10,$b);c(12,ac);c(13,bc);c(47,ec);c(54,hc);c(55,ic);c(63,nc);c(64,kc);c(65,lc);c(66,mc);c(15,pc);c(16,qc);c(17,qc);c(18,rc);c(19,sc);c(20,tc);c(21,uc);c(22,vc);
c(23,wc);c(24,xc);c(25,yc);c(26,zc);c(27,Ac);c(28,Gc);c(29,Hc);c(45,Ic);c(30,Jc);c(32,Kc);c(33,Kc);c(34,Lc);c(35,Lc);c(46,Mc);c(36,Nc);c(43,Oc);c(37,Pc);c(38,Qc);c(39,Rc);c(40,Sc);c(41,Tc);c(42,Uc);c(58,Vc);c(57,Wc);c(60,Xc);c(61,Yc);c(56,Zc);c(62,$c);c(59,ad)},kd=function(){var a=ed,b=jd();Ab(a.g,"require",b)},ld=function(a,b){a.g.g.U=b};
function dd(a){if(a instanceof Ba||a instanceof sb||a instanceof k||a instanceof xb||a instanceof Bb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var md=[],nd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},od=function(a){return nd[a]},pd=/[\x00\x22\x26\x27\x3c\x3e]/g;var td=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ud={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},vd=function(a){return ud[a]};
md[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(td,vd)+"'"}};var Dd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ed={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Fd=function(a){return Ed[a]};md[16]=function(a){return a};var Hd;
var Jd=[],Kd=[],Ld=[],Md=[],Nd=[],Od={},Pd,Qd,Rd,Sd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Td=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Od[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.nf&&b.nf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Hd(c,e,b)},Vd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Ud(a[e],b,c));return d},Ud=function(a,b,c){if(Pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ud(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Jd[f];if(!g||b.Id(g))return;c[f]=!0;try{var h=Vd(g,b,c);h.vtp_gtmEventId=b.id;d=Td(h,b);Rd&&(d=Rd.ph(d,h))}catch(y){b.Df&&b.Df(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ud(a[l],b,c)]=Ud(a[l+1],b,c);return d;case "template":d=[];for(var m=
!1,p=1;p<a.length;p++){var n=Ud(a[p],b,c);Qd&&(m=m||n===Qd.oc);d.push(n)}return Qd&&m?Qd.sh(d):d.join("");case "escape":d=Ud(a[1],b,c);if(Qd&&Pa(a[1])&&"macro"===a[1][0]&&Qd.Nh(a))return Qd.gi(d);d=String(d);for(var t=2;t<a.length;t++)md[a[t]]&&(d=md[a[t]](d));return d;case "tag":var r=a[1];if(!Md[r])throw Error("Unable to resolve tag reference "+r+".");return d={uf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Wd(u,b,c),w=!!a[4];return w||2!==v?w!==
(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Wd=function(a,b,c){try{return Pd(Vd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Xd=function(){var a=function(b){return{toString:function(){return b}}};return{Uf:a("consent"),ie:a("convert_case_to"),je:a("convert_false_to"),ke:a("convert_null_to"),me:a("convert_true_to"),ne:a("convert_undefined_to"),Li:a("debug_mode_metadata"),Qa:a("function"),Hg:a("instance_name"),Ig:a("live_only"),Jg:a("malware_disabled"),Kg:a("metadata"),Oi:a("original_activity_id"),Pi:a("original_vendor_template_id"),Mg:a("once_per_event"),af:a("once_per_load"),ef:a("setup_tags"),ff:a("tag_id"),hf:a("teardown_tags")}}();var Yd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};oa(Yd,Error);function Zd(a,b){if(Pa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Zd(a[c],b[c])}};var $d=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};oa($d,Error);var be=function(){return function(a,b){a instanceof $d||(a=new $d(a,ae));b&&a.g.push(b);throw a;}};function ae(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Oa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ce=null,fe=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];ce=de(a);for(var e=0;e<Kd.length;e++){var f=Kd[e],g=ee(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Md.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},ee=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ce(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=ce(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},de=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Wd(Ld[c],a));return b[c]}};var ge={ph:function(a,b){b[Xd.ie]&&"string"===typeof a&&(a=1==b[Xd.ie]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Xd.ke)&&null===a&&(a=b[Xd.ke]);b.hasOwnProperty(Xd.ne)&&void 0===a&&(a=b[Xd.ne]);b.hasOwnProperty(Xd.me)&&!0===a&&(a=b[Xd.me]);b.hasOwnProperty(Xd.je)&&!1===a&&(a=b[Xd.je]);return a}};var he=function(){this.g={}};function ie(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Yd(c,d,g);}}function je(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ie(e,b,d,g);ie(f,b,d,g)}}}};var ne=function(a){var b=ke.F,c=this;this.o=new he;this.g={};var d={},e=je(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Va(a,function(f,g){var h={};Va(g,function(l,m){var p=le(l,m);h[l]=p.assert;d[l]||(d[l]=p.P)});c.g[f]=function(l,m){var p=h[l];if(!p)throw me(l,{},"The requested permission "+l+" is not configured.");var n=Array.prototype.slice.call(arguments,0);p.apply(void 0,n);e.apply(void 0,n)}})},pe=function(a){return oe.g[a]||
function(){}};function le(a,b){var c=Sd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=me;try{return Td(c)}catch(d){return{assert:function(e){throw new Yd(e,{},"Permission "+e+" is unknown.");},P:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function me(a,b,c){return new Yd(a,b,c)};var qe=!1;var re={};re.Gi=cb('');re.wh=cb('');var se=qe,te=re.wh,ue=re.Gi;
var Le=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Me=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Le(b,"/*")&&(b=b.slice(0,-2));Le(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Ne=/^[a-z0-9-]+$/i,Oe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qe=function(a,b){var c;if(!(c=!Pe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Ne.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Oe.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),n=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=n;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=p.slice(p.indexOf("/"));h=Me(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Pe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Re,Se=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.bh&&(l["fix_"+m]=!0),l.wf=l.wf||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},n={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=n.startTag();
if(r){var u=h.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,ca:r.ca,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var u={};r[2].replace(e,function(v,w,y,x,z){var A=y||x||z||f.test(w)&&w||null,C=document.createElement("div");C.innerHTML=A;u[w]=C.textContent||C.innerText||A});return{tagName:r[1],ca:u,Uc:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},t=function(){for(var r in p)if(p[r].test(h)){var u=n[r]();return u?(u.type=u.type||r,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.wf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Cf=function(){return this[this.length-1]};v.Kd=function(C){var D=this.Cf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.oh=
function(C){for(var D=0,F;F=this[D];D++)if(F.tagName===C)return!0;return!1};var w=function(C){C&&"startTag"===C.type&&(C.Uc=r.test(C.tagName)||C.Uc);return C},y=t,x=function(){h="</"+v.pop().tagName+">"+h},z={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.Kd("TABLE")?(h="<TBODY>"+h,A()):l.Zi&&u.test(D)&&v.oh(D)?v.Kd(D)?x():(h="</"+C.tagName+">"+h,A()):C.Uc||v.push(C)},endTag:function(C){v.Cf()?l.yh&&!v.Kd(C.tagName)?x():v.pop():l.yh&&(y(),A())}},A=function(){var C=h,D=w(y());h=C;if(D&&
z[D.type])z[D.type](D)};t=function(){A();return w(y())}}();return{append:function(r){h+=r},li:t,cj:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=h;h="";return r},dj:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.fj="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.ej=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Re=a})();(function(){function a(){}function b(n){return void 0!==n&&null!==n}function c(n,t,r){var u,v=n&&n.length||0;for(u=0;u<v;u++)t.call(r,n[u],u)}function d(n,t,r){for(var u in n)n.hasOwnProperty(u)&&t.call(r,u,n[u])}function e(n,t){d(t,
function(r,u){n[r]=u});return n}function f(n,t){n=n||{};d(t,function(r,u){b(n[r])||(n[r]=u)});return n}function g(n){try{return m.call(n)}catch(r){var t=[];c(n,function(u){t.push(u)});return t}}var h={Tg:a,Ug:a,Vg:a,Wg:a,dh:a,eh:function(n){return n},done:a,error:function(n){throw n;},oi:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function n(r,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(w,v):
r.removeAttribute(w)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,Zb:v.defaultView||v.parentWindow,lb:v,Kc:Re("",{bh:!0}),wd:[r],Ud:"",Vd:v.createElement(r.nodeName),Wb:[],Wa:[]});n(this.Vd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Wa,arguments);for(var r;!this.Bc&&this.Wa.length;)r=this.Wa.shift(),"function"===typeof r?this.jh(r):this.de(r)};t.prototype.jh=function(r){var u={type:"function",value:r.name||r.toString()};this.Pd(u);r.call(this.Zb,this.lb);this.Ef(u)};
t.prototype.de=function(r){this.Kc.append(r);for(var u,v=[],w,y;(u=this.Kc.li())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Ji(v);w&&this.Hh(u);y&&this.Ih(u)};t.prototype.Ji=function(r){var u=this.gh(r);u.kf&&(u.Gd=this.Ud+u.kf,this.Ud+=u.ji,this.Vd.innerHTML=u.Gd,this.Hi())};t.prototype.gh=function(r){var u=this.wd.length,v=[],w=[],y=[];c(r,function(x){v.push(x.text);if(x.ca){if(!/^noscript$/i.test(x.tagName)){var z=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.ca.id&&"ps-style"!==x.ca.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.Uc?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{gj:r,raw:v.join(""),kf:w.join(""),ji:y.join("")}};t.prototype.Hi=function(){for(var r,u=[this.Vd];b(r=u.shift());){var v=1===r.nodeType;if(!v||!n(r,"proxyof")){v&&(this.wd[n(r,"id")]=r,n(r,"id",null));var w=r.parentNode&&n(r.parentNode,"proxyof");
w&&this.wd[w].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.Hh=function(r){var u=this.Kc.clear();u&&this.Wa.unshift(u);r.src=r.ca.src||r.ca.Ri;r.src&&this.Wb.length?this.Bc=r:this.Pd(r);var v=this;this.Ii(r,function(){v.Ef(r)})};t.prototype.Ih=function(r){var u=this.Kc.clear();u&&this.Wa.unshift(u);r.type=r.ca.type||r.ca.TYPE||"text/css";this.Ki(r);u&&this.write()};t.prototype.Ki=function(r){var u=this.ih(r);this.Lh(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.lb.createTextNode(r.content)))};t.prototype.ih=function(r){var u=this.lb.createElement(r.tagName);u.setAttribute("type",r.type);d(r.ca,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Lh=function(r){this.de('<span id="ps-style"/>');var u=this.lb.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.Pd=function(r){r.ci=this.Wa;this.Wa=[];this.Wb.unshift(r)};t.prototype.Ef=function(r){r!==this.Wb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Wb.shift(),this.write.apply(this,r.ci),!this.Wb.length&&this.Bc&&(this.Pd(this.Bc),this.Bc=null))};t.prototype.Ii=function(r,u){var v=this.hh(r),w=this.Ai(v),y=this.options.Tg;r.src&&(v.src=r.src,this.vi(v,w?y:function(){u();y()}));try{this.Kh(v),r.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.hh=function(r){var u=this.lb.createElement(r.tagName);d(r.ca,function(v,w){u.setAttribute(v,w)});r.content&&(u.text=r.content);return u};t.prototype.Kh=function(r){this.de('<span id="ps-script"/>');
var u=this.lb.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.vi=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var w=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();w(y);u()}})};t.prototype.Ai=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.oi&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function n(){var w=u.shift(),y;w&&(y=w[w.length-1],y.Ug(),w.stream=t.apply(null,w),y.Vg())}function t(w,y,x){function z(F){F=x.eh(F);v.write(F);x.Wg(F)}v=new p(w,x);v.id=r++;v.name=x.name||v.id;var A=w.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(g(arguments).join(""))},writeln:function(){return z(g(arguments).join("")+"\n")}});var D=v.Zb.onerror||a;v.Zb.onerror=function(F,J,Q){x.error({msg:F+
" - "+J+":"+Q});D.apply(v.Zb,arguments)};v.write(y,function(){e(A,C);v.Zb.onerror=D;x.done();v=null;n()});return v}var r=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.aj?w[0]:w;var z=[w,y,x];w.fi={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.dh(z);u.push(z);v||n();return w.fi},{streams:{},bj:u,Ti:p})}();Se=l.postscribe}})();var Te=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ue={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Te.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof sb?p="Fn":l instanceof k?p="List":l instanceof xb?p="DustMap":
l instanceof Bb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Ue[h]||h)+".");}}};function Ve(a){return""+a}
function We(a,b){var c=[];return c};var Xe=function(a,b){var c=new sb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.g(d[e]);return b.apply(this,d)});c.s=!0;return c},Ye=function(a,b){var c=new xb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Na(e)?c.set(d,Xe(a+"_"+d,e)):(Oa(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var Ze=function(a,b){H(this.o.g,["apiName:!string","message:?string"],arguments);var c={},d=new xb;return d=Ye("AssertApiSubject",c)};var $e=function(a,b){H(this.o.g,["actual:?*","message:?string"],arguments);var c={},d=new xb;return d=Ye("AssertThatSubject",c)};function af(a){return function(){for(var b=[],c=this.s,d=0;d<arguments.length;++d)b.push(Hb(arguments[d],c));return Gb(a.apply(null,b))}}var cf=function(){for(var a=Math,b=bf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=af(a[e].bind(a)))}return c};var df=function(a){var b;return b};var ef=function(a){var b;return b};var ff=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURI(a)};var gf=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURIComponent(a)};var hf=function(a){H(this.o.g,["message:?string"],arguments);};var jf=function(a,b){H(this.o.g,["min:!number","max:!number"],arguments);return Sa(a,b)};var kf=function(a,b,c){var d=a.s.g;if(!d)throw Error("Missing program state.");d.ah.apply(null,Array.prototype.slice.call(arguments,1))};var lf=function(){kf(this,"read_container_data");var a=new xb;a.set("containerId",'GTM-5P4V6Z');a.set("version",'417');a.set("environmentName",'');a.set("debugMode",se);a.set("previewMode",ue);a.set("environmentMode",te);a.s=!0;return a};var mf=function(){return(new Date).getTime()};var nf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof sb)return"function";if(a instanceof Bb){a=a.va;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var of=function(a){function b(c){return function(d){try{return c(d)}catch(e){(se||ue)&&a.call(this,e.message)}}}return{parse:b(function(c){return Gb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hb(c))})}};var pf=function(a){return Ya(Hb(a,this.s))};var qf=function(a){return Number(Hb(a,this.s))};var rf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var sf=function(a,b,c){var d=null,e=!1;return e?d:null};var bf="floor ceil round max min abs pow sqrt".split(" ");var tf=function(){var a={};return{Dh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},zi:function(b,c){a[b]=c},reset:function(){a={}}}},uf=function(a,b){H(this.o.g,["apiName:!string","mock:?*"],arguments);};var vf=function(){this.g={};this.o={}};vf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
vf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Na(b)?Xe(a,b):Ye(a,b)};
var wf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Na(c)?Xe(b,c):Ye(b,c)};function xf(){var a={};return a};var I={Db:"_ee",ud:"_syn",Si:"_uei",od:"_eu",Qi:"_pci",bd:"event_callback",ic:"event_timeout",ka:"gtag.config",Ma:"gtag.get",oa:"purchase",cb:"refund",La:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",cg:"view_cart",se:"add_to_wishlist",Aa:"view_item",qe:"view_promotion",pe:"select_promotion",Xc:"select_item",cc:"view_item_list",oe:"add_payment_info",bg:"add_shipping_info",Da:"value_key",Ca:"value_callback",la:"allow_ad_personalization_signals",kd:"restricted_data_processing",tb:"allow_google_signals",
ma:"cookie_expires",wb:"cookie_update",Ab:"session_duration",ra:"user_properties",Pa:"transport_url",R:"ads_data_redaction",C:"ad_storage",K:"analytics_storage",he:"region",Vf:"wait_for_update"};I.Se=[I.oa,I.cb,I.La,I.$a,I.ab,I.cg,I.se,I.Aa,I.qe,I.pe,I.cc,I.Xc,I.oe,I.bg];I.Re=[I.la,I.tb,I.wb];I.Te=[I.ma,I.ic,I.Ab];var yf={},zf=function(a,b){yf[a]=yf[a]||[];yf[a][b]=!0},Af=function(a){for(var b=[],c=yf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var L=function(a){zf("GTM",a)};function Bf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Bf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}za(Bf,Error);Bf.prototype.name="CustomError";var Cf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Bf.call(this,d+c[e])};za(Cf,Bf);Cf.prototype.name="AssertionError";var Df=function(a,b){throw new Cf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ef=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ff=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Gf,Hf=function(){if(void 0===Gf){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Aa,createScript:Aa,createScriptURL:Aa})}catch(c){pa.console&&pa.console.error(c.message)}Gf=a}else Gf=a}return Gf};var Jf=function(a,b){this.g=b===If?a:""};Jf.prototype.toString=function(){return this.g+""};var If={};var Kf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Lf;a:{var Mf=pa.navigator;if(Mf){var Nf=Mf.userAgent;if(Nf){Lf=Nf;break a}}Lf=""}var Of=function(a){return-1!=Lf.indexOf(a)};var Qf=function(a,b,c){this.g=c===Pf?a:""};Qf.prototype.toString=function(){return this.g.toString()};var Rf=function(a){if(a instanceof Qf&&a.constructor===Qf)return a.g;Df("expected object of type SafeHtml, got '"+a+"' of type "+ya(a));return"type_error:SafeHtml"},Pf={},Sf=new Qf(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Pf);var Tf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Uf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Rf(Sf);return!c.parentElement}),Vf=function(a,b){if(a.tagName&&Tf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Uf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Rf(b)};var Wf=function(a){var b=Hf(),c=b?b.createHTML(a):a;return new Qf(c,null,Pf)};var E=window,N=document,Xf=navigator,Yf=N.currentScript&&N.currentScript.src,Zf=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},$f=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ag=function(a,b,c){var d=N.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Hf(),g=f?f.createScriptURL(a):a;e=new Jf(g,If);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||pa;if(m.Element&&m.Location){h=m;break a}}catch(w){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var n=typeof d;if("object"==n&&null!=d||"function"==n)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(w){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;Df("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof Jf&&e.constructor===Jf?t=e.g:(Df("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ya(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=ua(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);$f(d,b);c&&(d.onerror=c);var u=ua();u&&d.setAttribute("nonce",u);var v=N.getElementsByTagName("script")[0]||N.body||N.head;v.parentNode.insertBefore(d,v);return d},bg=function(){if(Yf){var a=Yf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},cg=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=N.body&&N.body.lastChild||N.body||N.head;d.parentNode.insertBefore(c,d);$f(c,b);void 0!==a&&(c.src=a);return c},fg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},hg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){E.setTimeout(a,0)},ig=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kg=function(a){var b=N.createElement("div");Vf(b,Wf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},mg=function(a){Xf.sendBeacon&&Xf.sendBeacon(a)||fg(a)},ng=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var og={},pg=function(){return void 0==og.gtag_cs_api?!1:og.gtag_cs_api};var qg=[];function rg(){var a=Zf("google_tag_data",{});a.ics||(a.ics={entries:{},set:sg,update:tg,addListener:ug,notifyListeners:vg,active:!1});return a.ics}
function sg(a,b,c,d,e,f){var g=rg();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var n=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:n};h[a]=t;n&&E.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,wg(a),vg(),zf("TAGGING",2))},f)}}}
function tg(a,b){var c=rg();c.active=!0;if(void 0!=b){var d=xg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=xg(a);f.quiet?(f.quiet=!1,wg(a)):g!==d&&wg(a)}}function ug(a,b){qg.push({qf:a,zh:b})}function wg(a){for(var b=0;b<qg.length;++b){var c=qg[b];Pa(c.qf)&&-1!==c.qf.indexOf(a)&&(c.Hf=!0)}}function vg(a){for(var b=0;b<qg.length;++b){var c=qg[b];if(c.Hf){c.Hf=!1;try{c.zh({pf:a})}catch(d){}}}}
var xg=function(a){var b=rg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},yg=function(a){return!(rg().entries[a]||{}).quiet},zg=function(){return pg()?rg().active:!1},Ag=function(a,b){rg().addListener(a,b)},Bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!yg(b[e]))return!0;return!1}if(c()){var d=!1;Ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Cg=function(a,b){if(!1===xg(b)){var c=!1;Ag([b],function(d){!c&&xg(b)&&(a(d),c=!0)})}};var Dg=[I.C,I.K],Eg=function(a){var b=a[I.he];b&&L(40);var c=a[I.Vf];c&&L(41);for(var d=Pa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Dg.length;f++){var g=Dg[f],h=a[Dg[f]],l=d[e];rg().set(g,h,l,"JP","JP-23",c)}},Fg=function(a,b){for(var c=0;c<Dg.length;c++){var d=Dg[c],e=a[Dg[c]];rg().update(d,e)}rg().notifyListeners(b)},Gg=function(a){var b=xg(a);return void 0!=b?b:!0},Hg=function(){for(var a=[],b=0;b<Dg.length;b++){var c=xg(Dg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Ig=function(a,b){Bg(a,b)};var Kg=function(a){return Jg?N.querySelectorAll(a):null},Lg=function(a,b){if(!Jg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!N.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Mg=!1;if(N.querySelectorAll)try{var Ng=N.querySelectorAll(":root");Ng&&1==Ng.length&&Ng[0]==N.documentElement&&(Mg=!0)}catch(a){}var Jg=Mg;var Og=function(a){if(N.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,
null))}return!1};
var Pg=function(){var a=N.body,b=N.documentElement||a&&a.parentElement,c,d;if(N.compatMode&&"BackCompat"!==N.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};L(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Qg=function(a){var b=Pg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Rg=[],Sg=!(!E.IntersectionObserver||!E.IntersectionObserverEntry),Tg=function(a,b,c){for(var d=new E.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Rg.length;f++)if(!Rg[f])return Rg[f]=d,f;return Rg.push(d)-1},Ug=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:fb()};O(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Qg(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Vg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Sg){var e=!1;O(function(){e||
Ug(a,b,c)()});return Tg(function(f){e=!0;for(var g={pb:0};g.pb<f.length;g={pb:g.pb},g.pb++)O(function(h){return function(){return a(f[h.pb])}}(g))},b,c)}return E.setInterval(Ug(a,b,c),1E3)},Wg=function(a){Sg?0<=a&&a<Rg.length&&Rg[a]&&(Rg[a].disconnect(),Rg[a]=void 0):E.clearInterval(a)};var Xg=/:[0-9]+$/,Yg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ah=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Zg(a.protocol)||Zg(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(Xg,"").toLowerCase());return $g(a,b,c,d,e)},$g=function(a,b,c,d,e){var f,g=Zg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=bh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Xg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||zf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=B(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Yg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Zg=function(a){return a?a.replace(":",
"").toLowerCase():""},bh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ch=function(a){var b=N.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||zf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Xg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},dh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=ch(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var eh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),fh=new RegExp(/support|noreply/i),gh=["SCRIPT","IMG","SVG","PATH","BR"],hh=["BR"];function ih(a){var b;if(a===N.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=ih(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var lh=function(){var a=!0;var b=a,c;var d=[],e=N.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=gh.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=hh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var p=c,n=p.elements,t=[],r=0;r<n.length;r++){var u=n[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(eh);if(w){var y=w[0],x;if(E.location){var z=$g(E.location,"host",!0);x=0<=y.toLowerCase().indexOf(z)}else x=!1;x||t.push({element:u,Vc:y})}}}var A;for(var C=[],D=10<t.length?"3":p.status,F=0;F<t.length&&
10>F;F++){var J=t[F].element,Q=t[F].Vc,W=!1;C.push({Vc:Q,querySelector:ih(J),tagName:J.tagName,isVisible:!Og(J),type:1,Ic:!!W})}return{elements:C,status:D}};var ke={},R=null,zh=Math.random();ke.F="GTM-5P4V6Z";ke.vc="1d0";ke.Ni="";ke.Wf="";var Ah={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Bh={__paused:!0,__tg:!0},Ch;for(Ch in Ah)Ah.hasOwnProperty(Ch)&&(Bh[Ch]=!0);var Dh="www.googletagmanager.com/gtm.js";
var Eh=Dh,Fh=cb(""),Gh=null,Hh=null,Ih="//www.googletagmanager.com/a?id="+ke.F+"&cv=417",Jh={},Kh={},Lh=function(){var a=R.sequence||1;R.sequence=a+1;return a};var Mh={},Nh=new Ta,Oh={},Ph={},Sh={name:"dataLayer",set:function(a,b){G(qb(a,b),Oh);Qh()},get:function(a){return Rh(a,2)},reset:function(){Nh=new Ta;Oh={};Qh()}},Rh=function(a,b){return 2!=b?Nh.get(a):Th(a)},Th=function(a,b){var c=a.split(".");b=b||[];for(var d=Oh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==B(b,d))return}return d},Uh=function(a,b){Ph.hasOwnProperty(a)||(Nh.set(a,b),G(qb(a,b),Oh),Qh())},Qh=function(a){Va(Ph,function(b,c){Nh.set(b,c);G(qb(b,void 0),
Oh);G(qb(b,c),Oh);a&&delete Ph[b]})},Vh=function(a,b,c){Mh[a]=Mh[a]||{};var d=1!==c?Th(b):Nh.get(b);"array"===Db(d)||"object"===Db(d)?Mh[a][b]=G(d):Mh[a][b]=d},Wh=function(a,b){if(Mh[a])return Mh[a][b]},Xh=function(a,b){Mh[a]&&delete Mh[a][b]};var $h={},ai=function(a,b){if(E._gtmexpgrp&&E._gtmexpgrp.hasOwnProperty(a))return E._gtmexpgrp[a];void 0===$h[a]&&($h[a]=Math.floor(Math.random()*b));return $h[a]};var bi=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ci(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ei=function(a,b,c,d){return di(d)?ci(a,String(b||document.cookie),c):[]},hi=function(a,b,c,d,e){if(di(e)){var f=fi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=gi(f,function(g){return g.Cc},b);if(1===f.length)return f[0].id;f=gi(f,function(g){return g.Tb},c);return f[0]?f[0].id:void 0}}};function ii(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ei(b,f,!1,d).indexOf(c)}
var mi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!di(c.ya))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ji(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Xh);g=e(g,"samesite",
c.si);c.wi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=ki(),n=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){n=w;continue}t=!0;if(!li(u,c.path)&&ii(v,a,b,c.ya))return 0}if(n&&!t)throw n;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return li(m,c.path)?1:ii(g,a,b,c.ya)?0:1},ni=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return mi(a,b,c)};
function gi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function fi(a,b,c){for(var d=[],e=ei(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Cc:1*l[0]||1,Tb:1*l[1]||1}))}}return d}
var ji=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},oi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pi=/(^|\.)doubleclick\.net$/i,li=function(a,b){return pi.test(document.location.hostname)||"/"===b&&oi.test(a)},ki=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;pi.test(e)||oi.test(e)||a.push("none");
return a},di=function(a){if(!pg()||!a||!zg())return!0;if(!yg(a))return!1;var b=xg(a);return null==b?!0:!!b};var qi=function(){for(var a=Xf.userAgent+(N.cookie||"")+(N.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^bi(a)&2147483647,Math.round(fb()/1E3)].join(".")},ti=function(a,b,c,d,e){var f=ri(b);return hi(a,f,si(c),d,e)},ui=function(a,b,c,d){var e=""+ri(c),f=si(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ri=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},si=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function vi(a,b,c){var d,e=a.Sb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||fb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var wi=["1"],xi={},Ai=function(a){var b=yi(a.prefix),c=xi[b];c&&zi(b,c,a)},Ci=function(a){var b=yi(a.prefix);if(!xi[b]&&!Bi(b,a.path,a.domain)){var c=qi();zi(b,c,a);var d=Zf("google_tag_data",{});d._gcl_au?zf("GTM",57):d._gcl_au=c;Bi(b,a.path,a.domain)}};function zi(a,b,c){var d=ui(b,"1",c.domain,c.path),e=vi(c);e.ya="ad_storage";ni(a,d,e)}function Bi(a,b,c){var d=ti(a,b,c,wi,"ad_storage");d&&(xi[a]=d);return d}function yi(a){return(a||"_gcl")+"_au"};function Di(){for(var a=Ei,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Fi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ei,Gi;
function Hi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Gi[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ei=Ei||Fi();Gi=Gi||Di();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ii;var Mi=function(){var a=Ji,b=Ki,c=Li(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gg(N,"mousedown",d);gg(N,"keyup",d);gg(N,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ni=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Li().decorators.push(f)},Oi=function(a,b,c){for(var d=Li().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==N.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[n])||p&&0<=l[n].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&mb(e,g.callback())}}return e},Li=function(){var a=Zf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ti=/(.*?)\*(.*?)\*(.*)/,Ui=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Vi=/^(?:www\.|m\.|amp\.)+/,Wi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Xi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Zi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Ei=Ei||Fi();Gi=Gi||Di();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,n=m+2<h.length,t=h.charCodeAt(m),r=p?h.charCodeAt(m+1):0,u=n?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;n||(x=64,p||(y=64));l.push(Ei[v],Ei[w],Ei[y],Ei[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Yi(z),
z].join("*")},Yi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ii)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ii=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ii[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},aj=function(){return function(a){var b=ch(E.location.href),
c=b.search.replace("?",""),d=Yg(c,"_gl",!1,!0)||"";a.query=$i(d)||{};var e=ah(b,"fragment").match(Xi("_gl"));a.fragment=$i(e&&e[3]||"")||{}}},bj=function(a){var b=aj(),c=Li();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(mb(d,e.query),a&&mb(d,e.fragment));return d},$i=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ti.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Yi(h,p)){l=!0;break a}l=!1}if(l){for(var n={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)n[t[r]]=Hi(t[r+1]);return n}}}}catch(u){}};function cj(a,b,c,d){function e(p){var n=p,t=Xi(a).exec(n),r=n;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Wi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function dj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Oi(b,1,c),e=Oi(b,2,c),f=Oi(b,3,c);if(nb(d)){var g=Zi(d);c?ej("_gl",g,a):fj("_gl",g,a,!1)}if(!c&&nb(e)){var h=Zi(e);fj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],n=a;if(n.tagName){if("a"===n.tagName.toLowerCase()){fj(m,p,n,void 0);break a}if("form"===n.tagName.toLowerCase()){ej(m,p,n);break a}}"string"==typeof n&&cj(m,p,n,void 0)}}
function fj(a,b,c,d){if(c.href){var e=cj(a,b,c.href,void 0===d?!1:d);Kf.test(e)&&(c.href=e)}}
function ej(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=N.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=cj(a,b,c.action);Kf.test(m)&&(c.action=m)}}}
var Ji=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||dj(e,e.hostname)}}catch(g){}},Ki=function(a){try{if(a.action){var b=ah(ch(a.action),"host");dj(a,b)}}catch(c){}},gj=function(a,b,c,d){Mi();Ni(a,b,"fragment"===c?2:1,!!d,!1)},hj=function(a,b){Mi();Ni(a,[$g(E.location,"host",!0)],b,!0,!0)},ij=function(){var a=N.location.hostname,b=Ui.exec(N.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Vi,""),l=e.replace(Vi,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},jj=function(a,b){return!1===a?!1:a||b||ij()};var kj=/^\w+$/,lj=/^[\w-]+$/,mj=/^~?[\w-]+$/,nj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},oj=function(){if(!pg()||!zg())return!0;var a=xg("ad_storage");return null==a?!0:!!a},pj=function(a,b){yg("ad_storage")?oj()?a():Cg(a,"ad_storage"):b?zf("TAGGING",3):Bg(function(){pj(a,!0)},["ad_storage"])},sj=function(a){var b=[];if(!N.cookie)return b;var c=ei(a,N.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=qj(c[d]);e&&-1===B(b,e)&&b.push(e)}return rj(b)};
function tj(a){return a&&"string"==typeof a&&a.match(kj)?a:"_gcl"}
var vj=function(){var a=ch(E.location.href),b=ah(a,"query",!1,void 0,"gclid"),c=ah(a,"query",!1,void 0,"gclsrc"),d=ah(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Yg(e,"gclid",!1,void 0);c=c||Yg(e,"gclsrc",!1,void 0)}return uj(b,c,d)},uj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(lj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},wj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},yj=function(a){var b=vj();pj(function(){xj(b,a)})};
function xj(a,b,c){function d(l,m){var p=zj(l,e);p&&ni(p,m,f)}b=b||{};var e=tj(b.prefix);c=c||fb();var f=vi(b,c,!0);f.ya="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.ij?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Bj=function(a,b){var c=bj(!0);pj(function(){for(var d=tj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==nj[f]){var g=zj(f,d),h=c[g];if(h){var l=Math.min(Aj(h),fb()),m;b:{for(var p=l,n=ei(g,N.cookie,void 0,"ad_storage"),t=0;t<n.length;++t)if(Aj(n[t])>p){m=!0;break b}m=!1}if(!m){var r=vi(b,l,!0);r.ya="ad_storage";ni(g,h,r)}}}}xj(uj(c.gclid,c.gclsrc),b)})},zj=function(a,b){var c=nj[a];if(void 0!==c)return b+c},Aj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function qj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Cj=function(a,b,c,d,e){if(Pa(b)){var f=tj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=zj(a[l],f);if(m){var p=ei(m,N.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};pj(function(){gj(g,b,c,d)})}},rj=function(a){return a.filter(function(b){return mj.test(b)})},Dj=function(a,b){for(var c=tj(b.prefix),d={},e=0;e<a.length;e++)nj[a[e]]&&(d[a[e]]=nj[a[e]]);pj(function(){Va(d,function(f,g){var h=ei(c+g,N.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Aj(l),
p={};p[f]=[qj(l)];xj(p,b,m)}})})};function Ej(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Fj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(zg()){var c=vj();if(Ej(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);hj(function(){return d},3);hj(function(){var e={};return e._up="1",e},1)}}},Gj=function(){var a;if(oj()){for(var b=[],c=N.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ae:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].ae]||(g[b[h].ae]=[]),g[b[h].ae].push({timestamp:l[1],Fc:l[2]}))}a=g}else a={};return a};var Hj=/^\d+\.fls\.doubleclick\.net$/,Ij=!1;function Jj(a,b){yg(I.C)?Gg(I.C)?a():Cg(a,I.C):b?L(42):Ig(function(){Jj(a,!0)},[I.C])}function Kj(a){var b=ch(E.location.href),c=ah(b,"host",!1);if(c&&c.match(Hj)){var d=ah(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Lj(a,b,c){if("aw"==a||"dc"==a){var d=Kj("gcl"+a);if(d)return d.split(".")}var e=tj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Gg(I.C)&&c,g;g=vj()[a]||[];if(0<g.length)return f?["0"]:g}var h=zj(a,e);return h?sj(h):[]}
var Mj=function(a){var b=Kj("gac");if(b)return!Gg(I.C)&&a?"0":decodeURIComponent(b);var c=Gj(),d=[];Va(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Fc);g=rj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Oj=function(a,b){if(Ij)Nj(a,b,"dc");else{var c=vj().dc||[];Jj(function(){Ci(b);var d=xi[yi(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;mg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Ai(b)})}},Nj=function(a,b,c){var d=vj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!wj(h,c)||e.push({Fc:f,zf:h});!g||c&&"dc"!==c||e.push({Fc:g,zf:"ds"});Jj(function(){Ci(b);var l=xi[yi(b.prefix)],m=!1;if(l&&0<e.length)for(var p=R.joined_auid=R.joined_auid||{},n=0;n<e.length;n++){var t=e[n],r=t.Fc,u=t.zf,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+u;mg(w);
m=p[v]=!0}}null==a&&(a=m);a&&l&&Ai(b)})};var Pj=/[A-Z]+/,Qj=/\s/,Rj=function(a){if(q(a)&&(a=eb(a),!Qj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Tj=function(a){for(var b={},c=0;c<a.length;++c){var d=Rj(a[c]);d&&(b[d.id]=d)}Sj(b);var e=[];Va(b,function(f,g){e.push(g)});return e};
function Sj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uj=function(){var a=!1;return a};var Wj=function(a,b,c,d){return(2===Vj()||d||"http:"!=E.location.protocol?a:b)+c},Vj=function(){var a=bg(),b;if(1===a)a:{var c=Eh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=N.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var kk=function(a){return Gg(I.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=dh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},lk=function(){var a;if(!(a=Fh)){var b;if(!0===E._gtmdgs)b=!0;else{var c=Xf&&Xf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ya("1");return ai(1,100)<d?ai(2,2):-1},mk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var nk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ok={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},pk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},qk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var sk=function(a){var b;Rh("gtm.allowlist")&&L(52);b=Rh("gtm.allowlist");b||(b=Rh("gtm.whitelist"));b&&L(9);
var c=b&&ob(db(b),ok),d;Rh("gtm.blocklist")&&L(51);d=Rh("gtm.blocklist");d||(d=Rh("gtm.blacklist"));d||(d=Rh("tagTypeBlacklist"))&&L(3);d?L(8):d=[];rk()&&(d=db(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=B(db(d),"google")&&L(2);var e=
d&&ob(db(d),pk),f={};return function(g){var h=g&&g[Xd.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kh[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>B(c,h))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>B(c,l[n])){L(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var r=0<=B(e,h);if(r)t=r;else{var u=Ua(e,l||[]);u&&L(10);t=u}}var v=!m||t;v||!(0<=B(l,"sandboxedScripts"))||c&&-1!==B(c,"sandboxedScripts")||(v=Ua(e,qk));return f[h]=v}},rk=function(){return nk.test(E.location&&
E.location.hostname)};var tk={active:!0,isAllowed:function(){return!0}},uk=function(a){var b=R.zones;return b?b.checkState(ke.F,a):tk},vk=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var wk=function(){},xk=function(){};var yk=!1,zk=0,Ak=[];function Bk(a){if(!yk){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){yk=!0;for(var e=0;e<Ak.length;e++)O(Ak[e])}Ak.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function Ck(){if(!yk&&140>zk){zk++;try{N.documentElement.doScroll("left"),Bk()}catch(a){E.setTimeout(Ck,50)}}}var Dk=function(a){yk?a():Ak.push(a)};var Ek={},Fk={},Gk=function(a,b,c,d){if(!Fk[a]||Bh[b]||"__zone"===b)return-1;var e={};Fb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return Fk[a].tags.push(e)-1},Hk=function(a,b,c,d){if(Fk[a]){var e=Fk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ik(a){for(var b=Ek[a]||[],c=0;c<b.length;c++)b[c]();Ek[a]={push:function(d){d(ke.F,Fk[a])}}}
var Lk=function(a,b,c){Fk[a]={tags:[]};Na(b)&&Jk(a,b);c&&E.setTimeout(function(){return Ik(a)},Number(c));return Kk(a)},Jk=function(a,b){Ek[a]=Ek[a]||[];Ek[a].push(ib(function(){return O(function(){b(ke.F,Fk[a])})}))};function Kk(a){var b=0,c=0,d=!1;return{add:function(){c++;return ib(function(){b++;d&&b>=c&&Ik(a)})},$g:function(){d=!0;b>=c&&Ik(a)}}};var Mk=function(){function a(d){return!Oa(d)||0>d?0:d}if(!R._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Oa(Sh.get("gtm.start"))?Sh.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Hh-b)}}};var Qk={},Rk=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Sk=!1;
var Tk=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||L(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}Mk();return E[b]},Uk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Rk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Vk=function(a){};
var Xk=function(a){},Wk=function(){return E.GoogleAnalyticsObject||"ga"},Yk=function(a,b){return function(){var c=Rk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var cl=function(){return"&tc="+Md.filter(function(a){return a}).length},fl=function(){2022<=dl().length&&el()},hl=function(){gl||(gl=E.setTimeout(el,500))},el=function(){gl&&(E.clearTimeout(gl),gl=void 0);void 0===il||jl[il]&&!kl&&!ll||(ml[il]||nl.Oh()||0>=ol--?(L(1),ml[il]=!0):(nl.mi(),fg(dl()),jl[il]=!0,pl=ql=rl=ll=kl=""))},dl=function(){var a=il;if(void 0===a)return"";var b=Af("GTM"),c=Af("TAGGING");return[sl,jl[a]?"":"&es=1",tl[a],b?"&u="+b:"",c?"&ut="+c:"",cl(),kl,ll,rl?rl:"",ql,pl,"&z=0"].join("")},
ul=function(){return[Ih,"&v=3&t=t","&pid="+Sa(),"&rv="+ke.vc].join("")},vl="0.005000">Math.random(),sl=ul(),wl=function(){sl=ul()},jl={},kl="",ll="",pl="",ql="",rl="",il=void 0,tl={},ml={},gl=void 0,nl=function(a,b){var c=0,d=0;return{Oh:function(){if(c<a)return!1;fb()-d>=b&&(c=0);return c>=a},mi:function(){fb()-d>=b&&(c=0);c++;d=fb()}}}(2,1E3),ol=1E3,xl=function(a,b,c){if(vl&&!ml[a]&&b){a!==il&&(el(),il=a);var d,e=String(b[Xd.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;kl=kl?kl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Od[g]?"1":"2")+d;pl=pl?pl+"."+h:"&ti="+h;hl();fl()}},yl=function(a,b,c){if(vl&&!ml[a]){a!==il&&(el(),il=a);var d=c+b;ll=ll?ll+"."+d:"&epr="+d;hl();fl()}},zl=function(a,b,c){};
var Al=function(){return!1},Bl=function(){var a={};return function(b,c,d){}};function Cl(a,b,c,d){var e=Md[a],f=Dl(a,b,c,d);if(!f)return null;var g=Ud(e[Xd.ef],c,[]);if(g&&g.length){var h=g[0];f=Cl(h.index,{M:f,L:1===h.uf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Dl(a,b,c,d){function e(){if(f[Xd.Jg])h();else{var w=Vd(f,c,[]);var z=Gk(c.id,String(f[Xd.Qa]),Number(f[Xd.ff]),w[Xd.Kg]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=fb()-D;xl(c.id,Md[a],"5");Hk(c.id,z,"success",
F);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=fb()-D;xl(c.id,Md[a],"6");Hk(c.id,z,"failure",F);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;xl(c.id,f,"1");var C=function(){var F=fb()-D;xl(c.id,f,"7");Hk(c.id,z,"exception",F);A||(A=!0,h())};var D=fb();try{Td(w,c)}catch(F){C(F)}}}var f=Md[a],g=b.M,h=b.L,l=b.terminate;if(c.Id(f))return null;var m=Ud(f[Xd.hf],c,[]);if(m&&m.length){var p=m[0],n=Cl(p.index,{M:g,L:h,terminate:l},c,d);if(!n)return null;g=n;h=2===p.uf?l:n}if(f[Xd.af]||f[Xd.Mg]){var t=f[Xd.af]?Nd:c.Ci,r=g,u=h;if(!t[a]){e=ib(e);
var v=El(a,t,e);g=v.M;h=v.L}return function(){t[a](r,u)}}return e}function El(a,b,c){var d=[],e=[];b[a]=Fl(d,e,c);return{M:function(){b[a]=Gl;for(var f=0;f<d.length;f++)d[f]()},L:function(){b[a]=Hl;for(var f=0;f<e.length;f++)e[f]()}}}function Fl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Gl(a){a()}function Hl(a,b){b()};var Kl=function(a,b,c){for(var d=[],e=0;e<Md.length;e++)if(a[e]){var f=Md[e];var g=c.add();try{var h=Cl(e,{M:g,L:g,terminate:g},b,e);if(h){var l=d,m=l.push,p=e,n=f["function"];if(!n)throw"Error: No function name given for function call.";var t=Od[n];m.call(l,{Pf:p,If:t?t.priorityOverride||0:0,Dc:h})}else Il(e,b),g()}catch(u){g()}}c.$g();d.sort(Jl);for(var r=0;r<d.length;r++)d[r].Dc();return 0<d.length};
function Jl(a,b){var c,d=b.If,e=a.If;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Pf,h=b.Pf;f=g>h?1:g<h?-1:0}return f}function Il(a,b){if(!vl)return;var c=function(d){var e=b.Id(Md[d])?"3":"4",f=Ud(Md[d][Xd.ef],b,[]);f&&f.length&&c(f[0].index);xl(b.id,Md[d],e);var g=Ud(Md[d][Xd.hf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Ll=!1,Ql=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Ll)return!1;Ll=!0}var d=uk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=uk(Number.MAX_SAFE_INTEGER)}vl&&!ml[b]&&il!==b&&(el(),il=b,pl=kl="",tl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,hl());var f={id:b,name:c,Id:sk(d.isAllowed),Ci:[],Df:function(){L(6)},nf:Ml(b)},g=Lk(b,a.eventCallback,a.eventTimeout);Nl(b);
var h=fe(f);e&&(h=Ol(h));var l=Kl(h,f,g);"gtm.js"!==c&&"gtm.sync"!==c||Xk(ke.F);switch(c){case "gtm.init":L(19),l&&L(20)}return Pl(h,l)};function Ml(a){return function(b){vl&&(Jb(b)||zl(a,"input",b))}}
function Nl(a){Vh(a,"event",1);Vh(a,"ecommerce",1);Vh(a,"gtm");Vh(a,"eventModel");}function Ol(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ah[String(Md[c][Xd.Qa])]&&(b[c]=!0);return b}function Pl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Md[c]&&!Bh[String(Md[c][Xd.Qa])])return!0;return!1}function Rl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ch(""+c+b).href}}function Sl(a,b){return Tl()?Rl(a,b):void 0}function Tl(){var a=!1;return a};var Ul=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.g={};this.globalConfig={};this.M=function(){};this.L=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Vl=function(a){var b=new Ul;b.eventModel=a;return b},Wl=function(a,b){a.targetConfig=b;return a},Xl=function(a,b){a.containerConfig=b;return a},Yl=function(a,b){a.g=b;return a},Zl=function(a,b){a.globalConfig=b;return a},$l=function(a,b){a.M=b;return a},
am=function(a,b){a.setContainerTypeLoaded=b;return a},bm=function(a,b){a.getContainerTypeLoaded=b;return a},cm=function(a,b){a.L=b;return a};Ul.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.g[a])return this.g[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var dm=function(a){function b(e){Va(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Va(c,function(e){d.push(e)});return d};var em;if(3===ke.vc.length)em="g";else{var fm="G";em=fm}
var gm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:em,OPT:"o"},hm=function(a){var b=ke.F.split("-"),c=b[0].toUpperCase(),d=gm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ke.vc.length){var g="w";f="2"+g}else f="";return f+d+ke.vc+e};var im=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var jm=function(){return Of("iPhone")&&!Of("iPod")&&!Of("iPad")};Of("Opera");Of("Trident")||Of("MSIE");Of("Edge");!Of("Gecko")||-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")||Of("Trident")||Of("MSIE")||Of("Edge");-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")&&Of("Mobile");Of("Macintosh");Of("Windows");Of("Linux")||Of("CrOS");var km=pa.navigator||null;km&&(km.appVersion||"").indexOf("X11");Of("Android");jm();Of("iPad");Of("iPod");jm()||Of("iPad")||Of("iPod");Lf.toLowerCase().indexOf("kaios");var lm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var mm=function(){};var nm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},om=function(a,b){this.o=a;this.g=null;this.D={};this.U=0;this.J=void 0===b?500:b;this.s=null};oa(om,mm);
var qm=function(a){return"function"===typeof a.o.__tcfapi||null!=pm(a)};
om.prototype.addEventListener=function(a){var b={},c=Ff(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=nm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{rm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};om.prototype.removeEventListener=function(a){a&&a.listenerId&&rm(this,"removeEventListener",null,a.listenerId)};
var tm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=sm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&sm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?sm(a.purpose.legitimateInterests,
b)&&sm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},sm=function(a,b){return!(!a||!a[b])},rm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(pm(a)){um(a);var f=++a.U;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},pm=function(a){if(a.g)return a.g;a.g=lm(a.o,"__tcfapiLocator");return a.g},um=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},im(a.o,a.s))};var vm={1:0,3:0,4:0,7:3,9:3,10:3};function wm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var xm=wm("",550),ym=wm("",500);function zm(){var a=R.tcf||{};return R.tcf=a}
var Am=function(a,b){this.s=a;this.g=b;this.o=fb();var c="x";"function"===typeof E.__tcfapi?c="s":qm(this.s)?c="i":"function"===typeof E.__cmp?c="c":lm(E,"__cmpLocator")&&(c="d");this.g.type=c;},Bm=function(a){void 0===a.g.loadTime&&(a.g.loadTime=fb()-a.o);},Cm=function(a){
void 0!==a.g.loadTime&&(a.g.loadTime=0);},Im=function(){var a=zm(),b=new om(E,3E3),c=new Am(b,a);if((Dm()?!0===E.gtag_enable_tcf_support:!1!==E.gtag_enable_tcf_support)&&!a.active&&("function"===typeof E.__tcfapi||qm(b))){a.active=!0;a.Ub={};Em();var d=setTimeout(function(){Fm(a);Gm(a);d=null},ym);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Fm(a),Gm(a),Bm(c);else{var f;if(!1===e.gdprApplies)f=Hm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in vm)if(vm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var n=l;!1===n.gdprApplies?p=!0:(void 0===n.internalErrorState&&(n.internalErrorState=nm(n)),p="error"===n.cmpStatus||0!==n.internalErrorState||"loaded"===n.cmpStatus&&("tcloaded"===n.eventStatus||"useractioncomplete"===n.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:tm(l,"1",0):!1}else g[h]=tm(e,h,vm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Ub=f,Gm(a),Bm(c))}}),Cm(c)}catch(e){d&&(clearTimeout(d),d=null),Fm(a),Gm(a)}}};function Fm(a){a.type="e";a.tcString="tcunavailable";a.Ub=Hm()}function Em(){var a={};Eg((a.ad_storage="denied",a.wait_for_update=xm,a))}
var Dm=function(){var a=!1;a=!0;return a};function Hm(){var a={},b;for(b in vm)vm.hasOwnProperty(b)&&(a[b]=!0);return a}function Gm(a){var b={};Fg((b.ad_storage=a.Ub["1"]?"granted":"denied",b))}
var Jm=function(){var a=zm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Km=function(){var a=zm();return a.active?a.tcString||"":""},Lm=function(a){if(!vm.hasOwnProperty(String(a)))return!0;var b=zm();return b.active&&b.Ub?!!b.Ub[String(a)]:!0};var Mm=!1;function Nm(a){var b=String(E.location).split(/[?#]/)[0],c=ke.Wf||E._CONSENT_MODE_SALT;return a?c?String(bi(b+a+c)):"0":""}
function Om(a,b,c,d,e){function f(t){var r;R.reported_gclid||(R.reported_gclid={});r=R.reported_gclid;var u;u=Mm&&e&&(!zg()||Gg(I.C))?h+"."+(d.prefix||"_gcl")+(t?"gcu":"gcs"):h+(t?"gcu":"gcs");if(!r[u]){r[u]=!0;var v=[],w=function(C,D){D&&v.push(C+"="+encodeURIComponent(D))},y="https://www.google.com";if(zg()){var x=Gg(I.C);w("gcs",Hg());t&&w("gcu","1");R.dedupe_gclid||(R.dedupe_gclid=""+qi());w("rnd",R.dedupe_gclid);
if((!h||l&&"aw.ds"!==l)&&Gg(I.C)){var z=sj("_gcl_aw");w("gclaw",z.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",Pm(b,m));!x&&b&&(y="https://pagead2.googlesyndication.com")}w("gdpr_consent",Km());"1"===bj(!1)._up&&w("gtm_up","1");w("gclid",Pm(b,h));w("gclsrc",l);w("gtm",hm(!c));Mm&&e&&Gg(I.C)&&(Ci(d||{}),w("auid",xi[yi(d.prefix)]||""));var A=y+"/pagead/landing?"+v.join("&");mg(A)}}d=void 0===d?{}:
d;e=void 0===e?!0:e;var g=vj(),h=g.gclid||"",l=g.gclsrc,m=g.dclid||"",p=!a&&(!h||l&&"aw.ds"!==l?!1:!0),n=zg();if(p||n)n?Ig(function(){f();Gg(I.C)||Cg(function(t){return f(!0,t.pf)},I.C)},[I.C]):f()}function Pm(a,b){var c=a&&!Gg(I.C);return b&&c?"0":b}var Bn=function(){var a=!0;Lm(7)&&Lm(9)&&Lm(10)||(a=!1);var b=!0;b=!1;b&&!An()&&(a=!1);return a},An=function(){var a=!0;Lm(3)&&Lm(4)||(a=!1);return a};var Xn=!1;function Yn(){var a=R;return a.gcq=a.gcq||new Zn}
var $n=function(a,b,c){Yn().register(a,b,c)},ao=function(a,b,c,d){Yn().push("event",[b,a],c,d)},bo=function(a,b){Yn().push("config",[a],b)},co=function(a,b,c,d){Yn().push("get",[a,b],c,d)},eo=function(a){return Yn().getRemoteConfig(a)},fo={},go=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.o={};this.s=null;this.g=!1},ho=function(a,b,c,d,e){this.type=a;this.s=b;this.W=c||"";this.g=d;this.o=e},Zn=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},io=function(a,
b){var c=Rj(b);return a.D[c.containerId]=a.D[c.containerId]||new go},jo=function(a,b,c){if(b){var d=Rj(b);if(d&&1===io(a,b).status){io(a,b).status=2;var e={};vl&&(e.timeoutId=E.setTimeout(function(){L(38);hl()},3E3));a.push("require",[e],d.containerId);fo[d.containerId]=fb();if(Uj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Sl(c,g)||h;ag(l)}}}},ko=function(a,b,c,d){if(d.W){var e=io(a,d.W),f=e.s;if(f){var g=G(c),h=G(e.targetConfig[d.W]),l=G(e.containerConfig),m=G(e.o),p=G(a.o),n=Rh("gtm.uniqueEventId"),t=Rj(d.W).prefix,r=bm(am(cm($l(Zl(Yl(Xl(Wl(Vl(g),h),l),m),p),function(){yl(n,t,"2");
}),function(){yl(n,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{yl(n,t,"1");f(d.W,b,d.s,r)}catch(u){yl(n,t,"4");}}}};aa=Zn.prototype;
aa.register=function(a,b,c){var d=io(this,a);if(3!==d.status){d.s=b;d.status=3;if(c){d.o=c}var e=Rj(a),f=fo[e.containerId];if(void 0!==f){var g=R[e.containerId].bootstrap,h=e.prefix.toUpperCase();R[e.containerId]._spx&&(h=h.toLowerCase());var l=Rh("gtm.uniqueEventId"),m=h,p=fb()-g;if(vl&&!ml[l]){l!==il&&(el(),il=l);var n=m+"."+Math.floor(g-f)+"."+Math.floor(p);ql=
ql?ql+","+n:"&cl="+n}delete fo[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(fb()/1E3);jo(this,c,b[0][I.Pa]||this.o[I.Pa]);Xn&&c&&io(this,c).g&&(d=!1);this.g.push(new ho(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(fb()/1E3);0<this.g.length?this.g.splice(1,0,new ho(a,d,c,b,!1)):this.g.push(new ho(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Xn?!e.W||io(this,e.W).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==io(this,e.W).status&&!a){Xn&&this.g.push.apply(this.g,c);return}vl&&E.clearTimeout(e.g[0].timeoutId);break;case "set":Va(e.g[0],function(t,r){G(qb(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[I.nc];delete f[I.nc];var h=io(this,e.W),l=Rj(e.W),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.W]={});h.g&&g||ko(this,I.ka,f,e);h.g=!0;delete f[I.Db];m?G(f,h.containerConfig):G(f,h.targetConfig[e.W]);Xn&&(d=!0);break;case "event":ko(this,e.g[1],e.g[0],e);break;case "get":var p={},n=(p[I.Da]=e.g[0],p[I.Ca]=e.g[1],p);ko(this,I.Ma,n,e)}this.g.shift()}Xn&&(this.g.push.apply(this.g,c),d&&this.flush())};aa.getRemoteConfig=function(a){return io(this,a).o};function lo(a,b,c){};function mo(a,b,c,d){};function no(a){};var oo=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ig(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},po=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},qo=function(a,b,c){po(a)[b]=c},ro=function(a,b,c,d){var e=po(a),f=gb(e,b,d);e[b]=c(f)},so=function(a,b,c){var d=po(a);return gb(d,b,c)};var to={},uo=[];
var Bo=function(a,b){};

function Eo(a,b){};var Fo=/^\s*$/,Go,Ho=!1;
function So(a,b){}function To(a,b,c){};function Uo(a,b){
return!0};function Vo(a,b){var c;return c};function Wo(a){};function Xo(a){};var Yo=!1,Zo=[];function $o(){if(!Yo){Yo=!0;for(var a=0;a<Zo.length;a++)O(Zo[a])}}var ap=function(a){Yo?O(a):Zo.push(a)};function bp(a){H(this.o.g,["listener:!Fn"],arguments);kf(this,"process_dom_events","window","load");ap(Hb(a))};function cp(a,b){var c;var e=!1;var f=Gb(c,this.s,e);void 0===f&&void 0!==c&&L(45);return f};function dp(a){var b;var f=!1;var g=Gb(b,this.s,f);void 0===g&&void 0!==b&&L(45);return g};function ep(a,b){var c=null,d=!1;
return Gb(c,this.s,d)};function fp(a){var b;var h=!1;return Gb(b,this.s,h)};var gp=function(a){var b;return b};function hp(a,b){b=void 0===b?!0:b;var c;return c};function ip(a){var b=null;return b};function jp(a,b){var c;return c};function kp(a,b){var c;return c};function lp(a){var b="";return b};function mp(a,b){var c;return c};function np(a){var b="";return b};function op(){kf(this,"get_user_agent");return E.navigator.userAgent};function pp(a,b){};var qp={};
function rp(a,b,c,d){H(this.o.g,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);kf(this,"inject_script",a);var e=this.s,f=function(){b instanceof sb&&b.Ta(e)},g=function(){c instanceof sb&&c.Ta(e)};if(!d){ag(a,f,g);return}var h=d;qp[h]?(qp[h].onSuccess.push(f),qp[h].onFailure.push(g)):(qp[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=qp[h].onSuccess,m=0;m<l.length;m++)O(l[m]);l.push=function(p){O(p);return 0}},
g=function(){for(var l=qp[h].onFailure,m=0;m<l.length;m++)O(l[m]);qp[h]=null},ag(a,f,g));};var sp=function(){return!1},tp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function up(){};function vp(a){var b=void 0;return b};function wp(a,b){var c=!1;return c};function xp(){var a="";return a};function yp(){var a="";return a};function zp(a,b,c,d){d=void 0===d?!1:d;};function Ap(a,b,c){};function Bp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Cp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);for(var b=a.Nb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==I.he&&kf(this,"access_consent",e,"write")}Eg(Hb(a))};function Dp(a,b,c){H(this.o.g,["path:!string","value:?*","overrideExisting:?boolean"],arguments);kf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=E,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Hb(b,this.s,d),!0;return!1};function Ep(a,b,c){};var Fp=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Gp(a,b,c){var d=this;}
;var Hp={},Ip={};Hp.getItem=function(a){var b=null;return b};
Hp.setItem=function(a,b){};
Hp.removeItem=function(a){};Hp.clear=function(){};var Jp=function(a){var b;return b};function Kp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);var b=Hb(a),c;for(c in b)b.hasOwnProperty(c)&&kf(this,"access_consent",c,"write");Fg(b)};var jd=function(){var a=new vf;Uj()?(a.add("injectHiddenIframe",Ma),a.add("injectScript",Ma)):(a.add("injectHiddenIframe",pp),a.add("injectScript",rp));var b=Ap;a.add("Math",cf());a.add("TestHelper",xf());a.add("addEventCallback",no);a.add("aliasInWindow",Uo);a.add("assertApi",Ze);a.add("assertThat",$e);a.add("callInWindow",
Vo);a.add("callLater",Wo);a.add("copyFromDataLayer",cp);a.add("copyFromWindow",dp);a.add("createArgumentsQueue",ep);a.add("createQueue",fp);a.add("decodeUri",df);a.add("decodeUriComponent",ef);a.add("encodeUri",ff);a.add("encodeUriComponent",gf);a.add("fail",hf);a.add("fromBase64",gp,!("atob"in E));a.add("generateRandom",jf);a.add("getContainerVersion",lf);a.add("getCookieValues",hp);a.add("getQueryParameters",jp);a.add("getReferrerQueryParameters",kp);a.add("getReferrerUrl",lp);a.add("getTimestamp",
mf);a.add("getTimestampMillis",mf);a.add("getType",nf);a.add("getUrl",np);a.add("localStorage",tp,!sp());a.add("logToConsole",up);a.add("makeInteger",pf);a.add("makeNumber",qf);a.add("makeString",rf);a.add("makeTableMap",sf);a.add("mock",uf);a.add("queryPermission",wp);a.add("readCharacterSet",xp);a.add("readTitle",yp);a.add("sendPixel",b);a.add("setCookie",Bp);a.add("setInWindow",Dp);a.add("sha256",Gp);a.add("templateStorage",Hp);a.add("toBase64",Jp,!("btoa"in E));a.add("JSON",of(function(c){var d=this.s.g;d&&d.log.call(this,"error",c)}));

return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c))b:{var f=this.s.g;if(f){var g=f.Mb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var ed,oe;
function Lp(){var a=data.runtime||[],b=data.runtime_lines;ed=new cd;Mp();Hd=function(e,f,g){Np(f);var h=new xb;Va(f,function(r,u){var v=Gb(u);void 0===v&&void 0!==u&&L(44);h.set(r,v)});ed.g.g.D=be();var l={ah:pe(e),eventId:void 0!==g?g.id:void 0,Mb:function(){return e},log:function(){}};if(Al()){var m=Bl(),p=void 0,n=void 0;l.ja={o:{},g:function(r,u,v){1===u&&(p=r);7===u&&(n=v);m(r,u,v)},s:tf()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:r,source:n,message:v})}}}var t=
id(l,[e,h]);ed.g.g.D=void 0;t instanceof Ba&&"return"===t.g&&(t=t.o);return Hb(t)};kd();for(var c=0;c<a.length;c++){var d=a[c];if(!Pa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Zd(d,b[c]);ed.Dc(d)}}function Np(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Na(b)&&(a.gtmOnSuccess=function(){O(b)});Na(c)&&(a.gtmOnFailure=function(){O(c)})}
function Mp(){var a=ed;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;ld(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}function Op(a){void 0!==a&&Va(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kh[e]=Kh[e]||[];Kh[e].push(b)}})};var Pp="HA GF G UA AW DC".split(" "),Qp=!1,Rp={},Sp=!1;function Tp(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.bd]&&(c.eventCallback=b[I.bd]),b[I.ic]&&(c.eventTimeout=b[I.ic]));return c}function Up(){return Qp}
var Xp={config:function(a){var b;return b},consent:function(a){function b(){Up()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){L(39);var c=Lh(),d=a[1];"default"===d?(b(),Eg(a[2])):"update"===d&&(b(),Fg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&q(b)){var c;if(2<a.length){if(!Fb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Tp(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return Sp=!0,Up(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=oe.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Fb(a[1])?b=G(a[1]):3==a.length&&q(a[1])&&(b={},Fb(a[2])||Pa(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Yp={policy:!0};var Zp=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},aq=function(a){var b=$p(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var rq=function(a){if(qq(a))return a;this.g=a};rq.prototype.Gh=function(){return this.g};var qq=function(a){return!a||"object"!==Db(a)||Fb(a)?!1:"getUntrustedUpdateValue"in a};rq.prototype.getUntrustedUpdateValue=rq.prototype.Gh;var sq=[];var vq=!1,wq=function(a){return E["dataLayer"].push(a)},xq=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function yq(a){var b=a._clear;Va(a,function(d,e){"_clear"!==d&&(b&&Uh(d,void 0),Uh(d,e))});Gh||(Gh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Lh(),a["gtm.uniqueEventId"]=c,Uh("gtm.uniqueEventId",c));return Ql(a)}function zq(){var a=sq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Wa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Aq(){for(var a=!1;!vq&&0<sq.length;){
vq=!0;delete Oh.eventModel;Qh();var d=sq.shift();if(null!=d){var e=qq(d);if(e){var f=d;d=qq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Rh(l,1);if(Pa(m)||Fb(m))m=G(m);Ph[l]=m}}try{if(Na(d))try{d.call(Sh)}catch(y){}else if(Pa(d)){var p=d;if(q(p[0])){var n=p[0].split("."),t=n.pop(),r=p.slice(1),u=Rh(n.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Wa(d)){a:{var v=
d;if(v.length&&q(v[0])){var w=Xp[v[0]];if(w&&(!e||!Yp[v[0]])){d=w(v);break a}}d=void 0}if(!d){vq=!1;continue}}a=yq(d)||a}}finally{e&&Qh(!0)}}vq=!1}return!a}function Bq(){var a=Aq();try{Zp(E["dataLayer"],ke.F)}catch(b){}return a}
var Dq=function(){var a=Zf("dataLayer",[]),b=Zf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Dk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ap(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<R.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new rq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);sq.push.apply(sq,e);if(300<
this.length)for(L(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Aq()&&h};var d=a.slice(0);sq.push.apply(sq,d);Cq()&&O(Bq)},Cq=function(){var a=!0;return a};var Eq={};Eq.oc=new String("undefined");
var Fq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Eq.oc?b:a[d]);return c.join("")}};Fq.prototype.toString=function(){return this.g("undefined")};Fq.prototype.valueOf=Fq.prototype.toString;Eq.Pg=Fq;Eq.sd={};Eq.sh=function(a){return new Fq(a)};var Gq={};Eq.ni=function(a,b){var c=Lh();Gq[c]=[a,b];return c};Eq.sf=function(a){var b=a?0:1;return function(c){var d=Gq[c];if(d&&"function"===typeof d[b])d[b]();Gq[c]=void 0}};Eq.Nh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Eq.gi=function(a){if(a===Eq.oc)return a;var b=Lh();Eq.sd[b]=a;return'google_tag_manager["'+ke.F+'"].macro('+b+")"};Eq.Yh=function(a,b,c){a instanceof Eq.Pg&&(a=a.g(Eq.ni(b,c)),b=Ma);return{Gd:a,M:b}};var Hq=["input","select","textarea"],Iq=["button","hidden","image","reset","submit"],Jq=function(a){var b=a.tagName.toLowerCase();return!Qa(Hq,function(c){return c===b})||"input"===b&&Qa(Iq,function(c){return c===a.type.toLowerCase()})?!1:!0},Kq=function(a){return a.form?a.form.tagName?a.form:N.getElementById(a.form):lg(a,["form"],100)},Lq=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Jq(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Mq=!!E.MutationObserver,Nq=void 0,Oq=function(a){if(!Nq){var b=function(){var c=N.body;if(c)if(Mq)(new MutationObserver(function(){for(var e=0;e<Nq.length;e++)O(Nq[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gg(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<Nq.length;e++)O(Nq[e])}))})}};Nq=[];N.body?b():O(b)}Nq.push(a)};
var Zq=function(a,b,c){function d(){var g=a();f+=e?(fb()-e)*g.playbackRate/1E3:0;e=fb()}var e=0,f=0;return{createEvent:function(g,h,l){var m=a(),p=m.tf,n=void 0!==l?Math.round(l):void 0!==h?Math.round(m.tf*h):Math.round(m.th),t=void 0!==h?Math.round(100*h):0>=p?0:Math.round(n/p*100),r=N.hidden?!1:.5<=Qg(c);d();var u=oo(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=g;u["gtm.videoUrl"]=m.url;u["gtm.videoTitle"]=m.title;u["gtm.videoDuration"]=Math.round(p);u["gtm.videoCurrentTime"]=
Math.round(n);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=r;return u},ri:function(){e=fb()},vd:function(){d()}}};var $q=E.clearTimeout,ar=E.setTimeout,T=function(a,b,c){if(Uj()){b&&O(b)}else return ag(a,b,c)},br=function(){return new Date},cr=function(){return E.location.href},dr=function(a){return ah(ch(a),"fragment")},er=function(a){return bh(ch(a))},fr=function(a,b){return Rh(a,b||2)},gr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=wq(a)):d=wq(a);return d},hr=function(a,b){E[a]=b},X=function(a,b,c){b&&
(void 0===E[a]||c&&!E[a])&&(E[a]=b);return E[a]},ir=function(a,b,c){return ei(a,b,void 0===c?!0:!!c)},jr=function(a,b,c){return 0===ni(a,b,c)},kr=function(a,b){if(Uj()){b&&O(b)}else cg(a,b)},lr=function(a){return!!so(a,"init",!1)},mr=function(a){qo(a,"init",!0)},nr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Eh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(Wj("https://","http://",c))},or=function(a,
b){var c=a[b];return c},pr=function(a,b,c){vl&&(Jb(a)||zl(c,b,a))};
var qr=Eq.Yh;function Nr(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Or=new Ta;function Pr(a,b){function c(g){var h=ch(g),l=ah(h,"protocol"),m=ah(h,"host",!0),p=ah(h,"port"),n=ah(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Qr(a){return Rr(a)?1:0}
function Rr(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Pa(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(Qr(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Nr(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=B(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var n=String(c)+p,t=Or.get(n);t||(t=new RegExp(c,p),Or.set(n,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Pr(b,c)}return!1};var Sr=encodeURI,Y=encodeURIComponent,Tr=fg;var Ur=function(a,b){if(!a)return!1;var c=ah(ch(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Vr=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Hs=null,Is=[],Js=0,Ks=null;function Ls(a){if(!E.MutationObserver)return!1;try{return Hs||(Hs=new MutationObserver(Ms),Hs.observe(N.documentElement,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),Js=fb()),Is.push(a),!0}catch(b){return!1}}function Ms(){var a=fb()-Js;0<=a?(Ks&&(E.clearTimeout(Ks),Ks=null),Ns()):Ks||(Ks=E.setTimeout(function(){Ns();Ks=null},0-a))}
function Ns(){Js=fb();var a=Is;Is=[];for(var b=fa(a),c=b.next();!c.done;c=b.next()){var d=c.value;d()}Hs&&(Hs.takeRecords(),Is.length||(Hs&&(Hs.disconnect(),Hs=null),Ks&&(E.clearTimeout(Ks),Ks=null)))};function zt(){return E.gaGlobal=E.gaGlobal||{}}var At=function(){var a=zt();a.hid=a.hid||Sa();return a.hid},Bt=function(a,b){var c=zt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var iu=window,ju=document,ku=function(a){var b=iu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===iu["ga-disable-"+a])return!0;try{var c=iu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ci("AMP_TOKEN",String(ju.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ju.getElementById("__gaOptOutExtension")?!0:!1};var lu={};function nu(a){delete a.eventModel[I.Db];pu(a.eventModel)}
var pu=function(a){Va(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.ra]||{};Va(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var su=function(a,b,c){ao(b,c,a)},tu=function(a,b,c){ao(b,c,a,!0)},Au=function(a,b){};
function uu(a,b){}var Z={h:{}};
Z.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.i="gaawc";Z.__gaawc.m=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Vr(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(I.ra)||b.vtp_userProperties){var e=d[I.ra]||{};G(Vr(b.vtp_userProperties,"name","value"),e);d[I.ra]=e}a(d,I.Re,function(f){return cb(f)});a(d,I.Te,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;bo(d,c);O(b.vtp_gtmOnSuccess)})}();
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];p.test(A[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var A=Pg(),C=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+C,z);return{zd:x,Ad:z}}}function d(){r=X("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,A,C){var D=l(z),F={},J;for(J in D){F.Ya=J;if(D.hasOwnProperty(F.Ya)){var Q=Number(F.Ya);x<Q||(gr({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[F.Ya].join(",")}),ro("sdl",z,function(W){return function(ba){delete ba[W.Ya];return ba}}(F),{}))}F={Ya:F.Ya}}}function f(){var x=y(),z=x.zd,A=x.Ad,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,"horiz.pix",
n.sc,t.Ue);e(C,"horiz.pct",n.qc,t.Ue);e(A,"vert.pix",n.sc,t.jf);e(D,"vert.pct",n.qc,t.jf);qo("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var A=0,C=!1,D=function(){C?A=ar(D,x):(A=0,f(),lr("sdl")&&!a()&&(hg(r,"scroll",F),hg(r,"resize",F),qo("sdl","init",!1)));C=!1},F=function(){z&&y();A?C=!0:(A=ar(D,x),qo("sdl","pending",!0))};return F}function h(x,z,A){if(z){var C=b(String(x));ro("sdl",A,function(D){for(var F=0;F<C.length;F++){var J=
String(C[F]);D.hasOwnProperty(J)||(D[J]=[]);D[J].push(z)}return D},{})}}function l(x){return so("sdl",x,{})}function m(x){O(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,J=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case n.sc:h(A,z,"horiz.pix");break;case n.qc:h(C,z,"horiz.pct")}switch(D){case n.sc:h(F,z,"vert.pix");break;case n.qc:h(J,
z,"vert.pct")}lr("sdl")?so("sdl","pending")||(w||(d(),w=!0),O(function(){return f()})):(d(),w=!0,v&&(mr("sdl"),qo("sdl","pending",!0),O(function(){f();if(a()){var Q=g();gg(r,"scroll",Q);gg(r,"resize",Q)}else qo("sdl","init",!1)})))}var p=/^\s*$/,n={qc:"PERCENT",sc:"PIXELS"},t={jf:"vertical",Ue:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):ap(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");var d=c&&c.e&&c.e(b);pr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.h.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.i="sp";Z.__sp.m=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=X("google_trackConversion");if(Na(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Vr(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:hm()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Km();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){T(b,d,c)};zg()?Ig(function(){Gg(I.C)?e():Cg(e,I.C)},[I.C]):(Mk(),e())})}();Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.i="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){pr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){return String(Wh(a.vtp_gtmEventId,"event"))})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=fr("gtm.referrer",1)||N.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ah(ch(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):er(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=oo(c,"gtm.click");gr(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!lr("cl")){var c=X("document");gg(c,"click",a,!0);mr("cl")}O(b.vtp_gtmOnSuccess)})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.i="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return ir(a.vtp_name,fr("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,n,t){if(!q(t))throw d(p,{},"Key must be a string.");if("read"===n){if(-1<B(e,t))return}else if("write"===n){if(-1<B(f,t))return}else if("readwrite"===n){if(-1<B(f,t)&&-1<B(e,t))return}else if("execute"===n){if(-1<B(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+n);throw d(p,{},"Prohibited "+n+" on global variable: "+
t+".");},P:a}})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:fr("gtm.url",1))||cr();var d=b[a("vtp_component")];if(!d||"URL"==d)return er(String(c));var e=ch(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Pa(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var n=ah(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){f=n;break a}}f=void 0}else f=ah(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=fr(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;pr(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.tl=["google"],function(){function a(b){return function(){if(b.Ld&&b.Md>=b.Ld)b.Hd&&X("self").clearInterval(b.Hd);else{b.Md++;var c=br().getTime();gr({event:b.S,"gtm.timerId":b.Hd,"gtm.timerEventNumber":b.Md,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Ld,"gtm.timerStartTime":b.Of,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Of,"gtm.triggers":b.Fi})}}}(function(b){Z.__tl=b;Z.__tl.i="tl";Z.__tl.m=!0;Z.__tl.priorityOverride=0})(function(b){O(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{S:b.vtp_eventName,Md:0,interval:Number(b.vtp_interval),Ld:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Fi:String(b.vtp_uniqueTriggerId||"0"),Of:br().getTime()};c.Hd=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.h.ua=["google"],function(){function a(n){return Gg(n)}function b(n,t){if(zg()&&!e[n]){var r=function(){var u=Rk(),v="gtm"+Lh(),w=m(t),y={name:v};l(w,y,!0);u("create",n,y);u(function(){u.remove(v)})};Cg(r,I.K);Cg(r,I.C);e[n]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(n,t,r){var u=0;if(n)for(var v in n)if(!h[v]&&n.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?cb(n[v]):n[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},m=function(n){var t={};n.vtp_gaSettings&&G(Vr(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);G(Vr(n.vtp_fieldsToSet,"fieldName","value"),t);Gg(I.K)||(t.storage="none");Gg(I.C)||(t.allowAdFeatures=!1,t.storeGac=!1);Bn()||(t.allowAdFeatures=!1);An()||(t.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(t._x_19=n.vtp_transportUrl);
return t},p=function(n){function t(va,U){void 0!==U&&F("set",va,U)}var r={},u={},v={},w={};if(n.vtp_gaSettings){var y=n.vtp_gaSettings;G(Vr(y.vtp_contentGroup,"index","group"),u);G(Vr(y.vtp_dimension,"index","dimension"),v);G(Vr(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;n=G(n,x)}G(Vr(n.vtp_contentGroup,"index","group"),u);G(Vr(n.vtp_dimension,"index","dimension"),v);G(Vr(n.vtp_metric,"index","metric"),w);var z=m(n),A=Tk(n.vtp_functionName);if(Na(A)){var C="",D="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(D=n.vtp_trackerName,C=D+"."):(D="gtm"+Lh(),C=D+".");var F=function(va){var U=[].slice.call(arguments,0);U[0]=C+U[0];A.apply(window,U)},J=function(va,U){return void 0===U?U:va(U)},Q=function(va,U){if(U)for(var Za in U)U.hasOwnProperty(Za)&&
F("set",va+Za,U[Za])},W=function(){var va={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},U={},Za=(U[I.Xc]="click",U[I.Aa]="detail",U[I.$a]="add",U[I.ab]="remove",U[I.La]="checkout",U[I.oa]="purchase",U[I.cb]="refund",U),oc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Bc=function(bb,Ra){for(var lb in bb)va.hasOwnProperty(lb)&&(bb[Ra]=bb[Ra]||{},bb[Ra].actionField=bb[Ra].actionField||{},bb[Ra].actionField[va[lb]]=bb[lb])},jb=function(bb){for(var Ra=[],lb={},ub=0;ub<bb.length;lb={rb:lb.rb},ub++)lb.rb={},Va(bb[ub],function(Ub){return function(Ec,hd){oc.hasOwnProperty(Ec)?Ub.rb[oc[Ec]]=hd:Ub.rb[Ec]=hd}}(lb)),Ra.push(lb.rb);return Ra},kb=function(bb,Ra,lb){if(!Fb(Ra))return!1;
for(var ub=gb(Object(Ra),lb,[]),Ub=0;ub&&Ub<ub.length;Ub++)F(bb,ub[Ub]);return!!ub&&0<ub.length},V;if(n.vtp_useEcommerceDataLayer){var $a=!1;n.vtp_useGA4SchemaForEcommerce&&(V=Wh(n.vtp_gtmEventId,"eventModel"),$a=!!V);$a||(V=fr("ecommerce",1))}else n.vtp_ecommerceMacroData&&(V=n.vtp_ecommerceMacroData.ecommerce,!V&&n.vtp_useGA4SchemaForEcommerce&&
(V=n.vtp_ecommerceMacroData));if(!Fb(V))return;V=Object(V);if(n.vtp_useGA4SchemaForEcommerce){V=G(V);V.currencyCode=V.currencyCode||V.currency;var ab=String(Wh(n.vtp_gtmEventId,"event"));if("view_item_list"===ab&&!V.impressions&&V.items)V.impressions=jb(V.items);else if("view_promotion"===ab&&!V.promoView&&V.items)V.promoView={},V.promoView.promotions=jb(V.items);else if("select_promotion"===ab&&!V.promoClick)V.items&&(V.promoClick={},V.promoClick.promotions=jb(V.items)),Bc(V,"promoClick");else if(Za.hasOwnProperty(ab)){var fd=
Za[ab];V[fd]||(V.items&&(V[fd]={},V[fd].products=jb(V.items)),Bc(V,fd))}}var Ge=gb(z,"currencyCode",V.currencyCode);void 0!==Ge&&F("set","&cu",Ge);kb("ec:addImpression",V,"impressions");if(kb("ec:addPromo",V[V.promoClick?"promoClick":"promoView"],"promotions")&&V.promoClick){F("ec:setAction","promo_click",V.promoClick.actionField);return}for(var Cc="detail checkout checkout_option click add remove purchase refund".split(" "),He="refund purchase remove checkout checkout_option add click detail".split(" "),
Dc=0;Dc<Cc.length;Dc++){var Id=V[Cc[Dc]];if(Id){kb("ec:addProduct",Id,"products");F("ec:setAction",Cc[Dc],Id.actionField);if(vl)for(var gd=0;gd<He.length;gd++){var Ie=V[He[gd]];if(Ie){Ie!==Id&&L(13);break}}break}}},ba={name:D};l(z,ba,!0);var qa=n.vtp_trackingId||r.trackingId;A("create",qa,ba);F("set","&gtm",hm(!0));t("&tc",zm().type),t("&tct",Jm());
zg()&&(F("set","&gcs",Hg()),b(qa,n));z._x_19&&(null==Yf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Yk(D,String(z._x_20)))));n.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(va,U){void 0!==n[U]&&F("set",va,n[U])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",w);var P={};l(z,P,!1)&&F("set",P);var K;
n.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var va=z&&z.hitCallback;Na(va)&&va();n.vtp_gtmOnSuccess()});if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(F("require","ec","ec.js"),W());var M={hitType:"event",eventCategory:String(n.vtp_eventCategory||r.category),eventAction:String(n.vtp_eventAction||r.action),eventLabel:J(String,n.vtp_eventLabel||r.label),eventValue:J(Ya,n.vtp_eventValue||
r.value)};l(K,M,!1);F("send",M);}else if("TRACK_SOCIAL"==n.vtp_trackType){}else if("TRACK_TRANSACTION"==n.vtp_trackType){}else if("TRACK_TIMING"==
n.vtp_trackType){}else if("DECORATE_LINK"==n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&(F("require","ec","ec.js"),W());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var Pb=
"_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:Pb})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var fc="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:fc})}K?F("send","pageview",K):F("send","pageview");n.vtp_autoLinkDomains&&Uk(C,n.vtp_autoLinkDomains,!!n.vtp_useHashAutoLink,!!n.vtp_decorateFormsAutoLink);
cb(z.urlPassthrough)&&Vk(C)}if(!c){var hb=n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(hb="internal/"+hb);c=!0;var Xa=Sl(z._x_19,"/analytics.js"),gc=Wj("https:","http:","//www.google-analytics.com/"+hb,z&&!!z.forceSSL);T("analytics.js"===hb&&Xa?Xa:gc,function(){var va=Rk();va&&va.loaded||n.vtp_gtmOnFailure();},
n.vtp_gtmOnFailure)}}else O(n.vtp_gtmOnFailure)};(function(n){Z.__ua=n;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(n){Ig(function(){p(n)},[I.K,I.C])})}();


Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(Qe(ch(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},P:a}})}();


Z.h.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return N.getElementById(u)?a():u}function b(u,v){if(!u)return!1;for(var w=0;w<p.length;w++)if(0<=u.indexOf("//"+p[w]+"/"+v))return!0;return!1}function c(u,v){var w=u.getAttribute("src");if(b(w,"embed/")){if(0<w.indexOf("enablejsapi=1"))return!0;if(v){var y=u.setAttribute,x;var z=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))x=w+z+"enablejsapi=1";else{if(!t){var A=X("document");t=A.location.protocol+"//"+A.location.hostname;
A.location.port&&(t+=":"+A.location.port)}x=w+z+"enablejsapi=1&origin="+encodeURIComponent(t)}y.call(u,"src",x);return!0}}return!1}function d(u,v){if(!u.getAttribute("data-gtm-yt-inspected-"+v.be)&&(u.setAttribute("data-gtm-yt-inspected-"+v.be,"true"),c(u,v.xf))){u.id||(u.id=a());var w=X("YT"),y=w.get(u.id);y||(y=new w.Player(u.id));var x=f(y,v),z={},A;for(A in x)z.qb=A,x.hasOwnProperty(z.qb)&&y.addEventListener(z.qb,function(C){return function(D){return x[C.qb](D.data)}}(z)),z={qb:z.qb}}}function e(u){O(function(){function v(){for(var y=
w.getElementsByTagName("iframe"),x=y.length,z=0;z<x;z++)d(y[z],u)}var w=X("document");v();Oq(v)})}function f(u,v){var w,y;function x(){ba=Zq(function(){return{url:K,title:M,tf:P,th:u.getCurrentTime(),playbackRate:da}},v.be,u.getIframe());P=0;M=K="";da=1;return z}function z(ra){switch(ra){case n.PLAYING:P=Math.round(u.getDuration());K=u.getVideoUrl();if(u.getVideoData){var S=u.getVideoData();M=S?S.title:""}da=u.getPlaybackRate();v.mh?gr(ba.createEvent("start")):ba.vd();qa=l(v.ii,v.hi,u.getDuration());
return A(ra);default:return z}}function A(){ja=u.getCurrentTime();ca=br().getTime();ba.ri();W();return C}function C(ra){var S;switch(ra){case n.ENDED:return F(ra);case n.PAUSED:S="pause";case n.BUFFERING:var wa=u.getCurrentTime()-ja;S=1<Math.abs((br().getTime()-ca)/1E3*da-wa)?"seek":S||"buffering";u.getCurrentTime()&&(v.lh?gr(ba.createEvent(S)):ba.vd());Q();return D;case n.UNSTARTED:return x(ra);default:return C}}function D(ra){switch(ra){case n.ENDED:return F(ra);case n.PLAYING:return A(ra);case n.UNSTARTED:return x(ra);
default:return D}}function F(){for(;y;){var ra=w;$q(y);ra()}v.kh&&gr(ba.createEvent("complete",1));return x(n.UNSTARTED)}function J(){}function Q(){y&&($q(y),y=0,w=J)}function W(){if(qa.length&&0!==da){var ra=-1,S;do{S=qa[0];if(S.Ua>u.getDuration())return;ra=(S.Ua-u.getCurrentTime())/da;if(0>ra&&(qa.shift(),0===qa.length))return}while(0>ra);w=function(){y=0;w=J;0<qa.length&&qa[0].Ua===S.Ua&&(qa.shift(),gr(ba.createEvent("progress",S.Gf,S.Kf)));W()};y=ar(w,1E3*ra)}}var ba,qa=[],P,K,M,da,ja,ca,Da=x(n.UNSTARTED);
y=0;w=J;return{onStateChange:function(ra){Da=Da(ra)},onPlaybackRateChange:function(ra){ja=u.getCurrentTime();ca=br().getTime();ba.vd();da=ra;Q();W()}}}function g(u){for(var v=u.split(","),w=v.length,y=[],x=0;x<w;x++){var z=parseInt(v[x],10);isNaN(z)||100<z||0>z||y.push(z/100)}y.sort(function(A,C){return A-C});return y}function h(u){for(var v=u.split(","),w=v.length,y=[],x=0;x<w;x++){var z=parseInt(v[x],10);isNaN(z)||0>z||y.push(z)}y.sort(function(A,C){return A-C});return y}function l(u,v,w){var y=
u.map(function(A){return{Ua:A,Kf:A,Gf:void 0}});if(!v.length)return y;var x=v.map(function(A){return{Ua:A*w,Kf:void 0,Gf:A}});if(!y.length)return x;var z=y.concat(x);z.sort(function(A,C){return A.Ua-C.Ua});return z}function m(u){var v=!!u.vtp_captureStart,w=!!u.vtp_captureComplete,y=!!u.vtp_capturePause,x=g(u.vtp_progressThresholdsPercent+""),z=h(u.vtp_progressThresholdsTimeInSeconds+""),A=!!u.vtp_fixMissingApi;if(v||w||y||x.length||z.length){var C={mh:v,kh:w,lh:y,hi:x,ii:z,xf:A,be:void 0===u.vtp_uniqueTriggerId?
"":u.vtp_uniqueTriggerId},D=X("YT"),F=function(){e(C)};O(u.vtp_gtmOnSuccess);if(D)D.ready&&D.ready(F);else{var J=X("onYouTubeIframeAPIReady");hr("onYouTubeIframeAPIReady",function(){J&&J();F()});O(function(){for(var Q=X("document"),W=Q.getElementsByTagName("script"),ba=W.length,qa=0;qa<ba;qa++){var P=W[qa].getAttribute("src");if(b(P,"iframe_api")||b(P,"player_api"))return}for(var K=Q.getElementsByTagName("iframe"),M=K.length,da=0;da<M;da++)if(!r&&c(K[da],C.xf)){T("https://www.youtube.com/iframe_api");
r=!0;break}})}}else O(u.vtp_gtmOnSuccess)}var p=["www.youtube.com","www.youtube-nocookie.com"],n={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,r=!1;(function(u){Z.__ytl=u;Z.__ytl.i="ytl";Z.__ytl.m=!0;Z.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?m(u):Dk(function(){m(u)})})}();


Z.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){Z.__gclidw=c;Z.__gclidw.i="gclidw";Z.__gclidw.m=!0;Z.__gclidw.priorityOverride=100})(function(c){O(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||ij())&&Bj(a,l));yj(l);Dj(["aw","dc"],l);b?Nj(h,l):Oj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Cj(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var n=fr(I.R);Om(!1,void 0!=
n&&!1!==n,void 0,l,!0);c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Fj()});}();


Z.h.aev=["google"],function(){function a(r,u){var v=Wh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(r,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(cr());Pa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!Ur(r,w)}function e(r){m.test(r)||(r="http://"+r);return ah(ch(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return ig(r,"value");case "button":return jg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Jq(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&ig(w,u)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.i="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,jg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=ch(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=ah(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var F=r.vtp_attribute,J=a(u,"element");D=J&&ig(J,F)||v||""}return D;case "MD":var Q=r.vtp_mdValue,W=b(u,"MD",Vq);return Q&&W?Yq(W,Q)||v:W||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ba=c(u,w,v);pr(ba,"aev",r.vtp_gtmEventId);return ba}})}();Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[Xd.Qa]=null;c[Xd.Hg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:cr()}function b(f,g){gg(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:er(l),N:dr(l)})})}function c(f,g){gg(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:er(l),N:dr(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Na(m))try{l[f]=function(p,n,t){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:er(cr()),
N:dr(cr())})}}catch(p){}}function e(){var f={source:null,state:X("history").state||null,url:er(cr()),N:dr(cr())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.N!=g.N){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.N,"gtm.newUrlFragment":g.N,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;gr(m)}}}(function(f){Z.__hl=f;Z.__hl.i="hl";Z.__hl.m=!0;Z.__hl.priorityOverride=
0})(function(f){var g=X("self");if(!lr("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);mr("hl")}O(f.vtp_gtmOnSuccess)})}();
Z.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=X("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.i="awct";Z.__awct.m=!0;Z.__awct.priorityOverride=
0})(function(g){function h(y,x,z){return"DATA_LAYER"===y?fr(z):g[x]}function l(){u("tc",zm().type),u("tct",Jm());u("gdpr_consent",Km());}function m(){var y=[];return y}function p(y){var x=!0,z=[];if(y){z=m();}x&&b.push(n)}Mk();var n={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,
google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:hm()};n.google_gtm_experiments={capi:!0};g.vtp_rdp&&(n.google_restricted_data_processing=!0);void 0!=fr(I.R)&&!1!==fr(I.R)&&(n.google_gtm_url_processor=function(y){return y=kk(y)});var t=function(y){return function(x,
z,A){var C=h(y,z,A);C&&(n[x]=C)}},r=t("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(r=t(g.vtp_productReportingDataSource),r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items",
"vtp_items","items"),n.google_conversion_items&&n.google_conversion_items.map&&(n.google_conversion_items=n.google_conversion_items.map(function(y){return{value:y.price,quantity:y.quantity,item_id:y.id}})));var u=function(y,x){void 0!==x&&((n.google_additional_conversion_params=n.google_additional_conversion_params||{})[y]=x)},v=function(y){return function(x,z,A,C){var D=h(y,z,A);C(D)&&u(x,D)}};(function(){if(!g.vtp_enableShippingData)return;u("delopc",
g.vtp_deliveryPostalCode);u("oedeld",g.vtp_estimatedDeliveryDate);u("delc",g.vtp_deliveryCountry);u("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var y=h(g.vtp_productReportingDataSource,"vtp_items","items");u("iedeld",mk(y))}})();g.vtp_transportUrl&&(n.google_transport_url=g.vtp_transportUrl);var w=Sl(g.vtp_transportUrl,"/pagead/conversion_async.js");w||(w=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(r=v(g.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(y){return void 0!=y&&""!==y}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(y){return void 0!=y&&""!==y}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(n.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),n.google_read_gcl_cookie_opt_out=
!1):n.google_read_gcl_cookie_opt_out=!0;"1"===bj(!1)._up&&u("gtm_up","1");l();(function(){zg()?Ig(function(){l();var y=Gg(I.C),x=!y&&void 0!=fr(I.R)&&!1!==fr(I.R);!g.vtp_transportUrl&&x&&(n.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",Hg());p(y);y||Cg(function(){l();n=G(n);!g.vtp_transportUrl&&n.google_transport_url&&delete n.google_transport_url;u("gcs",Hg());u("gcu","1");p(!0)},I.C)},[I.C]):p(!0)})();a||(a=!0,T(w,f(),e(w)))})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.i="remm";Z.__remm.m=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}pr(f,"remm",a.vtp_gtmEventId);return f})}();
Z.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.i="baut";Z.__baut.m=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=X(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{T("//bat.bing.com/bat.js",function(){var g=Ef(X("UET"),{ti:b.vtp_tagId,q:d});E[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){O(b.vtp_gtmOnFailure)}})}();
Z.h.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.i="smm";Z.__smm.m=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Vr(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;pr(d,"smm",a.vtp_gtmEventId);return d})}();



Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.i="paused";Z.__paused.m=!0;Z.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();

Z.h.zone=[],function(){function a(p){for(var n=p.vtp_boundaries||[],t=0;t<n.length;t++)if(!n[t])return!1;return!0}function b(p){var n=ke.F,t=n+":"+p.vtp_gtmTagId,r=fr("gtm.uniqueEventId")||0,u=vk(function(){return new g}),v=a(p),w=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(D){return D.typeId}):null;w=w&&ob(w,f);if(u.registerZone(t,r,v,w))for(var y=p.vtp_childContainers.map(function(D){return D.publicId}),x=0;x<y.length;x++){var z=String(y[x]);if(u.registerChild(z,n,t)){var A=
0!==z.indexOf("GTM-");if(A){var C=function(D,F){gr(arguments)};C("js",new Date);m?(C("config",z),l||nr(z,A)):(R.addTargetToGroup(z),bo({},z))}else nr(z,A)}}}var c={active:!1,isAllowed:function(){return!1},Ph:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Ph:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(p,n){var t=
this.g[p];if(!t)return d;var r=this.checkState(t.Ff,n);if(!r.active)return c;for(var u=[],v=0;v<t.ee.length;v++){var w=this.o[t.ee[v]];w.Qb(n)&&u.push(w)}return u.length?{active:!0,isAllowed:function(y,x){x=x||[];var z=r.isAllowed;if(!z(y,x))return!1;for(var A=0;A<u.length;++A)if(u[A].isAllowed(y,x))return!0;return!1}}:c};g.prototype.unregisterChild=function(p){delete this.g[p]};g.prototype.registerZone=function(p,n,t,r){var u=this.o[p];if(u)return u.s(n,t),!1;if(!t)return!1;this.o[p]=new h(n,r);
return!0};g.prototype.registerChild=function(p,n,t){var r=this.g[p];if(!r&&R[p]||r&&r.Ff!==n)return!1;if(r)return r.ee.push(t),!1;this.g[p]={Ff:n,ee:[t]};return!0};var h=function(p,n){this.g=[{eventId:p,Qb:!0}];this.o=null;if(n){this.o={};for(var t=0;t<n.length;t++)this.o[n[t]]=!0}};h.prototype.s=function(p,n){var t=this.g[this.g.length-1];p<=t.eventId||t.Qb!=n&&this.g.push({eventId:p,Qb:n})};h.prototype.Qb=function(p){if(!this.g||0==this.g.length)return!1;for(var n=this.g.length-1;0<=n;n--)if(this.g[n].eventId<=
p)return this.g[n].Qb;return!1};h.prototype.isAllowed=function(p,n){n=n||[];if(!this.o||e[p]||this.o[p])return!0;for(var t=0;t<n.length;++t)if(this.o[n[t]])return!0;return!1};var l=!1;var m=!0;m=!1;(function(p){Z.__zone=p;Z.__zone.i="zone";Z.__zone.m=
!0;Z.__zone.priorityOverride=0})(function(p){b(p);O(p.vtp_gtmOnSuccess)})}();
Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=N.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,$f(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];h.firstChild;)n.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,n,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){O(g)}}}var b=function(d,e,f){Dk(function(){var g=R.postscribe,h={done:e},l=N.createElement("div");l.style.display="none";l.style.visibility="hidden";N.body.appendChild(l);try{g(l,d,h)}catch(m){O(f)}})};var c=function(d){if(N.body){var e=d.vtp_gtmOnFailure,f=qr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Gd,h=f.M;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(N.body,kg(g),h,e)()}else ar(function(){c(d)},200)};Z.__html=c;Z.__html.i="html";Z.__html.m=
!0;Z.__html.priorityOverride=0}();






Z.h.evl=["google"],function(){function a(){var f=Number(fr("gtm.start"))||0;return br().getTime()-f}function b(f,g,h,l){function m(){if(!Og(f.target)){g.has(d.uc)||g.set(d.uc,""+a());g.has(d.pd)||g.set(d.pd,""+a());var n=0;g.has(d.wc)&&(n=Number(g.get(d.wc)));n+=100;g.set(d.wc,""+n);if(n>=h){var t=oo(f.target,"gtm.elementVisibility",[g.g]),r=Qg(f.target);t["gtm.visibleRatio"]=Math.round(1E3*r)/10;t["gtm.visibleTime"]=h;t["gtm.visibleFirstTime"]=Number(g.get(d.pd));t["gtm.visibleLastTime"]=Number(g.get(d.uc));
gr(t);l()}}}if(!g.has(d.Gb)&&(0==h&&m(),!g.has(d.jb))){var p=X("self").setInterval(m,100);g.set(d.Gb,p)}}function c(f){f.has(d.Gb)&&(X("self").clearInterval(Number(f.get(d.Gb))),f.o(d.Gb))}var d={Gb:"polling-id-",pd:"first-on-screen-",uc:"recent-on-screen-",wc:"total-visible-time-",jb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Z.__evl=f;Z.__evl.i="evl";Z.__evl.m=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Kg(m)}catch(F){L(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var z=N.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var C=
new e(v[A],r);c(C)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Wg(w);0<v.length&&(w=Vg(h,v,[t]))}}function h(y){var x=new e(y.target,r);y.intersectionRatio>=t?x.has(d.jb)||b(y,x,n,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var A=new e(v[z],r);A.set(d.jb,"1");c(A)}Wg(w);if(p&&Nq)for(var C=0;C<Nq.length;C++)Nq[C]===g&&Nq.splice(C,1)}:function(){x.set(d.jb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.jb)&&(x.o(d.jb),x.o(d.wc)),x.o(d.uc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,n=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();p&&Oq(g);O(f.vtp_gtmOnSuccess)})}();


var Bu={};Bu.macro=function(a){if(Eq.sd.hasOwnProperty(a))return Eq.sd[a]},Bu.onHtmlSuccess=Eq.sf(!0),Bu.onHtmlFailure=Eq.sf(!1);Bu.dataLayer=Sh;Bu.callback=function(a){Jh.hasOwnProperty(a)&&Na(Jh[a])&&Jh[a]();delete Jh[a]};Bu.bootstrap=0;Bu._spx=!1;function Cu(){R[ke.F]=Bu;mb(Kh,Z.h);Qd=Qd||Eq;Rd=ge}
function Du(){og.gtag_cs_api=!0;R=E.google_tag_manager=E.google_tag_manager||{};Im();if(R[ke.F]){var a=R.zones;a&&a.unregisterChild(ke.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Jd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Md.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Ld.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);Kd.push(n)}Od=Z;Pd=Qr;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Lp();oe=new ne(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Kh[x]=w}Op(v);Cu();Dq();yk=!1;zk=0;if("interactive"==
N.readyState&&!N.createEventObject||"complete"==N.readyState)Bk();else{gg(N,"DOMContentLoaded",Bk);gg(N,"readystatechange",Bk);if(N.createEventObject&&N.documentElement.doScroll){var z=!0;try{z=!E.frameElement}catch(J){}z&&Ck()}gg(E,"load",Bk)}Yo=!1;"complete"===N.readyState?$o():gg(E,"load",$o);a:{
if(!vl)break a;E.setInterval(wl,864E5);}var F=R;F.postscribe||(F.postscribe=E.postscribe||Se);Hh=(new Date).getTime();}}
(function(a){if(!E["__TAGGY_INSTALLED"]){var b=!1;if(N.referrer){var c=ch(N.referrer);b="cct.google"===$g(c,"host")}if(!b){var d=ei("googTaggyReferrer");b=d.length&&d[0].length}b&&(E["__TAGGY_INSTALLED"]=!0,ag("https://cct.google/taggy/agent.js"))}var f=function(){var m=E["google.tagmanager.debugui2.queue"];m||(m=[],E["google.tagmanager.debugui2.queue"]=m,ag("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ah(E.location,"query",!1,void 0,"gtm_debug");if(!g&&N.referrer){var h=ch(N.referrer);g="tagassistant.google.com"===$g(h,"host")}if(!g){var l=ei("__TAG_ASSISTANT");g=l.length&&l[0].length}E.__TAG_ASSISTANT_API&&(g=!0);g&&Yf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Yf,resume:function(){a()}}}):a()})(Du);

})()
