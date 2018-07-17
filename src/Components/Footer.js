import React, { PureComponent } from 'react';
import { Layout } from 'antd';
 
const  AntdFooter  = Layout.Footer;

class Footer extends PureComponent {

  render() {
    return (
		<AntdFooter style={{ textAlign: 'center' }}>
			Can I eat this ©2018
		</AntdFooter>
    );
  }
}

export default Footer;
