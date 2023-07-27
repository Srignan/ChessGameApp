// Dynamic React page that renders either indexComputer, indexTablet, or indexMobile layouts and associated CSS as screen size changes.

import React from 'react';
import ReactDOM from 'react-dom';
import IndexComputer from './IndexComputer'
import IndexTablet from './IndexTablet';
import IndexMobile from './IndexMobile';

// Import all CSS variants.
import "./IndexComputer.module.css";
import "./IndexTablet.module.css";
import "./IndexMobile.module.css";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenSize: '',
        };
    }
    
    componentDidMount()
    {
        // Perform initial screen size check
        this.updateScreenSize();
        // Every time a resize event occurs, call updateScreenSize();
        window.addEventListener('resize', this.updateScreenSize);
    }
    
    componentWillUnmount()
    {
        window.removeEventListener('resize', this.updateScreenSize);
    }
    
    updateScreenSize = () =>
    {
        // Get the width of the page.
        const width = window.innerWidth;
        
        // Check the width based on the breakpoint values (310-743, 744-1439, 1440 or higher)
        if (width >= 1440)
        {
            this.setState({ screenSize: 'computer' });
        }
        else if (width >= 744)
        {
            this.setState({ screenSize: 'tablet' });
        }
        else
        {
            this.setState({ screenSize: 'mobile' });
        }
    };
    
    render()
    {
        const { screenSize } = this.state;
        
        let currentPage;
        if (screenSize === 'computer')
        {
            console.log("Rendering computer layout.");
            currentPage = <IndexComputer />;
        }
        else if (screenSize === 'tablet')
        {
            console.log("Rendering computer layout.");
            currentPage = <IndexTablet />;
        }
        else if (screenSize === 'mobile')
        {
            console.log("Rendering computer layout.");
            currentPage = <IndexMobile />;
        }
    }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
