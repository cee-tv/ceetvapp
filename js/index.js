(function (window) {
	try {
		const MGC = $MGC({
			icon: "./img/logo.png",
			name: "CEE TV",
			info: "A simple television.\nIf you have any good live broadcast source recommendations, please submit them to me.。",
			z_index: 9999,
			blur: ".container",
			lang: "en",
			mini: true,
			darkmode: 2,
			maxWidth: "30rem",
			defaultClosed: true,
			hitokoto: {
				enable: true
			},
			links: [{
				"title": "My Blog",
				"url": "",
				"type": "primary",
				"target": "_blank"
			}, {
				"title": "Tutorial",
				"url": "",
				"type": "dark",
				"target": "_blank"
			}, {
				"title": "Stack TV Usage",
				"url": "",
				"target": "_blank"
			}]
		});
	} catch (e) {
		console.error("MGC加载失败");
	}
	const STACKTV = $ASTV({
		selector: ".container",
		showAbout: false,
		lazyLoadSize: 20,
		autoPlay: true,
		// showLog: false
	});
	let url = new URL(location.href).searchParams.get("url") || "https://bit.ly/PHFreeTV";
	let playUrl = new URL(location.href).searchParams.get("playUrl") || "";
	url = url.trim();
	playUrl = playUrl.trim();
	if (playUrl.length > 0) {
		try {
			STACKTV.loadUrl(playUrl);
			console.info("准备播放节目：" + playUrl);
		} catch (err) {
			console.error("请求发生错误:" + playUrl);
			console.error(err)
		}

		return;
	}
	STACKTV.fetchM3U(url);
})(window)
