// This demo is using a fixed data, in release, you would probably need to use a backend to dynamically make quizzes
var data = [
    {
        "question": "Question 1",
        "options": [
            "A. option A",
            "B. option B",
            "C. option C",
            "D. option D"
        ]
    },
    {
        "question": "Question 2",
        "options": [
            "A. option A",
            "B. option B",
            "C. option C",
            "D. option D"
        ]
    },
    {
        "question": "Question 3",
        "options": [
            "A. option A",
            "B. option B",
            "C. option C",
            "D. option D"
        ]
    },
    {
        "question": "Question 4",
        "options": [
            "A. option A",
            "B. option B",
            "C. option C",
            "D. option D"
        ]
    },
    {
        "question": "Question 5",
        "options": [
            "A. option A",
            "B. option B",
            "C. option C",
            "D. option D"
        ]
    }
];

var selection = -1;
let options = document.getElementById("options");
let children = options.children;

for (let i = 0; i < children.length; i++) {
    var element = children[i];
    console.log(element);

    element.addEventListener("mouseover", (e) => {
        e.target.style.transform = "scale(1.02)";
        enable_option(e.target);
    });

    element.addEventListener("mouseout", (e) => {
        e.target.style.transform = "scale(1)";
        if (selection != i) {
            disable_option(e.target);
        }
    });

    element.addEventListener("click", (e) => {
        if (selection == i) {
            disable_option(e.target);
            selection = -1;

            return;
        }

        if (selection != -1) {
            disable_option(children[selection]);
        }

        selection = i;
        enable_option(children[selection]);
    });
}

function enable_option(option) {
    option.style.color = "#171717";
    option.style.backgroundColor = "#FFFFFF";
}

function disable_option(option) {
    option.style.color = "#FFFFFF";
    option.style.backgroundColor = "#171717";
}

// previous button onclick
var previous_button = document.querySelector("div.question-container > div > div.question-navigator > div.nav-previous");
var next_button = document.querySelector("div.question-container > div > div.question-navigator > div.nav-next");

var main_question = document.querySelector("div.question-container");
var previous_question = document.querySelector("div.previous-question-container");
var next_question = document.querySelector("div.next-question-container");

previous_button.onclick = () => {
    // main_question.style.transform = "scale(1)";
}

next_button.addEventListener("click", () => {
    // shrink the main question
    main_question.vanillaTilt.destroy();
    main_question.style.transform = "scale(.65)";

    setTimeout(() => {
        main_question.style.position = "absolute";
        main_question.style.left = "-35vw";

        next_question.style.position = "relative";
        next_question.style.right = "0";

        previous_question.style.transform = "scale(.65) translateX(-70vw)"

        setTimeout(() => {
            main_question.classList.add("notransition");
            next_question.classList.add("notransition");
            previous_question.classList.add("notransition");

            setTimeout(() => {
                main_question.style.position = "relative";
                main_question.style.left = "0";
    
                next_question.style.position = "absolute";
                next_question.style.right = "-35vw";

                previous_question.style.transform = "scale(.65)"
    
                setTimeout(() => {
                    main_question.classList.remove("notransition");
                    next_question.classList.remove("notransition");
                    previous_question.classList.remove("notransition");
    
                    main_question.style.transform = "scale(1)";
    
                    VanillaTilt.init(main_question);
                }, 5);
            }, 5);
        }, 500);
    }, 500);
});