(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("83d6b5b4",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";var r=n(199);n.n(r).a},202:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"a[data-v-fb7a1666]{text-decoration:none;color:#000}.post-preview[data-v-fb7a1666]{border-radius:3px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.5);width:90%;height:20rem;margin:1rem}.post-preview-thumbnail[data-v-fb7a1666]{background-position:50%;background-size:cover;width:100%;height:10rem}.post-preview-content[data-v-fb7a1666]{text-align:center;padding:1rem}@media (min-width:35rem){.post-preview[data-v-fb7a1666]{width:25rem}}",""])},203:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("649bc654",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var r={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0}}},o=(n(201),n(14)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"post-preview",attrs:{to:"/blog/"+t.id}},[n("article",[n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.previewText))])])])])},[],!1,null,"fb7a1666",null);e.a=component.exports},209:function(t,e,n){"use strict";var r=n(203);n.n(r).a},210:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"#posts{padding-top:2rem;display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width:35rem){#posts{flex-direction:row}}",""])},218:function(t,e,n){"use strict";n.r(e);var r={components:{PostPreview:n(206).a},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:t.idDev?"draft":"published",starts_with:"blog/"}).then(function(e){return console.log("context.isDev: ",t.isDev),{posts:e.data.stories.map(function(t){return{id:t.slug,title:t.content.title,previewText:t.content.summary,thumbnailUrl:t.content.thumbnail}})}})}},o=(n(209),n(14)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"posts"}},this._l(this.posts,function(t){return e("PostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,id:t.id}})}),1)},[],!1,null,null,null);e.default=component.exports}}]);