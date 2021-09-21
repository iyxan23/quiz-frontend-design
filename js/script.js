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