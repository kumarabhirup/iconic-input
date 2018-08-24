// This makes @prop iconPosition work by reversing flex.
const renderPosition = (element, props) => {
    if(props.iconPosition == 'left'){
        if(element == 'container'){
            return {
                flexDirection: 'row-reverse'
            }
        } else{
            return {}
        }
    } else{
        if(element == 'container'){
            return {
                flexDirection: 'row'
            }
        } else{
            return {}
        }
    }
}

export {renderPosition}