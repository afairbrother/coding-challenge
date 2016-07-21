import React, { Component } from 'react';


export default class EditableDocument extends Component {

    static propTypes = {
        saveTemplate: React.PropTypes.func,
        handleUpdate: React.PropTypes.func
    }

    componentDidMount() {
        const elements = document.getElementsByClassName('document-pane__editable-area')[0].children;

        for(var i = 0; i < elements.length; i++){
            console.log('adding event listener');
            elements[i].addEventListener('click', this._handleClick);
        }

        this.props.saveTemplate();

    }

    _handleClick = (e) => {
        const targetToUpdate = e.target.innerHTML;
        console.log('target: ', targetToUpdate);

        this.props.handleUpdate(e.target, targetToUpdate);
    }

    maybeRenderSavedData(){
        if(localStorage.getItem('templateString')){
            const createMarkup = () => {
                console.log(localStorage.getItem('templateString'));
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
