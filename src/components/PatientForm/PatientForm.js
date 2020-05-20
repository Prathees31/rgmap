import React from 'react';
class PatientForm extends React.Component {
    // The constructor is called when a component is created
    constructor(props) {
        super (props);
        // Set the state here. Use "props" if needed.
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            bodyTemp : "",
            dateOfTest : "",
            covidCurrentStatus : "",
            assessmentCount : 0,
        };
        // Bind the event handler function, so that its
        // `this` binding isn't lost when it gets passed
        // to the button
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmitAction = this.handleSubmitAction.bind(this);
    }
    handleSubmitAction(event) {
        //alert('A form was submitted: ' + this.state.firstName + ' // ' + this.state.lastName);
        event.preventDefault();
        this.props.onAction(event,this.state);
        this.setState({
          firstName : "",
          lastName : "",
          age : "",
          bodyTemp : "",
          dateOfTest : "",
          covidCurrentStatus : "",
          assessmentCount : 0,
      });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
        if(name === "bodyTemp"){
          if(this.state.age >= 18 && value > 98){
              this.setState({covidCurrentStatus : "Affected Adult"})
           }else if(this.state.age < 18 && value > 98){
              this.setState({covidCurrentStatus : "Affected Child"})
           }else{
              this.setState({covidCurrentStatus : "Normal"})
           }
       }
       if(name === "age"){
          if(value >= 18 && this.state.bodyTemp > 98){
              this.setState({covidCurrentStatus : "Affected Adult"})
           }else if(value < 18 && this.state.bodyTemp > 98){
              this.setState({covidCurrentStatus : "Affected Child"})
           }else{
              this.setState({covidCurrentStatus : "Normal"})
           }
       }
        console.log('Change detected. State updated' + name + ' = ' + value);
    };
    render(){
      return (<div>
        <form id="create-patient-form" onSubmit={this.handleSubmitAction} >
          <div className="form-row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstNameInput">First Name</label>
                  <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" id="firstNameInput" placeholder="First Name" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="lastNameInput">Last Name</label>
                  <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} className="form-control" id="lastNameInput" placeholder="Last Name" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="ageInput">Age</label>
                  <input name="age" type="number" value={this.state.age} onChange={this.handleChange} className="form-control" id="ageInput" placeholder="Age" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="bodyTempInput">Body Temperature</label>
                  <input name="bodyTemp" type="number" value={this.state.bodyTemp} onChange={this.handleChange} className="form-control" id="bodyTempInput" placeholder="Body Temperature" />
                </div>
              </div>
         </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>);
   };
};
export default PatientForm;