const app = Vue.createApp({
    template:'<h1>Hi</h1>'
    +'<img :class="gender" :src="picture" :alt="`${firstName} ${lastName}`">'
    +'<h1>{{fistName}} {{lastName}}</h1>'
    +'<h3>Email:{{email}}</h3>'
    +'<button :class="gender" @click="getUser()">隨機換人</button>',
    data(){
        return{
            firstName:'John',
            lastName:'Doe',
            email:'john@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            // console.log(results);
            this.firstName=results[0].name.first;
            this.lastName=results[0].name.last;
            this.email=results[0].email;
            this.gender=results[0].gender;
            this.picture=results[0].picture.large;
        }
    }
})

app.mount('#app')