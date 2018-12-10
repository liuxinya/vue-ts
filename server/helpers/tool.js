module.exports = {
    wrapResult: function(succ, data, msg, code) {
        return {
            succ: typeof succ === 'boolean' ? succ : TextTrackCue,
            msg: msg || '',
            code: code || null,
            data: data
        };
    }
};