import React, { PureComponent } from "react";
import Clock from "./../Clock/Clock";
import ClockBg from "./../Clock/img/Clock_face.jpg";
import { GithubPicker } from "react-color";

import "./ClockExample.scss";

const ClockStyles = {
  backgroundImage: `url(${ClockBg})`
};

const inputsNames = ["isSeconds", "isMinutes", "isHouers"]

class ClockExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      color: "#ff9800",
      isSeconds: true,
      isMinutes: true,
      isHouers: true,
      scalesCount:60
    };
  }

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
  };
  handleChangeArrowsSate = event => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ReactClockPage">
        <header className="header">
          <div className="container">
            <nav>
              <a href="/">Git</a>
              <a href="/">npm</a>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="title">
              <h1>Clock component for RectJS</h1>
            </div>
            <div className="colorPickWrapper">
              <label>Change color:</label>
              <GithubPicker
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
            <div className="inputsBlock">
              {inputsNames.map((i, index)=>(
                <div key={index}>
                <label>{i.slice(2)}: </label>
                <input
                  type="checkbox"
                  name={i}
                  checked={this.state[i]}
                  onChange={this.handleChangeArrowsSate}
                />
              </div>
              ))}
          
            </div>
            <div className="clock-Wrapper">
              <div>
                <Clock
                  type="digital"
                  timeZone={"Australia/Brisbane"}
                  textColor={this.state.color}
                  isSeconds={this.state.isSeconds}
                  isMinutes={this.state.isMinutes}
                  isHouers={this.state.isHouers}
                />
              </div>
              <div>
                <Clock
                  type="analog"
                  defaultScale={true}
                  // secArrow={this.state.isSeconds}
                  isSeconds={this.state.isSeconds}
                  isMinutes={this.state.isMinutes}
                  isHouers={this.state.isHouers}
                  scaleColor={this.state.color}
                  arrowColor={this.state.color}
                  timeZone={"Australia/Brisbane"}
                  scalesCount={this.state.scalesCount}
                />
              </div>
            </div>
            <div className="discription">
              <div>
                Exemple for digital clock:
                <pre>
                  &lt;Clock{"\n"}
                  type="digital" {"\n"}
                  textColor="{this.state.color}"{"\n"}
                  isSeconds="{this.state.isSeconds.toString()}"{"\n"}
                  isMinutes="{this.state.isMinutes.toString()}"{"\n"}
                  isHouers="{this.state.isHouers.toString()}"{"\n"}/&gt;
                </pre>
              </div>
              <div>
                Exemple for analog clock:
                <pre>
                  &lt;Clock{"\n"}
                  type="analog" {"\n"}
                  arrowColor="{this.state.color}"{"\n"}
                  isSeconds="{this.state.isSeconds.toString()}"{"\n"}
                  isMinutes="{this.state.isMinutes.toString()}"{"\n"}
                  isHouers="{this.state.isHouers.toString()}"{"\n"}/&gt;
                </pre>
              </div>
              <div>
                Use background image for clock:
                <pre>
                  import ClockBg from "./../Clock/img/Clock_face.jpg";{"\n"}
                  {"\n"}
                  const ClockStyles = {"{"}
                  backgroundImage: `url(${"{"}ClockBg{"}"})`
                  {"}"}; {"\n"}
                </pre>
              </div>
            </div>
            <div className="tableWrapper">
              <table>
                <thead>
                  <tr>
                    <th>option</th>
                    <th>type</th>
                    <th>discription</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>type</td>
                    <td>string</td>
                    <td>"digital" or "analog"</td>
                  </tr>
                  <tr>
                    <td> clockStyles</td>
                    <td>object</td>
                    <td>style object</td>
                  </tr>
                  <tr>
                    <td>secArrow</td>
                    <td>boolean</td>
                    <td>showe / hide second arrow</td>
                  </tr>
                  <tr>
                    <td>minArrow</td>
                    <td>boolean</td>
                    <td>showe / hide minute arrow</td>
                  </tr>
                  <tr>
                    <td>houArrow</td>
                    <td>boolean</td>
                    <td>showe / hide houer arrow</td>
                  </tr>
                  <tr>
                    <td>textColor</td>
                    <td>srting</td>
                    <td>color for text (only for digital)</td>
                  </tr>
                  <tr>
                    <td>scaleColor</td>
                    <td>srting</td>
                    <td>color for sczle (only for analog)</td>
                  </tr>
                  <tr>
                    <td>arrowColor</td>
                    <td>srting</td>
                    <td>color for sczle (only for analog)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

ClockExample.propTypes = {
  // bla: PropTypes.string,
};

ClockExample.defaultProps = {
  // bla: 'test',
};

export default ClockExample;
