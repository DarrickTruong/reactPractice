var Todo = React.createClass({displayName: "Todo",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to do"), 

                React.createElement("div", {class: "form-group"}, 
                    React.createElement("input", {class: "form-control", placeholder: "Add ToDo"}), 
                    React.createElement("button", {class: "btn btn-default btn-sm"}, "+")
                ), 

                React.createElement("ul", null, 
                    React.createElement("li", {className: "todo"}, "Call Phil"), 
                    React.createElement("li", {class: "todo"}, "Pay Bill")
                )
            )
       );
    }

});
React.render(React.createElement(Todo, null), document.getElementById('todo'))