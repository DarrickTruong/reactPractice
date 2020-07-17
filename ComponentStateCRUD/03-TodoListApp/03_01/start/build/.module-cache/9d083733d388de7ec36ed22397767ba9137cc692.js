var Todo = React.createClass({displayName: "Todo",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to do"), 

                React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {className: "form-control", placeholder: "Add ToDo"}), 
                    React.createElement("button", {className: "btn btn-primary btn-sm"}, "+")
                ), 

                React.createElement("ul", null, 
                    React.createElement("li", {className: "todo"}, "Call Phil"), 
                    React.createElement("li", {className: "todo"}, "Pay Bill")
                )
            )
       );
    }

});
React.render(React.createElement(Todo, null), document.getElementById('todo'))