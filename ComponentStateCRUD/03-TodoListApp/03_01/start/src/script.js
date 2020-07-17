let Todo = React.createClass({
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
            <li className="todo">
                <span onClick={this.edit}>
                    {this.props.children}
                </span>
                <button className="btn btn-primary btn-sm glyphicon glyphicon-trash remove pull-right" onClick={this.remove} /></li>
        )
        
    },
    form: function() {
        return (
            <li className="todo">
                <span>
                    <input ref="newVal" defaultValue={this.props.children} />
                </span>
                <button className="btn btn-primary btn-sm glyphicon glyphicon-floppy-disk pull-right" onClick={this.save} /></li>
        )
        
    }
 
});


let ToDoList = React.createClass({
    getInitialState: function() {
        return {
            todos: ['Call Phil', 'Pay Bills', 'Eat Food'],
            text: "",
            placeholder: "Add Todo",
            inputStyle: "form-control"
        }
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
            <div>
                <h1>Things to do</h1>

                <div className="form-inline">
                    <div className="form-group">
                        <input className={this.state.inputStyle} placeholder={this.state.placeholder} ref="newTodo" value={this.state.text} onChange={this.onChange}/>
                        <button onClick={this.add} className="btn btn-primary btn-sm">+</button>
                    </div>
                </div>
                <ul>
                    {this.state.todos.map(this.eachTodo)}
                </ul>
            </div>
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
            this.setState({todos: arr, text: null, placeholder:"Add Todo", inputStyle:"form-control"});
        }
    },
    onChange: function(e) {
        this.setState({text:e.target.value})
    },
    eachTodo: function(todo, i) {
        return <Todo key={i} index={i} onChange={this.update} onRemove={this.remove}>
            {todo}
        </Todo>
    },
})

React.render(<ToDoList/>, document.getElementById('todo'))
