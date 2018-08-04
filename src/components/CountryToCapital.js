import React, { Component } from 'react';

class CountryToCapital extends Component{
    constructor(props){
        super(props);
        this.state = {selectedOption: '', numberCorrect: 0, currentQuestionIndex: 0};
    }

    handleRadioChange = e => {
        this.setState({selectedOption: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const { selectedOption, currentQuestionIndex, numberCorrect } = this.state;
        const { questions } = this.props;
        if(selectedOption === questions[currentQuestionIndex].answer){
            this.setState({currentQuestionIndex: currentQuestionIndex + 1, numberCorrect: numberCorrect + 1});
        }
        else{
            this.setState({currentQuestionIndex: currentQuestionIndex + 1});
        }
    }

    render(){
        let { currentQuestionIndex } = this.state;
        const { questions } = this.props;
        const currentQuestionObj = questions[currentQuestionIndex];
        let buttonText = "Next";
        if(currentQuestionIndex === 9){
            buttonText = "Submit!";
        }
        if(currentQuestionIndex < 10){
            return (
                <div>
                <form>
                    <h1>{currentQuestionObj.question}</h1>
                    
                    <label>
                        <input type='radio' value={currentQuestionObj.allChoices[0]} checked={this.state.selectedOption === currentQuestionObj.allChoices[0]} onChange={this.handleRadioChange}/>
                            {currentQuestionObj.allChoices[0]}
                    </label>
    
                    <label>
                        <input type='radio' value={currentQuestionObj.allChoices[1]} checked={this.state.selectedOption === currentQuestionObj.allChoices[1]} onChange={this.handleRadioChange}/>
                            {currentQuestionObj.allChoices[1]}
                    </label>
    
                    <label>
                        <input type='radio' value={currentQuestionObj.allChoices[2]} checked={this.state.selectedOption === currentQuestionObj.allChoices[2]} onChange={this.handleRadioChange}/>
                            {currentQuestionObj.allChoices[2]}
                    </label>
    
                    <label>
                        <input type='radio' value={currentQuestionObj.allChoices[3]} checked={this.state.selectedOption === currentQuestionObj.allChoices[3]} onChange={this.handleRadioChange}/>
                            {currentQuestionObj.allChoices[3]}
                    </label>
    
                    <button onClick={this.handleSubmit}>{buttonText}</button>
                    
                </form>
                <label>Score: {this.state.numberCorrect}</label>
                </div>
                );
        }
        else{
            return (
                <div>
                    <label>Score: {this.state.numberCorrect}</label>
                </div>
            );
        }

    }
}
export default CountryToCapital;
