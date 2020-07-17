var Todo = React.createClass({displayName: "Todo",
    getInitialState: function() {
        return {editing:false}
    },
    render: function() {
        if (this.state.editing) {
            return this.form()
        } else {
            return this.display()
        }
    },
    edit: function(){
        this.setState({editing:true});
    },
    remove: function() {
        alert("remove")
    },
    save: function() {
        var val = this.refs.newVal.getDOMNode().value;
        this.setState({editing:false});
        alert(val + " is saved");
    },
    display: function() {
        return (
            React.createElement("li", {className: "todo"}, 
                React.createElement("span", {onClick: this.edit}, 
                    this.props.children
                ), 
                React.createElement("button", {className: "btn btn-primary btn-sm glyphicon glyphicon-trash remove pull-right", onClick: this.remove}))
        )
        
    },
    form: function() {
        return (
            React.createElement("li", {className: "todo"}, 
                React.createElement("span", null, 
                    React.createElement("input", {ref: "newVal", defaultValue: this.props.children})
                ), 
                React.createElement("button", {className: "btn btn-primary btn-sm glyphicon glyphicon-floppy-disk pull-right", onClick: this.save}))
        )
        
    }
 
});


var ToDoList = React.createClass({displayName: "ToDoList",
    getInitialState: function() {
        return {
            todos: ['Call Phil', 'Pay Bills', 'Eat Food'] 
        }
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to do"), 

                React.createElement("div", {className: "form-inline"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: "form-control", placeholder: "Add ToDo"}), 
                        React.createElement("button", {className: "btn btn-primary btn-sm"}, "+")
                    )
                ), 
                React.createElement("ul", null, 
                    this.state.todos.map(function(todo){
                        return React.createElement(Todo, null, todo)
                    })
                )
            )
        )
    }
})

React.render(document.getElementById('todo'))