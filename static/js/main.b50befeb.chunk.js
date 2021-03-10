(this.webpackJsonplabyrinth=this.webpackJsonplabyrinth||[]).push([[0],{52:function(t,n,e){},53:function(t,n,e){},54:function(t,n,e){"use strict";e.r(n);var o=e(1),r=e.n(o),i=e(20),a=e.n(i),c=e(9),s=e(26),l=Object(s.b)({name:"control",initialState:{direction:0,posX:-1,posZ:-1,currentAction:0},reducers:{moveForward:function(t){if(3===t.currentAction)switch(t.currentAction=0,t.direction){case 0:t.posZ-=1;break;case 1:t.posX-=1;break;case 2:t.posZ+=1;break;case 3:t.posX+=1;break;default:console.log("Direction error: ",t.direction)}},turnLeft:function(t){3===t.currentAction&&(t.currentAction=1,t.direction=(t.direction+1)%4)},turnRight:function(t){3===t.currentAction&&(t.currentAction=2,t.direction=((t.direction-1)%4+4)%4)},popEvent:function(t){t.currentAction=3},assignPosX:function(t,n){t.posX=n.payload},assignPosZ:function(t,n){t.posZ=n.payload}}}),u=l.actions,h=u.moveForward,b=u.turnLeft,d=u.turnRight,p=u.popEvent,j=u.assignPosX,f=u.assignPosZ,m=function(t){return t.control.direction},k=function(t){return t.control.posX},O=function(t){return t.control.posZ},g=function(t){return t.control.currentAction},v=l.reducer,x=e(5);function w(){var t=Object(c.c)();return document.addEventListener("keydown",(function(n){switch(n.key){case"Enter":window.history.go(0);break;case"ArrowLeft":t(b());break;case"ArrowRight":t(d());break;case"ArrowUp":t(h())}})),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"button forward-button",onClick:function(){return t(h())},children:"Move Forward"}),Object(x.jsx)("button",{className:"button turn-left-button",onClick:function(){return t(b())},children:"Turn Left"}),Object(x.jsx)("button",{className:"button turn-right-button",onClick:function(){return t(d())},children:"Turn Right"})]})}var y=e(7),A=e(16),z=e(38),C=e(4);Object(A.b)({TrackballControls:z.a});var X=function(t){t.wallTop,t.wallLeft;var n=t.blockWidth,e=t.startCoordX,r=t.startCoordZ,i=t.moveSpeed,a=t.turnSpeed,s=Object(A.d)(),l=s.camera,u=s.gl,h=Object(c.d)(g),b=Object(c.d)(k),d=Object(c.d)(O),j=Object(c.d)(m),f=o.useState(0),v=Object(y.a)(f,2),w=v[0],z=v[1],X=w,Z=-n/2+b*n+e,M=-n/2+d*n+r,N=Object(c.c)();return Object(A.c)((function(){switch(h){case 0:switch(j){case 0:l.position.z>M&&(l.position.z-=i,l.lookAt(l.position.x,0,M-10));break;case 3:l.position.x<Z&&(l.position.x+=i,l.lookAt(Z+10,0,l.position.z));break;case 2:l.position.z<M&&(l.position.z+=i,l.lookAt(l.position.x,0,M+10));break;case 1:l.position.x>Z&&(l.position.x-=i,l.lookAt(Z-10,0,l.position.z));break;default:console.log("direction error!")}l.position.x===Z&&l.position.z===M&&(console.log("success"),N(p()));break;case 1:0===w&&z(X=w+90),w>0&&(l.rotateY(C.Math.degToRad(2)),z(X-=a)),0===X&&N(p());break;case 2:0===w&&(z(w-90),X=w-90),X<0&&(l.rotateY(C.Math.degToRad(-2)),z(X+=a)),0===X&&N(p());break;case 3:break;default:console.log("button error!")}l.updateProjectionMatrix()})),Object(x.jsx)("trackballControls",{args:[l,u.domElement],dynamicDampingFactor:.1})},Z=e(0),M=e(2),N=function(){function t(n){Object(Z.a)(this,t),this.partsCount=n,this.path=Array.apply(null,{length:n}).map(Number.call,Number),this.rank=Array.apply(0,{length:n})}return Object(M.a)(t,[{key:"find",value:function(t){for(;t!==this.path[t];)this.path[t]=this.path[this.path[t]],t=this.path[t];return t}},{key:"union",value:function(t,n){var e=this.find(t),o=this.find(n);e!==o&&(this.partsCount-=1,this.rank[e]<this.rank[o]?this.path[e]=o:this.rank[e]>this.rank[o]?this.path[o]=e:(this.path[e]=o,this.rank[o]+=1))}}]),t}();var L=e(55);function D(t,n,e){return e<n?[e-t,e]:[e-n-1,e-n]}function P(t,n){for(var e=t*n,o=new N(e),r=[],i=[],a=t;a<e;a++)r.push(a);for(var c=e;c<2*e;c++)c%t!==0&&r.push(c);var s=(r=function(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),o=t[n];t[n]=t[e],t[e]=o}return t}(r)).length-1;do{var l=r[s],u=D(t,e,l),h=Object(y.a)(u,2),b=h[0],d=h[1];o.find(b)===o.find(d)?i.push(l):o.union(b,d),s-=1}while(1!==o.partsCount);for(;s>=0;)i.push(r[s]),s-=1;for(var p=Array.apply(null,{length:e}).fill(!1),j=Array.apply(null,{length:e}).fill(!1),f=0;f<t;f++)j[f]=!0;for(var m=0;m<n;m++)p[m*t]=!0;for(var k=0;k<i.length;k++)i[k]<e?j[i[k]]=!0:p[i[k]-e]=!0;return[p,j]}function W(t,n,e,o,r){return Object(x.jsx)(L.a,{args:[e,o,r],rotation:[0,0,0],position:[t+e/2,0,n],children:Object(x.jsx)("meshPhongMaterial",{color:"orange",attach:"material"})})}function T(t,n,e,o,r){return Object(x.jsx)(L.a,{args:[e,o,r],rotation:[0,.5*Math.PI,0],position:[t,0,n+e/2],children:Object(x.jsx)("meshPhongMaterial",{color:"orange",attach:"material"})})}function S(t){for(var n=t.numX,e=t.numZ,o=t.wallTop,r=t.wallLeft,i=t.blockWidth,a=t.blockHeight,c=t.blockDepth,s=t.mazeWidth,l=t.mazeDepth,u=[],h=0;h<n;h++)for(var b=0;b<e;b++)o[h+n*b]&&u.push(W(h*i-s-c/2,b*i-l,i+c,a,c)),0===h&&0===b||r[h+n*b]&&u.push(T(h*i-s,b*i-l-c/2,i+c,a,c));for(var d=0;d<n-1;d++)u.push(W(d*i-s-c/2,e*i-l,i+c,a,c));for(var p=0;p<e;p++)u.push(T(n*i-s,p*i-l-c/2,i+c,a,c));return Object(x.jsx)("group",{name:"walls",children:u})}var E=e(56),R=e(57);e(52);function F(t){var n=t.numX,e=t.numZ,r=t.blockWidth,i=t.blockHeight,a=t.blockDepth,s=t.mazeDepth,l=t.mazeWidth,u=o.useState(P(n,e)),h=Object(y.a)(u,1),b=Object(y.a)(h[0],2),d=b[0],p=b[1],m=Object(c.d)(k),g=Object(c.d)(O),v=Object(c.c)();-1===m&&v(j(Number(n))),-1===g&&v(f(Number(e)));var w=-n*r/2,z=-e*r/2,C=-r/2+n*r+w,Z=-r/2+e*r+z,M=Object(E.a)(c.b);return Object(x.jsx)("div",{className:"canvas-div",children:Object(x.jsxs)(A.a,{camera:{fov:80,position:[C,0,Z+r]},children:[Object(x.jsx)(M,{children:Object(x.jsx)(X,{wallTop:p,wallLeft:d,blockWidth:r,startCoordX:w,startCoordZ:z,moveSpeed:.5,turnSpeed:2})}),Object(x.jsx)("ambientLight",{color:"#ffffff",intensity:.4}),Object(x.jsx)("directionalLight",{position:[-500,20,z+r/2],intensity:1.5}),Object(x.jsx)(S,{numX:n,numZ:e,wallTop:p,wallLeft:d,blockWidth:r,blockHeight:i,blockDepth:a,mazeWidth:l,mazeDepth:s}),Object(x.jsx)(R.a,{distance:1e4,sunPosition:[-500,20,z+r/2],inclination:0,azimuth:.25}),Object(x.jsx)(L.b,{"rotation-x":-Math.PI/2,position:[0,-10,0],args:[400,400,4,4],children:Object(x.jsx)("meshBasicMaterial",{attach:"material",opacity:.5,color:"#405940"})})]})})}e(53);function H(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"vis-container",children:[Object(x.jsx)(F,{numX:10,numZ:10,blockWidth:40,blockHeight:20,blockDepth:1,mazeDepth:200,mazeWidth:200}),Object(x.jsx)(w,{}),Object(x.jsx)("button",{className:"button new-game-button",onClick:function(){return window.history.go(0)},children:"New Game"})]})})}var I=Object(s.a)({reducer:{control:v}});a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(c.a,{store:I,children:Object(x.jsx)(H,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b50befeb.chunk.js.map