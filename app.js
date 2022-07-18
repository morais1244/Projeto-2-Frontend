const app = Vue.createApp({
    data(){
        return{
            questions:[
                {   
                    title: "Wich flavor do you like?",
                    options:[
                        {
                            text:"Chocolate",
                            image: "chocolate",

                        },
                        {
                            text:"Vanille",
                            image: "vanille",
                        },
                        {
                            text:"Strawberry",
                            image: "strawberry",
                        },
                    ],
                },
                {   
                    title: "Wich animal do you prefer most?",
                    options:[
                        {
                            text:"Dog",

                        },
                        {
                            text:"Cat",
                        },
                        {
                            text:"Fish"
                        },
                        {
                            text:"Cow"
                        },
                    ],
                },
            ],
            answers : [],
        };
    },
    methods: {
        choose(index){
            this.answers.push(index);
        },

    },
});

app.component('report', {
    template:`
        <div v-for="question, index in questions">
            <p>{{question.title}}</p>
            <p>{{question.options[answers[index]].text}}</p>
        </div>
    `,
    props: {
        questions: Array,
        answers: Array,

    },
});
app.mount("#app");