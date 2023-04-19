#Render với điều kiện - true- false - switch - case
/* 
state  = {
    isLogin: false // false: mặc định là chưa đăng nhập
}
renderLogin = () => {
    if(this.state.isLogin) {
        return <div>
        <i class="fa fa-home">Man</i>
         <button onclick={() => {
        this.setState() {
            isLogin: false
        }
     }}> Log Out</button>
        </div>
    }
    return <div>
     <button onclick= { () => 
     {
        this.setState() {
            isLogin: true
        }
     } 
     }>Login</button> 
     </div>
}
*/



# Props với State
<ul>
    <li>
        Props là 1 thuộc tính của react class component (do kế thừa từ class Component) dùng để nhận giá trị từ component cha truyền vào (Component cha là nơi để sử dụng thẻ).Props không thể gán lại giá trị mới
        <br/>
        Không thể dùng this.props.Name = 'giá trị mới' ==> Sai cú pháp trầm trọng
    </li>
    <li>
        State và Props khác nhau chỗ nào ???
        State và Props đều là thuộc tính có sẵn của react class component để bingding dữ liệu lên giao diện , Tuy nhiên: 
        <br/>
        +  Hiểu nôm na là State là hàng nội địa còn Props là hàng xuất ngoại. <br/>
        + State: dùng để lưu giá trị trên chính component đó. State có thể gán lại giá trị thông qua phương thức setState. <br/>
        +Props: dùng để chứa các giá trị từ component cha truyền vào. Props không thể gán lại giá trị.
    </li>
</ul>