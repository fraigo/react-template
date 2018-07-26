class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.headerStyle = { 
      padding: 10,
      fontSize: "1.2rem",
      fontWeight: "bold",
      height: "3rem",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      borderRadius: "var(--radius1) var(--radius1) 0px 0px",
      backgroundColor: "rgba(64,64,64,0.2)"
    }
    this.contentStyle={
      textAlign: "center",
      padding: "8px 4px"
    }
    if (props.image){
        this.headerStyle["backgroundImage"] = `url(${props.image})`;
        this.headerStyle["backgroundPosition"] = "center center";
        this.headerStyle["backgroundSize"] = "cover";
    }
  }
  render() {
    return (
      <div className="card" >
        <div className="card-header" style={this.headerStyle} >
            <div className="card-header-title">{this.props.title}</div>
        </div>
        <div className="card-content" style={this.contentStyle} >
            {this.props.children}
        </div>
      </div>
    );
  }
}
