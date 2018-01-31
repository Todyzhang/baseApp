import mui from "mui"

export function toast(msg) {
    mui.toast(msg)
}

export function alert(msg,title) {
  mui.alert(msg,title)
}

/**
 * 获取当前手机是否安装登录第三方客户端
 **/
export function has3thClient(id) {
  if (mui.os.android) {
    let main = plus.android.runtimeMainActivity();
    let packageManager = main.getPackageManager();
    let PackageManager = plus.android.importClass(packageManager);
    let packageName = {
      "qq": "com.tencent.mobileqq",
      "weixin": "com.tencent.mm",
      "sinaweibo": "com.sina.weibo"
    };
    try {
      return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
    } catch (e) {}
  } else {
    switch (id) {
      case "qq":
        let TencentOAuth = plus.ios.import("TencentOAuth");
        return TencentOAuth.iphoneQQInstalled();
      case "weixin":
        let WXApi = plus.ios.import("WXApi");
        return WXApi.isWXAppInstalled();
      case "sinaweibo":
        let SinaAPI = plus.ios.import("WeiboSDK");
        return SinaAPI.isWeiboAppInstalled();
      default:
        break;
    }
  }
}
/**
 * 保留2位小数
 */
export function keep2Decimal(value) {
  return isNaN(parseFloat(value)) ? "" : (+value).toFixed(2);
}
