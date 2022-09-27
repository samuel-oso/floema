/*! For license information please see main.daa6e02e5ab8fd3b1f30.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/classes/Page.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var s=i("./node_modules/gsap/index.js"),n=i("./node_modules/prefix/index.js"),a=i.n(n),l=i("./node_modules/normalize-wheel/index.js"),o=i.n(l),h=i("./node_modules/lodash/each.js"),r=i.n(h),m=i("./node_modules/lodash/map.js"),d=i.n(m),u=i("./app/animations/Title.js"),c=i("./app/animations/Paragraph.js"),p=i("./app/animations/Label.js"),g=i("./app/animations/Highlight.js");class w{constructor({element:e,elements:t,id:i}){this.selector=e,this.selectorChildren={...t,animationsHighlights:'[data-animation="highlight"]',animationsLabels:'[data-animation="label"]',animationsParagraphs:'[data-animation="paragraph"]',animationsTitles:'[data-animation="title"]'},this.id=i,this.transformPrefix=a()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},d()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){this.animations=[],this.animationsTitles=d()(this.elements.animationsTitles,(e=>new u.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=d()(this.elements.animationsParagraphs,(e=>new c.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabels=d()(this.elements.animationsLabels,(e=>new p.default({element:e}))),this.animations.push(...this.animationsLabels),this.animationsHighlights=d()(this.elements.animationsHighlights,(e=>new g.default({element:e}))),this.animations.push(...this.animationsHighlights)}show(){return new Promise((e=>{this.animationIn=s.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationIn=s.default.timeline(),this.animationIn.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),r()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=s.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=s.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"d3fd999652a936d08fdc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYWE2ZTAyZTVhYjhmZDNiMWYzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dWVBYWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosRUFDSEsscUJBQXNCLCtCQUN0QkMsaUJBQWtCLDJCQUNsQkMscUJBQXNCLCtCQUN0QkMsaUJBQWtCLDRCQUdwQk4sS0FBS0QsR0FBS0EsRUFFVkMsS0FBS08sZ0JBQWtCQyxJQUFPLGFBRTlCUixLQUFLUyxrQkFBb0JULEtBQUtVLGFBQWFDLEtBQUtYLEtBQ2pELENBRURZLFNBQ0VaLEtBQUtILFFBQVVnQixTQUFTQyxjQUFjZCxLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCRSxLQUFLZSxPQUFTLENBQ1pDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLEVBQ05DLE1BQU8sR0FHVEMsSUFBSXBCLEtBQUtFLGtCQUFrQixDQUFDbUIsRUFBT0MsS0FFL0JELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkckIsS0FBS0YsU0FBU3dCLEdBQU9ELEdBRXJCckIsS0FBS0YsU0FBU3dCLEdBQU9ULFNBQVNlLGlCQUFpQlAsR0FFYixJQUE5QnJCLEtBQUtGLFNBQVN3QixHQUFLTyxPQUNyQjdCLEtBQUtGLFNBQVN3QixHQUFPLEtBQ2tCLElBQTlCdEIsS0FBS0YsU0FBU3dCLEdBQUtPLFNBQzVCN0IsS0FBS0YsU0FBU3dCLEdBQU9ULFNBQVNDLGNBQWNPLElBRS9DLElBR0hyQixLQUFLOEIsa0JBQ04sQ0FFREEsbUJBQ0U5QixLQUFLK0IsV0FBYSxHQUlsQi9CLEtBQUtNLGlCQUFtQmMsSUFBSXBCLEtBQUtGLFNBQVNRLGtCQUFtQlQsR0FDcEQsSUFBSW1DLEVBQUFBLFFBQU0sQ0FDZm5DLGNBSUpHLEtBQUsrQixXQUFXRSxRQUFRakMsS0FBS00sa0JBSTdCTixLQUFLSyxxQkFBdUJlLElBQzFCcEIsS0FBS0YsU0FBU08sc0JBQ2JSLEdBQ1EsSUFBSXFDLEVBQUFBLFFBQVUsQ0FDbkJyQyxjQUtORyxLQUFLK0IsV0FBV0UsUUFBUWpDLEtBQUtLLHNCQUk3QkwsS0FBS0ksaUJBQW1CZ0IsSUFBSXBCLEtBQUtGLFNBQVNNLGtCQUFtQlAsR0FDcEQsSUFBSXNDLEVBQUFBLFFBQU0sQ0FDZnRDLGNBSUpHLEtBQUsrQixXQUFXRSxRQUFRakMsS0FBS0ksa0JBSTdCSixLQUFLRyxxQkFBdUJpQixJQUMxQnBCLEtBQUtGLFNBQVNLLHNCQUNiTixHQUNRLElBQUl1QyxFQUFBQSxRQUFVLENBQ25CdkMsY0FLTkcsS0FBSytCLFdBQVdFLFFBQVFqQyxLQUFLRyxxQkFDOUIsQ0FFRGtDLE9BQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQnZDLEtBQUt3QyxZQUFjQyxFQUFBQSxRQUFBQSxXQUVuQnpDLEtBQUt3QyxZQUFZRSxPQUNmMUMsS0FBS0gsUUFDTCxDQUNFOEMsVUFBVyxHQUViLENBQ0VBLFVBQVcsSUFJZjNDLEtBQUt3QyxZQUFZSSxNQUFNQyxJQUNyQjdDLEtBQUs4QyxvQkFFTFAsR0FBUyxHQUhYLEdBTUgsQ0FFRFEsT0FDRSxPQUFPLElBQUlULFNBQVNDLElBQ2xCdkMsS0FBS2dELHVCQUVMaEQsS0FBS3dDLFlBQWNDLEVBQUFBLFFBQUFBLFdBRW5CekMsS0FBS3dDLFlBQVlTLEdBQUdqRCxLQUFLSCxRQUFTLENBQ2hDOEMsVUFBVyxFQUNYTyxXQUFZWCxHQUZkLEdBS0gsQ0FFRDdCLGFBQWF5QyxHQUNYLE1BQU0sT0FBRUMsR0FBV0MsSUFBZUYsR0FFbENuRCxLQUFLZSxPQUFPRSxRQUFVbUMsQ0FDdkIsQ0FFREUsV0FDTXRELEtBQUtGLFNBQVN5RCxVQUNoQnZELEtBQUtlLE9BQU9JLE1BQ1ZuQixLQUFLRixTQUFTeUQsUUFBUUMsYUFBZWpDLE9BQU9rQyxhQUdoREMsSUFBSzFELEtBQUsrQixZQUFhNEIsR0FBY0EsRUFBVUwsWUFDaEQsQ0FFRE0sU0FDRTVELEtBQUtlLE9BQU9FLE9BQVN3QixFQUFBQSxRQUFBQSxNQUFBQSxNQUNuQixFQUNBekMsS0FBS2UsT0FBT0ksTUFDWm5CLEtBQUtlLE9BQU9FLFFBR2RqQixLQUFLZSxPQUFPQyxRQUFVeUIsRUFBQUEsUUFBQUEsTUFBQUEsWUFDcEJ6QyxLQUFLZSxPQUFPQyxRQUNaaEIsS0FBS2UsT0FBT0UsT0FDWixJQUdFakIsS0FBS2UsT0FBT0MsUUFBVSxNQUN4QmhCLEtBQUtlLE9BQU9DLFFBQVUsR0FHcEJoQixLQUFLRixTQUFTeUQsVUFDaEJ2RCxLQUFLRixTQUFTeUQsUUFBUU0sTUFDcEI3RCxLQUFLTyxpQkFDRixlQUFjUCxLQUFLZSxPQUFPQyxhQUVsQyxDQUVEOEIsb0JBQ0V2QixPQUFPdUMsaUJBQWlCLGFBQWM5RCxLQUFLUyxrQkFDNUMsQ0FFRHVDLHVCQUNFekIsT0FBT3dDLG9CQUFvQixhQUFjL0QsS0FBS1Msa0JBQy9DLGtCQ2pNSHVELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCI7XHJcblxyXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiO1xyXG5cclxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XHJcbmltcG9ydCBtYXAgZnJvbSBcImxvZGFzaC9tYXBcIjtcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiYW5pbWF0aW9ucy9UaXRsZVwiO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcImFuaW1hdGlvbnMvTGFiZWxcIjtcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tIFwiYW5pbWF0aW9ucy9IaWdobGlnaHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcclxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAuLi5lbGVtZW50cyxcclxuICAgICAgYW5pbWF0aW9uc0hpZ2hsaWdodHM6ICdbZGF0YS1hbmltYXRpb249XCJoaWdobGlnaHRcIl0nLFxyXG4gICAgICBhbmltYXRpb25zTGFiZWxzOiAnW2RhdGEtYW5pbWF0aW9uPVwibGFiZWxcIl0nLFxyXG4gICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXHJcbiAgICAgIGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKTtcclxuXHJcbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XHJcblxyXG4gICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgIHRhcmdldDogMCxcclxuICAgICAgbGFzdDogMCxcclxuICAgICAgbGltaXQ6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcclxuXHJcbiAgICAvLyBUaXRsZXNcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnNUaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRpdGxlKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcyk7XHJcblxyXG4gICAgLy8gUGFyYWdyYXBoc1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKTtcclxuXHJcbiAgICAvLyBMYWJlbHNcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnNMYWJlbHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zTGFiZWxzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IExhYmVsKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0xhYmVscyk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0c1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc0hpZ2hsaWdodHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaWdobGlnaHQoe1xyXG4gICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNIaWdobGlnaHRzKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLnRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHBpeGVsWSB9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcclxuICAgICAgMC4xXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xyXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxyXG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDNmZDk5OTY1MmE5MzZkMDhmZGNcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uc0hpZ2hsaWdodHMiLCJhbmltYXRpb25zTGFiZWxzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zVGl0bGVzIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsIm1hcCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiYW5pbWF0aW9ucyIsIlRpdGxlIiwicHVzaCIsIlBhcmFncmFwaCIsIkxhYmVsIiwiSGlnaGxpZ2h0Iiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsInRvIiwib25Db21wbGV0ZSIsImV2ZW50IiwicGl4ZWxZIiwiTm9ybWFsaXplV2hlZWwiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImVhY2giLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9