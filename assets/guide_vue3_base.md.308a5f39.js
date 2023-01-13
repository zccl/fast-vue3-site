import{_ as s,c as n,o as a,a as p}from"./app.66ecbb9d.js";const A=JSON.parse('{"title":"vite.config.ts \u57FA\u7840\u914D\u7F6E","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue3/base.md","lastUpdated":1673601216000}'),l={name:"guide/vue3/base.md"},o=p(`<h1 id="vite-config-ts-\u57FA\u7840\u914D\u7F6E" tabindex="-1">vite.config.ts \u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#vite-config-ts-\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u5982\u679C\u4F60\u7684 <code>Vue Router</code> \u6A21\u5F0F\u662F hash</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FFCB6B;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u7684 <code>Vue Router</code> \u6A21\u5F0F\u662F history \u8FD9\u91CC\u7684 publicPath \u548C\u4F60\u7684 <code>Vue Router</code> <code>base</code> <strong>\u4FDD\u6301\u4E00\u81F4</strong></p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FFCB6B;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/app/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UserConfig</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ConfigEnv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createVitePlugins</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/vite/plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/vite/proxy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_PORT</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/constant</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pathResolve</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cwd</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dir</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">command</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConfigEnv</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isBuild</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">command</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">base</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">command</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">base</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/fast-vue3/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">base</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">base</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    resolve</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      alias</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          find</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-i18n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          replacement</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-i18n/dist/vue-i18n.cjs.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// /@/xxxx =&gt; src/xxxx</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          find</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">@</span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          replacement</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">pathResolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// /#/xxxx =&gt; types/xxxx</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          find</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">#</span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          replacement</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">pathResolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// plugins</span></span>
<span class="line"><span style="color:#F07178;">    plugins</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createVitePlugins</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">isBuild</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// css</span></span>
<span class="line"><span style="color:#F07178;">    css</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// server</span></span>
<span class="line"><span style="color:#F07178;">    server</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      hmr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> overlay</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7981\u7528\u6216\u914D\u7F6E HMR \u8FDE\u63A5 \u8BBE\u7F6E server.hmr.overlay \u4E3A false \u53EF\u4EE5\u7981\u7528\u670D\u52A1\u5668\u9519\u8BEF\u906E\u7F69\u5C42</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u670D\u52A1\u914D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">      port</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_PORT</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7C7B\u578B\uFF1A number \u6307\u5B9A\u670D\u52A1\u5668\u7AEF\u53E3;</span></span>
<span class="line"><span style="color:#F07178;">      open</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7C7B\u578B\uFF1A boolean | string\u5728\u670D\u52A1\u5668\u542F\u52A8\u65F6\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F\uFF1B</span></span>
<span class="line"><span style="color:#F07178;">      cors</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7C7B\u578B\uFF1A boolean | CorsOptions \u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E CORS\u3002\u9ED8\u8BA4\u542F\u7528\u5E76\u5141\u8BB8\u4EFB\u4F55\u6E90</span></span>
<span class="line"><span style="color:#F07178;">      host</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// IP\u914D\u7F6E\uFF0C\u652F\u6301\u4ECEIP\u542F\u52A8</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">proxy</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
