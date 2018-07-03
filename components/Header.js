class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.styles = { 
    }
    this.classNames = ['header', this.props.className].join(" ")
    if (props.image){
      this.styles = {
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }  
    }
  }
  render() {
    return (
      <div className={this.classNames} style={this.styles} >
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
