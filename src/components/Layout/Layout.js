import React, {Component} from 'react';
import classes from './Layout.css' 

class Layout extends Component {
    render() {
        return (
            <div>
                 <div>Toolbar, SideDrawer, Backdrop</div>
                    <main className = {classes.Content}>
                         {this.props.children}
                    </main>
            </div>
        );
    }
}

export default Layout;
// const layout = ( props ) => (
//     <div>
//         <div>Toolbar, SideDrawer, Backdrop</div>
//             <main className = {classes.Content}>
//                 {props.children}
//             </main>
//     </div>
// );

// export default layout;