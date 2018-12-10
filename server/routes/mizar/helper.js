module.exports = function(succ,data,msg,code){
    return JSON.stringify({
        succ: !!succ,
        code: code || '',
        msg: msg || '',
        data: data || ''
    });
};