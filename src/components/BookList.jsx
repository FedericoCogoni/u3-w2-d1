import { Component } from "react"
import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"

class BookList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <>
        <Row className="d-flex justify-content-end mt-5">
          <Col xs={12} sm={6} md={4} lg={3} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter(b => b.title.toLowerCase().includes(this.state.searchQuery))
            .map(b => (
              <Col xs={12} sm={6} md={4} lg={3} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
