import{_ as e,c as i,o as a,a as l}from"./app.3dfd33b5.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"2021.5.12 Magisk v23.0","slug":"_2021-5-12-magisk-v23-0","link":"#_2021-5-12-magisk-v23-0","children":[{"level":3,"title":"Bug Fixes","slug":"bug-fixes","link":"#bug-fixes","children":[]},{"level":3,"title":"Full Changelog: here","slug":"full-changelog-here","link":"#full-changelog-here","children":[]}]}],"relativePath":"releases/23000.md","lastUpdated":1674222670000}'),s={name:"releases/23000.md"},n=l('<h2 id="_2021-5-12-magisk-v23-0" tabindex="-1">2021.5.12 Magisk v23.0 <a class="header-anchor" href="#_2021-5-12-magisk-v23-0" aria-hidden="true">#</a></h2><p>This release is focused on fixing regressions and bugs.</p><p>Note: Magisk v22 is the last major version to support Jellybean and Kitkat. Magisk v23 only supports Android 5.0 and higher.</p><h3 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a></h3><ul><li>[App] Update snet extension. This fixes SafetyNet API errors.</li><li>[App] Fix a bug in the stub app that causes APK installation to fail</li><li>[App] Hide annoying errors in logs when hidden as stub</li><li>[App] Fix issues when patching ODIN tar files when the app is hidden</li><li>[General] Remove all pre Android 5.0 support</li><li>[General] Update BusyBox to use proper libc</li><li>[General] Fix C++ undefined behaviors</li><li>[General] Several <code>sepolicy.rule</code> copy/installation fixes</li><li>[MagiskPolicy] Remove unnecessary sepolicy rules</li><li>[MagiskHide] Update package and process name validation logic</li><li>[MagiskHide] Some changes that prevents zygote deadlock</li></ul><h3 id="full-changelog-here" tabindex="-1">Full Changelog: <a href="/MagiskChineseDocument/changes.html">here</a> <a class="header-anchor" href="#full-changelog-here" aria-hidden="true">#</a></h3>',6),t=[n];function r(o,h,d,c,g,p){return a(),i("div",null,t)}const f=e(s,[["render",r]]);export{_ as __pageData,f as default};