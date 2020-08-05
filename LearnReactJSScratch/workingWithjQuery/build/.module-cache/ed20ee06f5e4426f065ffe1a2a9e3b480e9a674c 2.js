let CustomerCollection = React.createClass({displayName: "CustomerCollection",
    getInitialState: function(){
        return { customer: []}
    },
    componentDidMount: function(){
        console.log("component did mount")
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
        return (React.createElement("div", null, 
                    React.createElement(Customers, {customer: this.state.customer})
                )
        )
    }
});

let Customers = React.createClass({displayName: "Customers",
    render: function() {
        let customer = this.props.customer.map(function(customer){
            return React.createElement(Customer, {CustomerID: customer.CustomerID, CompanyName: customer.CompanyName, 
            ContactName: customer.ContactName})
        });
        return (React.createElement("div", null, " ", customer, " "))
    }
});

let Customer = React.createClass({displayName: "Customer",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("span", null, "Customer ID"), " ", this.props.CustomerID, 
                React.createElement("br", null), 
                React.createElement("span", null, "Company Name"), " ", this.props.CompanyName, 
                React.createElement("br", null), 
                React.createElement("span", null, "Contact Name"), " ", this.props.ContactName, 
                React.createElement("p", null, " ")
            )
        )
    }
});

React.render(React.createElement(CustomerCollection, null), document.getElementById('divContainer'))