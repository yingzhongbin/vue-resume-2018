var app = new Vue({
    el: '#app',
    data: {
        editingName: false,
        resume: {
            name: "姓名",
            gender: "女",
            birthday: "1992年6月",
            email: "example@example.com",
            phone: "13811111111",
            jobTitle: "前端工程师"
        },
        loginVisible:false,
        signUpVisible:false,
    },
    methods: {
        onEdit(key, value) {
            this.resume[key] = value
        },
        onClickSave(){
            var currentUser = AV.User.current();
            if (currentUser) {
                this.saveResume()

            }
            else {
                //currentUser 为空时，可打开用户注册界面…
                this.loginVisible = true
            }
            console.log(this.resume);
        },
        saveResume(){
        }
    }
})