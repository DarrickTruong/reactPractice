var imgURL = "https://unsplash.com/photos/mApCPJrEVxo";

let divStyle = {
    color: "#007de6",
    height: 60,
    background: 'url(' +imgURL+ ') no-repeat',
    WebkitTransition: 'all',
    msTransition: 'all',
};

let Courses = React.createClass({displayName: "Courses",
    render: function() {
        return (
            React.createElement("div", {style: divStyle}, 
                "this course is brought to you by SkillBakery.com"
            )
        )
    }
})

let courseElement = React.createElement(Courses, null);
React.render(courseElement, document.getElementById('divContainer'));
