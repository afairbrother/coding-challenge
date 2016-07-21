import React, { Component } from 'react';

/**
* EDITABLE DOCUMENT CLASS
* @prop {func} - saveTemplate - function passed in from documentPane to handle saving the template after update
* @prop {func} - handleUpdate - function passed in from documentPane to allow app to be aware of which element is being updated
*/
export default class EditableDocument extends Component {

    static propTypes = {
        saveTemplate: React.PropTypes.func,
        handleUpdate: React.PropTypes.func
    }

    // attach the event listeners when the component is ready
    componentDidMount() {
        const elements = document.getElementsByClassName('document-pane__editable-area')[0].children;

        // for every element inside this class apply a click event listener
        for(var i = 0; i < elements.length; i++){
            elements[i].addEventListener('click', this._handleClick);
        }

        // tell the app to save this existing template
        this.props.saveTemplate();
    }

    // tell the app about which target is being selected and its text
    _handleClick = (e) => {
        const targetToUpdate = e.target.innerHTML;
        this.props.handleUpdate(e.path[0], targetToUpdate);
    }

    // if there is saved data, render it from the template string localstorage key
    // otherwise, render the fake template. It will then be saved
    maybeRenderSavedData(){
        if(localStorage.getItem('templateString')){
            // use this function to help ensure that we are only passing HTML
            // into dangerouslySetInnerHTML. Ideally we would also sanitize this data
            const createMarkup = () => {
                return {__html: localStorage.getItem('templateString') };
            }

            return (
                <div className='document-pane__editable-area' dangerouslySetInnerHTML={createMarkup()}>
                </div>
            );
        }else {
            return (
                <div className='document-pane__editable-area'>
                    <h3>Newsletter Header</h3>
                    <p>
                        Hundreds of thousands venture, tingling of the spine. Prime number cosmic fugue Orion's
                        sword muse about! A billion trillion rings of Uranus vastness is bearable only through love
                        lorem ipsum dolor sit amet hundreds of thousands. Rich in heavy atoms with pretty stories for which
                        there's little good evidence. Radio telescope, realm of the galaxies stirred by starlight courage of our questions!
                        At the edge of forever stirred by starlight intelligent beings Orion's sword not a sunrise
                        but a galaxyrise 'take root and flourish rich in heavy atoms extraordinary claims require
                        extraordinary evidence!
                    </p>
                    <img src="http://placekitten.com/800/400" />
                </div>
            );
        }
    }


    render() {
        return (
            <div className='document-pane__document'>
                {this.maybeRenderSavedData()}
            </div>
        );
    }
}
