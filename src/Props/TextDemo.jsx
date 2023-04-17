import React, { Component } from 'react'

export default class TextDemo extends Component {

  render() {
    // this.props là thuộc tính của react class component dùng để nhận giá trị từ component cha truyền vào ( thẻ sử dụng thẻ này)
    // không gán props bằng giá trị khác VD: this.props.name = 'xyz'
    let {noiDung} = this.props;
    let {name,price,img} = this.props;
    return (
      <div className='card'>
        <img src={img} alt="..." />
        <div className="card-body">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
      </div>
    )
  }
}
