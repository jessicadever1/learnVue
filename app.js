const helloWorld = new Vue ({
    el: '#helloVue',
    data: {
        title: "Hello, world!!!!",
        message: "This is my first Vue template!",
        takeAway: "Templating: A representation of how you want to structure your application",
        takeAway1: "Benefits of using JavaScript front end framework include: Abstract away common tasks, provide time-saving shortcuts, help maintain structured and organized code, and helps you take advantage of tried and true software design patters",
        takeAway2: "Data Binding: Establishing a connection between a piece of data and a template"
    }
});

const example = new Vue ({
    el: '#example',
    data: {
        title: "Hello, Chewie!",
        message: "This is your daily cat-firmation!",
        name: "Chewie",
        takeAway3: "Mustashe syntax is best for changing only one portion of data in an element",
        img: {
            src: "",
            alt: "there be no image"
        },
        bah: "To be honest, I've been working since 8am, and now it's 9:25. PM."
    }
})

const vocab = [
    {
        title: "Directive",
        definition: "Special instructions for Vue that allow you to define your app's actions & behaviors",
        showDef: false,
        category: "Vue"
    }, 
    {
        title: "Templating",
        definition: "A representation for how you want to structure your app",
        showDef: false,
        category: "Vue"
    },
    {
        title: "Data Binding",
        definition: "Establishing a connection between a piece of data and a template",
        showDef: false,
        category: ""
    },
    {
        title: "v-show",
        definition: "shows or hides an element based on the previous value passed to the directive (ie, true or false); Note: a blank or absent value is falsey",
        showDef: false,
        category: "Vue"
    },
    {
        title: "The Four Pillars of Object Oriented Programming",
        definition: "Encapsulation, Inheritance, Polymorphism & Abstraction",
        showDef: false,
        category: "Programming"
    },
    {
        title: "Object-Oriented Programming",
        definition: "programming in which data is stored in objects that can be manipulated using code, code a set of instructions known as methods",
        showDef: false,
        category: null
    }
]

const vocabTerm = new Vue ({
    el:"#vocab",
    data: {
        vocabulary: vocab
    },
    methods: {
        toggleDef: function (vocab) {
            vocab.showDef = !vocab.showDef;
        }
    }
})

