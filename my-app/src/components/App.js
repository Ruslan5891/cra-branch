import React, {Component} from "react";
import Additional from "./Additional";
import ImpureComponent from "./Purecomponent";
import Counter from "./Counter";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            isActive: false
        };
        this.inputRef = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
        })
    }
    handleChange =(e) => {
        this.setState({
            value: e.target.value,
        })
        if(this.inputRef.current.value === 'реакт') {
            this.setState({isActive: true})
        } else {
            this.setState({
                isActive: false
            })
        }
        console.log(this.state)
    }
    handleFocus = (e) => {
        this.inputRef.current.focus();
        
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
    }
    render() {
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                     <input ref={this.inputRef} onChange={this.handleChange} value={this.state.value}/>
                     <button type='submit' disabled = {this.state.isActive} > Отправить</button>
                     <button type='button' onClick={this.handleFocus}>Фокус</button>
                </form>
                <Additional />
                <ImpureComponent someValue = {85}/>
                <Counter initialCount={1}/>
            </React.Fragment>
            
        )
    }
}

export default App;