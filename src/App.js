//import logo from './logo.svg';
import Swal from 'sweetalert2';
import './App.css';
import React,{Component} from 'react';
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
 
class App extends Component {  
  
  constructor(props){
    super(props);
    this.state = {
      fileName: '',
      fileContent: '',
      stringToCompare:'',
      sentencesArray: ['', '', '','']
    };
  }   

  handleChange(index, e) {
    const { sentencesArray } = this.state;
    sentencesArray.splice(index, 1, e.target.value)
    this.setState({ sentencesArray: [...sentencesArray] }, () => {
      console.log(this.state.sentencesArray)
    });
  }

  regExpOperationChange(index,e){ 
    const {sentencesArray} = this.state;
    const {fileContent} = this.state;
    var stringToCompare = String(sentencesArray[index]);
    var namesFile = String(fileContent);
    var allNames = namesFile.match(/([a-zA-Z]+)/g);
    console.log(allNames);

    function allElementsInTheString(name) {
    var regExpToCompare = new RegExp(name,'gi');
    return regExpToCompare.test(stringToCompare);
    }

    if(allNames === null){Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please remember to upload file with names first'
      })
    }

    else{var areNamesInside = allNames.every(allElementsInTheString);}

    if(areNamesInside === false){Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The names are not inside this sentence'
      })
    }
    if(areNamesInside === true){Swal.fire({
      icon: 'success',
      title: 'Yay!',
      text: 'The names are inside this sentence'
      })
  }
}
  

  handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      this.setState({fileName: file.name, fileContent: reader.result});       
      Swal.fire({
        icon: 'success',
        title: 'Your file is uploaded!'
        })     
    }
    reader.onerror = () =>{
      console.log('file error', reader.error)
    }
  }     
      
    render() {   

      return (        
          <div className="App">
            <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <p>Welcome to Sentence Parser!</p>
              <p>
                Here we can compare the names in a file 
                with four sentences of our choise
              </p>
            <form>
             <div>
             <label for="upload-file">
              <input
                style={{display: "none"}}
                variant="outlined"
                color="secondary"
                id="upload-file"
                name="upload-file"
                type="file"
                onChange={this.handleFileChange}
              />
              {this.state.fileContent === "" &&
             <Button startIcon={<CloudUploadIcon/>} color="default" variant="contained" component="span">
              Upload File
             </Button>}{" "}           
             {this.state.fileContent !== "" &&
             <Button startIcon={<CloudDoneIcon/>} color="default" variant="contained" component="span">
              File Uploaded
             </Button>}{" "}     
            </label>
             </div>
             <br></br>
             </form>
                Please write four sentences to be compared below
              {
              this.state.sentencesArray.map((val, i) =>              
              <div key={i}>
              <br></br>
              <TextField label={"Sentence number "+(i+1)+" here.."} variant='filled' input='color:white' color='default' type="text" onChange={(e) => { this.handleChange(i, e) }} value={val} />
              <Button style={{left: "10px", top: "10px"}} type="submit" variant='contained' color='default' endIcon={<KeyboardArrowRightIcon/>} onClick ={(e) => { this.regExpOperationChange(i, e) }}>Submit</Button>  
              </div>)
              }
              <p>
                Click Submit and see the results!
              </p>          
            </header>
          </div>       
      );
    }
  }

export default App;
