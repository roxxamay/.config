"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[7427],{10807:(e,t,r)=>{r.d(t,{H:()=>d,Z:()=>p});var n=r(51911),o=r(53767),a=r(83849),l=r.n(a),i=r(29901),s=r(47923),c=["children","placeholder","className","canFetchMore","isFetchingNextPage","fetchNextPage"],u=i.createElement,d=function(e){var t;return!e.isLoading&&!e.isFetchingNextPage&&e.hasNextPage&&(null===(t=e.data)||void 0===t?void 0:t.pages.length)>0};const p=function(e){var t=e.children,r=e.placeholder,a=e.className,i=e.canFetchMore,d=e.isFetchingNextPage,p=e.fetchNextPage,f=(0,o.Z)(e,c),h=(0,s.Z)({fetchPage:p,canFetchMore:i});return u("div",(0,n.Z)({},f,{className:l()("relative flex flex-col",a)}),t,d&&r,u("div",{className:"pointer-events-none absolute bottom-0 left-0 h-px w-px opacity-0",ref:h}))}},70922:(e,t,r)=>{r.r(t),r.d(t,{UpvotedPopupModal:()=>v,default:()=>g});var n=r(51911),o=r(28076),a=r(53767),l=r(29901),i=r(36909),s=r(96206),c=r(63496),u=r(10807),d=r(54883),p=["requestQuery","children"],f=l.createElement;function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){var t,r=e.requestQuery,o=r.queryKey,l=r.query,h=r.params,v=r.options,g=void 0===v?{}:v,x=(e.children,(0,a.Z)(e,p)),b=(0,c.Y)().requestMethod,P=(0,i.N)(o,(function(e){var t=e.pageParam;return b(s.B3,l,m(m({},h),{},{after:t}),{requestKey:JSON.stringify(o)})}),m(m({},g),{},{getNextPageParam:function(e){var t,r,n,o;return(null==e||null===(t=e.upvotes)||void 0===t||null===(r=t.pageInfo)||void 0===r?void 0:r.hasNextPage)&&(null==e||null===(n=e.upvotes)||void 0===n||null===(o=n.pageInfo)||void 0===o?void 0:o.endCursor)}}));return f(d.Z,(0,n.Z)({},x,{"data-testid":"List of ".concat(o[0]," with ID ").concat(o[1]),title:"Upvoted by",scrollingProps:{isFetchingNextPage:P.isFetchingNextPage,canFetchMore:(0,u.H)(P),fetchNextPage:P.fetchNextPage},users:null===(t=P.data)||void 0===t?void 0:t.pages.reduce((function(e,t){return null==t||t.upvotes.edges.forEach((function(t){var r=t.node;e.push(r.user)})),e}),[])}))}const g=v},54883:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(51911),o=r(53767),a=r(29901),l=r(97518),i=r(39691),s=r(35953),c=["users","title","header","scrollingProps","placeholderAmount","size","userListProps","onSearch"],u=["onScroll"],d=a.createElement;const p=function(e){var t=e.users,r=e.title,p=e.header,f=e.scrollingProps,h=e.placeholderAmount,m=e.size,v=void 0===m?l.u_.Size.Medium:m,g=e.userListProps,x=e.onSearch,b=(0,o.Z)(e,c),P=(0,a.useRef)(),y=(0,a.useState)(),N=y[0],Z=y[1],O=f.onScroll,w=(0,o.Z)(f,u);return d(l.u_,(0,n.Z)({contentRef:function(e){return Z(e)},kind:l.u_.Kind.FlexibleCenter,size:v},b),null!=p?p:d(l.u_.Header,{title:r}),d(l.u_.Body,{className:"px-0 py-0",onScroll:O,ref:P},x&&d(s.U,{className:"mx-6 my-4",inputId:"members-search",valueChanged:x}),d(i.Z,(0,n.Z)({},g,{users:t,scrollingProps:w,placeholderAmount:h,userInfoProps:{scrollingContainer:P.current,appendTooltipTo:N}}))))}},39691:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(51911),o=r(29901),a=r(34260),l=r.n(a),i=r(50998),s=r(63971),c=r(10807),u=o.createElement;const d=function(e){var t=e.placeholderAmount,r=e.scrollingProps,o=e.users,a=e.additionalContent,d=e.initialItem,p=e.isLoading,f=e.emptyPlaceholder,h=e.userInfoProps,m=void 0===h?{}:h,v=u(i.K,{placeholderAmount:t});return null!=o&&o.length?u(c.Z,(0,n.Z)({},r,{"aria-label":"users-list",placeholder:v}),!!d&&d,o.map((function(e,t){return u(l(),{key:e.username,href:e.permalink},u(s.z,(0,n.Z)({},m,{tag:"a",href:e.permalink,user:e}),null==a?void 0:a(e,t)))}))):p?v:null!=f?f:v}},63971:(e,t,r)=>{r.d(t,{z:()=>g});var n=r(51911),o=r(53767),a=r(83849),l=r.n(a),i=r(29901),s=r(77144),c=r(43643),u=r(38409),d=r(60656),p=["imageSize","tag","user","className","disableTooltip","scrollingContainer","appendTooltipTo","children","showDescription","transformUsername"],f=i.createElement,h="py-3 px-6 hover:bg-theme-hover",m="flex-1",v=function(e,t){var r,a,i,v=e.imageSize,g=void 0===v?"xlarge":v,x=e.tag,b=e.user,P=e.className,y=void 0===P?{}:P,N=e.disableTooltip,Z=e.scrollingContainer,O=e.appendTooltipTo,w=e.children,S=e.showDescription,T=void 0===S||S,j=e.transformUsername,C=(0,o.Z)(e,p),k=x||"a",z=b.name,F=b.username,E=b.bio,A={appendTo:O||(null===globalThis||void 0===globalThis||null===(r=globalThis.document)||void 0===r?void 0:r.body)||"parent",visible:!N&&void 0};return f(k,(0,n.Z)({ref:t},C,{className:l()("flex flex-row",null!==(a=y.container)&&void 0!==a?a:h)}),f(u.R,{user:b,tooltip:A,scrollingContainer:Z},f(s.YY,{user:b,size:g,nativeLazyLoading:!0})),f(u.R,{user:b,tooltip:A,scrollingContainer:Z},f("div",{className:l()("ml-4 flex max-w-full flex-col overflow-auto typo-callout",null!==(i=y.textWrapper)&&void 0!==i?i:m)},f("div",{className:"flex"},f(c.Ys,{className:"font-bold",title:z},z),f(d.a,{user:b})),f(c.Ys,{className:"text-theme-label-secondary",title:"@".concat(F)},j?j(b):"@".concat(F)),E&&T&&f("span",{className:"mt-1 text-theme-label-tertiary"},E))),w)},g=(0,i.forwardRef)(v)},50998:(e,t,r)=>{r.d(t,{K:()=>i});var n=r(29901),o=r(90585),a=n.createElement,l=5;function i(e){var t=e.placeholderAmount;return a("div",{className:"flex flex-col"},Array(t<=l?t:l).fill(0).map((function(e,t){return a(o.x,{key:t})})))}}}]);