import{_ as r,c as o,e as a,b as l,d as s,a as p,r as n,o as c}from"./app.e80040ee.js";const h="/MagiskChineseDocument/images/logo.png",D=JSON.parse('{"title":"Magisk 中文文档","titleTemplate":"Magisk 中文文档","description":"","frontmatter":{"aside":false,"title":"Magisk 中文文档","titleTemplate":"Magisk 中文文档"},"headers":[{"level":2,"title":"Magisk 许可（License）","slug":"magisk-许可-license","link":"#magisk-许可-license","children":[{"level":3,"title":"中文汉化（百度翻译）","slug":"中文汉化-百度翻译","link":"#中文汉化-百度翻译","children":[]},{"level":3,"title":"英文原版","slug":"英文原版","link":"#英文原版","children":[]}]}],"relativePath":"index.md","lastUpdated":1673281957000}'),d={name:"index.md"},g={id:"magisk-中文文档",tabindex:"-1"},u=l("a",{class:"header-anchor",href:"#magisk-中文文档","aria-hidden":"true"},"#",-1),A=p('<p><img src="'+h+`" alt="logo"> 本文档根据 <a href="https://topjohnwu.github.io/Magisk/" target="_blank" rel="noreferrer">Magisk 官方文档</a> 进行翻译，并补充了一些内容。</p><p>原始文档版本：2022年11月16日</p><ul><li><a href="./install.html">安装说明</a></li><li><a href="./faq.html">常见问题</a></li><li><a href="./releases/">发布日志</a></li><li><a href="./changes.html">Magisk 更新日志</a></li></ul><h4 id="以下部分面向开发人员" tabindex="-1">以下部分面向开发人员 <a class="header-anchor" href="#以下部分面向开发人员" aria-hidden="true">#</a></h4><ul><li><a href="./guides.html">开发者指南</a></li><li><a href="./tools.html">Magisk 工具</a></li><li><a href="./details.html">内部细节</a></li><li><a href="./boot.html">Android 引导诡计</a></li></ul><h4 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-hidden="true">#</a></h4><ul><li><a href="https://github.com/topjohnwu/Magisk" target="_blank" rel="noreferrer">Magisk 官方仓库</a></li><li><a href="https://topjohnwu.github.io/Magisk/" target="_blank" rel="noreferrer">Magisk 官方文档</a></li><li><a href="https://huskydg.github.io/magisk-files/" target="_blank" rel="noreferrer">Magisk Delta</a></li></ul><h2 id="magisk-许可-license" tabindex="-1">Magisk 许可（License） <a class="header-anchor" href="#magisk-许可-license" aria-hidden="true">#</a></h2><h3 id="中文汉化-百度翻译" tabindex="-1">中文汉化（百度翻译） <a class="header-anchor" href="#中文汉化-百度翻译" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Magisk，包括所有 git 子模块都是自由软件：</span></span>
<span class="line"><span style="color:#A6ACCD;">您可以根据自由软件基金会发布的 GNU 通用公共许可证的条款（许可证的第3版，</span></span>
<span class="line"><span style="color:#A6ACCD;">或（根据您的选择）任何更高版本重新分发和/或修改它。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">分发此程序是希望它有用，但没有任何保证；甚至没有适销性或特定用途适用性</span></span>
<span class="line"><span style="color:#A6ACCD;">的隐含保证。有关详细信息，请参阅GNU通用公共许可证。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">你应该已经收到了GNU通用公共许可证的副本以及这个程序。如果没有，请参见</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;http://www.gnu.org/licenses/&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="英文原版" tabindex="-1">英文原版 <a class="header-anchor" href="#英文原版" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Magisk, including all git submodules are free software:</span></span>
<span class="line"><span style="color:#A6ACCD;">you can redistribute it and/or modify it under the terms of the</span></span>
<span class="line"><span style="color:#A6ACCD;">GNU General Public License as published by the Free Software Foundation,</span></span>
<span class="line"><span style="color:#A6ACCD;">either version 3 of the License, or (at your option) any later version.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This program is distributed in the hope that it will be useful,</span></span>
<span class="line"><span style="color:#A6ACCD;">but WITHOUT ANY WARRANTY; without even the implied warranty of</span></span>
<span class="line"><span style="color:#A6ACCD;">MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></span>
<span class="line"><span style="color:#A6ACCD;">GNU General Public License for more details.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">You should have received a copy of the GNU General Public License</span></span>
<span class="line"><span style="color:#A6ACCD;">along with this program.  If not, see &lt;http://www.gnu.org/licenses/&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12);function C(i,m,f,k,_,y){const t=n("VPTeamMembers"),e=n("Badge");return c(),o("div",null,[a(t,{size:"small",members:i.members},null,8,["members"]),l("h1",g,[s("Magisk 中文文档 "),a(e,{type:"tip",text:"由 Jesse205 翻译"}),s(),a(e,{type:"warning",text:"非官方"}),s(),u]),A])}const M=r(d,[["render",C]]);export{D as __pageData,M as default};
