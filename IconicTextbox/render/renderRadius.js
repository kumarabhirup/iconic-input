// This makes @prop radius work with respect to @prop iconPosition.
const renderRadius = (element, props) => {
    if(props.rounded){
        if(element == 'container'){
            return {
                borderRadius: 10
            }
        } else if(element == 'iconPlaceholder'){
            if(props.iconPosition == 'left'){
                if(element == 'iconPlaceholder'){
                    return {
                        borderTopLeftRadius: 7,
                        borderBottomLeftRadius: 7
                    }
                }
            } else if(props.iconPosition == 'right'){
                if(element == 'iconPlaceholder'){
                    return {
                        borderTopRightRadius: 7,
                        borderBottomRightRadius: 7
                    }
                }
            }
        }
    } else{
        if(props.iconPosition == 'right'){
            if(element == 'iconPlaceholder'){
                return {
                    borderRadius: 0
                }
            }
        }
    }
}

export {renderRadius}