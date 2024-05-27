import type { ComponentType } from "react"

export function fixSlideshowVisibility(Component): ComponentType {
    return (props) => {
        for (let i = 0; i < props.slots.length; i++)
            !props.slots[i] && props.slots.splice(i--, 1)
        return <Component {...props} />
    }
}