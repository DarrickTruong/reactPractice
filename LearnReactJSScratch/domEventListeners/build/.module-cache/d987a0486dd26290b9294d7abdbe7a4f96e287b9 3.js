let Window = React.createClass({displayName: "Window",
    getInitialState: function() {
        return { windowWidth: window.innerWidth};
    },
    render: function() {
        return  React.createElement("div", null, 
                    "Current window width is : ", this.state.windowWidth
                )
    }
 });

 React.render(React.createElement(Window, null), document.getElementById("divContainer"))