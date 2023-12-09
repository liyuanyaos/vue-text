import { Howl, Howler } from "howler";
import { getTrackUrl, getTrackDetal } from "@/service/index";
// Howl 加载音乐 播放 暂停
// Howler 全局设置声音大小 播放速度
//播放器的功能
//定义一个属性保存播放歌单
//定义一个方法替换更新播放歌单
let timer = null;
export default class {
  constructor() {
    this.playing = true;
    this.index = 0;
    this.tracks = [];
    // 播放循环模式 0列表循环 1单曲循环
    this.loopMode = 0;
    this.currentTrackann = {};
    this.howl = null;
    // this.playing = false;
    // this.duration = 0;
    // this.progress = 0;
    this.currentTrackDetail = null;
    this.tracks_details = null; //存储歌曲id和歌曲name和歌手名
    this.playing = false; //控制音乐播放状态
    this.propress = 0; //音乐进度条
  }
  interval() {
    clearInterval(timer);
    timer = setInterval(() => {
      this.propress = this.howl.seek() / this.howl.duration();
    }, 1000);
  }
  replaceTracks(tracks, autoplayTrack) {
    this.tracks = tracks;
    // return this.playTrack(autoplayTrack);
    if (autoplayTrack) {
      this.index = this.tracks.indexOf(autoplayTrack);
    }

    this.playTrack(this.tracks[this.index]);
  }
  //播放歌曲的方法
  async playTrack(track) {
    let music_index = this.tracks.findIndex((v) => track == v);
    if (music_index != -1) this.index = music_index;
    const [error, response] = await getTrackUrl(track);
    const [err, res] = await getTrackDetal(track);
    if (error) return alert("请求错误");
    if (err) return alert("请求错误");
    const mp3Url = response.data.data[0].url;
    this.currentTrackDetail = res.data.songs[0];
    if (mp3Url) return this.mountAudioSource(mp3Url, true);
    this.playNextTrack();
  }
  //   async coverTrackMp3Url(track) {
  //     const [error, response] = await getTrackUrl(track);
  //     if (error) return alert("请求错误");
  //     const mp3Url = response.data.data[0].url;
  //     if (mp3Url) return this.mountAudioSource(mp3Url);
  //     this.playNextTrack();
  //   }
  mountAudioSource(url, autoplay = false) {
    Howler.unload();
    this.howl = new Howl({
      src: [url],
      html5: true,
      format: ["mp3"],
    });
    if (autoplay) this.play();
    this.howl.on("end", () => this.playNextTrack());
  }
  play() {
    // if (!this._howl) return;
    // if (this._howl.playing()) return;
    this.playing = true;
    //this.duration = this.howl.duration();
    this.interval();
    this.howl.play();
  }
  pause() {
    this.playing = false;
    this.howl.pause();
  }
  toggle() {
    // console.log(this);
    // console.log(this.playing);
    this.howl.playing() ? this.pause() : this.play();
  }
  //获取需要播放的trackid
  playNextTrack() {
    const nextTrack = this.getNextTrack();
    this.playTrack(nextTrack);
    // this.coverTrackMp3Url(nextTrack);
  }
  getNextTrack() {
    if (this.loopMode === 1) return this.tracks[this.index];
    const currentTrackIsLast = this.index + 1 === this.tracks.length;
    if (currentTrackIsLast && this.loopMode === 0)
      return this.tracks[(this.index = 0)];
    return this.tracks[++this.index];
  }
  setRate(rate) {
    Howler.rate = rate;
  }
  // getTrackDetal() {}
}
