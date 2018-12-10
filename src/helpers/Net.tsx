
// 合并两个请求
export function joinUrl(...urls: string[]) {
    // 这里只做简单的合并 简单的判断下后缀
    if(urls.length > 2) {
        let url = urls[0];
        for(let i = 1; i < urls.length; i++) {
            url = joinUrl(url, urls[i]);
        }
    } else {
        let url1 = urls[0];
        let url2 = urls[1];
        if (!url1) {
            return url2;
        } else {
            if (!url2) {
                return url1;
            } else {
                return (url1 + '/' + url2).replace(/\/{2,}/gi, '/').replace(/^(https?)\:\//gi, function (all, arg1){
                    return `${arg1}://`;
                });
            }
        }
    }
}
export function parseParams(obj: Object) {
    let str = '';
    for (let i in obj) {
        if (obj[i] !== '' && obj[i] !== undefined && obj[i] === obj[i] && typeof obj[i] !== 'object') {
            let val = obj[i];
            str += `${i}=${val}&`;
        }
    }
    return str.replace(/\&$/gi, '');
}
export function parseUrl(url: string, data: Object = {}) {
    return `${url}?${parseParams(data)}`;
}
export function isAbsoluteUrl(url: string) {
    return /^(https?)\:\/\//gi.test(url);
}