var imgURL = "https://images.unsplash.com/photo-1562141959-f3be4985c59a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

let divStyle = {
    color: "#007de6",
    height: '100vh',
    background: `url(${imgURL}) no-repeat`,
    WebkitTransition: 'all',
    msTransition: 'all',
};

let Courses = React.createClass({
    render: function() {
        return (
            <div style={divStyle}>
                this course is brought to you by SkillBakery.com
            </div>
        )
    }
})

let courseElement = <Courses />;
React.render(courseElement, document.getElementById('divContainer'));
