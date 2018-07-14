class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      this.styles = { 
        
      }
      this.classNames = ['navbar', this.props.className].join(" ")
    }
    render() {
      return (
        <div className={this.classNames} style={this.styles} >
          <div className="col6 medium-height" >
            <div className="inline"><img src={this.props.image} height="60" /></div>
            <div className="inline vertical-center">{this.props.title}</div>
          </div>
          <div className="col6 medium-height sm-right xs-center"  >
            <div className="inline vertical-center">{this.props.children}</div>
          </div>
        </div>
      );
    }
  }
  