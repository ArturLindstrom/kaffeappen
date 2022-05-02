import Child from './Child';
import {useState} from 'react';

const Parent = () => {
    const [text, setText] = useState('');
    const childText = (newValue: string) => {
        setText(newValue)
    }
        
 return (
    <p style={{color: "white"}}>Text från child: {text}
    <Child childText={childText} /> 
    </p>
    )
}

export default Parent