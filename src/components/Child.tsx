import { useState } from 'react'


interface ChildProps {
    childText: any,
}

const Child = ({childText}: ChildProps) => (
    <input type="text" onChange={(event) => childText(event.target.value)} />
)

export default Child;