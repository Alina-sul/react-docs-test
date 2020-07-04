import React from 'react';
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
                 <Button theme={this.context} />
            </>
        )
    }
}

function TextFunc (){
    const contextType = React.useContext(ThemeContext);
    console.log(contextType);

    return (
        <>
            <Button theme={contextType} />
        </>
    )
}

function Button(props) {
    console.log(props.theme);
    return (
      <>hi</>
    );
}

export default Home;
