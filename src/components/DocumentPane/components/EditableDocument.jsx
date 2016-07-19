import React, { Component } from 'react';

export default class EditableDocument extends Component {

    componentDidMount(){
        const elements = document.getElementsByClassName('document-pane__document')[0].children;

        console.log(elements);
        for(var i = 0; i < elements.length; i++){
            console.log('adding event listener');
            elements[i].addEventListener('click', this._handleClick);
        }

        const saveString = document.getElementsByClassName('document-pane__document')[0].innerHTML;

        localStorage.setItem('templateString', saveString);

    }

    _handleClick = (e) => {
        console.log('handle the click');

        // redux and editor stuff here
    }

    maybeRenderSavedData(){
        if(localStorage.getItem('templateString')){
            const createMarkup = () => {
                return {__html: localStorage.getItem('templateString') };
            }

            return (
                <div dangerouslySetInnerHTML={createMarkup()}>
                </div>
            );
        }else {
            return (
                <div>
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
