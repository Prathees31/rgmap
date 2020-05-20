import React from 'react';
import PatientForm from './components/PatientForm/PatientForm';
import DataTable from './components/DataTable/DataTable';
import GoogleMap from "./components/GoogleMap/GoogleMap";
import './App.css';
function formatDate(date) {
  return date.toLocaleDateString();
}
class App extends React.Component {
  // The constructor is called when a component is created
  constructor(props) {
      super (props);
      // Set the state here. Use "props" if needed.
      this.state = {
          patientList :[]
      };
      // Bind the event handler function, so that its
      // `this` binding isn't lost when it gets passed
      // to the button
      this.handleAction = this.handleAction.bind(this);
  }
  handleAction(event,patient) {
    console.log('Child says',event,patient);
    // Replace patientList with an incremented value
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    let PatientList = this.state.patientList
    let fullName = patient.firstName+" "+patient.lastName;
    let patientExists = PatientList.find(function(element){
        return element.firstName === patient.firstName;
    });
    if(patientExists !== undefined){
      let count  = patientExists.assessmentCount
      patientExists.assessmentCount = count+1;
      patientExists.bodyTemp = patient.bodyTemp;
      patientExists.DateOfTest = formatDate(new Date())
      patientExists.covidCurrentStatus = patient.covidCurrentStatus
      let index = PatientList.indexOf(patientExists.id)
      PatientList.splice(index,1,patientExists)
      this.setState({ PatientList: PatientList });
    }else{
        let tempArray = this.state.patientList.slice();
        tempArray.push({
          fullName: fullName,
          id:rand,
          age: patient.age,
          bodyTemp: patient.bodyTemp,
          assessmentCount: 1,
          dateOfTest : formatDate(new Date()),
          covidCurrentStatus : patient.covidCurrentStatus
        });
        this.setState({ patientList: tempArray });
    }
  }
  render(){
    const APP_TITLE = "Covid-19";
    var tableData = {
      columns: [
        {
          id:'assessmentCount',
          name:"Assessment Count"
        },
        {
          id:'fullName',
          name:"Full Name"
        },
        {
          id:'age',
          name:"Age"
        },
        {
          id:'bodyTemp',
          name:"Body Temperature"
        },
        {
          id:'covidCurrentStatus',
          name:"Status"
        },
        {
          id:'dateOfTest',
          name:"Test Taken"
        }
      ],
      rows: this.state.patientList
    };
    return (
      <div>
          <h3 className="text-center">{APP_TITLE}</h3>
          <div className="row">
            <div className="col-12">
              <h6>Patient Form</h6>
              <PatientForm onAction={this.handleAction} />
            </div>
            <div className="col-12">
              <h6>Patient List</h6>
              <DataTable data = {tableData} />
            </div>
            <div className="col-12">
              <h6>Google Map</h6>
              <GoogleMap />
            </div>
          </div>
      </div>
    );
  };
};
export default App;
