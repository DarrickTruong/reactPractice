var Todo = React.createClass({
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
React.render(
    <div>
        <h1>Things to do</h1>

        <div className="form-inline">
            <div className="form-group">
                <input className="form-control" placeholder="Add ToDo" />
                <button className="btn btn-primary btn-sm">+</button>
            </div>
        </div>
        <Todo>Call Phil0</Todo>
        <Todo>Call Phil2</Todo>
        <Todo>Call Phil3</Todo>
    </div>,

    document.getElementById('todo'))

var ToDoList = React.createClass({
    render: function() {
        
    }
})