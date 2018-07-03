class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.styles = { 
    }
    this.classNames = ['card', this.props.className].join(" ")
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
      <div className={this.classNames} >
        <div className="card-header" style={this.styles} >
            <div className="card-header-title">{this.props.title}</div>
        </div>
        <div className="card-content" >
            {this.props.children}
        </div>
      </div>
    );
  }
}
