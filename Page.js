function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url(path)
}

Page.prototype.pause = function (time) {
    browser.pause(time)
}

Page.prototype.scroll = function (time,time) {
    browser.scroll(time,time)
}
module.exports = new Page()