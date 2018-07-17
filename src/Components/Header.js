import React, { PureComponent } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';


class HeaderRoute extends PureComponent {
  
  
	constructor(props){
		super(props);
		let current = this.props.location.pathname.substr(1);
		this.state = {
			current: current ? current : 'home',
		}
	}
	

	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	}

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
		<Menu.Item key="home">
			<Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="foods-list">
			<Link to="/foods-list"><Icon type="bars" />Foods List</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
const Header = withRouter(HeaderRoute)
export default Header;
