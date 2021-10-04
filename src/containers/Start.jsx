import React from 'react';
import Button from '../components/Button';
// import Input from '../components/Input';
import { Session } from '../utils/storage'
import ReactTypingEffect from 'react-typing-effect';

class Start extends React.Component {

    state = {
        player: "player"
    }

    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }

    clicked = () => {
        Session.set("onlinePlayer", this.state.player)
        this.props.startPressed();
    }

    render() {
        return (
            <div>
                <div className="App-brandname">
                    <i className="fas fa-graduation-cap"></i>
                    <br />
                    <ReactTypingEffect
                        text={["آج ہم ریاضی کے کچھ تفریحی مسائل سیکھیں گے۔"]}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        speed={70}
                        eraseSpeed={70}
                        eraseDelay={3000}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h3>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                
                                            >{char}</span>
                                        );
                                    })}
                                </h3>
                            );
                        }}
                    />
                    {/* <h3>Do You Know</h3>
                    <h1>Math?</h1> */}
                </div>
                <p>
                گیم شروع کرنے کے لیے بٹن دبائیں۔
                </p>
                <Button isClicked={this.clicked}>شروع کریں</Button>
            </div>
        )
    }
}
export default Start;