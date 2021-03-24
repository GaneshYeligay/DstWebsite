import React from "react";
import radium from "radium";

class ScrollBar extends React.Component {
  

  state = {
    intervalId: 0,
    thePosition: false
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        this.setState({ thePosition: true })
      } else {
        this.setState({ thePosition: false })
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (<button title='Back to top' className='scroll'
      onClick={() => { this.scrollToTop(); }}>
      <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
    </button>
    );
  }

}


export default radium(ScrollBar);