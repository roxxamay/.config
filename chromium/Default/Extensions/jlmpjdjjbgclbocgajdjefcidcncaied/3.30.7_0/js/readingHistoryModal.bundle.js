"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[4653],{10807:(e,t,a)=>{a.d(t,{H:()=>d,Z:()=>p});var n=a(51911),o=a(53767),r=a(83849),i=a.n(r),l=a(29901),s=a(47923),c=["children","placeholder","className","canFetchMore","isFetchingNextPage","fetchNextPage"],u=l.createElement,d=function(e){var t;return!e.isLoading&&!e.isFetchingNextPage&&e.hasNextPage&&(null===(t=e.data)||void 0===t?void 0:t.pages.length)>0};const p=function(e){var t=e.children,a=e.placeholder,r=e.className,l=e.canFetchMore,d=e.isFetchingNextPage,p=e.fetchNextPage,f=(0,o.Z)(e,c),m=(0,s.Z)({fetchPage:p,canFetchMore:l});return u("div",(0,n.Z)({},f,{className:i()("relative flex flex-col",r)}),t,d&&a,u("div",{className:"pointer-events-none absolute bottom-0 left-0 h-px w-px opacity-0",ref:m}))}},97912:(e,t,a)=>{a.r(t),a.d(t,{ReadingHistoryModal:()=>E,default:()=>L});var n=a(29901),o=a(97518),r=a(10807),i=a(99653),l=a(75943),s=a(4714),c=n.createElement;function u(e){var t=e.onArticleClick,a=e.data,n=e.canFetchMore,o=e.isFetchingNextPage,u=e.fetchNextPage;return c(r.Z,{canFetchMore:n,fetchNextPage:u,isFetchingNextPage:o},null==a?void 0:a.map((function(e){return c("button",{key:"".concat(e.post.id,"-").concat(e.timestamp),type:"button",className:"group relative -mx-6 cursor-pointer hover:bg-theme-hover",onClick:function(a){return t(a,e)},"aria-label":"Reading history item"},c(i.Z,{postItem:e,showButtons:!1,clickable:!1}),c(l.e0,{size:s.Jh.Medium,className:"absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 group-hover:flex"}))})))}var d=a(24283),p=a(81358),f=a(28076),m=a(36909),g=a(91385),v=a.n(g),h=a(96206),x=a(47923);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){(0,f.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const b=function(e){var t,a=e.key,o=e.query,r=e.variables,i=(0,m.N)(a,(function(e){var t=e.pageParam;return v()(h.B3,o,N(N({},r),{},{after:t}))}),{getNextPageParam:function(e){var t,a;return(null==e||null===(t=e.readHistory)||void 0===t?void 0:t.pageInfo.hasNextPage)&&(null==e||null===(a=e.readHistory)||void 0===a?void 0:a.pageInfo.endCursor)}}),l=i.isLoading,s=i.isFetchingNextPage,c=i.hasNextPage,u=i.data,d=i.fetchNextPage,p=!l&&!s&&c&&u.pages.length>0,f=(0,x.Z)({fetchPage:d,canFetchMore:p}),g=null==u||null===(t=u.pages)||void 0===t?void 0:t.some((function(e){return e.readHistory.edges.length>0}));return(0,n.useMemo)((function(){return{queryResult:i,hasData:g,isLoading:l,data:u,isInitialLoading:!g&&l,infiniteScrollRef:f}}),[g,i,l,u,f])};var P=function(){var e=(0,n.useContext)(d.ZP).user,t={key:["readHistory",null==e?void 0:e.id],query:p.dC,variables:{isPublic:!0}},a=b(t),o=a.hasData,i=a.data,l=a.isInitialLoading,s=a.isLoading,c=a.queryResult;return{data:(0,n.useMemo)((function(){return null==i?void 0:i.pages.map((function(e){return e.readHistory.edges.map((function(e){return e.node}))})).flat()}),[i]),hasData:o,isInitialLoading:l,isLoading:s,queryResult:c,canFetchMore:(0,r.H)(c),fetchNextPage:c.fetchNextPage,isFetchingNextPage:c.isFetchingNextPage}},w=a(99269),k=a(43643),F=(0,w.Z)("h3","text-center typo-large-title font-bold"),Z=((0,w.Z)("p","text-center typo-title3 text-theme-label-tertiary"),(0,w.Z)("span","text-theme-color-cabbage")),O=((0,w.Z)(k.AC,"!p-0 laptop:min-h-page h-full !max-w-[42.5rem] !w-full",k.u7),(0,w.Z)("div","flex flex-1 flex-col"),(0,w.Z)("footer","flex sticky flex-row gap-3 items-center py-4 px-6 h-16 border-t border-theme-divider-tertiary"),(0,w.Z)("header","flex sticky flex-row gap-3 items-center py-4 px-6 h-16 border-b border-theme-divider-tertiary"),n.createElement);function S(e){var t=e.hasNoData;return O(n.Fragment,null,O(F,null,t?"Read":"Share"," ",O(Z,null,"a post")),O("p",{className:"py-4 text-center"},t?"Your reading history is empty! Please read at least one post by clicking on a post to start sharing with your Squad.":"Pick a post that you would like to discuss with your Squad members."))}var C=a(22057),D=n.createElement,q=(0,w.Z)(C.f,"h-3 rounded-12");const M=function(e){var t=e.amount;return D("div",{className:"flex flex-col"},Array(void 0===t?7:t).fill(0).map((function(e,t){return D("div",{key:t,className:"flex flex-row items-center px-8 py-3"},D(C.f,{className:"h-16 w-16 rounded-16 laptop:w-24"}),D("div",{className:"ml-4 flex flex-1 flex-col"},D(q,{className:"w-full laptop:w-1/2"}),D(q,{className:"mt-2 w-2/3 laptop:w-1/3"})))})))};var z=n.createElement;function E(e){var t=e.keepOpenAfterSelecting,a=e.onArticleSelected,n=e.onRequestClose,r=P(),i=r.hasData,l=r.isInitialLoading,s=r.data,c=r.isLoading,d=r.canFetchMore,p=r.fetchNextPage,f=r.isFetchingNextPage,m=!i&&!l;return z(o.u_,{isOpen:!0,onRequestClose:n,kind:o.u_.Kind.FixedCenter,size:o.u_.Size.Small},z(o.u_.Body,null,z(S,{hasNoData:m}),z(u,{onArticleClick:function(e,o){a(o),t||n(e)},data:s,canFetchMore:d,fetchNextPage:p,isFetchingNextPage:f}),c&&z(M,{amount:l?15:1})))}const L=E},99653:(e,t,a)=>{a.d(t,{Z:()=>q});var n=a(29901),o=a(83849),r=a.n(o),i=a(34260),l=a.n(i),s=a(52210),c=a(32814),u=a(61741),d=a(38429),p=a(58764),f=a(99269),m=a(81618),g=a(77144),v=a(53782),h=a(10220),x=a(56567),y=a(48706),N=a(24283),b=a(43573),P=a(96521),w=a(86747),k=function(){var e=(0,y.NL)(),t=(0,n.useContext)(N.ZP).user;return(0,P.U)({variables:{key:b.dt.ReadingHistory},onMutate:function(a){var n=a.id,o=a.vote,r=e.getQueryData((0,b.e0)(b.dt.ReadingHistory,t));return(0,w.i)({id:n,vote:o,data:r,user:t,queryClient:e})}})},F=a(16309),Z=a(6189),O=a(86825),S=a(57767),C=n.createElement,D=(0,f.Z)("div","absolute left-5 -my-1 w-8 h-8 rounded-full bg-background-default");function q(e){var t,a,o,i,f,y=e.postItem,N=e.showButtons,b=void 0===N||N,P=e.clickable,w=void 0===P||P,q=e.onHide,M=e.className,z=e.onContextMenu,E=e.showVoteActions,L=void 0!==E&&E,j=e.analyticsOrigin,H=void 0===j?F.aP.Feed:j,R=y.timestampDb,I=y.post,A=null!==(t=null==I?void 0:I.sharedPost)&&void 0!==t?t:I,T=k(),U=T.toggleUpvote,B=T.toggleDownvote,W=r()("relative flex w-full flex-row py-3 pl-9 pr-5",L?"items-start tablet:items-center":"items-center",w&&"hover:cursor-pointer hover:bg-theme-hover",M);return C("article",{className:r()(!w&&W)},C(h.Z,{condition:w,wrapper:function(e){return C(l(),{href:I.commentsPermalink},C("a",{className:W,title:"Go to post"},e))}},C(n.Fragment,null,C(v.E,{src:A.image,alt:I.title,className:"h-16 w-16 rounded-16 object-cover laptop:w-24",loading:"lazy",fallbackSrc:x.n.post.imageCoverPlaceholder}),C(D,{className:L&&"top-8"}),C(g.YY,{size:"small",rounded:"full",className:r()("absolute left-6",L&&"top-8"),user:{image:I.source.image,username:"source of ".concat(I.title)},nativeLazyLoading:!0}),C("div",{className:r()("flex flex-1",L?"flex-col tablet:flex-row":"items-center")},C("div",{className:"ml-4 flex flex-1 flex-col"},C("h3",{className:"mr-6 line-clamp-2 flex flex-1 break-words text-left typo-callout"},I.title),C(m.Z,{readTime:I.readTime,numUpvotes:I.numUpvotes,isVideoType:(0,s.AD)(I)})),C("div",{className:"ml-4 mt-1 flex tablet:ml-0 tablet:mt-1"},b&&L&&C(n.Fragment,null,C(Z.zx,{size:O.qE.Small,variant:O.Wu.Tertiary,color:L?S.S.Avocado:void 0,className:L?"flex":"hidden laptop:flex",pressed:(null==I||null===(a=I.userState)||void 0===a?void 0:a.vote)===s.xN.Up,onClick:function(e){e.preventDefault(),U({post:I,origin:H})},icon:C(c.o,{secondary:(null==I||null===(o=I.userState)||void 0===o?void 0:o.vote)===s.xN.Up})}),C(Z.zx,{size:O.qE.Small,variant:O.Wu.Tertiary,color:L?S.S.Ketchup:void 0,className:L?"flex":"hidden laptop:flex",pressed:(null==I||null===(i=I.userState)||void 0===i?void 0:i.vote)===s.xN.Down,onClick:function(e){e.preventDefault(),B({post:I,origin:H})},icon:C(u.I,{secondary:(null==I||null===(f=I.userState)||void 0===f?void 0:f.vote)===s.xN.Down})})),b&&!L&&q&&C(Z.zx,{size:O.qE.Small,variant:O.Wu.Tertiary,className:"hidden laptop:flex",icon:C(d.q,null),onClick:function(e){e.stopPropagation(),e.preventDefault(),q({postId:I.id,timestamp:R})}}),b&&C(Z.zx,{variant:O.Wu.Tertiary,"data-testid":"post-item-".concat(I.id),icon:C(p.O,null),onClick:function(e){e.stopPropagation(),z(e,y)},size:O.qE.Small}))))))}}}]);