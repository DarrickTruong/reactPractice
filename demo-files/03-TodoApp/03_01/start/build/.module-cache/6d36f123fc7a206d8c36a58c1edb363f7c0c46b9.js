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
        alert("edit");
        this.setState({editing:true});
    },
    remove: function() {
        alert("remove")
    },
    save: function() {
        alert("save")
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
                    React.createElement("input", {placeholder: "edit ToDo", defaultValue: this.props.children})
                ), 
                React.createElement("button", {className: "btn btn-primary btn-sm glyphicon glyphicon-floppy-disc pull-right", onClick: this.save}))
        )
        
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