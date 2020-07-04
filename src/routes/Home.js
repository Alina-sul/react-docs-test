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
            </ThemeContext.Provider>
        </>
    );
}

class Text extends React.Component {
    static contextType = ThemeContext;

    render(){
        return (
            <>
                <Button theme={this.context} name="Text btn" />
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
    console.log(props.theme);
    const error = () => {throw new Error('I crashed!')};
    return (
        <>
            <button onClick={()=> setCount(count + 1)}> {props.name} </button>
            <span> {count < 2 ? count : error() } </span>
        </>
    );
}

export default Home;
