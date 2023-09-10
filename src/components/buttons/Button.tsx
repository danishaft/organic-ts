// reuseable button
import { BsArrowRightShort } from "react-icons/bs";
type ButtonProps = {
    type: "button"|"submit"|undefined;
    color?: string;
    spec?: string;
    bgColor?: string;
    content: string;
    onClick?: ()=> void;
}
function Button (props: ButtonProps) {
    const {color, spec, bgColor, content, type, onClick} = props;
    const styles = {
        color: color || 'white',
        backgroundColor: bgColor || '#274C5B',
        fontSize: 'clamp(.4rem, 20vw, .5rem)',
        borderRadius: '.7em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        padding: '.6em 1.1em',
        boxShadow: '3px 4px 19px 0px rgba(39,76,91,0.56)',
        WebkitBoxShadow: '3px 4px 19px 0px rgba(39,76,91,0.56)',
        MozBoxShadow: '3px 4px 19px 0px rgba(39,76,91,0.56)',

        //media query for phones above 48px
        '@media(MinWidth: 480px)':{
            fontSize: 'clamp(.6rem, 25vw, 1rem)',
            color: 'red',
            padding: '.8em 1.3em',
        },
    }
    const iconStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '.5em',
        backgroundColor: '#335B6B',
        color: '#ffff',
        borderRadius: '50%',
    }
  return (
    <button onClick={onClick} type={type} style={styles}>
        {content}
        {spec === 'default' ? <span style={iconStyles}><BsArrowRightShort /></span> : '' }
    </button>
  )
}

export default Button