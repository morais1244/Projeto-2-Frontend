const app = Vue.creatApp({
    data(){
        return{
            questions:[
                {   
                    title: "Witch flavor do you like?",
                    options:[
                        {
                            text:"Chocolate",

                        },
                        {
                            text:"Vanille",
                        },
                        {
                            text:"Strawberry"
                        },
                    ],
                },
            ],
            answers : [],
        };
    },
    methods: {

    },
});
app.mount("#app");