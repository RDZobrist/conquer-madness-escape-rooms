import React, { useState, useEffect, Fragment } from 'react';

import { ToggleButton, InnerContent, OuterContent, TopLineContainer } from './ExpandedDiv.styles';

const ExpandedDiv = (faq) => {
    const [showExtraContent, toggleShowExtraContent] = useState(false);
    return (
    
            <Fragment style={{display: 'block', float: 'right'}}>
                <OuterContent>{faq.question}</OuterContent>
                <ToggleButton onClick={()=>toggleShowExtraContent(!showExtraContent)}/>
                {showExtraContent ?
                    <InnerContent>{faq.answer}</InnerContent>
                    :
                    null
                }
            </Fragment>
        
    )
};

export default ExpandedDiv;