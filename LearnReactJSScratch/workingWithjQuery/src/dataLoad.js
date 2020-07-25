let CustomerCollection = React.createClass({
    getInitialState: function(){
        return { customer: []}
    },
    componentDidMount: function(){
        console.log("component did mount");
        let url = "http://services.odata.org/V4/Northwind/Northwind.svc/Customers";
        
        $.get(url, function(result){
            let data = result;
            let customerList = data.value;

            if(this.isMounted()) {
                this.setState({customer: customerList})
            }
        }.bind(this));
    },
    render: function() {
        return (<div>
                    <Customers customer={this.state.customer} />
                </div>
        )
    }
});

let Customers = React.createClass({
    render: function() {
        let customer = this.props.customer.map(function(customer){
            return <Customer CustomerID={customer.CustomerID} CompanyName={customer.CompanyName} 
            ContactName={customer.ContactName}/>
        });
        return (<div> {customer} </div>)
    }
});

let Customer = React.createClass({
    render: function() {
        return (
            <div>
                <span>Customer ID</span> {this.props.CustomerID}
                <br/>
                <span>Company Name</span> {this.props.CompanyName}
                <br/>
                <span>Contact Name</span> {this.props.ContactName}
                <p>&nbsp;</p>
            </div>
        )
    }
});

React.render(<CustomerCollection />, document.getElementById('divContainer'))