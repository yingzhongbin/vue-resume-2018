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
        }
    },
    methods: {
        onEdit(key, value) {
            this.resume[key] = value
        },
        save(){
            console.log(this.resume);
        }
    }
})