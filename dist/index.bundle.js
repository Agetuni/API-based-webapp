(self.webpackChunkwebpack_init_project=self.webpackChunkwebpack_init_project||[]).push([[826],{421:()=>{},138:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{n(421);var a=n(747),o=n.n(a),c=n(259),s=n.n(c);let t="https://api.tvmaze.com/shows";const i=()=>{const t=document.getElementById("title-template").cloneNode(!0);t.textContent="API-based-webap",document.querySelector("main").appendChild(t)},d=async()=>{i()};window.addEventListener("load",d);const l=await o().getTvShows(t);await s().displayTvShows(l),s().addModal(),e()}catch(t){e(t)}}),1)},747:t=>{t.exports={getTvShows:async t=>(await fetch(t)).json(),getlike:async t=>(await fetch(t,{method:"GET"})).json(),like:async(t,e)=>{await fetch(t,{method:"POST",body:JSON.stringify({item_id:e}),headers:{"Content-type":"application/json; charset=UTF-8"}})},getComment:async(t,e)=>{let n=await fetch(`${t}?item_id=${e}`);return 400===n.status?(n=[],n):n.json()},comment:async(t,e,n,a)=>(await fetch(t,{method:"POST",body:JSON.stringify({item_id:e,username:n,comment:a}),headers:{"Content-type":"application/json; charset=UTF-8"}})).status}},259:t=>{const e=document.querySelector(".flex-container");t.exports={displayTvShows:async t=>{let n="";t.forEach((t=>{const{id:e}=t,{name:a}=t,o=t.image.medium;n+=`\n<div class="shows">\n   <div id="1">\n     ${e}  ${a}\n   </div>\n   <div class="img-container">\n     <img src="${o}" alt="photo">\n   </div>\n   <div class="reaction">\n     <button>like</button>\n     <button class="comment">comment</button>\n   </div>\n</div>\n`})),e.innerHTML=n},addModal:async()=>{var t=document.getElementById("myModal"),e=document.querySelectorAll(".comment");document.querySelector(".close").addEventListener("click",(function(){t.style.display="none"})),e.forEach((e=>{e.addEventListener("click",(function(){t.style.display="block"}))}))}}}},t=>{t(t.s=138)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI0TUFHQSxJQUFJQSxFQUFVLCtCQUNkLE1BQU1DLEVBQWUsS0FDbkIsTUFDTUMsRUFEdUJDLFNBQVNDLGVBQWUsa0JBQ1JDLFdBQVUsR0FFdkRILEVBQWdCSSxZQUFjLGtCQUU5QkgsU0FBU0ksY0FBYyxRQUFRQyxZQUFZTixFQUFnQixFQUd2RE8sRUFBT0MsVUFDWFQsR0FBYyxFQUVoQlUsT0FBT0MsaUJBQWlCLE9BQVFILEdBR2hDLE1BQU1JLFFBQWUsZUFBc0JiLFNBQ3JDLG1CQUEwQmEsR0FFaEMsZSxpQ0NxQkFDLEVBQU9DLFFBQVUsQ0FDZkMsV0E1Q2lCTixNQUFPTyxVQUNEQyxNQUFNRCxJQUNiRSxPQTBDSkMsUUF2Q0VWLE1BQU9PLFVBQ0VDLE1BQU1ELEVBQUssQ0FBRUksT0FBUSxTQUM1QkYsT0FxQ0tHLEtBbkNWWixNQUFPTyxFQUFLTSxXQUNqQkwsTUFBTUQsRUFBSyxDQUNmSSxPQUFRLE9BQ1JHLEtBQU1DLEtBQUtDLFVBQVUsQ0FDbkJDLFFBQVNKLElBRVhLLFFBQVMsQ0FDUCxlQUFnQixvQ0FFbEIsRUEwQnlCQyxXQXhCVm5CLE1BQU9PLEVBQUtNLEtBQzdCLElBQUlPLFFBQWlCWixNQUFNLEdBQUdELGFBQWVNLEtBQzdDLE9BQXdCLE1BQXBCTyxFQUFTQyxRQUNYRCxFQUFXLEdBQ0pBLEdBRUZBLEVBQVNYLE1BQU0sRUFrQmlCYSxRQWZ6QnRCLE1BQU9PLEVBQUtnQixFQUFRQyxFQUFVRixXQUNyQmQsTUFBTUQsRUFBSyxDQUNoQ0ksT0FBUSxPQUNSRyxLQUFNQyxLQUFLQyxVQUFVLENBQ25CQyxRQUFTTSxFQUNUQyxXQUNBRixZQUVGSixRQUFTLENBQ1AsZUFBZ0Isc0NBR0pHLE8sVUN6Q2xCLE1BQU1JLEVBQVloQyxTQUFTSSxjQUFjLG1CQXNDekNPLEVBQU9DLFFBQVUsQ0FBRXFCLGVBckNJMUIsTUFBT0csSUFDNUIsSUFBSXdCLEVBQVcsR0FDZnhCLEVBQU95QixTQUFTQyxJQUNkLE1BQU0sR0FBRWhCLEdBQU9nQixHQUNULEtBQUVDLEdBQVNELEVBQ1hFLEVBQVFGLEVBQUVFLE1BQU1DLE9BQ3RCTCxHQUFZLGdEQUdUZCxNQUFPaUIsZ0VBR0dDLHVKQU9oQixJQUVDTixFQUFVUSxVQUFZTixDQUFRLEVBZ0JHTyxTQWJsQmxDLFVBQ2IsSUFBSW1DLEVBQVExQyxTQUFTQyxlQUFlLFdBQ2hDMEMsRUFBaUIzQyxTQUFTNEMsaUJBQWlCLFlBQzNCNUMsU0FBU0ksY0FBYyxVQUMvQkssaUJBQWlCLFNBQVMsV0FDbENpQyxFQUFNRyxNQUFNQyxRQUFVLE1BQ3hCLElBQ0ZILEVBQWVSLFNBQVFZLElBQ25CQSxFQUFRdEMsaUJBQWlCLFNBQVMsV0FDOUJpQyxFQUFNRyxNQUFNQyxRQUFVLE9BQ3hCLEdBQUUsR0FDTixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbml0LXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbml0LXByb2plY3QvLi9zcmMvbW9kdWxlL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbml0LXByb2plY3QvLi9zcmMvbW9kdWxlL2RvbVNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgYXBpU2VydmljZSBmcm9tICcuL21vZHVsZS9hcGlTZXJ2aWNlLmpzJztcclxuaW1wb3J0IGRvbVNlcnZpY2UgZnJvbSAnLi9tb2R1bGUvZG9tU2VydmljZS5qcyc7XHJcbmxldCBtb3ZpZXNVcmw9XCJodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzXCI7XHJcbmNvbnN0IGluaXRUZW1wbGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCB0aXRsZVRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS10ZW1wbGF0ZScpO1xyXG4gIGNvbnN0IG5ld3RpdGxlRWxlbWVudCA9IHRpdGxlVGVtcGxhdGVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgbmV3dGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gJ0FQSS1iYXNlZC13ZWJhcCc7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChuZXd0aXRsZUVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICBpbml0VGVtcGxhdGUoKTtcclxufTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcclxuXHJcbi8vIGFsYXphclxyXG5jb25zdCBtb3ZpZXMgPSBhd2FpdCBhcGlTZXJ2aWNlLmdldFR2U2hvd3MobW92aWVzVXJsKTtcclxuYXdhaXQgZG9tU2VydmljZS5kaXNwbGF5VHZTaG93cyhtb3ZpZXMpO1xyXG5cclxuZG9tU2VydmljZS5hZGRNb2RhbCgpO1xyXG5cclxuIiwiY29uc3QgZ2V0VHZTaG93cyA9IGFzeW5jICh1cmwpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmNvbnN0IGdldGxpa2UgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5jb25zdCBsaWtlID0gYXN5bmMgKHVybCwgaWQpID0+IHtcclxuICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBpZCxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfT9pdGVtX2lkPSR7aWR9YCk7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICByZXNwb25zZSA9IFtdO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3QgY29tbWVudCA9IGFzeW5jICh1cmwsIGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0VHZTaG93cywgZ2V0bGlrZSwgbGlrZSwgZ2V0Q29tbWVudCwgY29tbWVudCxcclxufTtcclxuIiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbGV4LWNvbnRhaW5lclwiKTtcclxuY29uc3QgZGlzcGxheVR2U2hvd3MgPSBhc3luYyAobW92aWVzKSA9PiB7XHJcbiAgbGV0IGZpbG1EYXRhID0gXCJcIjtcclxuICBtb3ZpZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gZTtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gZTtcclxuICAgIGNvbnN0IGltYWdlID0gZS5pbWFnZS5tZWRpdW07XHJcbiAgICBmaWxtRGF0YSArPSBgXHJcbjxkaXYgY2xhc3M9XCJzaG93c1wiPlxyXG4gICA8ZGl2IGlkPVwiMVwiPlxyXG4gICAgICR7aWR9ICAke25hbWV9XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJwaG90b1wiPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cInJlYWN0aW9uXCI+XHJcbiAgICAgPGJ1dHRvbj5saWtlPC9idXR0b24+XHJcbiAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnRcIj5jb21tZW50PC9idXR0b24+XHJcbiAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuICB9KTtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gZmlsbURhdGE7XHJcbn07XHJcblxyXG5jb25zdCBhZGRNb2RhbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcclxuICAgIHZhciBjb21tZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tbWVudFwiKTtcclxuICAgIGNvbnN0IGNsb3NlYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuICAgIGNsb3NlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSk7XHJcbiAgICBjb21tZW50QnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZGlzcGxheVR2U2hvd3MgLGFkZE1vZGFsfTtcclxuIl0sIm5hbWVzIjpbIm1vdmllc1VybCIsImluaXRUZW1wbGF0ZSIsIm5ld3RpdGxlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9uZU5vZGUiLCJ0ZXh0Q29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImluaXQiLCJhc3luYyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0VHZTaG93cyIsInVybCIsImZldGNoIiwianNvbiIsImdldGxpa2UiLCJtZXRob2QiLCJsaWtlIiwiaWQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW1faWQiLCJoZWFkZXJzIiwiZ2V0Q29tbWVudCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29tbWVudCIsIml0ZW1JZCIsInVzZXJuYW1lIiwiY29udGFpbmVyIiwiZGlzcGxheVR2U2hvd3MiLCJmaWxtRGF0YSIsImZvckVhY2giLCJlIiwibmFtZSIsImltYWdlIiwibWVkaXVtIiwiaW5uZXJIVE1MIiwiYWRkTW9kYWwiLCJtb2RhbCIsImNvbW1lbnRCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInN0eWxlIiwiZGlzcGxheSIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9