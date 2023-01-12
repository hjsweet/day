// pages/my/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg:"小洛22",
        islogin:true,
        tip_msg:"修改个人信息",
        image:"",
        icon_list:[
            {'key':'fans',label:'粉丝数',image:'../../static/image/my_icons/fans.png'},
            {'key':'fans',label:'获赞',image:'../../static/image/my_icons/admire.png'},
            {'key':'fans',label:'朋友',image:'../../static/image/my_icons/friend.png'},
            {'key':'fans',label:'学习记录',image:'../../static/image/my_icons/record.png'},
        ],
        list:[
            {'key':'draft',label:'草稿箱'},
            {'key':'calendar',label:'打卡日历'},
            {'key':'exportNote',label:'导出打卡笔记'},
            {'key':'allCalendar',label:'成员打卡日历'},
        ]
    },
    btnClick:function(){
        wx.navigateTo({
          url: '../daily/index',
        })()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    
})