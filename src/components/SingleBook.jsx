import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        className="book-cover"
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "4px solid red" : "none" }}
      >
        <Card.Img variant="top" className="cardImg img-fluid" src={this.props.book.img} />
        <Card.Body className="bg-warning">
          <Card.Title className="cardTitle">{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
