/*! For license information please see main.5719947c4ca70e40ef7f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s("./node_modules/gsap/index.js"),n=s("./node_modules/prefix/index.js"),l=s.n(n),r=s("./node_modules/lodash/each.js"),o=s.n(r);class h{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.transformPrefix=l()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},o()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationIn=i.default.timeline(),this.animationIn.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"e054449316a0b8ad333a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NzE5OTQ3YzRjYTcwZTQwZWY3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7c1BBTWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosR0FHTEUsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0csZ0JBQWtCQyxJQUFPLGFBRTlCSixLQUFLSyxrQkFBb0JMLEtBQUtNLGFBQWFDLEtBQUtQLEtBQ2pELENBRURRLFNBQ0VSLEtBQUtILFFBQVVZLFNBQVNDLGNBQWNWLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtXLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUQyxJQUFLaEIsS0FBS0Usa0JBQWtCLENBQUNlLEVBQU9DLEtBRWhDRCxhQUFpQkUsT0FBT0MsYUFDeEJILGFBQWlCRSxPQUFPRSxVQUN4QkMsTUFBTUMsUUFBUU4sR0FFZGpCLEtBQUtGLFNBQVNvQixHQUFPRCxHQUVyQmpCLEtBQUtGLFNBQVNvQixHQUFPVCxTQUFTZSxpQkFBaUJQLEdBRWIsSUFBOUJqQixLQUFLRixTQUFTb0IsR0FBS08sT0FDckJ6QixLQUFLRixTQUFTb0IsR0FBTyxLQUNrQixJQUE5QmxCLEtBQUtGLFNBQVNvQixHQUFLTyxTQUM1QnpCLEtBQUtGLFNBQVNvQixHQUFPVCxTQUFTQyxjQUFjTyxJQUUvQyxHQUVKLENBRURTLE9BQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQjVCLEtBQUs2QixZQUFjQyxFQUFBQSxRQUFBQSxXQUVuQjlCLEtBQUs2QixZQUFZRSxPQUNmL0IsS0FBS0gsUUFDTCxDQUNFbUMsVUFBVyxHQUViLENBQ0VBLFVBQVcsSUFJZmhDLEtBQUs2QixZQUFZSSxNQUFNQyxJQUNyQmxDLEtBQUttQyxvQkFFTFAsR0FBUyxHQUhYLEdBTUgsQ0FFRFEsT0FDRSxPQUFPLElBQUlULFNBQVNDLElBQ2xCNUIsS0FBS3FDLHVCQUVMckMsS0FBSzZCLFlBQWNDLEVBQUFBLFFBQUFBLFdBRW5COUIsS0FBSzZCLFlBQVlTLEdBQUd0QyxLQUFLSCxRQUFTLENBQ2hDbUMsVUFBVyxFQUNYTyxXQUFZWCxHQUZkLEdBS0gsQ0FFRHRCLGFBQWFrQyxHQUNYLE1BQU0sT0FBRUMsR0FBV0QsRUFFbkJ4QyxLQUFLVyxPQUFPRSxRQUFVNEIsQ0FDdkIsQ0FFREMsV0FDTTFDLEtBQUtGLFNBQVM2QyxVQUNoQjNDLEtBQUtXLE9BQU9JLE1BQ1ZmLEtBQUtGLFNBQVM2QyxRQUFRQyxhQUFlekIsT0FBTzBCLFlBRWpELENBRURDLFNBQ0U5QyxLQUFLVyxPQUFPRSxPQUFTaUIsRUFBQUEsUUFBQUEsTUFBQUEsTUFDbkIsRUFDQTlCLEtBQUtXLE9BQU9JLE1BQ1pmLEtBQUtXLE9BQU9FLFFBR2RiLEtBQUtXLE9BQU9DLFFBQVVrQixFQUFBQSxRQUFBQSxNQUFBQSxZQUNwQjlCLEtBQUtXLE9BQU9DLFFBQ1paLEtBQUtXLE9BQU9FLE9BQ1osSUFHRWIsS0FBS1csT0FBT0MsUUFBVSxNQUN4QlosS0FBS1csT0FBT0MsUUFBVSxHQUdwQlosS0FBS0YsU0FBUzZDLFVBQ2hCM0MsS0FBS0YsU0FBUzZDLFFBQVFJLE1BQ3BCL0MsS0FBS0csaUJBQ0YsZUFBY0gsS0FBS1csT0FBT0MsYUFFbEMsQ0FFRHVCLG9CQUNFaEIsT0FBTzZCLGlCQUFpQixhQUFjaEQsS0FBS0ssa0JBQzVDLENBRURnQyx1QkFDRWxCLE9BQU84QixvQkFBb0IsYUFBY2pELEtBQUtLLGtCQUMvQyxrQkNoSUg2QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XHJcblxyXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIjtcclxuXHJcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xyXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XHJcbiAgICAgIC4uLmVsZW1lbnRzLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIik7XHJcblxyXG4gICAgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICBjdXJyZW50OiAwLFxyXG4gICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgIGxhc3Q6IDAsXHJcbiAgICAgIGxpbWl0OiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XHJcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4udG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudDtcclxuXHJcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGVsdGFZO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID1cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcclxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcclxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxyXG4gICAgICAwLjFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4XHJcbiAgICAgIF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDU0NDQ5MzE2YTBiOGFkMzMzYVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwidG8iLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJkZWx0YVkiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=