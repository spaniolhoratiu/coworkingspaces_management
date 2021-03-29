import React, { useState, useEffect } from 'react';

export default function PaymentPlan(props){

    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
    const [featuresTextColor, setFeaturesTextColor] = useState('#8190A5');
    const [titleTextColor, setTitleTextColor] = useState('#47525E');

    useEffect(() => {
        if(props.isSelected === true)
        {
            setBackgroundColor('#0193E1');
            setFeaturesTextColor('#FFFFFF');
            setTitleTextColor('#FFFFFF');
        }else if(props.isSelected === false)
        {
            setBackgroundColor('#FFFFFF');
            setFeaturesTextColor('#8190A5');
            setTitleTextColor('#47525E');
        }
    }, [props]);


    let featureDivs = [];
    props.features.map((currentFeature) => featureDivs.push(<div>{currentFeature}</div>));

    return(
        <div
             style={{backgroundColor: backgroundColor,
                 color: featuresTextColor,
                 border: '1px solid black',
                 marginLeft: '4%',
                 marginRight: '4%',
                 marginTop: '1%',
                 marginBottom: '1%',
                 padding: '1%',
             }}>

            <div style={{fontWeight: 'bold', color: titleTextColor}}>
                {props.title}
            </div>

            {featureDivs}

        </div>
    )

}