import React from 'react';
import ZsCardWrapper from './zsCardStyle';

const ZsCard = (props) => {
    const { children, style,cardClass, header, headerContent,headerStyle, footer, footerContent, outerStyle } = props;
    return (
        <ZsCardWrapper style={outerStyle}>
            <div className={"zsCard "+cardClass}>
                {header && header===true ? <div className="zsCardHeader" style={headerStyle}>
                    {headerContent}
                </div> : null }
                <div className="zsCardBody" style={style}>
                    {children}
                </div>
                {footer && footer === true ? <div className="zsCardFooter">
                    {footerContent}
                </div>:null}
            </div>
        </ZsCardWrapper>
    );
}

export default ZsCard;