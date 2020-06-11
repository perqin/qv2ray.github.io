(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(t,a,s){"use strict";s.r(a);var v=s(25),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h2",{attrs:{id:"v2ray-核心无法启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-核心无法启动"}},[t._v("#")]),t._v(" V2Ray 核心无法启动")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("有些提示信息需要在"),s("strong",[t._v("内核设置")]),t._v("中将"),s("strong",[t._v("日志等级")]),t._v("设为"),s("strong",[t._v("信息")]),t._v("或"),s("strong",[t._v("调试")]),t._v("才能看到。")])]),t._v(" "),s("h3",{attrs:{id:"_1-提示-only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-提示-only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[t._v("#")]),t._v(" 1. 提示 "),s("code",[t._v("Only one usage of each socket address (protocol/network address/port) is normally permitted.")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("本质")]),t._v("：发生了端口冲突。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("原因 1")]),t._v("：先前的 V2Ray 进程未正常退出，占用了相关端口。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案（Windows 系统）")]),t._v("：通过任务管理器或 "),s("code",[t._v("taskkill /f /im <进程名>")]),t._v(" 结束 "),s("code",[t._v("v2ray.exe")]),t._v(" 或 "),s("code",[t._v("wv2ray.exe")]),t._v(" 进程。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("方法 1")]),t._v("：在任务管理器的 "),s("code",[t._v("详细信息")]),t._v(" 选项卡中，找到 "),s("code",[t._v("v2ray.exe")]),t._v(" 或 "),s("code",[t._v("wv2ray.exe")]),t._v(" 进程，右键点击进程名称，"),s("code",[t._v("结束任务")]),t._v("、"),s("code",[t._v("结束任务")]),t._v(" 即可。"),s("s",[t._v("科学严谨 XD")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("方法 2")]),t._v("：打开 "),s("code",[t._v("cmd")]),t._v(" 或 "),s("code",[t._v("powershell")]),t._v("，执行如下命令：")])])])])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("taskkill "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("im v2ray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\ntaskkill "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("im wv2ray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n")])])]),s("ul",[s("li",[s("p",[s("strong",[t._v("解决方案（Linux 系统）")]),t._v("："),s("s",[t._v("你都用Linux了……杀进程还不会吗？")]),t._v(" 通过 "),s("code",[t._v("ps aux | grep v2ray")]),t._v(" 找到进程号，再用 "),s("code",[t._v("kill -9 <进程号>")]),t._v(" 结束进程。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("原因 2")]),t._v("：Qv2ray 中设定的相关端口已被其他软件占用。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("：变更 Qv2ray 或其他软件的端口设置。")])])]),t._v(" "),s("h3",{attrs:{id:"_2-提示-an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-提示-an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[t._v("#")]),t._v(" 2. 提示 "),s("code",[t._v("An attempt was made to access a socket in a way forbidden by its access permissions.")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("原因")]),t._v("：如果你使用的是 Windows 系统，那么应该是某个 Windows 补丁将端口号在 "),s("code",[t._v("1000-2000")]),t._v(" 之间的某段端口设了为特权/保留端口。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("：更换为大于 "),s("code",[t._v("2000")]),t._v(" 的端口号即可。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-开启-tproxy-之后，v2ray-core-会启动失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-开启-tproxy-之后，v2ray-core-会启动失败"}},[t._v("#")]),t._v(" 3. 开启 tProxy 之后，V2ray Core 会启动失败")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("细节")]),t._v("：开启 tProxy 后，会提示 "),s("code",[t._v("Segmentation Fault（段错误）")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("原因")]),t._v("：这个问题是一些 Linux 系统的 "),s("code",[t._v("SUID")]),t._v(" 特性受限制所导致的。详细的错误分析请参阅 "),s("a",{attrs:{href:"https://github.com/lhy0403/Qv2ray/issues/59",target:"_blank",rel:"noopener noreferrer"}},[t._v("#59"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("："),s("code",[t._v("sudo sysctl fs.suid_dumpable=1")]),s("br"),t._v("\n这个解决方案会在重启后失效。如果你希望保持这个选项，请参阅 "),s("a",{attrs:{href:"http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"_4-内核报错-255"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-内核报错-255"}},[t._v("#")]),t._v(" 4. 内核报错 "),s("code",[t._v("255")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("原因")]),t._v("：V2Ray 核心没有"),s("strong",[t._v("运行")]),t._v("权限，这一问题发生在 POSIX 系统（Linux、macOS）上。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("：在 V2Ray 核心目录中 执行 "),s("code",[t._v("chmod +x v2ray && chmod +x v2ctl")]),t._v("，或通过文件管理器给予运行权限。在 macOS 下可以直接双击这两个程序，系统会自动提示是否运行 UNIX 程序，选择“运行”即可给予其运行权限。")])])]),t._v(" "),s("h2",{attrs:{id:"严重故障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#严重故障"}},[t._v("#")]),t._v(" 严重故障")]),t._v(" "),s("h3",{attrs:{id:"_1-不能执行-appimage-权限不够（cannot-execute-appimage-permission-denied）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-不能执行-appimage-权限不够（cannot-execute-appimage-permission-denied）"}},[t._v("#")]),t._v(" 1. 不能执行 AppImage: 权限不够（Cannot execute AppImage: Permission denied）")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("原因")]),t._v("：……在执行一个程序之前，必须给予它可执行权限。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("："),s("code",[t._v("chmod +x Qv2ray.AppImage")])])])]),t._v(" "),s("h2",{attrs:{id:"连接问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接问题"}},[t._v("#")]),t._v(" 连接问题")]),t._v(" "),s("h3",{attrs:{id:"_1-已确认设置正确但无法连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-已确认设置正确但无法连接"}},[t._v("#")]),t._v(" 1. 已确认设置正确但无法连接")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("可能原因")]),t._v("：系统时间不同步。V2Ray 要求通信双方的系统时间相差在 90 秒以内，否则会拒绝连接。")]),t._v(" "),s("li",[s("strong",[t._v("解决方案（Windows）")]),t._v("：\n"),s("ul",[s("li",[s("strong",[t._v("方法一")]),t._v("：打开设置，选择“时间和语言”，然后启用“自动设置时间”选项即可。如果选项已启用，请点击”立即同步“按钮。")]),t._v(" "),s("li",[s("strong",[t._v("方法二")]),t._v("：打开控制面板，切换查看方式为“类别”，选择“时钟和区域”，点击  “日期和时间”，在弹出的对话框中选择“Internet 时间”，点击“更改设置”按钮，再勾选“与 Internet 时间服务器同步”，最后点击“确认”。")])])]),t._v(" "),s("li",[s("strong",[t._v("解决方案（Linux）")]),t._v("：\n"),s("ul",[s("li",[s("strong",[t._v("方法一")]),t._v("：使用 "),s("code",[t._v("systemd-timesyncd")]),t._v("，执行 "),s("code",[t._v("sudo systemctl enable systemd-timesyncd --now")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("方法二")]),t._v("：使用 "),s("a",{attrs:{href:"https://www.chrony.tuxfamily.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrony"),s("OutboundLink")],1),t._v(" 同步时间。")])])]),t._v(" "),s("li",[s("strong",[t._v("解决方案（macOS）")]),t._v("：打开系统偏好设置，点击“日期与时间”，在“日期与时间”标签页下启用“自动设置日期与时间”。")])]),t._v(" "),s("h3",{attrs:{id:"_2-为什么我在百度查询到的-ip-仍然在国内？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么我在百度查询到的-ip-仍然在国内？"}},[t._v("#")]),t._v(" 2. 为什么我在百度查询到的 IP 仍然在国内？")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("原因")]),t._v(" Qv2ray 默认设置为不代理国内流量。")]),t._v(" "),s("li",[s("strong",[t._v("解决方案")]),t._v("：使用国外网站查询 IP（如在 Google 搜索 "),s("code",[t._v("What is my IP")]),t._v(" 或访问 "),s("a",{attrs:{href:"https://ip.sb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ip.sb"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_3-我想要代理国内流量（全局代理）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-我想要代理国内流量（全局代理）"}},[t._v("#")]),t._v(" 3. 我想要代理国内流量（全局代理）")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/getting-started/step5.html#调整路由方案"}},[s("strong",[t._v("解决方案")])])],1)]),t._v(" "),s("h2",{attrs:{id:"性能问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能问题"}},[t._v("#")]),t._v(" 性能问题")]),t._v(" "),s("h3",{attrs:{id:"_1-感觉-qv2ray-打开网页-切换连接的速度比其他代理软件慢得多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-感觉-qv2ray-打开网页-切换连接的速度比其他代理软件慢得多"}},[t._v("#")]),t._v(" 1. 感觉 Qv2ray 打开网页/切换连接的速度比其他代理软件慢得多")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("原因")]),t._v("：Qv2ray 默认开启的 "),s("code",[t._v("V2Ray 集成")]),t._v(" 会让由插件提供支持的协议（如SSR、Trojan）的流量完整地通过一遍 "),s("RouterLink",{attrs:{to:"/plugins/v2ray-integration.html"}},[t._v("V2Ray 路由")]),t._v("，以实现高级路由功能，但"),s("s",[t._v("在低配设备上")]),t._v("会导致延迟明显增大。")],1)]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("：在 "),s("code",[t._v("首选项")]),t._v(" 的 "),s("code",[t._v("内核设置")]),t._v(" 选项卡中关闭 "),s("code",[t._v("V2Ray 集成")]),t._v(" 可以提升由插件提供支持的协议的响应速度，但相关协议将会失去 "),s("code",[t._v("高级路由")]),t._v("、"),s("code",[t._v("绕过中国大陆")]),t._v("、"),s("code",[t._v("本地地址直连")]),t._v(" 和 "),s("code",[t._v("自定义DNS")]),t._v(" 功能，这意味着相关协议的路由/分流功能将完全失效，即只能全局代理，无法分流。请注意，该选项不影响由 V2Ray 内核提供支持的协议（如VMess）。也就是说，如果你仅使用由 V2Ray 内核提供支持的协议，开关该功能不会有任何影响。")])]),t._v(" "),s("li",[s("p",[t._v("此外，在杀毒软件"),s("s",[t._v("尤其是 Microsoft Defender")]),t._v("中将 V2Ray 核心设置为白名单程序，也可能会提升响应速度。"),s("s",[t._v("未经科学验证的玄学")])])])]),t._v(" "),s("h2",{attrs:{id:"软件行为-外观问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件行为-外观问题"}},[t._v("#")]),t._v(" 软件行为 / 外观问题")]),t._v(" "),s("h3",{attrs:{id:"_1-qv2ray-在-gnome-上的托盘图标会偶尔消失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-qv2ray-在-gnome-上的托盘图标会偶尔消失"}},[t._v("#")]),t._v(" 1. Qv2ray 在 GNOME 上的托盘图标会偶尔消失")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("原因")]),t._v("：这一点已经确认了是上游的 bug。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("解决方案")]),t._v("：作为权宜之计，你可以运行这条命令：")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" gnome-shell --replace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("ul",[s("li",[t._v("最后插一嘴，KDE真香。（译者：请自行斟酌）")])]),t._v(" "),s("h3",{attrs:{id:"_2-ubuntu-启动-qv2ray-后会显示一个非常难看的界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ubuntu-启动-qv2ray-后会显示一个非常难看的界面"}},[t._v("#")]),t._v(" 2. Ubuntu 启动 Qv2ray 后会显示一个非常难看的界面")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("解决方案")]),t._v("：启动 Qv2ray 时添加 "),s("code",[t._v("--style fusion")]),t._v(" 参数可能会解决这个问题。")])]),t._v(" "),s("h2",{attrs:{id:"其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[t._v("#")]),t._v(" 其他问题")]),t._v(" "),s("h3",{attrs:{id:"_1-为什么-qv2ray-不打包插件和-v2ray-核心或是内置下载功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么-qv2ray-不打包插件和-v2ray-核心或是内置下载功能"}},[t._v("#")]),t._v(" 1. 为什么 Qv2ray 不打包插件和 V2Ray 核心或是内置下载功能?")]),t._v(" "),s("p",[t._v("我们希望我们的用户能够了解软件的工作原理，同时拥有优秀的动手能力来解决可能存在的问题和需求。如果 Qv2ray 不适合您，您可以使用其他软件。")]),t._v(" "),s("h3",{attrs:{id:"_2-qv2ray-会推出移动平台（android、ios）版本吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-qv2ray-会推出移动平台（android、ios）版本吗？"}},[t._v("#")]),t._v(" 2. Qv2ray 会推出移动平台（Android、iOS）版本吗？")]),t._v(" "),s("p",[t._v("目前没有计划。根据开发者的意愿，当程序迁移到 QML 的时候"),s("strong",[t._v("也许")]),t._v("会有。")])])}),[],!1,null,null,null);a.default=r.exports}}]);