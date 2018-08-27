import React, { Component } from 'react';
import '../radioStyles.css';
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
        let buttonStyle = "btn btn-primary";
        if(currentQuestionIndex === 9){
            buttonText = "Submit!";
            buttonStyle = "btn btn-success";
        }
        if(currentQuestionIndex < 10){
            return (
                <div style={{backgroundColor: "#8FBC8F", height: "100%"}}>
                <div style={{textAlign:"center"}}>
                    <form>
                        <h1>{currentQuestionObj.question}</h1>
                    <div style={{margin: "auto"}}>
                        <div>    
                            <label class="container">
                                <input type='radio' value={currentQuestionObj.allChoices[0]} checked={this.state.selectedOption === currentQuestionObj.allChoices[0]} onChange={this.handleRadioChange} style={{backgroundColor: "blue"}}/>
                                    {currentQuestionObj.allChoices[0]}
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <input type='radio' value={currentQuestionObj.allChoices[1]} checked={this.state.selectedOption === currentQuestionObj.allChoices[1]} onChange={this.handleRadioChange}/>
                                    {currentQuestionObj.allChoices[1]}
                                    <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <input type='radio' value={currentQuestionObj.allChoices[2]} checked={this.state.selectedOption === currentQuestionObj.allChoices[2]} onChange={this.handleRadioChange}/>
                                    {currentQuestionObj.allChoices[2]}
                                    <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <input type='radio' value={currentQuestionObj.allChoices[3]} checked={this.state.selectedOption === currentQuestionObj.allChoices[3]} onChange={this.handleRadioChange}/>
                                    {currentQuestionObj.allChoices[3]}
                                    <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                        <button onClick={this.handleSubmit} className={buttonStyle}>{buttonText}</button>
                        
                    </form>
                    <label>Score: {this.state.numberCorrect}</label>
                </div>
                <div style={{textAlign: "center", height: "560px"}}> {/* 560px */}
                <img src={currentQuestionObj.flag} style={{height:"300px"}}/>
            </div>
                </div>
                );
        }
        else{
            this.props.postNewScore(this.state.numberCorrect, this.props.userId);
            return (
                <div>
                    <label>Score: {this.state.numberCorrect}</label>
                </div>
            );
        }

    }
}
export default CountryToCapital;
