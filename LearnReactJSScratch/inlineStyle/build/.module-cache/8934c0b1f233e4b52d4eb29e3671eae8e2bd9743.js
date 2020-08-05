var imgURL = "https://images.unsplash.com/photo-1562141959-f3be4985c59a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

let divStyle = {
    color: "#007de6",
    height: '500',
    backgroundImage: `url(${imgURL})`,
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
