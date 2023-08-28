// reuseable button
import { BsArrowRightShort } from "react-icons/bs";
type ButtonProps = {
    type: "button"|"submit"|undefined;
    color?: string;
    spec: string;
    bgColor?: string;
    content: string;
    onClick: () => void;
}
function Button (props: ButtonProps) {
    const {color, spec, bgColor, content, type, onClick} = props;
    const styles = {
        color: color || 'white',
        backgroundColor: bgColor || '#274C5B',
        fontSize: 'clamp(.5rem, 20vw, .8rem)',
        borderRadius: '.7em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        padding: '.8em 1.3em',
        boxShadow: '3px 4px 19px 0px rgba(39,76,91,0.56)',
        webkitBoxShadow: '3px 4px 19px 0px rgba(39,76,91,0.56)',
        mozBoxShadow: '3px 4px 19px 0px rgba(39,76,91,0.56)'
    }
    const iconStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '.5em',
        backgroundColor: '#335B6B',
        color: '#ffff',
        borderRadius: '50%'
    }
  return (
    <button onClick={onClick} type={type} style={styles}>
        {content}
        {spec === 'default' ? <span style={iconStyles}><BsArrowRightShort /></span> : '' }
    </button>
  )
}

export default Button