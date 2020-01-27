import React, {Component} from 'react';
import classes from './Layout.css' 
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    // 과거의 this.state를 현재의 this.state로 변경하려면
    // this.state대신 prevState를 사용해야 에러발생율이 줄어듬. 
    sideDrawerToggleHandler = (prevState) => {
        this.setState({showSideDrawer: !prevState.showSideDrawer});
    }

    render() {
        return (
            <div>
                    <Toolbar toggleClick={this.sideDrawerToggleHandler}/>
                    <SideDrawer
                        open={this.state.showSideDrawer} 
                        closed={this.sideDrawerClosedHandler}/>
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