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
        }
    }
})