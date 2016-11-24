import React from 'react';

const ShowErrorMessage = (prop) => <div className="redScreen">{prop.errorMessage}</div>;



export default MyComponent => {
    class HandleErrors extends MyComponent {
        componentWillReceiveProps() {
            try {
                if (super.componentWillReceiveProps) super.componentWillReceiveProps();
            } catch (err) {
                this.errorMessage = err.message;
            }
        }
        componentWillMount() {
            try {
                if (super.componentWillMount) super.componentWillMount();
            } catch (err) {

            }
        }
        componentDidMount() {
            try {
                if (super.componentDidMount) super.componentDidMount();
            } catch (err) {
                this.errorMessage = err.message;
            }
        }
        ////shouldComponentUpdate() {
        ////    try {
        ////        if (super.shouldComponentUpdate) super.shouldComponentUpdate();
        ////    } catch (err) {
        ////
        ////    }
        ////}
        componentDidUpdate() {
            try {
                if (super.componentDidUpdate) super.componentDidUpdate();
            } catch (err) {
                console.log('ошибкаааа 2')
            }
        }
        componentWillUnmount() {
            try {
                if (super.componentWillUnmount) super.componentWillUnmount();
            } catch (err) {

            }
        }
        componentWillUpdate() {
            try {
                if (super.componentWillUpdate) super.componentWillUpdate();
            } catch (err) {

            }
        }
        render() {
            try {
                if (super.render) super.render();
            } catch (err) {
                this.errorMessage = err.message;

            }
            if (this.errorMessage) {
                return <ShowErrorMessage errorMessage={this.errorMessage} />
            }
            return <MyComponent {...this.props} />
        }
    }
    return HandleErrors;
}