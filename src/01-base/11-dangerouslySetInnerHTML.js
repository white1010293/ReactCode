import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myHtml:`<div class="layerout1200">
        <h3><span class="fl">M图文·深度报道</span><a href="https://www.1905.com/news/cehua/" class="fr" target="_blank">更多</a></h3>
        <ul class="clearfix">
                        <li>
                <a href="https://www.1905.com/news/20220313/1567814.shtml" class="depth-report-img picHover" target="_blank" title="盘点激励人心的体育电影 感受运动带来的神奇能量">
                    <img src="https://image13.m1905.cn/uploadfile/2022/0313/thumb_1_285_160_20220313092912545370.jpg" data-original="https://image13.m1905.cn/uploadfile/2022/0313/thumb_1_285_160_20220313092912545370.jpg" alt="盘点激励人心的体育电影 感受运动带来的神奇能量" style="display: inline;">
                                    </a>
                <p class="depth-report-infos"><a href="https://www.1905.com/news/20220313/1567814.shtml" target="_blank" title="盘点激励人心的体育电影 感受运动带来的神奇能量">盘点激励人心的体育电影 感受运动带来的神奇能量</a></p>
            </li>
                        <li>
                <a href="https://www.1905.com/news/20220311/1567590.shtml" class="depth-report-img picHover" target="_blank" title="整破防了！用一首歌的时间，让你记住他们的故事">
                    <img src="https://image13.m1905.cn/uploadfile/2022/0311/thumb_1_285_160_20220311100800962283.jpg" data-original="https://image13.m1905.cn/uploadfile/2022/0311/thumb_1_285_160_20220311100800962283.jpg" alt="整破防了！用一首歌的时间，让你记住他们的故事" style="display: inline;">
                                    </a>
                <p class="depth-report-infos"><a href="https://www.1905.com/news/20220311/1567590.shtml" target="_blank" title="整破防了！用一首歌的时间，让你记住他们的故事">整破防了！用一首歌的时间，让你记住他们的故事</a></p>
            </li>
                        <li>
                <a href="https://www.1905.com/news/20220309/1567097.shtml" class="depth-report-img picHover" target="_blank" title="听见“women”的声音！那些影视中的“她”力量">
                    <img src="https://image14.m1905.cn/uploadfile/2022/0309/thumb_1_285_160_20220309100618494554.jpg" data-original="https://image14.m1905.cn/uploadfile/2022/0309/thumb_1_285_160_20220309100618494554.jpg" alt="听见“women”的声音！那些影视中的“她”力量" style="display: inline;">
                                    </a>
                <p class="depth-report-infos"><a href="https://www.1905.com/news/20220309/1567097.shtml" target="_blank" title="听见“women”的声音！那些影视中的“她”力量">听见“women”的声音！那些影视中的“她”力量</a></p>
            </li>
                        <li class="margin0">
                <a href="https://www.1905.com/news/20220308/1566906.shtml" class="depth-report-img picHover" target="_blank" title="暴瘦30斤、险些辞演…跨界的他银幕首秀有点精彩">
                    <img src="https://static.m1905.cn/images/home/pixel.gif" data-original="https://image14.m1905.cn/uploadfile/2022/0309/thumb_1_285_160_20220309114919771914.jpg" alt="暴瘦30斤、险些辞演…跨界的他银幕首秀有点精彩">
                                    </a>
                <p class="depth-report-infos"><a href="https://www.1905.com/news/20220308/1566906.shtml" target="_blank" title="暴瘦30斤、险些辞演…跨界的他银幕首秀有点精彩">暴瘦30斤、险些辞演…跨界的他银幕首秀有点精彩</a></p>
            </li>
                    </ul>
    </div>
    `
  }
  render() {
    return (
      <div>
        <span dangerouslySetInnerHTML={{__html:this.state.myHtml}}></span>
      </div>
    )
  }
}
