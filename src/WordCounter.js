import React from 'react';
import ProgressBar from './ProgressBar'
import Editor from './Editor'
import Counter from './Counter'
import SaveManager from './SaveManager'
import countWords from './countWords'

// this example is all pulled from the book "React For Real"
function makeFakeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Success!');
            } else {
                reject('Failure');
            }
        }, 500);
    });
}


export default class WordCounter extends React.Component {
    constructor() {
        super();
        this.state = { text: '' };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(currentText) {
        this.setState(() => ({ text: currentText }));
    }

    render() {
        const { targetWordCount } = this.props;
        const { text } = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;
        const REACT_VERSION = React.version;

        return (
            <form className="measure pa4 sans-serif">
                <div>React version: {REACT_VERSION}</div>
                <Editor
                    onTextChange={this.handleTextChange}
                    text={text}
                />
                <Counter count={wordCount} />
                <ProgressBar completion={progress} />
                <SaveManager saveFunction={makeFakeRequest} data={this.state} />
            </form>
        );
    }
}
