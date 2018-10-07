import React, { Component } from "react";
import LooneyImage from "./components/LooneyImage";
import Main from "./components/Main";
import Title from "./components/Title";
import cards from "./looneySetups.json";
import "./App.css";

let currentScore = 0;
let topScore = 0;
let message = "Click on an image to earn points, but don't click on any of them more than once!";

class App extends Component {
    
    state = {
        cards,
        currentScore,
        topScore,
        message
    };

    cardClick = id => {
        const cards = this.state.cards;
        const clickedMatch = cards.filter(match => match.id === id);

        if (clickedMatch[0].clicked) {
            currentScore = 0;
            message = "You already clicked on " + clickedMatch[0].name + "...Game Over! You can start over by clicking any Looney character."

            this.resetClick();
            this.setTheComponents();
        }
        else if (currentScore < 11) {
            clickedMatch[0].clicked = true;
            currentScore++;
            message = "You haven't clicked on " + clickedMatch[0].name + " yet, so you can choose again!";

            if (currentScore > topScore) {
                topScore = currentScore;
                this.setState({ topScore });
            }

            this.sortCards();
            this.setTheComponents();
        }
        else {
            //clickedMatch[0].clicked = true;
            currentScore = 0;

            message = "Congratulations!! You got a perfect score! Click any Looney character to play again.";
            topScore = 12;

            this.setState({ topScore });
        
            this.resetClick();
            this.sortCards();
            this.setTheComponents();
        }
    };

    sortCards() {
        cards.sort(function(a, b) {
            return 0.5 - Math.random()
        }); 
    }

    resetClick() {
        for (let i = 0 ; i < cards.length ; i++)
            cards[i].clicked = false;
    }

    setTheComponents() {
        this.setState({ cards });
        this.setState({ currentScore });
        this.setState({ message });
    }

    render() {
        return (
            <Main>
                <Title>
                    <div className="jumbotron">
                        <h1>Looney Tunes Clicky Memory Game</h1>
                        <hr className="blankLine"></hr>
                        <h4 className="scoreSummary">
                            {this.state.message}
                        </h4>
                        <h4 className="scoreSummary">
                            Current Score: {this.state.currentScore} |
                            Top Score: {this.state.topScore} 
                        </h4>
                    </div>
                </Title>
                {this.state.cards.map(match => (
                    <LooneyImage
                        cardClick = {this.cardClick}
                        id = {match.id}
                        key = {match.id}
                        image = {match.image}
                    />
                ))}
            </Main>
        );
    }
}

export default App;
