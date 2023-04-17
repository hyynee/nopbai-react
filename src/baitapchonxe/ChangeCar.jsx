import React, { Component } from 'react'

export default class ChangeCar extends Component {
    state = {
        car: `./img/red-car.jpg`
    }
  render() {
    return (
      <div>
        <h3>bài tập chọn xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={this.state.car} alt="..." height={100} />
            </div>
            <div className="col-6">
                <button className='btn btn-danger mx-2' onClick={() => {
                    this.setState({
                        car: './img/red-car.jpg'
                    })
                }}>Red-Car</button>
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.setState({
                        car: './img/black-car.jpg'
                    })
                }}>Black-Car</button>
                <button className='btn btn-secondary mx-2' onClick={() => {
                    this.setState({
                        car: './img/silver-car.jpg'
                    })
                }}>Silver-Car</button>
                <button className='btn btn-success mx-2' onClick={() => {
                    this.setState({
                        car: './img/steel-car.jpg'
                    })
                }}>Steel-Car</button>
            </div>
        </div>
      </div>
    )
  }
}
