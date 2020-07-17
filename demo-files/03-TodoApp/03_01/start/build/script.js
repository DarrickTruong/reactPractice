<<<<<<< HEAD
let Todo = React.createClass({displayName: "Todo",
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
        this.props.onRemove(this.props.index);
    },
    save: function() {
        let val = this.refs.newVal.getDOMNode().value;
        this.props.onChange(val, this.props.index)
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


let ToDoList = React.createClass({displayName: "ToDoList",
    getInitialState: function() {
        return {
            todos: ['Call Phil', 'Pay Bills', 'Eat Food'],
            text: "",
            placeholder: "Add Todo",
            inputStyle: "form-control"
        }
    },
=======
var Todo = React.createClass({displayName: "Todo",
    getInitialState: function() {
        return {editing:false}
    },
>>>>>>> 677a868739292a8da8dcaffd965cf96239d3609a
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
        alert(val + "is saved");
    },
    display: function() {
        return (
<<<<<<< HEAD
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to do"), 

                React.createElement("div", {className: "form-inline"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: this.state.inputStyle, placeholder: this.state.placeholder, ref: "newTodo", value: this.state.text, onChange: this.onChange}), 
                        React.createElement("button", {onClick: this.add, className: "btn btn-primary btn-sm"}, "+")
                    )
                ), 
                React.createElement("ul", null, 
                    this.state.todos.map(this.eachTodo)
                )
            )
        );
    },
    remove: function(i) {
        let arr = this.state.todos;
        arr.splice(i,1);
        this.setState({todos: arr})
    },
    update: function(newValue, i) {
        let arr = this.state.todos;
        arr[i] = newValue;
        this.setState({todos: arr})
    },
    add: function(e) {
        let arr = this.state.todos;
        let newTodo = this.refs.newTodo.getDOMNode().value;
        console.log(newTodo);
        if (!newTodo) {
            e.preventDefault();
            this.setState({placeholder:"Please add Todo", inputStyle:"form-control red"})
        } else {
            arr.push(newTodo);
            this.setState({todos: arr, text: null, placeholder:this.state.placeholder, inputStyle:"form-control"});
        }
    },
    onChange: function(e) {
        this.setState({text:e.target.value})
    },
    eachTodo: function(todo, i) {
        return React.createElement(Todo, {key: i, index: i, onChange: this.update, onRemove: this.remove}, 
            todo
        )
    },
})

React.render(React.createElement(ToDoList, null), document.getElementById('todo'))
=======
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
>>>>>>> 677a868739292a8da8dcaffd965cf96239d3609a
