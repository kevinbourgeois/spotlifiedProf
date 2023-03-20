const e="https://webmob-ui-22-spotlified.herokuapp.com",t=e=>fetch(e).then((e=>e.json())),r=r=>t(`${e}/api/songs/search/${encodeURIComponent(r)}`),a=document.querySelector("#artist-list-item-template"),i=document.querySelector(".artist-list");var s=()=>{i.replaceChildren(),t(`${e}/api/artists`).then((e=>{e.forEach((e=>{const t=a.content.cloneNode(!0);t.querySelector("a").href="#artists-"+e.id,t.querySelector(".artist-list-item-title").innerHTML=e.name,t.querySelector("img").src=e.image_url,i.append(t)}))}))};function o(e){e=parseInt(e,10);let t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60),a=e-3600*t-60*r;return r<10&&(r="0"+r),a<10&&(a="0"+a),r+":"+a}var n=new class{#e=document.querySelector("#audio-player");#t=document.querySelector("#player-thumbnail-image");#r=document.querySelector("#player-infos-song-title");#a=document.querySelector("#player-infos-artist-name");#i=document.querySelector("#player-control-previous");#s=document.querySelector("#player-control-play");#o=document.querySelector("#player-control-play .material-icons");#n=document.querySelector("#player-control-next");#l=document.querySelector("#player-time-current");#c=document.querySelector("#player-time-duration");#u=document.querySelector("#player-progress-bar");#d=document.querySelector("#logo");songList=[];currentSong=null;constructor(){this.#s.addEventListener("click",(()=>{this.#e.paused?this.#e.play():this.#e.pause()})),this.#i.addEventListener("click",(()=>this.playPreviousSong())),this.#n.addEventListener("click",(()=>this.playNextSong())),this.#u.addEventListener("change",(e=>{this.#e.currentTime=e.currentTarget.value})),this.#e.addEventListener("durationchange",(()=>{this.#u.max=this.#e.duration,this.#c.innerText=o(this.#e.duration)})),this.#e.addEventListener("timeupdate",(()=>{this.#u.value=this.#e.currentTime,this.#l.innerText=o(this.#e.currentTime)})),this.#e.addEventListener("play",(()=>this.#y())),this.#e.addEventListener("pause",(()=>this.#y()))}playSong(e,t){this.currentSong=e,t&&(this.songList=t),this.#e.src=e.audio_url,this.#e.play(),this.#r.innerHTML=e.title,this.#a.innerHTML=e.artist.name,this.#t.src=e.artist.image_url}playNextSong(){const e=this.songList.indexOf(this.currentSong)+1;e<this.songList.length?this.playSong(this.songList[e]):this.playSong(this.songList[0])}playPreviousSong(){const e=this.songList.indexOf(this.currentSong)-1;e>=0?this.playSong(this.songList[e]):this.playSong(this.songList[this.songList.length-1])}#y(){this.#e.paused?(this.#o.innerHTML="play_arrow",this.#d.classList.remove("animated")):(this.#o.innerHTML="pause",this.#d.classList.add("animated"))}};const l=document.querySelector("#list-item-template"),c=document.querySelector(".list"),u=e=>{c.replaceChildren(),e.forEach((t=>{const r=l.content.cloneNode(!0);r.querySelector(".list-item-title").innerHTML=t.title,r.querySelector(".play-button").addEventListener("click",(()=>{n.playSong(t,e),window.location.hash="#player"})),c.append(r)}))},d=r=>{var a;(a=r,t(`${e}/api/artists/${a}/songs`)).then((e=>{document.querySelector("#list-section h4").textContent=`Artistes > ${e[0].artist.name}`,u(e)}))},y=e=>{r(e).then((t=>{document.querySelector("#list-section h4").textContent=`Résultats pour "${e}"`,u(t)}))},h=document.querySelector("#search-trigger"),p=document.querySelector("#search-input");h.addEventListener("click",(()=>{p.classList.add("active"),p.focus()})),p.addEventListener("blur",(()=>{p.classList.remove("active"),p.value=""})),p.addEventListener("change",(()=>{window.location.hash=`#search-${encodeURIComponent(p.value)}`}));const m=e=>{document.querySelector("section.active")?.classList.remove("active"),document.querySelector(`${e}-section`)?.classList.add("active")},g=e=>{""==e&&(e="#home");const t=e.split("-");switch((e=>{document.querySelector("nav a.active")?.classList.remove("active"),document.querySelector(`nav a[href="${e}"]`)?.classList.add("active")})(t[0]),m(t[0]),t[0]){case"#artists":t[1]?(m("#list"),d(t[1])):s();break;case"#search":m("#list"),y(t[1]);break;case"#favorites":m("#list")}};window.addEventListener("hashchange",(()=>g(window.location.hash))),g(window.location.hash);
//# sourceMappingURL=index.b97bb1b9.js.map
