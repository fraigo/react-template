class MainView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <main>
          <NavBar
            title="React template"
            image="images/icon.png"
          >
            <a href="#menu1">Menu1</a>
            <a href="#menu2">Menu2</a>
          </NavBar>
          <Header 
            title="React template"
            subtitle="With component examples"
            image="images/background1.jpg"
            >
          </Header>
          <div className="col6">
            <Card title="Card1" image="images/background1.jpg" >
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
            </Card>
          </div>
          <div className="col6">
            <Card title="Card2" image="images/background1.jpg" >
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
            </Card>
          </div>
        </main>
      );
    }
  }
  