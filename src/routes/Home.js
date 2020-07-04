import React from 'react';
import ErrorBoundary from '../Components/ErrorBoundary'
const ThemeContext = React.createContext('light');


function Home(props) {
    console.log('home',props);
    return (
        <>
            <ThemeContext.Provider value="dark">
                <Text />
                <TextFunc />
                <br/><br/>
                <AutoFocus />
            </ThemeContext.Provider>
        </>
    );
}

class Text extends React.Component {
    constructor(props){
        super(props);
        this.inputText = React.createRef();
        this.focusInputText= this.focusInputText.bind(this);
    }

    static contextType = ThemeContext;

    focusInputText() {
        this.inputText.current.focus();
        console.log(this.inputText)
    }


    render(){
        return (
            <>
                <input style={{width: 300}} type="text" ref={this.inputText}
                       value={this.props.value ? this.props.value : `Ref for DOM - will focus after clicking on 'Text btn'`} /> <br />
                <Button theme={this.context} name="Text btn" onClick={this.focusInputText} />
            </>
        )
    }
}

function TextFunc (){
    const contextType = React.useContext(ThemeContext);
    console.log(contextType);

    return (
        <>
            <ErrorBoundary>
            <Button theme={contextType} name="TextFunc btn"/>
            </ErrorBoundary>

        </>
    )
}

function Button(props) {
    const [count,setCount] = React.useState(0);
    const error = () => {throw new Error('I crashed to test ErrorBoundary!!!')};
    return (
        <>
            <button onClick={()=> {
                if(props.onClick) props.onClick();
                setCount(count + 1)
            }}> {props.name} </button>
            <span> {count < 2 ? count : error() } </span>
        </>
    );
}

class AutoFocus extends React.Component {
    constructor(props){
        super(props);
        this.inputText = React.createRef();

    }

    componentDidMount() {
        this.inputText.current.focusInputText();
    }

    render(){
        console.log(this.props);
        return (
            <Text ref={this.inputText} value="Ref for class - auto focus"/>
        )
    }
}

export default Home;
