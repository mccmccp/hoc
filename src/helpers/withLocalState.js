import React, { Component } from 'react';

const withLocalState = (stateName, stateUpdaterName, initialState) => {
    return MyComponent => {
        return class extends Component {
            constructor(props){
                super(props);
                if(initialState) {localStorage.setItem(stateName, initialState)}
            }
            handleLocalStorage = (nextValue) => {
                localStorage.setItem(stateName, nextValue)
                this.forceUpdate();
            };
            render() {
                //this.checkLocalStorage()
                const nextProps = {
                    [stateName]: localStorage.getItem(stateName),
                    [stateUpdaterName]: this.handleLocalStorage
                };
                return <MyComponent {...this.props} {...nextProps} />
            }
        }
    }
};

export default withLocalState