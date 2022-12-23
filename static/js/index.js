!function (func) {
    try {
        return func(function (...l) {
            console.log("%cOUTPUT", "background: #e7520d; border-radius: 3px; padding: 0 4px; color: #fff", ...l)
        });
    } catch (e) {
        console.error(e)
    }
}(function (logs) {
    "use strict";
    const pageData = {
        "dinoGameA11yAriaLabel": "",
        "dinoGameA11yDescription": "恐龙游戏。在这款游戏中，您要协助一头正在荒野中奔跑的像素化恐龙躲避仙人掌和翼手龙。您只需轻轻按一下空格键，即可让恐龙跃过障碍物。",
        "dinoGameA11yGameOver": "游戏结束，您的得分是 $1。",
        "dinoGameA11yHighScore": "您的最高得分是 $1。",
        "dinoGameA11yJump": "",
        "dinoGameA11ySpeedToggle": "启用慢速模式",
        "dinoGameA11yStartGame": "游戏已开始！",
        "errorCode": "",
        "fontfamily": "'Segoe UI',Arial,'Microsoft Yahei',sans-serif",
        "fontsize": "75%",
        "heading": {
            "msg": "按空格键即可开始游戏"
        },
        "iconClass": "icon-offline",
        "language": "zh",
        "textdirection": "ltr",
        "title": "恐龙游戏 - 谷歌小游戏"
    };
    loadTimeData.data = pageData;
})
