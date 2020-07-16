var Todo = React.createClass({displayName: "Todo",
    render: function() {
        return (
                React.createElement("li", {className: "todo"}, 
                    React.createElement("span", {onClick: this.edit}, 
                    this.props.children
                    ), 
                    React.createElement("button", {className: "btn btn-primary btn-sm glyphicon glyphicon-trash remove pull-right", onClick: this.remove}), "                ")
       );
    },
    edit: function(){
        alert("edit")
    },
    remove: function() {
        alert("remove")
    }

});
React.render(
    React.createElement("div", null, 
        React.createElement("h1", null, "Things to do"), 

        React.createElement("div", {className: "form-inline"}, 
            React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {className: "form-control", placeholder: "Add ToDo"}), 
                React.createElement("button", {className: "btn btn-primary btn-sm"}, "+")
            )
        ), 
        React.createElement(Todo, null, "Call Phil0"), 
        React.createElement(Todo, null, "Call Phil2"), 
        React.createElement(Todo, null, "Call Phil3")
    ),

    document.getElementById('todo'))