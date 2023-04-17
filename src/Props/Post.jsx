import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    let {info,children,TheBaiTap} = this.props;
    // children là thẻ đặc biệt dùng để hiện thị nôi dung giữa các thẻ component
    return (
      <div>
        <h3>{info.tiuDe}</h3>
        <p>{info.noiDung}</p>
        {children}
        <TheBaiTap />
      </div>
    )
  }
}
