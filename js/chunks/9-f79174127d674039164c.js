(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{452:function(e,n,a){"use strict";a.r(n);var t=a(31),s=a(454),r=a.n(s),i=a(130),u=a(470),o=a(472);function c(e,n,a,t,s,r,i){try{var u=e[r](i),o=u.value}catch(e){return void a(e)}u.done?n(o):Promise.resolve(o).then(t,s)}var h={name:"Shares",components:{Avatar:a.n(o).a},data:function(){return{uniqueShareUIDs:[],uidDisplaynameMap:{},isLoading:!0}},computed:{isEmptyList:function(){return!1===this.isLoading&&0===this.uniqueShareUIDs.length}},mounted:function(){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.generateOcsUrl)("/apps/files_sharing/api/v1/shares?format=json&shared_with_me=false"),s=Object(u.getCurrentUser)().uid,e.prev=2,e.next=5,r.a.get(a);case 5:e.sent.data.ocs.data.forEach((function(e){if(e.share_with!==s)switch(e.share_type){case 0:-1===n.uniqueShareUIDs.indexOf(e.share_with)&&(n.uniqueShareUIDs.push(e.share_with),t.default.set(n.uidDisplaynameMap,e.share_with,e.share_with_displayname))}})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),n.$toast("Error loading information about shares.");case 13:return e.prev=13,n.isLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})),function(){var n=this,a=arguments;return new Promise((function(t,s){var r=e.apply(n,a);function i(e){c(r,t,s,i,u,"next",e)}function u(e){c(r,t,s,i,u,"throw",e)}i(void 0)}))})()}},d=a(455),p=Object(d.a)(h,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"who-has-access"},[a("span",{staticClass:"icon icon-loading",class:{hidden:!e.isLoading}}),e._v(" "),a("span",{class:{hidden:!e.isEmptyList}},[e._v("\n\t\t"+e._s(e.$t("privacy","You don't have any shares with individual users."))+"\n\t")]),e._v(" "),e._l(e.uniqueShareUIDs,(function(n){return a("Avatar",{key:n,attrs:{user:n,"display-name":e.uidDisplaynameMap[n],size:64}})}))],2)}),[],!1,null,null,null);n.default=p.exports}}]);
//# sourceMappingURL=9-f79174127d674039164c.js.map